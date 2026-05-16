/**
 * EduTalk App - Business Logic & UI Controller
 * Datos: Escuelas Departamento de Maldonado, Uruguay
 */

// --- Mapeo de datos del usuario al formato de la app ---
const RAW_USER_DATA = [
  {
    "id": 1,
    "escuela": "1",
    "nombre": "JOSE PEDRO RAMIREZ",
    "direccion": "J.P Varela y Roman Guerra",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Práctica - HP",
    "telefono": "42223751",
    "lat": -34.904264,
    "lng": -54.956523,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 2,
    "escuela": "2",
    "nombre": "JOSE PEDRO VARELA",
    "direccion": "Michellini y 25 de mayo",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Práctica - HP",
    "telefono": "42222210",
    "lat": -34.909583,
    "lng": -54.960656,
    "estado": "amarillo",
    "prioritaria": false,
    "fechaCoordinada": "2026-04-11 10:30",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 3,
    "escuela": "3",
    "nombre": "JUAN DE DIOS CURBELO",
    "direccion": "Maldonado y 25 de agosto",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "42669223",
    "lat": -34.791116,
    "lng": -54.913969,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 5,
    "escuela": "5",
    "nombre": "ALEJANDRO Y SAMUEL LAFONE",
    "direccion": "Gorlero y 23 El corral",
    "localidad": "PUNTA DEL",
    "departamento": "Maldonado",
    "tipo": "Tiempo Extendido",
    "telefono": "42441838",
    "lat": -34.963389,
    "lng": -54.94486,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 7,
    "escuela": "7",
    "nombre": "GRAL. JOSE DE SAN MARTIN",
    "direccion": "Batlle y Ordoñez y Acevedo",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "42223066",
    "lat": -34.896185,
    "lng": -54.953225,
    "estado": "rojo",
    "prioritaria": true,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 8,
    "escuela": "8",
    "nombre": "JOSE ENRIQUE RODO",
    "direccion": "Carlos Reyles y Alvariza",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Práctica - HP",
    "telefono": "42669112",
    "lat": -34.793638,
    "lng": -54.921409,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 10,
    "escuela": "10",
    "nombre": "CAYETANO SILVA",
    "direccion": "E. Rodó y Lavagna",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42669384",
    "lat": -34.7921,
    "lng": -54.934678,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 13,
    "escuela": "13",
    "nombre": "VIRREY PEDRO DE CEVALLOS",
    "direccion": "Araújo y Gonzalez Olaza",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "42669645",
    "lat": -34.783383,
    "lng": -54.923925,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 19,
    "escuela": "19",
    "nombre": "MTRA. RAQUEL RODRIGUEZ CANALE",
    "direccion": "Los destinos e Hidalgo",
    "localidad": "LA BARRA",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42770342",
    "lat": -34.913302,
    "lng": -54.860816,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 21,
    "escuela": "21",
    "nombre": "JUAN ZORRILLA DE SAN MARTIN",
    "direccion": "Salto y Porto Alegre",
    "localidad": "PUNTA DEL ESTE",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42483368",
    "lat": -34.939879,
    "lng": -54.931078,
    "estado": "amarillo",
    "prioritaria": true,
    "fechaCoordinada": "2026-05-04T11:00",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 27,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 24,
    "escuela": "24",
    "nombre": "MTRO. CANDIDO VILLAR",
    "direccion": "R104 y cmno escuela",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42667987",
    "lat": -34.796402,
    "lng": -54.867143,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 25,
    "escuela": "25",
    "nombre": "GRAL. LEONARDO OLIVERA",
    "direccion": "Reconquista y Rincón",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "43669666",
    "lat": -34.794697,
    "lng": -54.927975,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 37,
    "escuela": "37",
    "nombre": "FRANCISCO PIRIA",
    "direccion": "Celedonio Rojas y Maua",
    "localidad": "PIRIÁPOLIS",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "44322805",
    "lat": -34.845214,
    "lng": -55.266951,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 45,
    "escuela": "45",
    "nombre": "DR. ALFONSO LAMAS",
    "direccion": "Calle 66 y 41",
    "localidad": "PLAYA VERDE",
    "departamento": "Maldonado",
    "tipo": "Rural",
    "telefono": "44223968",
    "lat": -34.824755,
    "lng": -55.30442,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 50,
    "escuela": "50",
    "nombre": "MAESTRO ANTONIO CAMACHO",
    "direccion": "San Fernando y Paysandú",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Aprender",
    "telefono": "42227793",
    "lat": -34.906029,
    "lng": -54.94193,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 52,
    "escuela": "52",
    "nombre": "ELENA MARROCHE DE MUSSIO",
    "direccion": "Sanabria y Reconquista",
    "localidad": "PIRIÁPOLIS",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "44322222",
    "lat": -34.863286,
    "lng": -55.271744,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 53,
    "escuela": "53",
    "nombre": "VILLA CHIAPPARA",
    "direccion": "Ejido y Valin",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "42669639",
    "lat": -34.787751,
    "lng": -54.908924,
    "estado": "rojo",
    "prioritaria": true,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 56,
    "escuela": "56",
    "nombre": "CLEMENTE ESTABLE",
    "direccion": "Melendez casi Sorata",
    "localidad": "VILLA DELI",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42222246",
    "lat": -34.89064,
    "lng": -54.978965,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 66,
    "escuela": "66",
    "nombre": "DIONISIO DIAZ",
    "direccion": "Ruta 39",
    "localidad": "CANTERAS DE MARELLI",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42232114",
    "lat": -34.84584,
    "lng": -54.942381,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 69,
    "escuela": "69",
    "nombre": "ESCUELA 69",
    "direccion": "R73 y R71",
    "localidad": "LAS FLORES",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "44380704",
    "lat": -34.793106,
    "lng": -55.324777,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 79,
    "escuela": "79",
    "nombre": "ROSALÍA DE CASTRO",
    "direccion": "José de San Martín y Sucre",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Especiales",
    "telefono": "42222166",
    "lat": -34.914732,
    "lng": -54.951452,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 82,
    "escuela": "82",
    "nombre": "JUANA DE IBARBOUROU",
    "direccion": "Av Cachimba del Rey y Yerbal",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Práctica - HP",
    "telefono": "42225990",
    "lat": -34.91434,
    "lng": -54.950139,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 84,
    "escuela": "84",
    "nombre": "ESCUELA DE SORDOS",
    "direccion": "José de San Martín",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Especiales",
    "telefono": "42221423",
    "lat": -34.914688,
    "lng": -54.950614,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 93,
    "escuela": "93",
    "nombre": "ESCUELA 93",
    "direccion": "Av de los Gauchos y Paysandú",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Práctica - HP",
    "telefono": "42238528",
    "lat": -34.906103,
    "lng": -54.943629,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 95,
    "escuela": "95",
    "nombre": "ESPAÑA",
    "direccion": "Caracara y Meboipe",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Aprender",
    "telefono": "42237848 / 42238040",
    "lat": -34.897614,
    "lng": -54.938278,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 96,
    "escuela": "96",
    "nombre": "JUAN JOSE MUÑOZ",
    "direccion": "Cerro Punta Ballena ",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Aprender",
    "telefono": "42238556",
    "lat": -34.879486,
    "lng": -54.979419,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 97,
    "escuela": "97",
    "nombre": "TACUABÉ",
    "direccion": "Rincón y Varela",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Práctica - HP",
    "telefono": "42227704",
    "lat": -34.904031,
    "lng": -54.955673,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 98,
    "escuela": "98",
    "nombre": "ISLAS CANARIAS",
    "direccion": "Seijo y Campana",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "42668190",
    "lat": -34.79899,
    "lng": -54.924468,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 99,
    "escuela": "99",
    "nombre": "ESCUELA 99",
    "direccion": "De la Virgen y Tahilandia",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "42236809",
    "lat": -34.917063,
    "lng": -54.945946,
    "estado": "verde",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "2026-04-23T13:30",
    "charlistas": "Maximo, Natalia, Vanessa",
    "alumnos": 28,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 104,
    "escuela": "104",
    "nombre": "ESCUELA 104",
    "direccion": "Rimini y Foggia",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "42249272",
    "lat": -34.897439,
    "lng": -54.967014,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 106,
    "escuela": "106",
    "nombre": "ESCUELA 106",
    "direccion": "17 de junio y central",
    "localidad": "MALDONADO",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42248734",
    "lat": -34.890357,
    "lng": -54.959377,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 107,
    "escuela": "107",
    "nombre": "ESCUELA",
    "direccion": "Sierra de las Cañas y Cerro del Penitente",
    "localidad": "CERRO PELA",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42230037",
    "lat": -34.883589,
    "lng": -54.971492,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 108,
    "escuela": "108",
    "nombre": "ESCUELA 108",
    "direccion": "Los Gladiolos y Costanera",
    "localidad": "LA CAPUERA",
    "departamento": "Maldonado",
    "tipo": "Aprender",
    "telefono": "42559422",
    "lat": -34.862079,
    "lng": -55.133235,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 113,
    "escuela": "113",
    "nombre": "ESCUELA 113",
    "direccion": "Jose Mautone",
    "localidad": "SAN CARLOS",
    "departamento": "Maldonado",
    "tipo": "Tiempo Completo",
    "telefono": "42669446",
    "lat": -34.781288,
    "lng": -54.915867,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  },
  {
    "id": 1777482998573,
    "escuela": "87",
    "nombre": "Turno tarde esc 87",
    "direccion": "Simon del Pino ",
    "localidad": "Maldonado",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "42231347 ",
    "lat": -34.898319,
    "lng": -54.94473,
    "estado": "verde",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "2026-04-17T13:30",
    "charlistas": "Agustín, Natalia, Vanessa",
    "alumnos": 36,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": "2 GRUPOS"
  },
  {
    "id": 1777483063053,
    "escuela": "91",
    "nombre": "Turno mañana esc 91",
    "direccion": "Simón del Pino ",
    "localidad": "Maldonado",
    "departamento": "Maldonado",
    "tipo": "Urbana Común",
    "telefono": "4223 1347",
    "lat": -34.89855,
    "lng": -54.945,
    "estado": "rojo",
    "prioritaria": false,
    "fechaCoordinada": "",
    "fechaRealizada": "",
    "charlistas": "",
    "alumnos": 0,
    "imagenGrupo": "",
    "imagenFormulario": "",
    "observaciones": ""
  }
];

class EduTalkApp {
    constructor() {
        const stored = localStorage.getItem('edutalk_schools');
        this.schools = stored ? JSON.parse(stored) : this.transformData(RAW_USER_DATA);
        this.currentView = 'dashboard';
        this.map = null;
        this.markers = [];
        this.progressChart = null;
        this.typeChart = null;
        this.currentDate = new Date();

        this.init();
    }

    // Adapta el JSON del usuario al formato interno de la app
    transformData(data) {
        return data.map(item => ({
            id: item.id.toString(),
            number: item.escuela,
            name: item.nombre || `Escuela N° ${item.escuela}`,
            address: item.direccion,
            locality: item.localidad,
            type: item.tipo || "Común",
            coords: [item.lat, item.lng],
            status: this.mapUserStatus(item.estado),
            priority: item.prioritaria,
            date: (item.fechaRealizada || item.fechaCoordinada || "").split(' ')[0].split('T')[0],
            students: item.alumnos || 0,
            speakers: item.charlistas || "",
            notes: item.observaciones || "",
            phone: item.telefono || ""
        }));
    }

    mapUserStatus(color) {
        if (color === 'verde') return 'completed';
        if (color === 'amarillo') return 'coordinated';
        return 'pending'; // rojo
    }

    init() {
        lucide.createIcons();
        this.setupEventListeners();
        this.renderStats();
        this.renderTable();
        this.initCharts();
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

    setupEventListeners() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => this.switchView(e.currentTarget.dataset.view));
        });

        document.getElementById('open-add-modal').addEventListener('click', () => this.openModal());
        document.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', () => this.closeModal()));
        document.getElementById('school-form').addEventListener('submit', (e) => { e.preventDefault(); this.handleFormSubmit(); });
        document.getElementById('close-panel').addEventListener('click', () => document.getElementById('side-panel').classList.remove('open'));
        document.getElementById('map-filter-status').addEventListener('change', () => this.renderMapMarkers());
        document.getElementById('map-filter-priority').addEventListener('change', () => this.renderMapMarkers());
        document.getElementById('prev-month').addEventListener('click', () => { this.currentDate.setMonth(this.currentDate.getMonth() - 1); this.renderCalendar(); });
        document.getElementById('next-month').addEventListener('click', () => { this.currentDate.setMonth(this.currentDate.getMonth() + 1); this.renderCalendar(); });
        document.getElementById('global-search').addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    switchView(viewId) {
        this.currentView = viewId;
        document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === viewId));
        document.querySelectorAll('.view-section').forEach(sec => sec.classList.toggle('active', sec.id === `view-${viewId}`));
        if (viewId === 'map') setTimeout(() => this.initMap(), 100);
        if (viewId === 'calendar') this.renderCalendar();
    }

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
                    label: 'Escuelas',
                    data: [stats.pending, stats.coordinated, stats.completed],
                    backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
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
                plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 20 } } }
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

    initMap() {
        if (this.map) return;
        // Centrado en Maldonado, Uruguay
        this.map = L.map('map-container').setView([-34.85, -54.95], 11);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; CARTO'
        }).addTo(this.map);
        this.renderMapMarkers();
    }

    renderMapMarkers() {
        if (!this.map) return;
        this.markers.forEach(m => this.map.removeLayer(m));
        this.markers = [];
        const statusFilter = document.getElementById('map-filter-status').value;
        const priorityFilter = document.getElementById('map-filter-priority').checked;

        this.schools.forEach(school => {
            const matchesStatus = statusFilter === 'all' || school.status === statusFilter;
            const matchesPriority = !priorityFilter || school.priority;
            if (matchesStatus && matchesPriority) {
                const color = school.status === 'completed' ? '#10b981' : 
                             school.status === 'coordinated' ? '#f59e0b' : '#ef4444';
                const marker = L.circleMarker(school.coords, {
                    radius: school.priority ? 12 : 8,
                    fillColor: color,
                    color: school.priority ? '#fff' : color,
                    weight: 2, opacity: 1, fillOpacity: 0.8
                }).addTo(this.map);
                marker.bindPopup(`
                    <div class="map-popup">
                        <strong>${school.name}</strong><br>
                        <small>${school.address}</small><br>
                        <button onclick="window.app.openDetails('${school.id}')">Ver Detalle</button>
                    </div>
                `);
                this.markers.push(marker);
            }
        });
    }

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
        this.renderTable(this.schools.filter(s => 
            s.name.toLowerCase().includes(q) || s.locality.toLowerCase().includes(q) || s.number.includes(q)
        ));
    }

    translateStatus(status) {
        return { pending: 'Sin Coordinar', coordinated: 'Coordinada', completed: 'Realizada' }[status] || status;
    }

    openModal(id = null) {
        const modal = document.getElementById('school-modal');
        const form = document.getElementById('school-form');
        form.reset();
        document.getElementById('edit-id').value = '';
        if (id) {
            const s = this.schools.find(x => x.id === id);
            document.getElementById('modal-title').textContent = 'Editar Escuela';
            document.getElementById('edit-id').value = s.id;
            document.getElementById('f-number').value = s.number;
            document.getElementById('f-name').value = s.name;
            document.getElementById('f-address').value = s.address;
            document.getElementById('f-locality').value = s.locality;
            document.getElementById('f-type').value = s.type;
            document.getElementById('f-lat').value = s.coords[0];
            document.getElementById('f-lng').value = s.coords[1];
            document.getElementById('f-status').value = s.status;
            document.getElementById('f-priority').checked = s.priority;
            document.getElementById('f-date').value = s.date;
            document.getElementById('f-students').value = s.students;
            document.getElementById('f-speakers').value = s.speakers;
            document.getElementById('f-notes').value = s.notes;
        }
        modal.classList.add('open');
    }

    closeModal() { document.getElementById('school-modal').classList.remove('open'); }

    handleFormSubmit() {
        const id = document.getElementById('edit-id').value;
        const data = {
            number: document.getElementById('f-number').value,
            name: document.getElementById('f-name').value,
            address: document.getElementById('f-address').value,
            locality: document.getElementById('f-locality').value,
            type: document.getElementById('f-type').value,
            coords: [parseFloat(document.getElementById('f-lat').value), parseFloat(document.getElementById('f-lng').value)],
            status: document.getElementById('f-status').value,
            priority: document.getElementById('f-priority').checked,
            date: document.getElementById('f-date').value,
            students: parseInt(document.getElementById('f-students').value) || 0,
            speakers: document.getElementById('f-speakers').value,
            notes: document.getElementById('f-notes').value
        };
        if (id) {
            const idx = this.schools.findIndex(s => s.id === id);
            this.schools[idx] = { ...this.schools[idx], ...data };
        } else {
            data.id = Date.now().toString();
            this.schools.push(data);
        }
        this.save();
        this.closeModal();
    }

    deleteSchool(id) { if (confirm('¿Eliminar escuela?')) { this.schools = this.schools.filter(s => s.id !== id); this.save(); } }

    openDetails(id) {
        const s = this.schools.find(x => x.id === id);
        const panel = document.getElementById('side-panel');
        document.getElementById('panel-content').innerHTML = `
            <div class="detail-item"><div class="detail-label">Nombre</div><div class="detail-value">${s.name} ${s.priority ? '⭐' : ''}</div></div>
            <div class="detail-item"><div class="detail-label">Ubicación</div><div class="detail-value">${s.address}, ${s.locality}</div></div>
            <div class="detail-item"><div class="detail-label">Estado</div><div class="detail-value"><span class="status-pill ${s.status}">${this.translateStatus(s.status)}</span></div></div>
            <div class="detail-item"><div class="detail-label">Fecha</div><div class="detail-value">${s.date || 'Pendiente'}</div></div>
            <div class="detail-item"><div class="detail-label">Alumnos</div><div class="detail-value">${s.students}</div></div>
            <div class="detail-item"><div class="detail-label">Disertantes</div><div class="detail-value">${s.speakers || '-'}</div></div>
            <div class="detail-item"><div class="detail-label">Notas</div><div class="detail-value" style="font-size:14px;color:var(--text-secondary)">${s.notes || '-'}</div></div>
            <button class="btn-save" style="width:100%;margin-top:20px" onclick="window.app.openModal('${s.id}')">Editar</button>
        `;
        panel.classList.add('open');
    }

    renderCalendar() {
        const grid = document.getElementById('calendar-grid');
        grid.innerHTML = '';
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        document.getElementById('calendar-month-year').textContent = this.currentDate.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' });
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        for (let i = 0; i < firstDay; i++) { grid.appendChild(Object.assign(document.createElement('div'), { className: 'calendar-day empty' })); }
        for (let d = 1; d <= daysInMonth; d++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            dayDiv.innerHTML = `<span class="day-number">${d}</span>`;
            const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const evts = this.schools.filter(s => s.date === dayStr);
            if (evts.length > 0) {
                const cont = document.createElement('div');
                cont.className = 'day-events';
                evts.forEach(e => {
                    const dot = document.createElement('div');
                    dot.className = `event-dot ${e.status}`;
                    dot.textContent = e.name.substring(0, 12);
                    dot.onclick = (x) => { x.stopPropagation(); this.openDetails(e.id); };
                    cont.appendChild(dot);
                });
                dayDiv.appendChild(cont);
            }
            grid.appendChild(dayDiv);
        }
    }
}
window.app = new EduTalkApp();

