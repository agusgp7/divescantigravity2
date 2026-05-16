/**
 * EduTalk - Maldonado Gestión Educativa
 * VERSION: URUGUAY FINAL
 */

// LIMPIEZA DE DATOS VIEJOS (Fuerza la carga de los nuevos datos de Maldonado)
localStorage.removeItem('edutalk_schools');
localStorage.removeItem('edutalk_maldonado_v2');

const URU_DATA = [
  { "id": 1, "escuela": "1", "nombre": "JOSE PEDRO RAMIREZ", "direccion": "J.P Varela y Roman Guerra", "localidad": "MALDONADO", "lat": -34.904264, "lng": -54.956523, "estado": "rojo", "prioritaria": false },
  { "id": 2, "escuela": "2", "nombre": "JOSE PEDRO VARELA", "direccion": "Michellini y 25 de mayo", "localidad": "MALDONADO", "lat": -34.909583, "lng": -54.960656, "estado": "amarillo", "prioritaria": false, "fechaCoordinada": "2026-04-11" },
  { "id": 3, "escuela": "3", "nombre": "JUAN DE DIOS CURBELO", "direccion": "Maldonado y 25 de agosto", "localidad": "SAN CARLOS", "lat": -34.791116, "lng": -54.913969, "estado": "rojo", "prioritaria": false },
  { "id": 5, "escuela": "5", "nombre": "ALEJANDRO Y SAMUEL LAFONE", "direccion": "Gorlero y 23 El corral", "localidad": "PUNTA DEL", "lat": -34.963389, "lng": -54.94486, "estado": "rojo", "prioritaria": false },
  { "id": 7, "escuela": "7", "nombre": "GRAL. JOSE DE SAN MARTIN", "direccion": "Batlle y Ordoñez y Acevedo", "localidad": "MALDONADO", "lat": -34.896185, "lng": -54.953225, "estado": "rojo", "prioritaria": true },
  { "id": 8, "escuela": "8", "nombre": "JOSE ENRIQUE RODO", "direccion": "Carlos Reyles y Alvariza", "localidad": "SAN CARLOS", "lat": -34.793638, "lng": -54.921409, "estado": "rojo", "prioritaria": false },
  { "id": 10, "escuela": "10", "nombre": "CAYETANO SILVA", "direccion": "E. Rodó y Lavagna", "localidad": "SAN CARLOS", "lat": -34.7921, "lng": -54.934678, "estado": "rojo", "prioritaria": false },
  { "id": 13, "escuela": "13", "nombre": "VIRREY PEDRO DE CEVALLOS", "direccion": "Araújo y Gonzalez Olaza", "localidad": "SAN CARLOS", "lat": -34.783383, "lng": -54.923925, "estado": "rojo", "prioritaria": false },
  { "id": 19, "escuela": "19", "nombre": "MTRA. RAQUEL RODRIGUEZ CANALE", "direccion": "Los destinos e Hidalgo", "localidad": "LA BARRA", "lat": -34.913302, "lng": -54.860816, "estado": "rojo", "prioritaria": false },
  { "id": 21, "escuela": "21", "nombre": "JUAN ZORRILLA DE SAN MARTIN", "direccion": "Salto y Porto Alegre", "localidad": "PUNTA DEL ESTE", "lat": -34.939879, "lng": -54.931078, "estado": "amarillo", "prioritaria": true, "fechaCoordinada": "2026-05-04", "alumnos": 27 },
  { "id": 24, "escuela": "24", "nombre": "MTRO. CANDIDO VILLAR", "direccion": "R104 y cmno escuela", "localidad": "SAN CARLOS", "lat": -34.796402, "lng": -54.867143, "estado": "rojo", "prioritaria": false },
  { "id": 25, "escuela": "25", "nombre": "GRAL. LEONARDO OLIVERA", "direccion": "Reconquista y Rincón", "localidad": "SAN CARLOS", "lat": -34.794697, "lng": -54.927975, "estado": "rojo", "prioritaria": false },
  { "id": 37, "escuela": "37", "nombre": "FRANCISCO PIRIA", "direccion": "Celedonio Rojas y Maua", "localidad": "PIRIÁPOLIS", "lat": -34.845214, "lng": -55.266951, "estado": "rojo", "prioritaria": false },
  { "id": 45, "escuela": "45", "nombre": "DR. ALFONSO LAMAS", "direccion": "Calle 66 y 41", "localidad": "PLAYA VERDE", "lat": -34.824755, "lng": -55.30442, "estado": "rojo", "prioritaria": false },
  { "id": 50, "escuela": "50", "nombre": "MAESTRO ANTONIO CAMACHO", "direccion": "San Fernando y Paysandú", "localidad": "MALDONADO", "lat": -34.906029, "lng": -54.94193, "estado": "rojo", "prioritaria": false },
  { "id": 52, "escuela": "52", "nombre": "ELENA MARROCHE DE MUSSIO", "direccion": "Sanabria y Reconquista", "localidad": "PIRIÁPOLIS", "lat": -34.863286, "lng": -55.271744, "estado": "rojo", "prioritaria": false },
  { "id": 53, "escuela": "53", "nombre": "VILLA CHIAPPARA", "direccion": "Ejido y Valin", "localidad": "SAN CARLOS", "lat": -34.787751, "lng": -54.908924, "estado": "rojo", "prioritaria": true },
  { "id": 56, "escuela": "56", "nombre": "CLEMENTE ESTABLE", "direccion": "Melendez casi Sorata", "localidad": "VILLA DELI", "lat": -34.89064, "lng": -54.978965, "estado": "rojo", "prioritaria": false },
  { "id": 66, "escuela": "66", "nombre": "DIONISIO DIAZ", "direccion": "Ruta 39", "localidad": "CANTERAS DE MARELLI", "lat": -34.84584, "lng": -54.942381, "estado": "rojo", "prioritaria": false },
  { "id": 69, "escuela": "69", "nombre": "ESCUELA 69", "direccion": "R73 y R71", "localidad": "LAS FLORES", "lat": -34.793106, "lng": -55.324777, "estado": "rojo", "prioritaria": false },
  { "id": 79, "escuela": "79", "nombre": "ROSALÍA DE CASTRO", "direccion": "José de San Martín y Sucre", "localidad": "MALDONADO", "lat": -34.914732, "lng": -54.951452, "estado": "rojo", "prioritaria": false },
  { "id": 82, "escuela": "82", "nombre": "JUANA DE IBARBOUROU", "direccion": "Av Cachimba del Rey y Yerbal", "localidad": "MALDONADO", "lat": -34.91434, "lng": -54.950139, "estado": "rojo", "prioritaria": false },
  { "id": 84, "escuela": "84", "nombre": "ESCUELA DE SORDOS", "direccion": "José de San Martín", "localidad": "MALDONADO", "lat": -34.914688, "lng": -54.950614, "estado": "rojo", "prioritaria": false },
  { "id": 93, "escuela": "93", "nombre": "ESCUELA 93", "direccion": "Av de los Gauchos y Paysandú", "localidad": "MALDONADO", "lat": -34.906103, "lng": -54.943629, "estado": "rojo", "prioritaria": false },
  { "id": 95, "escuela": "95", "nombre": "ESPAÑA", "direccion": "Caracara y Meboipe", "localidad": "MALDONADO", "lat": -34.897614, "lng": -54.938278, "estado": "rojo", "prioritaria": false },
  { "id": 96, "escuela": "96", "nombre": "JUAN JOSE MUÑOZ", "direccion": "Cerro Punta Ballena ", "localidad": "MALDONADO", "lat": -34.879486, "lng": -54.979419, "estado": "rojo", "prioritaria": false },
  { "id": 97, "escuela": "97", "nombre": "TACUABÉ", "direccion": "Rincón y Varela", "localidad": "MALDONADO", "lat": -34.904031, "lng": -54.955673, "estado": "rojo", "prioritaria": false },
  { "id": 98, "escuela": "98", "nombre": "ISLAS CANARIAS", "direccion": "Seijo y Campana", "localidad": "SAN CARLOS", "lat": -34.79899, "lng": -54.924468, "estado": "rojo", "prioritaria": false },
  { "id": 99, "escuela": "99", "nombre": "ESCUELA 99", "direccion": "De la Virgen y Tahilandia", "localidad": "MALDONADO", "lat": -34.917063, "lng": -54.945946, "estado": "verde", "alumnos": 28, "fechaRealizada": "2026-04-23" },
  { "id": 104, "escuela": "104", "nombre": "ESCUELA 104", "direccion": "Rimini y Foggia", "localidad": "MALDONADO", "lat": -34.897439, "lng": -54.967014, "estado": "rojo", "prioritaria": false },
  { "id": 106, "escuela": "106", "nombre": "ESCUELA 106", "direccion": "17 de junio y central", "localidad": "MALDONADO", "lat": -34.890357, "lng": -54.959377, "estado": "rojo", "prioritaria": false },
  { "id": 107, "escuela": "107", "nombre": "ESCUELA 107", "direccion": "Sierra de las Cañas", "localidad": "CERRO PELADO", "lat": -34.883589, "lng": -54.971492, "estado": "rojo", "prioritaria": false },
  { "id": 108, "escuela": "108", "nombre": "ESCUELA 108", "direccion": "Costanera", "localidad": "LA CAPUERA", "lat": -34.862079, "lng": -55.133235, "estado": "rojo", "prioritaria": false },
  { "id": 113, "escuela": "113", "nombre": "ESCUELA 113", "direccion": "Jose Mautone", "localidad": "SAN CARLOS", "lat": -34.781288, "lng": -54.915867, "estado": "rojo", "prioritaria": false },
  { "id": 87, "escuela": "87", "nombre": "Turno tarde 87", "direccion": "Simon del Pino", "localidad": "MALDONADO", "lat": -34.898319, "lng": -54.94473, "estado": "verde", "alumnos": 36, "fechaRealizada": "2026-04-17" },
  { "id": 91, "escuela": "91", "nombre": "Turno mañana 91", "direccion": "Simón del Pino", "localidad": "MALDONADO", "lat": -34.89855, "lng": -54.945, "estado": "rojo", "prioritaria": false }
];

class EduTalkApp {
    constructor() {
        this.DB_KEY = 'edutalk_maldonado_URU_FINAL';
        this.schools = this.loadData();
        this.currentView = 'dashboard';
        this.map = null;
        this.markers = [];
        this.currentDate = new Date();
        this.init();
    }

    loadData() {
        const stored = localStorage.getItem(this.DB_KEY);
        if (stored) return JSON.parse(stored);
        
        return URU_DATA.map(item => ({
            id: item.id.toString(),
            number: item.escuela,
            name: item.nombre || `Escuela ${item.escuela}`,
            address: item.direccion || "",
            locality: item.localidad || "",
            type: "Urbana",
            coords: [item.lat, item.lng],
            status: item.estado === 'verde' ? 'completed' : (item.estado === 'amarillo' ? 'coordinated' : 'pending'),
            priority: item.prioritaria || false,
            date: item.fechaRealizada || item.fechaCoordinada || "",
            students: item.alumnos || 0,
            speakers: "", notes: "", phone: ""
        }));
    }

    save() {
        localStorage.setItem(this.DB_KEY, JSON.stringify(this.schools));
        this.renderAll();
    }

    init() {
        lucide.createIcons();
        this.setupListeners();
        this.renderAll();
        setTimeout(() => this.initCharts(), 500);
    }

    renderAll() {
        this.renderStats();
        this.renderTable();
        if (this.map) this.renderMapMarkers();
        if (this.currentView === 'calendar') this.renderCalendar();
        this.updateCharts();
    }

    setupListeners() {
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => this.switchView(btn.dataset.view));
        });

        document.getElementById('reset-data').addEventListener('click', () => {
            if(confirm('¿Limpiar todo y cargar lista original de Maldonado?')) {
                localStorage.removeItem(this.DB_KEY);
                location.reload();
            }
        });

        document.getElementById('open-add-modal').addEventListener('click', () => this.openModal());
        document.querySelectorAll('.close-modal').forEach(b => b.addEventListener('click', () => this.closeModal()));
        document.getElementById('school-form').addEventListener('submit', (e) => { e.preventDefault(); this.handleSubmit(); });
        document.getElementById('close-panel').addEventListener('click', () => document.getElementById('side-panel').classList.remove('open'));
        document.getElementById('global-search').addEventListener('input', (e) => this.renderTable(e.target.value));
        
        document.getElementById('map-filter-status').addEventListener('change', () => this.renderMapMarkers());
        document.getElementById('prev-month').addEventListener('click', () => { this.currentDate.setMonth(this.currentDate.getMonth()-1); this.renderCalendar(); });
        document.getElementById('next-month').addEventListener('click', () => { this.currentDate.setMonth(this.currentDate.getMonth()+1); this.renderCalendar(); });
    }

    switchView(id) {
        this.currentView = id;
        document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.view === id));
        document.querySelectorAll('.view-section').forEach(s => s.classList.toggle('active', s.id === `view-${id}`));
        if (id === 'map') {
            setTimeout(() => {
                if (!this.map) this.initMap();
                else this.map.invalidateSize();
            }, 100);
        }
        if (id === 'calendar') this.renderCalendar();
    }

    renderStats() {
        const stats = {
            p: this.schools.filter(x => x.status === 'pending').length,
            c: this.schools.filter(x => x.status === 'coordinated').length,
            r: this.schools.filter(x => x.status === 'completed').length,
            pr: this.schools.filter(x => x.priority).length,
            st: this.schools.reduce((a,b) => a + (parseInt(b.students)||0), 0)
        };
        document.getElementById('stat-pending').textContent = stats.p;
        document.getElementById('stat-coordinated').textContent = stats.c;
        document.getElementById('stat-realized').textContent = stats.r;
        document.getElementById('stat-students').textContent = stats.st;
        document.getElementById('priority-count').textContent = stats.pr;
    }

    renderTable(search = '') {
        const query = search.toLowerCase();
        const filtered = this.schools.filter(x => 
            x.name.toLowerCase().includes(query) || 
            x.locality.toLowerCase().includes(query) || 
            x.number.includes(query)
        );

        const tbody = document.getElementById('schools-body');
        tbody.innerHTML = filtered.map(s => `
            <tr>
                <td>${s.number}</td>
                <td><div style="font-weight:700">${s.name} ${s.priority ? '⭐' : ''}</div><div style="font-size:11px;color:var(--text-secondary)">${s.address}</div></td>
                <td>${s.locality}</td>
                <td><span class="status-pill ${s.status}">${this.tStatus(s.status)}</span></td>
                <td>${s.students}</td>
                <td class="actions-cell">
                    <button class="btn-icon" onclick="app.openDetails('${s.id}')"><i data-lucide="eye"></i></button>
                    <button class="btn-icon" onclick="app.openModal('${s.id}')"><i data-lucide="edit-2"></i></button>
                    <button class="btn-icon" onclick="app.deleteSchool('${s.id}')"><i data-lucide="trash-2"></i></button>
                </td>
            </tr>
        `).join('');
        lucide.createIcons();
    }

    initMap() {
        this.map = L.map('map-container').setView([-34.85, -54.94], 11);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(this.map);
        this.renderMapMarkers();
    }

    renderMapMarkers() {
        if (!this.map) return;
        this.markers.forEach(m => this.map.removeLayer(m));
        this.markers = [];
        this.schools.forEach(s => {
            const color = s.status === 'completed' ? '#10b981' : (s.status === 'coordinated' ? '#f59e0b' : '#ef4444');
            const m = L.circleMarker(s.coords, { radius: 8, fillColor: color, color: '#fff', weight: 1, fillOpacity: 0.8 }).addTo(this.map);
            m.bindPopup(`<b>${s.name}</b><br><button onclick="app.openDetails('${s.id}')">Ver Detalle</button>`);
            this.markers.push(m);
        });
    }

    initCharts() {
        const stats = this.getStats();
        const ctxP = document.getElementById('progressChart');
        if(!ctxP) return;
        this.progressChart = new Chart(ctxP, {
            type: 'bar',
            data: { labels: ['Pendientes', 'Coordinadas', 'Realizadas'], datasets: [{ data: [stats.p, stats.c, stats.r], backgroundColor: ['#ef4444', '#f59e0b', '#10b981'] }] },
            options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { color: '#94a3b8' } } } }
        });
        this.typeChart = new Chart(document.getElementById('typeChart'), {
            type: 'doughnut',
            data: { labels: ['Maldonado', 'San Carlos', 'Piriápolis', 'Otros'], datasets: [{ data: [15, 8, 5, 8], backgroundColor: ['#6366f1', '#2dd4bf', '#f59e0b', '#ef4444'] }] },
            options: { plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } } }
        });
    }

    updateCharts() {
        if (!this.progressChart) return;
        const s = this.getStats();
        this.progressChart.data.datasets[0].data = [s.p, s.c, s.r];
        this.progressChart.update();
    }

    getStats() {
        return { p: this.schools.filter(x => x.status === 'pending').length, c: this.schools.filter(x => x.status === 'coordinated').length, r: this.schools.filter(x => x.status === 'completed').length };
    }

    openModal(id = null) {
        document.getElementById('school-form').reset();
        document.getElementById('edit-id').value = '';
        if (id) {
            const s = this.schools.find(x => x.id === id);
            document.getElementById('edit-id').value = s.id;
            document.getElementById('f-number').value = s.number;
            document.getElementById('f-name').value = s.name;
            document.getElementById('f-lat').value = s.coords[0];
            document.getElementById('f-lng').value = s.coords[1];
            document.getElementById('f-status').value = s.status;
            document.getElementById('f-students').value = s.students;
            document.getElementById('f-date').value = s.date;
        }
        document.getElementById('school-modal').classList.add('open');
    }

    closeModal() { document.getElementById('school-modal').classList.remove('open'); }

    handleSubmit() {
        const id = document.getElementById('edit-id').value;
        const data = {
            number: document.getElementById('f-number').value,
            name: document.getElementById('f-name').value,
            coords: [parseFloat(document.getElementById('f-lat').value), parseFloat(document.getElementById('f-lng').value)],
            status: document.getElementById('f-status').value,
            date: document.getElementById('f-date').value,
            students: parseInt(document.getElementById('f-students').value) || 0
        };
        if (id) {
            const idx = this.schools.findIndex(x => x.id === id);
            this.schools[idx] = { ...this.schools[idx], ...data };
        } else {
            data.id = Date.now().toString();
            this.schools.push(data);
        }
        this.save();
        this.closeModal();
    }

    deleteSchool(id) { if(confirm('¿Eliminar escuela?')) { this.schools = this.schools.filter(x => x.id !== id); this.save(); } }

    openDetails(id) {
        const s = this.schools.find(x => x.id === id);
        document.getElementById('panel-content').innerHTML = `
            <div class="detail-item"><div class="detail-label">Escuela</div><div class="detail-value">${s.name} (${s.number})</div></div>
            <div class="detail-item"><div class="detail-label">Estado</div><div class="detail-value"><span class="status-pill ${s.status}">${this.tStatus(s.status)}</span></div></div>
            <div class="detail-item"><div class="detail-label">Alumnos</div><div class="detail-value">${s.students}</div></div>
            <button class="btn-add-school" onclick="app.openModal('${s.id}')" style="margin-top:20px;width:100%">Editar</button>
        `;
        document.getElementById('side-panel').classList.add('open');
    }

    renderCalendar() {
        const grid = document.getElementById('calendar-grid'); grid.innerHTML = '';
        const y = this.currentDate.getFullYear(); const m = this.currentDate.getMonth();
        document.getElementById('calendar-month-year').textContent = this.currentDate.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' });
        const first = new Date(y, m, 1).getDay(); const total = new Date(y, m+1, 0).getDate();
        for(let i=0; i<first; i++) grid.innerHTML += '<div class="calendar-day empty"></div>';
        for(let d=1; d<=total; d++) {
            const dateStr = `${y}-${(m+1).toString().padStart(2,'0')}-${d.toString().padStart(2,'0')}`;
            const evs = this.schools.filter(x => x.date === dateStr);
            const evHtml = evs.map(e => `<div class="event-dot ${e.status}" onclick="app.openDetails('${e.id}')">${e.name.substring(0,8)}</div>`).join('');
            grid.innerHTML += `<div class="calendar-day"><span class="day-number">${d}</span>${evHtml}</div>`;
        }
    }

    tStatus(s) { return { pending: 'Sin Coordinar', coordinated: 'Coordinada', completed: 'Realizada' }[s] || s; }
}

const app = new EduTalkApp();
window.app = app;
