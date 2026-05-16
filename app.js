/**
 * EduTalk App - Business Logic & UI Controller
 */

// --- Initial Data & State ---
const INITIAL_DATA = [
    {
        id: "SC-001",
        number: "124",
        name: "Escuela Primaria N° 124 'Mariano Moreno'",
        address: "Av. Corrientes 4500",
        locality: "CABA",
        type: "Primaria",
        coords: [-34.6037, -58.3816],
        status: "completed",
        priority: true,
        date: "2026-05-10",
        students: 45,
        speakers: "Juan Pérez",
        notes: "Charla muy participativa. Los chicos sabían mucho sobre energía solar.",
        phone: "4861-1234"
    },
    {
        id: "SC-002",
        number: "45",
        name: "Escuela Técnica N° 45 'Otto Krause'",
        address: "Paseo Colón 650",
        locality: "CABA",
        type: "Técnica",
        coords: [-34.6157, -58.3716],
        status: "coordinated",
        priority: true,
        date: "2026-05-22",
        students: 60,
        speakers: "María Sosa, Lucas Gómez",
        notes: "Requieren enfoque técnico sobre consumo industrial.",
        phone: "4342-9988"
    },
    {
        id: "SC-003",
        number: "12",
        name: "Colegio Secundario San Martín",
        address: "Belgrano 1200",
        locality: "Avellaneda",
        type: "Secundaria",
        coords: [-34.6617, -58.3616],
        status: "pending",
        priority: false,
        date: "",
        students: 0,
        speakers: "",
        notes: "Esperando confirmación de dirección.",
        phone: "4201-5544"
    }
];

class EduTalkApp {
    constructor() {
        this.schools = JSON.parse(localStorage.getItem('edutalk_schools')) || INITIAL_DATA;
        this.currentView = 'dashboard';
        this.map = null;
        this.markers = [];
        this.progressChart = null;
        this.typeChart = null;
        this.currentDate = new Date(); // For calendar

        this.init();
    }

    init() {
        // Initialize Lucide Icons
        lucide.createIcons();
        
        // Setup Event Listeners
        this.setupEventListeners();
        
        // Initial Render
        this.renderStats();
        this.renderTable();
        this.initCharts();
        
        // Handle URL Hash/Routing if needed (simplified here)
        window.addEventListener('load', () => this.switchView('dashboard'));
    }

    save() {
        localStorage.setItem('edutalk_schools', JSON.stringify(this.schools));
        this.renderStats();
        this.renderTable();
        this.updateCharts();
        if (this.map) this.renderMapMarkers();
        if (this.currentView === 'calendar') this.renderCalendar();
    }

    // --- Navigation ---
    setupEventListeners() {
        // Nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                this.switchView(view);
            });
        });

        // Modal triggers
        document.getElementById('open-add-modal').addEventListener('click', () => this.openModal());
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', () => this.closeModal());
        });

        // Form submit
        document.getElementById('school-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // Side panel close
        document.getElementById('close-panel').addEventListener('click', () => {
            document.getElementById('side-panel').classList.remove('open');
        });

        // Map filters
        document.getElementById('map-filter-status').addEventListener('change', () => this.renderMapMarkers());
        document.getElementById('map-filter-priority').addEventListener('change', () => this.renderMapMarkers());

        // Calendar nav
        document.getElementById('prev-month').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });
        document.getElementById('next-month').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });

        // Search
        document.getElementById('global-search').addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
    }

    switchView(viewId) {
        this.currentView = viewId;
        
        // UI Tabs
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.view === viewId);
        });

        // Sections
        document.querySelectorAll('.view-section').forEach(sec => {
            sec.classList.toggle('active', sec.id === `view-${viewId}`);
        });

        // Special init for Map
        if (viewId === 'map') {
            setTimeout(() => this.initMap(), 100);
        }

        // Init Calendar
        if (viewId === 'calendar') {
            this.renderCalendar();
        }
    }

    // --- Stats & Dashboard ---
    renderStats() {
        const stats = {
            pending: this.schools.filter(s => s.status === 'pending').length,
            coordinated: this.schools.filter(s => s.status === 'coordinated').length,
            completed: this.schools.filter(s => s.status === 'completed').length,
            priority: this.schools.filter(s => s.priority).length,
            students: this.schools.reduce((acc, s) => acc + (parseInt(s.students) || 0), 0)
        };

        document.getElementById('stat-pending').textContent = stats.pending;
        document.getElementById('stat-coordinated').textContent = stats.coordinated;
        document.getElementById('stat-realized').textContent = stats.completed;
        document.getElementById('stat-students').textContent = stats.students.toLocaleString();
        document.getElementById('priority-count').textContent = stats.priority;
    }

    initCharts() {
        const ctxProgress = document.getElementById('progressChart').getContext('2d');
        const ctxType = document.getElementById('typeChart').getContext('2d');

        const stats = {
            pending: this.schools.filter(s => s.status === 'pending').length,
            coordinated: this.schools.filter(s => s.status === 'coordinated').length,
            completed: this.schools.filter(s => s.status === 'completed').length
        };

        this.progressChart = new Chart(ctxProgress, {
            type: 'bar',
            data: {
                labels: ['Pendientes', 'Coordinadas', 'Realizadas'],
                datasets: [{
                    label: 'Cantidad de Escuelas',
                    data: [stats.pending, stats.coordinated, stats.completed],
                    backgroundColor: ['#f59e0b', '#6366f1', '#10b981'],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { 
                    y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                    x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                }
            }
        });

        const types = {};
        this.schools.forEach(s => types[s.type] = (types[s.type] || 0) + 1);

        this.typeChart = new Chart(ctxType, {
            type: 'doughnut',
            data: {
                labels: Object.keys(types),
                datasets: [{
                    data: Object.values(types),
                    backgroundColor: ['#6366f1', '#2dd4bf', '#f59e0b', '#ef4444', '#10b981'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: { 
                    legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 20 } }
                }
            }
        });
    }

    updateCharts() {
        if (!this.progressChart) return;
        
        const stats = {
            pending: this.schools.filter(s => s.status === 'pending').length,
            coordinated: this.schools.filter(s => s.status === 'coordinated').length,
            completed: this.schools.filter(s => s.status === 'completed').length
        };
        this.progressChart.data.datasets[0].data = [stats.pending, stats.coordinated, stats.completed];
        this.progressChart.update();

        const types = {};
        this.schools.forEach(s => types[s.type] = (types[s.type] || 0) + 1);
        this.typeChart.data.labels = Object.keys(types);
        this.typeChart.data.datasets[0].data = Object.values(types);
        this.typeChart.update();
    }

    // --- Map Logic ---
    initMap() {
        if (this.map) return;
        
        this.map = L.map('map-container').setView([-34.6037, -58.3816], 12);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
        }).addTo(this.map);

        this.renderMapMarkers();
    }

    renderMapMarkers() {
        if (!this.map) return;
        
        // Clear existing
        this.markers.forEach(m => this.map.removeLayer(m));
        this.markers = [];

        const statusFilter = document.getElementById('map-filter-status').value;
        const priorityFilter = document.getElementById('map-filter-priority').checked;

        const filtered = this.schools.filter(s => {
            const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
            const matchesPriority = !priorityFilter || s.priority;
            return matchesStatus && matchesPriority;
        });

        filtered.forEach(school => {
            const color = school.status === 'completed' ? '#10b981' : 
                         school.status === 'coordinated' ? '#6366f1' : '#f59e0b';
            
            const marker = L.circleMarker(school.coords, {
                radius: school.priority ? 12 : 8,
                fillColor: color,
                color: school.priority ? '#fff' : color,
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(this.map);

            marker.bindPopup(`
                <div class="map-popup">
                    <strong style="font-family: Outfit; font-size: 14px;">${school.name}</strong><br>
                    <span style="font-size: 12px; color: #94a3b8;">${school.address}</span><br>
                    <button onclick="window.app.openDetails('${school.id}')" style="margin-top: 8px; background: #6366f1; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; width: 100%;">Ver Detalle</button>
                </div>
            `);

            this.markers.push(marker);
        });
    }

    // --- Table & Search ---
    renderTable(data = null) {
        const source = data || this.schools;
        const tbody = document.getElementById('schools-body');
        tbody.innerHTML = '';

        source.forEach(s => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${s.number}</td>
                <td>
                    <div style="font-weight: 600;">${s.name} ${s.priority ? '<i class="priority-star" data-lucide="star"></i>' : ''}</div>
                    <div style="font-size: 11px; color: var(--text-muted);">${s.address}</div>
                </td>
                <td>${s.locality}</td>
                <td>${s.type}</td>
                <td><span class="status-pill ${s.status}">${this.translateStatus(s.status)}</span></td>
                <td class="actions-cell">
                    <button class="btn-icon edit" onclick="window.app.openDetails('${s.id}')"><i data-lucide="eye"></i></button>
                    <button class="btn-icon edit" onclick="window.app.openModal('${s.id}')"><i data-lucide="edit-3"></i></button>
                    <button class="btn-icon delete" onclick="window.app.deleteSchool('${s.id}')"><i data-lucide="trash-2"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
        lucide.createIcons();
    }

    handleSearch(query) {
        const q = query.toLowerCase();
        const filtered = this.schools.filter(s => 
            s.name.toLowerCase().includes(q) || 
            s.locality.toLowerCase().includes(q) || 
            s.number.includes(q)
        );
        this.renderTable(filtered);
    }

    translateStatus(status) {
        const map = { pending: 'Pendiente', coordinated: 'Coordinada', completed: 'Realizada' };
        return map[status] || status;
    }

    // --- School Management ---
    openModal(id = null) {
        const modal = document.getElementById('school-modal');
        const form = document.getElementById('school-form');
        const title = document.getElementById('modal-title');
        
        form.reset();
        document.getElementById('edit-id').value = '';

        if (id) {
            const school = this.schools.find(s => s.id === id);
            title.textContent = 'Editar Escuela';
            document.getElementById('edit-id').value = school.id;
            document.getElementById('f-number').value = school.number;
            document.getElementById('f-name').value = school.name;
            document.getElementById('f-address').value = school.address;
            document.getElementById('f-locality').value = school.locality;
            document.getElementById('f-type').value = school.type;
            document.getElementById('f-lat').value = school.coords[0];
            document.getElementById('f-lng').value = school.coords[1];
            document.getElementById('f-status').value = school.status;
            document.getElementById('f-priority').checked = school.priority;
            document.getElementById('f-date').value = school.date;
            document.getElementById('f-students').value = school.students;
            document.getElementById('f-speakers').value = school.speakers;
            document.getElementById('f-notes').value = school.notes;
        } else {
            title.textContent = 'Agregar Nueva Escuela';
        }

        modal.classList.add('open');
    }

    closeModal() {
        document.getElementById('school-modal').classList.remove('open');
    }

    handleFormSubmit() {
        const id = document.getElementById('edit-id').value;
        const schoolData = {
            number: document.getElementById('f-number').value,
            name: document.getElementById('f-name').value,
            address: document.getElementById('f-address').value,
            locality: document.getElementById('f-locality').value,
            type: document.getElementById('f-type').value,
            coords: [
                parseFloat(document.getElementById('f-lat').value),
                parseFloat(document.getElementById('f-lng').value)
            ],
            status: document.getElementById('f-status').value,
            priority: document.getElementById('f-priority').checked,
            date: document.getElementById('f-date').value,
            students: parseInt(document.getElementById('f-students').value) || 0,
            speakers: document.getElementById('f-speakers').value,
            notes: document.getElementById('f-notes').value
        };

        if (id) {
            const index = this.schools.findIndex(s => s.id === id);
            this.schools[index] = { ...this.schools[index], ...schoolData };
        } else {
            schoolData.id = 'SC-' + Date.now();
            this.schools.push(schoolData);
        }

        this.save();
        this.closeModal();
    }

    deleteSchool(id) {
        if (confirm('¿Estás seguro de eliminar esta escuela?')) {
            this.schools = this.schools.filter(s => s.id !== id);
            this.save();
        }
    }

    openDetails(id) {
        const school = this.schools.find(s => s.id === id);
        const panel = document.getElementById('side-panel');
        const content = document.getElementById('panel-content');

        content.innerHTML = `
            <div class="detail-item">
                <div class="detail-label">Nombre</div>
                <div class="detail-value">${school.name} ${school.priority ? '⭐' : ''}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Ubicación</div>
                <div class="detail-value">${school.address}, ${school.locality}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Estado</div>
                <div class="detail-value"><span class="status-pill ${school.status}">${this.translateStatus(school.status)}</span></div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Fecha Programada</div>
                <div class="detail-value">${school.date || 'Sin fecha'}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Alumnos Relevados</div>
                <div class="detail-value">${school.students}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Disertantes</div>
                <div class="detail-value">${school.speakers || 'No asignados'}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Observaciones</div>
                <div class="detail-value" style="font-size: 14px; line-height: 1.6; color: var(--text-secondary);">${school.notes || '-'}</div>
            </div>
            <div style="margin-top: 40px; display: flex; gap: 12px;">
                <button class="btn-save" style="flex: 1;" onclick="window.app.openModal('${school.id}')">Editar Datos</button>
            </div>
        `;

        panel.classList.add('open');
    }

    // --- Calendar logic ---
    renderCalendar() {
        const grid = document.getElementById('calendar-grid');
        const title = document.getElementById('calendar-month-year');
        grid.innerHTML = '';

        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        title.textContent = this.currentDate.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' });

        // Padding days
        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            empty.className = 'calendar-day empty';
            grid.appendChild(empty);
        }

        // Real days
        for (let d = 1; d <= daysInMonth; d++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            
            const today = new Date();
            if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today');
            }

            dayDiv.innerHTML = `<span class="day-number">${d}</span>`;
            
            const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const events = this.schools.filter(s => s.date === dayStr);
            
            if (events.length > 0) {
                const eventCont = document.createElement('div');
                eventCont.className = 'day-events';
                events.forEach(ev => {
                    const dot = document.createElement('div');
                    dot.className = `event-dot ${ev.status}`;
                    dot.textContent = ev.name.substring(0, 15) + '...';
                    dot.onclick = (e) => { e.stopPropagation(); this.openDetails(ev.id); };
                    eventCont.appendChild(dot);
                });
                dayDiv.appendChild(eventCont);
            }

            grid.appendChild(dayDiv);
        }
    }
}

// Global instance for inline event handlers
window.app = new EduTalkApp();
