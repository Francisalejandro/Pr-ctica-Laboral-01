import { Injectable } from '@angular/core';
import { UbicacionesStore } from './ubicaciones.store';
import { Ubicacion } from './ubicacion.model';

@Injectable({ providedIn: 'root' })
export class UbicacionesService {
  constructor(private ubicacionesStore: UbicacionesStore) {
    this.cargarDatosIniciales();
  }

  private cargarDatosIniciales(): void {
    const ubicaciones: Ubicacion[] = [
      {
        "id": 1,
        "nombre": "Agencia Cubacar Hotel Carisol",
        "lat": 19.888567,
        "lng": -75.477514,
        "descripcion": "Agencia de viajes ubicada en el hotel Carisol, en la costa sur de Santiago de Cuba, especializada en excursiones a la Sierra Maestra y servicios de alquiler de autos.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 2,
        "nombre": "Agencia Cubacar Hotel Santiago",
        "lat": 20.026472,
        "lng": -75.810516,
        "descripcion": "Oficina de Cubacar en el Hotel Santiago, en el centro histórico de la ciudad, ofreciendo paquetes turísticos y reservas de alojamiento.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 3,
        "nombre": "Agencia Postal Hotel Guacanayabo",
        "lat": 20.336052,
        "lng": -77.134822,
        "descripcion": "Hotel en Manzanillo, a orillas del golfo de Guacanayabo, con vistas al mar y servicios de alojamiento.",
        "categoria": "hotel"
      },
      {
        "id": 4,
        "nombre": "Agencia Postal Hotel Marea del Portillo",
        "lat": 19.913719,
        "lng": -77.201711,
        "descripcion": "Hotel frente al mar en Pilón, con playa de arena negra y acceso a senderos naturales de la Sierra Maestra.",
        "categoria": "hotel"
      },
      {
        "id": 5,
        "nombre": "Agencia Postal Hotel Sierra Maestra",
        "lat": 20.360094,
        "lng": -76.633506,
        "descripcion": "Hotel en Bayamo, punto de partida para excursiones a la Sierra Maestra, con habitaciones confortables.",
        "categoria": "hotel"
      },
      {
        "id": 6,
        "nombre": "Apartotel Horizontes Atlántico",
        "lat": 23.173666,
        "lng": -82.191416,
        "descripcion": "Apartotel en La Habana del Este, frente al mar, con apartamentos equipados y piscina.",
        "categoria": "hotel"
      },
      {
        "id": 7,
        "nombre": "Aula de Formatur Hotel Las Tunas",
        "lat": 20.953807,
        "lng": -76.953401,
        "descripcion": "Centro de formación turística y alojamiento en Las Tunas, con instalaciones para capacitación hotelera.",
        "categoria": "hotel"
      },
      {
        "id": 8,
        "nombre": "Cadena de Turismo Isla Azul (Hotel Tun)",
        "lat": 20.963987,
        "lng": -76.97498,
        "descripcion": "Hotel de la cadena Islazul en Las Tunas, con servicios básicos y ubicación céntrica.",
        "categoria": "hotel"
      },
      {
        "id": 9,
        "nombre": "Casa de Cambio Hotel Las Américas",
        "lat": 20.02574,
        "lng": -75.808992,
        "descripcion": "Servicio de cambio de divisas en el Hotel Las Américas, en el centro de Santiago de Cuba.",
        "categoria": "casa de cambio"
      },
      {
        "id": 10,
        "nombre": "Casa de Cambio Hotel Meliá Santiago",
        "lat": 20.026472,
        "lng": -75.810516,
        "descripcion": "Punto de cambio de moneda extranjera en el lujoso Hotel Meliá Santiago, frente a la bahía.",
        "categoria": "casa de cambio"
      },
      {
        "id": 11,
        "nombre": "Comercializadora Ingeniería Hotelera",
        "lat": 23.033039,
        "lng": -82.403739,
        "descripcion": "Oficina en La Habana dedicada a la comercialización de servicios de ingeniería y construcción hotelera.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 12,
        "nombre": "Complejo Extra Hotelero",
        "lat": 20.16069,
        "lng": -75.210545,
        "descripcion": "Complejo en Guantánamo con instalaciones para eventos, restaurantes y áreas recreativas.",
        "categoria": "hotel"
      },
      {
        "id": 13,
        "nombre": "Complejo Hotelero El Senador",
        "lat": 22.536796,
        "lng": -78.364363,
        "descripcion": "Complejo hotelero en Cayo Coco, con habitaciones amplias, piscinas y acceso a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 14,
        "nombre": "Delegación Hoteles Cubanacán",
        "lat": 21.541182,
        "lng": -77.030734,
        "descripcion": "Oficina de la cadena Cubanacán en Nuevitas, encargada de la gestión hotelera en la región.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 15,
        "nombre": "Emp Mixta Franco Cubana Hotelera",
        "lat": 23.103289,
        "lng": -82.445038,
        "descripcion": "Empresa mixta franco-cubana dedicada a la administración de hoteles en La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 16,
        "nombre": "Emp Mixta Grande Hotel Sta Lucía",
        "lat": 23.107182,
        "lng": -82.445017,
        "descripcion": "Empresa mixta que opera el Hotel Grande Santa Lucía en La Habana, con servicios de lujo.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 17,
        "nombre": "Escuela de Hotelería",
        "lat": 20.29785,
        "lng": -76.245718,
        "descripcion": "Centro de formación profesional en Contramaestre, especializado en hotelería y turismo.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 18,
        "nombre": "Escuela de Hotelería y Turismo",
        "lat": 20.37198,
        "lng": -76.64804,
        "descripcion": "Institución educativa en Bayamo que forma técnicos en hotelería y gestión turística.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 19,
        "nombre": "Est 1 Hotel Placetas",
        "lat": 22.313198,
        "lng": -79.654691,
        "descripcion": "Hotel en Placetas, Villa Clara, con ambiente tranquilo y servicios de alojamiento.",
        "categoria": "hotel"
      },
      {
        "id": 20,
        "nombre": "Establ 1 Hotel Telégrafo",
        "lat": 22.805512,
        "lng": -80.073408,
        "descripcion": "Hotel en Sagua La Grande, con arquitectura colonial y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 21,
        "nombre": "Establecimiento 1 Hotel Escambray",
        "lat": 22.148795,
        "lng": -79.979195,
        "descripcion": "Hotel en Manicaragua, rodeado de montañas del Escambray, ideal para ecoturismo.",
        "categoria": "hotel"
      },
      {
        "id": 22,
        "nombre": "Esuni Hotel Caribe",
        "lat": 20.65642,
        "lng": -74.948753,
        "descripcion": "Hotel en Moa, Holguín, con instalaciones para trabajadores de la industria niquelífera.",
        "categoria": "hotel"
      },
      {
        "id": 23,
        "nombre": "El Carretón, Hotel Comodoro",
        "lat": 23.107061,
        "lng": -82.444833,
        "descripcion": "Restaurante y hotel en La Habana, conocido por su cocina criolla y ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 24,
        "nombre": "Empresa Caracol T. Polimita, Hotel Tritó",
        "lat": 23.110124,
        "lng": -82.441292,
        "descripcion": "Hotel en La Habana con temática marina, cerca del acuario nacional.",
        "categoria": "hotel"
      },
      {
        "id": 25,
        "nombre": "Escuela Hotelería y Turismo",
        "lat": 22.09425,
        "lng": -78.631453,
        "descripcion": "Centro de formación turística en Morón, con aulas prácticas para hotelería.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 26,
        "nombre": "Escuela de Hotelería y Turismo José Smi",
        "lat": 23.142869,
        "lng": -81.267088,
        "descripcion": "Institución educativa en Varadero, especializada en turismo y gestión hotelera.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 27,
        "nombre": "Escuela de Hotelería y Turismo",
        "lat": 21.029063,
        "lng": -76.006618,
        "descripcion": "Centro de estudios en Rafael Freyre, Holguín, formando profesionales del sector.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 28,
        "nombre": "Escuela de Hotelería y Turismo",
        "lat": 20.884327,
        "lng": -76.260072,
        "descripcion": "Escuela en Holguín que ofrece carreras técnicas en hotelería y turismo.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 29,
        "nombre": "Escuela de Hotelería y Turismo Formatur",
        "lat": 22.41553,
        "lng": -83.698762,
        "descripcion": "Centro Formatur en Pinar del Río, con programas de capacitación turística.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 30,
        "nombre": "Extrahotelara Isla Azul",
        "lat": 22.112288,
        "lng": -78.627087,
        "descripcion": "Entidad extrahotelera de la cadena Islazul en Morón, con servicios complementarios al alojamiento.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 31,
        "nombre": "Horizontes Seaclub Hotel Arenal",
        "lat": 23.169695,
        "lng": -82.164449,
        "descripcion": "Hotel en La Habana del Este, con acceso directo a la playa y club de playa.",
        "categoria": "hotel"
      },
      {
        "id": 32,
        "nombre": "Hotel Mascotte",
        "lat": 22.494613,
        "lng": -79.546009,
        "descripcion": "Hotel en Remedios, Villa Clara, con arquitectura colonial y ambiente acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 33,
        "nombre": "Hotel Santa Clara Libre",
        "lat": 22.405802,
        "lng": -79.965833,
        "descripcion": "Hotel emblemático en Santa Clara, con vista al parque central y fácil acceso a lugares históricos.",
        "categoria": "hotel"
      },
      {
        "id": 34,
        "nombre": "Hotel Santiago",
        "lat": 20.956795,
        "lng": -76.953195,
        "descripcion": "Hotel en Las Tunas, con habitaciones confortables y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 35,
        "nombre": "Hotel 336",
        "lat": 22.315646,
        "lng": -79.665674,
        "descripcion": "Hotel en Placetas, Villa Clara, con instalaciones sencillas y ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 36,
        "nombre": "Hotel Amaro",
        "lat": 22.681507,
        "lng": -80.147753,
        "descripcion": "Hotel en Santo Domingo, Villa Clara, con zona de piscina y jardines.",
        "categoria": "hotel"
      },
      {
        "id": 37,
        "nombre": "Hotel Ancón, Trinidad",
        "lat": 21.734308,
        "lng": -79.999358,
        "descripcion": "Hotel frente al mar en Trinidad, con playa de arena blanca y vistas espectaculares.",
        "categoria": "hotel"
      },
      {
        "id": 38,
        "nombre": "Hotel Astro",
        "lat": 20.363754,
        "lng": -76.642428,
        "descripcion": "Hotel en Bayamo, céntrico y cercano a sitios históricos de la ciudad.",
        "categoria": "hotel"
      },
      {
        "id": 39,
        "nombre": "Hotel Balcón del Caribe",
        "lat": 19.965629,
        "lng": -75.864518,
        "descripcion": "Hotel en Santiago de Cuba con balcones al mar Caribe y ambiente acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 40,
        "nombre": "Hotel Barcelona",
        "lat": 22.465634,
        "lng": -79.725656,
        "descripcion": "Hotel en Camajuaní, Villa Clara, con servicios de alojamiento y restaurante.",
        "categoria": "hotel"
      },
      {
        "id": 41,
        "nombre": "Hotel Beaches Varadero Cubanacán",
        "lat": 23.188062,
        "lng": -81.174438,
        "descripcion": "Hotel de playa en Varadero, con amplias áreas verdes y servicios todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 42,
        "nombre": "Hotel Bibanasi",
        "lat": 22.944438,
        "lng": -80.912251,
        "descripcion": "Hotel en Martí, Matanzas, con ambiente tranquilo y cercano a la naturaleza.",
        "categoria": "hotel"
      },
      {
        "id": 43,
        "nombre": "Hotel Birret",
        "lat": 20.029885,
        "lng": -75.807282,
        "descripcion": "Hotel en Santiago de Cuba, céntrico y con fácil acceso al malecón.",
        "categoria": "hotel"
      },
      {
        "id": 44,
        "nombre": "Hotel Breezes Varadero Cubanacán",
        "lat": 23.164815,
        "lng": -81.229192,
        "descripcion": "Hotel de playa en Varadero, con piscinas y actividades recreativas.",
        "categoria": "hotel"
      },
      {
        "id": 45,
        "nombre": "Hotel Brisas del Río",
        "lat": 22.707994,
        "lng": -79.684755,
        "descripcion": "Hotel en Encrucijada, Villa Clara, ubicado a orillas del río, con ambiente natural.",
        "categoria": "hotel"
      },
      {
        "id": 46,
        "nombre": "Hotel Brisas Santa Lucía",
        "lat": 21.551592,
        "lng": -77.040008,
        "descripcion": "Hotel en la playa Santa Lucía, Camagüey, con todo incluido y acceso a la costa.",
        "categoria": "hotel"
      },
      {
        "id": 47,
        "nombre": "Hotel Brisas Trinidad del Mar",
        "lat": 21.736134,
        "lng": -80.002535,
        "descripcion": "Hotel en Trinidad, con vista al mar y piscinas, cerca del centro histórico.",
        "categoria": "hotel"
      },
      {
        "id": 48,
        "nombre": "Hotel Cacique",
        "lat": 22.619807,
        "lng": -80.383532,
        "descripcion": "Hotel en Santo Domingo, Villa Clara, con piscina y áreas recreativas.",
        "categoria": "hotel"
      },
      {
        "id": 49,
        "nombre": "Hotel Camagüey",
        "lat": 21.361649,
        "lng": -77.886253,
        "descripcion": "Hotel en el centro de Camagüey, con arquitectura colonial y modernas instalaciones.",
        "categoria": "hotel"
      },
      {
        "id": 50,
        "nombre": "Hotel Campana",
        "lat": 21.197348,
        "lng": -76.600114,
        "descripcion": "Hotel en Puerto Padre, Las Tunas, con vista al malecón y ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 51,
        "nombre": "Hotel Canasy",
        "lat": 21.67337,
        "lng": -77.680728,
        "descripcion": "Hotel en Sierra de Cubitas, Camagüey, rodeado de naturaleza y cuevas.",
        "categoria": "hotel"
      },
      {
        "id": 52,
        "nombre": "Hotel Caonaba",
        "lat": 21.536034,
        "lng": -77.266521,
        "descripcion": "Hotel en Nuevitas, Camagüey, con instalaciones turísticas y cercano a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 53,
        "nombre": "Hotel Caracol",
        "lat": 21.567529,
        "lng": -77.045888,
        "descripcion": "Hotel en Nuevitas, con acceso a la playa Santa Lucía y servicios de entretenimiento.",
        "categoria": "hotel"
      },
      {
        "id": 54,
        "nombre": "Hotel Caribeño",
        "lat": 20.298621,
        "lng": -76.244154,
        "descripcion": "Hotel en Contramaestre, Santiago de Cuba, con ambiente caribeño y servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 55,
        "nombre": "Hotel Caridad",
        "lat": 22.715237,
        "lng": -80.952839,
        "descripcion": "Hotel en Colón, Matanzas, con habitaciones sencillas y atención familiar.",
        "categoria": "hotel"
      },
      {
        "id": 56,
        "nombre": "Hotel Casa Granda",
        "lat": 20.020711,
        "lng": -75.829287,
        "descripcion": "Hotel histórico en Santiago de Cuba, frente al Parque Céspedes, con vistas a la ciudad.",
        "categoria": "hotel"
      },
      {
        "id": 57,
        "nombre": "Hotel Club Amigo Carisol",
        "lat": 19.888567,
        "lng": -75.477514,
        "descripcion": "Hotel de playa en Santiago de Cuba, con club de playa y actividades recreativas.",
        "categoria": "hotel"
      },
      {
        "id": 58,
        "nombre": "Hotel Club Bucanero",
        "lat": 19.940724,
        "lng": -75.692835,
        "descripcion": "Hotel en la costa de Santiago de Cuba, con acceso a playas vírgenes y excursiones.",
        "categoria": "hotel"
      },
      {
        "id": 59,
        "nombre": "Hotel Club Santa Lucía",
        "lat": 21.558231,
        "lng": -77.042772,
        "descripcion": "Hotel en la playa Santa Lucía, con piscinas y áreas de esparcimiento.",
        "categoria": "hotel"
      },
      {
        "id": 60,
        "nombre": "Hotel Club Santa Lucía",
        "lat": 21.560642,
        "lng": -77.044084,
        "descripcion": "Hotel todo incluido en Santa Lucía, con acceso directo a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 61,
        "nombre": "Hotel Colón",
        "lat": 21.386773,
        "lng": -77.916678,
        "descripcion": "Hotel en Camagüey, con estilo colonial y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 62,
        "nombre": "Hotel Colonial",
        "lat": 20.298193,
        "lng": -76.245889,
        "descripcion": "Hotel en Contramaestre, con arquitectura colonial y ambiente acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 63,
        "nombre": "Hotel Costa Morena",
        "lat": 19.886483,
        "lng": -75.523175,
        "descripcion": "Hotel en Santiago de Cuba, con vistas al mar Caribe y piscina.",
        "categoria": "hotel"
      },
      {
        "id": 64,
        "nombre": "Hotel Costasur, Trinidad",
        "lat": 21.743015,
        "lng": -80.02008,
        "descripcion": "Hotel en la costa sur de Trinidad, con playa y acceso al centro histórico.",
        "categoria": "hotel"
      },
      {
        "id": 65,
        "nombre": "Hotel Cuatro Vientos",
        "lat": 21.56281,
        "lng": -77.044049,
        "descripcion": "Hotel en Nuevitas, con amplias habitaciones y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 66,
        "nombre": "Hotel Cuba",
        "lat": 20.188112,
        "lng": -75.843304,
        "descripcion": "Hotel en San Luis, Santiago de Cuba, con servicios básicos y ambiente sencillo.",
        "categoria": "hotel"
      },
      {
        "id": 67,
        "nombre": "Hotel Cuba Nueva",
        "lat": 22.376022,
        "lng": -80.14864,
        "descripcion": "Hotel en Ranchuelo, Villa Clara, con instalaciones renovadas y áreas verdes.",
        "categoria": "hotel"
      },
      {
        "id": 68,
        "nombre": "Hotel de Tránsito",
        "lat": 21.933601,
        "lng": -79.445881,
        "descripcion": "Hotel en Sancti Spíritus, ideal para escalas, con habitaciones confortables.",
        "categoria": "hotel"
      },
      {
        "id": 69,
        "nombre": "Hotel de Tránsito",
        "lat": 22.412966,
        "lng": -79.950248,
        "descripcion": "Hotel en Santa Clara, céntrico, para estancias cortas y conexiones.",
        "categoria": "hotel"
      },
      {
        "id": 70,
        "nombre": "Hotel Deportivo",
        "lat": 20.033967,
        "lng": -75.810084,
        "descripcion": "Hotel en Santiago de Cuba con instalaciones deportivas y alojamiento para atletas.",
        "categoria": "hotel"
      },
      {
        "id": 71,
        "nombre": "Hotel Deportivo",
        "lat": 21.954191,
        "lng": -79.445556,
        "descripcion": "Hotel en Sancti Spíritus con canchas deportivas y áreas de entrenamiento.",
        "categoria": "hotel"
      },
      {
        "id": 72,
        "nombre": "Hotel Dominica",
        "lat": 23.0404,
        "lng": -81.201982,
        "descripcion": "Hotel en Cárdenas, Matanzas, con ambiente familiar y cercano al centro.",
        "categoria": "hotel"
      },
      {
        "id": 73,
        "nombre": "Hotel Elguea",
        "lat": 23.041448,
        "lng": -80.617342,
        "descripcion": "Hotel en Corralillo, Villa Clara, con servicios básicos y acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 74,
        "nombre": "Hotel Escuela Formatur",
        "lat": 21.551594,
        "lng": -77.038364,
        "descripcion": "Hotel escuela en Nuevitas, donde los estudiantes de turismo realizan prácticas.",
        "categoria": "hotel"
      },
      {
        "id": 75,
        "nombre": "Hotel Florida",
        "lat": 21.530763,
        "lng": -78.234059,
        "descripcion": "Hotel en Florida, Camagüey, con habitaciones cómodas y servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 76,
        "nombre": "Hotel Gallito",
        "lat": 21.851059,
        "lng": -78.116779,
        "descripcion": "Hotel en Esmeralda, Camagüey, con ambiente rural y tranquilo.",
        "categoria": "hotel"
      },
      {
        "id": 77,
        "nombre": "Hotel Gran Hotel",
        "lat": 21.381491,
        "lng": -77.917456,
        "descripcion": "Hotel emblemático en Camagüey, con arquitectura neoclásica y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 78,
        "nombre": "Hotel Guacanayabo",
        "lat": 20.336143,
        "lng": -77.13489,
        "descripcion": "Hotel en Manzanillo, con vista al golfo de Guacanayabo y amplias áreas verdes.",
        "categoria": "hotel"
      },
      {
        "id": 79,
        "nombre": "Hotel Guáimaro",
        "lat": 21.052739,
        "lng": -77.336885,
        "descripcion": "Hotel en Guáimaro, Camagüey, con historia y tradición, cercano a lugares de interés.",
        "categoria": "hotel"
      },
      {
        "id": 80,
        "nombre": "Hotel Guama",
        "lat": 21.608546,
        "lng": -78.323426,
        "descripcion": "Hotel en Carlos Manuel de Céspedes, Camagüey, rodeado de naturaleza.",
        "categoria": "hotel"
      },
      {
        "id": 81,
        "nombre": "Hotel Guiña",
        "lat": 22.046191,
        "lng": -79.864026,
        "descripcion": "Hotel en Manicaragua, Villa Clara, con ambiente serrano y vistas a las montañas.",
        "categoria": "hotel"
      },
      {
        "id": 82,
        "nombre": "Hotel Hanabanilla",
        "lat": 22.088788,
        "lng": -80.070869,
        "descripcion": "Hotel junto al embalse Hanabanilla, con paisajes de montaña y actividades acuáticas.",
        "categoria": "hotel"
      },
      {
        "id": 83,
        "nombre": "Hotel Horizontes Los Cáreyes",
        "lat": 22.401595,
        "lng": -80.000615,
        "descripcion": "Hotel en Santa Clara con amplios jardines y áreas recreativas.",
        "categoria": "hotel"
      },
      {
        "id": 84,
        "nombre": "Hotel Isla de Cuba",
        "lat": 21.383871,
        "lng": -77.917541,
        "descripcion": "Hotel en Camagüey, con servicios modernos y fácil acceso al centro histórico.",
        "categoria": "hotel"
      },
      {
        "id": 85,
        "nombre": "Hotel Islazul La Gran Piedra",
        "lat": 20.01068,
        "lng": -75.632108,
        "descripcion": "Hotel en la Sierra Maestra, cerca de la Gran Piedra, ideal para senderismo.",
        "categoria": "hotel"
      },
      {
        "id": 86,
        "nombre": "Hotel Islazul Las Américas",
        "lat": 20.02574,
        "lng": -75.808992,
        "descripcion": "Hotel en Santiago de Cuba, con amplias instalaciones y piscina.",
        "categoria": "hotel"
      },
      {
        "id": 87,
        "nombre": "Hotel Islazul San Juan",
        "lat": 20.021258,
        "lng": -75.799656,
        "descripcion": "Hotel en Santiago de Cuba, con vista a la bahía y servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 88,
        "nombre": "Hotel La Asunción 173",
        "lat": 20.173919,
        "lng": -74.233549,
        "descripcion": "Hotel en Maisí, Guantánamo, con vistas al mar y ambiente tranquilo.",
        "categoria": "hotel"
      },
      {
        "id": 89,
        "nombre": "Hotel La Ronda, Trinidad",
        "lat": 21.800783,
        "lng": -79.984863,
        "descripcion": "Hotel en el centro histórico de Trinidad, con arquitectura colonial.",
        "categoria": "hotel"
      },
      {
        "id": 90,
        "nombre": "Hotel Las Américas",
        "lat": 21.386122,
        "lng": -77.915617,
        "descripcion": "Hotel en Camagüey, con amplias áreas comunes y servicios turísticos.",
        "categoria": "hotel"
      },
      {
        "id": 91,
        "nombre": "Hotel Las Cuevas, Trinidad",
        "lat": 21.80588,
        "lng": -79.976799,
        "descripcion": "Hotel construido en cuevas naturales, con ambiente único y vistas a la ciudad.",
        "categoria": "hotel"
      },
      {
        "id": 92,
        "nombre": "Hotel Los Andes",
        "lat": 22.516755,
        "lng": -79.703087,
        "descripcion": "Hotel en Camajuaní, con arquitectura moderna y amplias habitaciones.",
        "categoria": "hotel"
      },
      {
        "id": 93,
        "nombre": "Hotel Los Cocos",
        "lat": 20.175602,
        "lng": -75.059569,
        "descripcion": "Hotel en Manuel Tames, Guantánamo, rodeado de cocoteros y áreas verdes.",
        "categoria": "hotel"
      },
      {
        "id": 94,
        "nombre": "Hotel Los Pinos",
        "lat": 20.369059,
        "lng": -75.908771,
        "descripcion": "Hotel en Mella, Santiago de Cuba, con ambiente de pinos y tranquilidad.",
        "categoria": "hotel"
      },
      {
        "id": 95,
        "nombre": "Hotel Louvre",
        "lat": 23.046108,
        "lng": -81.578495,
        "descripcion": "Hotel en Matanzas, con estilo clásico y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 96,
        "nombre": "Hotel Manzanillo",
        "lat": 20.309193,
        "lng": -77.160726,
        "descripcion": "Hotel en Manzanillo, Granma, con vista al malecón y ambiente marítimo.",
        "categoria": "hotel"
      },
      {
        "id": 97,
        "nombre": "Hotel Martí",
        "lat": 20.143144,
        "lng": -75.203498,
        "descripcion": "Hotel en Guantánamo, céntrico y con servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 98,
        "nombre": "Hotel Mayanabo",
        "lat": 21.570254,
        "lng": -77.04907,
        "descripcion": "Hotel en Nuevitas, con servicios turísticos y cercano a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 99,
        "nombre": "Hotel Mayanabo",
        "lat": 21.573469,
        "lng": -77.050564,
        "descripcion": "Hotel en Nuevitas, con piscina y áreas recreativas, todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 100,
        "nombre": "Hotel Meliá Santiago de Cuba",
        "lat": 20.026472,
        "lng": -75.810516,
        "descripcion": "Hotel de lujo en Santiago de Cuba, con vistas a la bahía y servicios exclusivos.",
        "categoria": "hotel"
      },
      {
        "id": 101,
        "nombre": "Hotel Minas",
        "lat": 21.486222,
        "lng": -77.607488,
        "descripcion": "Hotel en Minas, Camagüey, con ambiente tranquilo y sencillo.",
        "categoria": "hotel"
      },
      {
        "id": 102,
        "nombre": "Hotel Modelo",
        "lat": 22.405116,
        "lng": -79.963147,
        "descripcion": "Hotel en Santa Clara, céntrico y funcional, ideal para estancias cortas.",
        "categoria": "hotel"
      },
      {
        "id": 103,
        "nombre": "Hotel Niquero",
        "lat": 20.048405,
        "lng": -77.583845,
        "descripcion": "Hotel en Niquero, Granma, con acceso a la playa y servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 104,
        "nombre": "Hotel Oasis",
        "lat": 21.840572,
        "lng": -78.736098,
        "descripcion": "Hotel en Ciego de Ávila, con áreas verdes y piscina.",
        "categoria": "hotel"
      },
      {
        "id": 105,
        "nombre": "Hotel Pico Cristal",
        "lat": 20.413227,
        "lng": -75.533824,
        "descripcion": "Hotel en la montaña de Segundo Frente, con vistas al pico Cristal y senderismo.",
        "categoria": "hotel"
      },
      {
        "id": 106,
        "nombre": "Hotel Playa Ginaguayabo",
        "lat": 22.553149,
        "lng": -79.529945,
        "descripcion": "Hotel frente al mar en Caibarién, con playa y servicios de alojamiento.",
        "categoria": "hotel"
      },
      {
        "id": 107,
        "nombre": "Hotel Plaza",
        "lat": 21.388373,
        "lng": -77.915739,
        "descripcion": "Hotel en Camagüey, con arquitectura colonial y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 108,
        "nombre": "Hotel Plaza",
        "lat": 20.346692,
        "lng": -74.499995,
        "descripcion": "Hotel en Baracoa, frente al parque central, con estilo colonial.",
        "categoria": "hotel"
      },
      {
        "id": 109,
        "nombre": "Hotel Plaza, Sancti Spíritus",
        "lat": 21.92707,
        "lng": -79.442952,
        "descripcion": "Hotel en el centro histórico de Sancti Spíritus, con vista a la plaza mayor.",
        "categoria": "hotel"
      },
      {
        "id": 110,
        "nombre": "Hotel Puerto Príncipe",
        "lat": 21.390649,
        "lng": -77.916861,
        "descripcion": "Hotel en Camagüey, con estilo colonial y piscina en el patio interior.",
        "categoria": "hotel"
      },
      {
        "id": 111,
        "nombre": "Hotel Rancho Club",
        "lat": 20.047729,
        "lng": -75.815345,
        "descripcion": "Hotel en Santiago de Cuba, con club campestre y áreas de esparcimiento.",
        "categoria": "hotel"
      },
      {
        "id": 112,
        "nombre": "Hotel Río Piedra",
        "lat": 21.2268,
        "lng": -77.515406,
        "descripcion": "Hotel en Sibanicú, Camagüey, junto al río, con ambiente natural.",
        "categoria": "hotel"
      },
      {
        "id": 113,
        "nombre": "Hotel Royalton",
        "lat": 20.373121,
        "lng": -76.650309,
        "descripcion": "Hotel en Bayamo, con arquitectura colonial y servicios modernos.",
        "categoria": "hotel"
      },
      {
        "id": 114,
        "nombre": "Hotel Sagua",
        "lat": 22.804854,
        "lng": -80.071971,
        "descripcion": "Hotel en Sagua La Grande, Villa Clara, céntrico y acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 115,
        "nombre": "Hotel Santiago Habana",
        "lat": 22.716365,
        "lng": -80.90707,
        "descripcion": "Hotel en Colón, Matanzas, con servicios básicos y ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 116,
        "nombre": "Hotel Serv Union Niquel Esuni",
        "lat": 20.023094,
        "lng": -75.835196,
        "descripcion": "Hotel en Santiago de Cuba, para trabajadores de la industria niquelífera.",
        "categoria": "hotel"
      },
      {
        "id": 117,
        "nombre": "Hotel Sierra Maestra",
        "lat": 20.360103,
        "lng": -76.633554,
        "descripcion": "Hotel en Bayamo, con vista a la Sierra Maestra y excursiones a la montaña.",
        "categoria": "hotel"
      },
      {
        "id": 118,
        "nombre": "Hotel Sierra Mar-Los Galones",
        "lat": 19.968367,
        "lng": -76.319828,
        "descripcion": "Hotel en Guamá, Santiago de Cuba, junto al mar, con playa y montaña.",
        "categoria": "hotel"
      },
      {
        "id": 119,
        "nombre": "Hotel Sol Palmeras Cubanacán",
        "lat": 23.176139,
        "lng": -81.201573,
        "descripcion": "Hotel en Varadero con todo incluido, piscinas y acceso directo a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 120,
        "nombre": "Hotel Tuxpan Varadero Cubanacán",
        "lat": 23.165993,
        "lng": -81.226265,
        "descripcion": "Hotel en Varadero, con playa de arena fina y servicios de calidad.",
        "categoria": "hotel"
      },
      {
        "id": 121,
        "nombre": "Hotel Versalles",
        "lat": 19.995093,
        "lng": -75.835665,
        "descripcion": "Hotel en Santiago de Cuba, con estilo clásico y ambiente acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 122,
        "nombre": "Hotel Villazul",
        "lat": 21.201514,
        "lng": -76.600999,
        "descripcion": "Hotel en Puerto Padre, Las Tunas, con vista al malecón y ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 123,
        "nombre": "Hotel Yara",
        "lat": 22.787055,
        "lng": -80.252632,
        "descripcion": "Hotel en Quemado de Güines, Villa Clara, céntrico y funcional.",
        "categoria": "hotel"
      },
      {
        "id": 124,
        "nombre": "Hotel Zaza, Sancti Spíritus",
        "lat": 21.888278,
        "lng": -79.383383,
        "descripcion": "Hotel junto al embalse Zaza, con actividades acuáticas y paisajes naturales.",
        "categoria": "hotel"
      },
      {
        "id": 125,
        "nombre": "Hotel Horizontes Capri",
        "lat": 23.14176,
        "lng": -82.382678,
        "descripcion": "Hotel en La Habana, con arquitectura moderna y vistas a la ciudad.",
        "categoria": "hotel"
      },
      {
        "id": 126,
        "nombre": "Hotel Horizontes Colina",
        "lat": 23.137448,
        "lng": -82.381816,
        "descripcion": "Hotel en La Habana, ubicado en una colina con vistas al Vedado.",
        "categoria": "hotel"
      },
      {
        "id": 127,
        "nombre": "Hotel Horizontes Deauville",
        "lat": 23.142097,
        "lng": -82.361989,
        "descripcion": "Hotel en La Habana, con estilo europeo y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 128,
        "nombre": "Hotel Horizontes Lido-Caribbean",
        "lat": 23.140777,
        "lng": -82.360053,
        "descripcion": "Hotel en La Habana, con ambiente caribeño y servicios turísticos.",
        "categoria": "hotel"
      },
      {
        "id": 129,
        "nombre": "Hotel Horizontes St. John's",
        "lat": 23.140023,
        "lng": -82.380552,
        "descripcion": "Hotel en La Habana, con estilo inglés y cómodas habitaciones.",
        "categoria": "hotel"
      },
      {
        "id": 130,
        "nombre": "Hotel Horizontes Vedado",
        "lat": 23.139908,
        "lng": -82.380027,
        "descripcion": "Hotel en el Vedado, La Habana, con amplias áreas comunes.",
        "categoria": "hotel"
      },
      {
        "id": 131,
        "nombre": "Hotel",
        "lat": 22.449492,
        "lng": -83.664182,
        "descripcion": "Hotel en Pinar del Río, con servicios básicos y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 132,
        "nombre": "Hotel 26 de Julio",
        "lat": 22.201461,
        "lng": -84.083196,
        "descripcion": "Hotel en Guane, Pinar del Río, con ambiente rural y sencillo.",
        "categoria": "hotel"
      },
      {
        "id": 133,
        "nombre": "Hotel Acogedor",
        "lat": 22.276725,
        "lng": -83.764484,
        "descripcion": "Hotel en San Luis, Pinar del Río, acogedor y familiar.",
        "categoria": "hotel"
      },
      {
        "id": 134,
        "nombre": "Hotel Acuario",
        "lat": 23.088021,
        "lng": -82.49189,
        "descripcion": "Hotel en La Habana, con temática marina y cerca del acuario.",
        "categoria": "hotel"
      },
      {
        "id": 135,
        "nombre": "Hotel Acuazul Islazul",
        "lat": 23.136597,
        "lng": -81.281429,
        "descripcion": "Hotel en Varadero, con piscinas y acceso a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 136,
        "nombre": "Hotel Ambos Mundos",
        "lat": 23.138934,
        "lng": -82.350674,
        "descripcion": "Hotel histórico en La Habana Vieja, donde se alojó Hemingway.",
        "categoria": "hotel"
      },
      {
        "id": 137,
        "nombre": "Hotel Arenas Blancas Gran Caribe",
        "lat": 23.15531,
        "lng": -81.245191,
        "descripcion": "Hotel en Varadero, con playa de arena blanca y todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 138,
        "nombre": "Hotel Arenas Doradas Gran Caribe",
        "lat": 23.183022,
        "lng": -81.183417,
        "descripcion": "Hotel en Varadero, con amplias zonas verdes y playa.",
        "categoria": "hotel"
      },
      {
        "id": 139,
        "nombre": "Hotel Armadores de Santander",
        "lat": 23.133974,
        "lng": -82.347726,
        "descripcion": "Hotel en La Habana Vieja, con temática marítima y arquitectura colonial.",
        "categoria": "hotel"
      },
      {
        "id": 140,
        "nombre": "Hotel Barceló Solymar Gran Caribe",
        "lat": 23.156036,
        "lng": -81.243239,
        "descripcion": "Hotel de lujo en Varadero, con todo incluido y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 141,
        "nombre": "Hotel Bella Costa Cubanacán",
        "lat": 23.167802,
        "lng": -81.224022,
        "descripcion": "Hotel en Varadero, con playa y piscinas, ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 142,
        "nombre": "Hotel Bellocaribe",
        "lat": 23.075747,
        "lng": -82.450958,
        "descripcion": "Hotel en La Habana, con ambiente caribeño y piscina.",
        "categoria": "hotel"
      },
      {
        "id": 143,
        "nombre": "Hotel Blau Colonial Cayo Coco",
        "lat": 22.500018,
        "lng": -78.501491,
        "descripcion": "Hotel en Cayo Coco, con estilo colonial y playa de ensueño.",
        "categoria": "hotel"
      },
      {
        "id": 144,
        "nombre": "Hotel Breezes Jibacoa",
        "lat": 23.148563,
        "lng": -81.818439,
        "descripcion": "Hotel en Santa Cruz del Norte, La Habana, con todo incluido y playa.",
        "categoria": "hotel"
      },
      {
        "id": 145,
        "nombre": "Hotel Brisas - Guardalavaca",
        "lat": 21.125988,
        "lng": -75.826818,
        "descripcion": "Hotel en Guardalavaca, Holguín, con playa de arena blanca.",
        "categoria": "hotel"
      },
      {
        "id": 146,
        "nombre": "Hotel Brisas - Guardalavaca",
        "lat": 21.125765,
        "lng": -75.828822,
        "descripcion": "Hotel en Guardalavaca, con vistas al mar y amplios jardines.",
        "categoria": "hotel"
      },
      {
        "id": 147,
        "nombre": "Hotel Brisas del Caribe Cubanacán",
        "lat": 23.183805,
        "lng": -81.185869,
        "descripcion": "Hotel en Varadero, con playa y piscinas, ideal para familias.",
        "categoria": "hotel"
      },
      {
        "id": 148,
        "nombre": "Hotel Bruzòn",
        "lat": 23.127634,
        "lng": -82.382779,
        "descripcion": "Hotel en La Habana, con arquitectura moderna y servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 149,
        "nombre": "Hotel Calabaza",
        "lat": 20.457017,
        "lng": -75.368138,
        "descripcion": "Hotel en Sagua de Tánamo, Holguín, con ambiente rural y tranquilo.",
        "categoria": "hotel"
      },
      {
        "id": 150,
        "nombre": "Hotel Canimao Islazul",
        "lat": 23.032382,
        "lng": -81.496389,
        "descripcion": "Hotel en Matanzas, con vista al río Canímar y áreas verdes.",
        "categoria": "hotel"
      },
      {
        "id": 151,
        "nombre": "Hotel Chateau Miramar",
        "lat": 23.115399,
        "lng": -82.437132,
        "descripcion": "Hotel en La Habana, con estilo francés y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 152,
        "nombre": "Hotel Club Amigo Atlántico - Guardalavaca",
        "lat": 21.124704,
        "lng": -75.832765,
        "descripcion": "Hotel en Guardalavaca, con club de playa y actividades recreativas.",
        "categoria": "hotel"
      },
      {
        "id": 153,
        "nombre": "Hotel Club Amigo Cubanacán",
        "lat": 23.181349,
        "lng": -81.19364,
        "descripcion": "Hotel en Varadero, con club de playa y servicios todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 154,
        "nombre": "Hotel Club Kawama Gran Caribe",
        "lat": 23.134342,
        "lng": -81.289762,
        "descripcion": "Hotel en Varadero, con piscinas y acceso directo a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 155,
        "nombre": "Hotel Club Tropical Cubanacán",
        "lat": 23.140703,
        "lng": -81.277092,
        "descripcion": "Hotel en Varadero, con ambiente tropical y amplias zonas verdes.",
        "categoria": "hotel"
      },
      {
        "id": 156,
        "nombre": "Hotel Colombia",
        "lat": 20.985044,
        "lng": -77.425478,
        "descripcion": "Hotel en Colombia, Las Tunas, con servicios básicos y ambiente sencillo.",
        "categoria": "hotel"
      },
      {
        "id": 157,
        "nombre": "Hotel Colón",
        "lat": 22.193966,
        "lng": -78.911656,
        "descripcion": "Hotel en Chambas, Ciego de Ávila, céntrico y funcional.",
        "categoria": "hotel"
      },
      {
        "id": 158,
        "nombre": "Hotel Comodoro",
        "lat": 23.106649,
        "lng": -82.443828,
        "descripcion": "Hotel en La Habana, con piscina y áreas recreativas.",
        "categoria": "hotel"
      },
      {
        "id": 159,
        "nombre": "Hotel Coralia Cuatro Palmas Gran Caribe",
        "lat": 23.154329,
        "lng": -81.249134,
        "descripcion": "Hotel en Varadero, con todo incluido y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 160,
        "nombre": "Hotel Coralia Playa de Oro Gran Caribe",
        "lat": 23.184894,
        "lng": -81.18129,
        "descripcion": "Hotel en Varadero, con playa de oro y servicios de lujo.",
        "categoria": "hotel"
      },
      {
        "id": 161,
        "nombre": "Hotel Cosivolca",
        "lat": 22.081216,
        "lng": -84.205866,
        "descripcion": "Hotel en Sandino, Pinar del Río, en la costa, con ambiente marino.",
        "categoria": "hotel"
      },
      {
        "id": 162,
        "nombre": "Hotel Deportivo",
        "lat": 22.13002,
        "lng": -80.441155,
        "descripcion": "Hotel en Cienfuegos, con instalaciones deportivas y alojamiento.",
        "categoria": "hotel"
      },
      {
        "id": 163,
        "nombre": "Hotel Dos Mares - Pullman Islazul",
        "lat": 23.151466,
        "lng": -81.255105,
        "descripcion": "Hotel en Varadero, con vista a dos mares y todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 164,
        "nombre": "Hotel El Faro",
        "lat": 21.983045,
        "lng": -84.216939,
        "descripcion": "Hotel en Sandino, con vista al faro y ambiente costero.",
        "categoria": "hotel"
      },
      {
        "id": 165,
        "nombre": "Hotel El Viejo y El Mar",
        "lat": 23.088021,
        "lng": -82.49189,
        "descripcion": "Hotel en La Habana, con temática de viejo marinero y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 166,
        "nombre": "Hotel Faro Luna",
        "lat": 22.037069,
        "lng": -80.426801,
        "descripcion": "Hotel en Cienfuegos, con vista al faro y a la bahía.",
        "categoria": "hotel"
      },
      {
        "id": 167,
        "nombre": "Hotel Ferroviario",
        "lat": 21.388736,
        "lng": -77.917156,
        "descripcion": "Hotel en Camagüey, junto a la estación de trenes, con servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 168,
        "nombre": "Hotel Ferroviario",
        "lat": 22.145657,
        "lng": -80.441607,
        "descripcion": "Hotel en Cienfuegos, junto a la estación ferroviaria, céntrico.",
        "categoria": "hotel"
      },
      {
        "id": 169,
        "nombre": "Hotel Florida",
        "lat": 23.138657,
        "lng": -82.352506,
        "descripcion": "Hotel en La Habana Vieja, con arquitectura colonial y ambiente elegante.",
        "categoria": "hotel"
      },
      {
        "id": 170,
        "nombre": "Hotel Globo",
        "lat": 22.41477,
        "lng": -83.695268,
        "descripcion": "Hotel en Pinar del Río, céntrico y funcional.",
        "categoria": "hotel"
      },
      {
        "id": 171,
        "nombre": "Hotel Gran Vía",
        "lat": 23.168916,
        "lng": -82.147028,
        "descripcion": "Hotel en La Habana del Este, con amplias avenidas y cercano a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 172,
        "nombre": "Hotel Iberoestar Daiquirí",
        "lat": 22.579803,
        "lng": -78.648306,
        "descripcion": "Hotel en Cayo Coco, con todo incluido y playa de arena blanca.",
        "categoria": "hotel"
      },
      {
        "id": 173,
        "nombre": "Hotel Iberoestar Daiquirí",
        "lat": 22.586735,
        "lng": -78.655436,
        "descripcion": "Hotel en Cayo Guillermo, con acceso a la playa y servicios de lujo.",
        "categoria": "hotel"
      },
      {
        "id": 174,
        "nombre": "Hotel Iberostar Barlovento Gran Caribe",
        "lat": 23.135418,
        "lng": -81.283819,
        "descripcion": "Hotel en Varadero, con vistas al mar y todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 175,
        "nombre": "Hotel Iberostar Taínos Gran Caribe",
        "lat": 23.187355,
        "lng": -81.176684,
        "descripcion": "Hotel en Varadero, con temática taína y amplias instalaciones.",
        "categoria": "hotel"
      },
      {
        "id": 176,
        "nombre": "Hotel Iberostar Varadero Cubanacán",
        "lat": 23.196329,
        "lng": -81.160783,
        "descripcion": "Hotel de lujo en Varadero, con todo incluido y playa exclusiva.",
        "categoria": "hotel"
      },
      {
        "id": 177,
        "nombre": "Hotel Internacional Gran Caribe",
        "lat": 23.159203,
        "lng": -81.239046,
        "descripcion": "Hotel internacional en Varadero, con servicios de calidad.",
        "categoria": "hotel"
      },
      {
        "id": 178,
        "nombre": "Hotel Italia",
        "lat": 22.417619,
        "lng": -83.692891,
        "descripcion": "Hotel en Pinar del Río, con estilo italiano y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 179,
        "nombre": "Hotel Jagua",
        "lat": 22.121778,
        "lng": -80.452075,
        "descripcion": "Hotel emblemático en Cienfuegos, con vistas a la bahía y arquitectura moderna.",
        "categoria": "hotel"
      },
      {
        "id": 180,
        "nombre": "Hotel Ledo Islazul",
        "lat": 23.149233,
        "lng": -81.262463,
        "descripcion": "Hotel en Varadero, con ambiente acogedor y cerca de la playa.",
        "categoria": "hotel"
      },
      {
        "id": 181,
        "nombre": "Hotel La Ermita",
        "lat": 22.610694,
        "lng": -83.699496,
        "descripcion": "Hotel en Viñales, con vistas a los mogotes y ambiente campestre.",
        "categoria": "hotel"
      },
      {
        "id": 182,
        "nombre": "Hotel La Mulata",
        "lat": 22.867634,
        "lng": -83.381686,
        "descripcion": "Hotel en La Palma, Pinar del Río, rodeado de montañas y vegetación.",
        "categoria": "hotel"
      },
      {
        "id": 183,
        "nombre": "Hotel La Palma",
        "lat": 22.747506,
        "lng": -83.553082,
        "descripcion": "Hotel en La Palma, con jardines y ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 184,
        "nombre": "Hotel La Rusa",
        "lat": 20.347577,
        "lng": -74.495583,
        "descripcion": "Hotel en Baracoa, con estilo colonial y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 185,
        "nombre": "Hotel La Unión",
        "lat": 22.145263,
        "lng": -80.45151,
        "descripcion": "Hotel en Cienfuegos, céntrico y con historia, cerca del parque Martí.",
        "categoria": "hotel"
      },
      {
        "id": 186,
        "nombre": "Hotel La Villa",
        "lat": 22.503189,
        "lng": -83.516816,
        "descripcion": "Hotel en Consolación del Sur, con ambiente rural y tranquilo.",
        "categoria": "hotel"
      },
      {
        "id": 187,
        "nombre": "Hotel Las Praderas Cubanacán",
        "lat": 23.069243,
        "lng": -82.47891,
        "descripcion": "Hotel en La Habana, con amplias áreas verdes y piscina.",
        "categoria": "hotel"
      },
      {
        "id": 188,
        "nombre": "Hotel Las Yagrumas",
        "lat": 22.917867,
        "lng": -82.500016,
        "descripcion": "Hotel en San Antonio de los Baños, rodeado de yagrumas y jardines.",
        "categoria": "hotel"
      },
      {
        "id": 189,
        "nombre": "Hotel Libertad",
        "lat": 22.647666,
        "lng": -83.37281,
        "descripcion": "Hotel en Los Palacios, Pinar del Río, céntrico y funcional.",
        "categoria": "hotel"
      },
      {
        "id": 190,
        "nombre": "Hotel Liceo",
        "lat": 22.145167,
        "lng": -78.973734,
        "descripcion": "Hotel en Florencia, Ciego de Ávila, con ambiente cultural y sencillo.",
        "categoria": "hotel"
      },
      {
        "id": 191,
        "nombre": "Hotel Lincoln",
        "lat": 23.139104,
        "lng": -82.363874,
        "descripcion": "Hotel en La Habana, con estilo norteamericano y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 192,
        "nombre": "Hotel Los Delfines - Herradura Islazul",
        "lat": 23.147333,
        "lng": -81.265369,
        "descripcion": "Hotel en Varadero, con forma de herradura y acceso a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 193,
        "nombre": "Hotel Los Jazmines",
        "lat": 22.595877,
        "lng": -83.724165,
        "descripcion": "Hotel en Viñales, con vistas a los jazmines y los mogotes.",
        "categoria": "hotel"
      },
      {
        "id": 194,
        "nombre": "Hotel Lugareño",
        "lat": 23.128315,
        "lng": -82.381987,
        "descripcion": "Hotel en La Habana, con ambiente lugareño y acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 195,
        "nombre": "Hotel Mfp",
        "lat": 23.13796,
        "lng": -82.351582,
        "descripcion": "Hotel en La Habana Vieja, con servicios básicos y céntrico.",
        "categoria": "hotel"
      },
      {
        "id": 196,
        "nombre": "Hotel Micons",
        "lat": 21.840765,
        "lng": -78.74988,
        "descripcion": "Hotel en Ciego de Ávila, para trabajadores de la construcción.",
        "categoria": "hotel"
      },
      {
        "id": 197,
        "nombre": "Hotel Mirazul",
        "lat": 23.116157,
        "lng": -82.428151,
        "descripcion": "Hotel en La Habana, con vistas al mar y piscina.",
        "categoria": "hotel"
      },
      {
        "id": 198,
        "nombre": "Hotel Mangos de Roque",
        "lat": 22.291123,
        "lng": -84.282402,
        "descripcion": "Hotel en Mantua, Pinar del Río, rodeado de mangos y naturaleza.",
        "categoria": "hotel"
      },
      {
        "id": 199,
        "nombre": "Hotel Mar del Sur Islazul",
        "lat": 23.143056,
        "lng": -81.269032,
        "descripcion": "Hotel en Varadero, con vista al mar del sur y playa cercana.",
        "categoria": "hotel"
      },
      {
        "id": 200,
        "nombre": "Hotel Marea",
        "lat": 23.169372,
        "lng": -82.135804,
        "descripcion": "Hotel en La Habana del Este, con vista a la marea y playa.",
        "categoria": "hotel"
      },
      {
        "id": 201,
        "nombre": "Hotel Mariposa",
        "lat": 23.034603,
        "lng": -82.474242,
        "descripcion": "Hotel en La Habana, con ambiente de mariposas y jardines.",
        "categoria": "hotel"
      },
      {
        "id": 202,
        "nombre": "Hotel Meliá Cohiba",
        "lat": 23.139449,
        "lng": -82.402073,
        "descripcion": "Hotel de lujo en La Habana, con vistas al malecón y servicios exclusivos.",
        "categoria": "hotel"
      },
      {
        "id": 203,
        "nombre": "Hotel Meliá Habana",
        "lat": 23.104189,
        "lng": -82.446547,
        "descripcion": "Hotel de lujo en La Habana, con vistas al mar y amplias instalaciones.",
        "categoria": "hotel"
      },
      {
        "id": 204,
        "nombre": "Hotel Meliá Cayo Coco",
        "lat": 22.535709,
        "lng": -78.353106,
        "descripcion": "Hotel de lujo en Cayo Coco, con playa de ensueño y todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 205,
        "nombre": "Hotel Meliá Cayo Guillermo",
        "lat": 22.585494,
        "lng": -78.651518,
        "descripcion": "Hotel de lujo en Cayo Guillermo, con playa y servicios de calidad.",
        "categoria": "hotel"
      },
      {
        "id": 206,
        "nombre": "Hotel Meliá Varadero Cubanacán",
        "lat": 23.1755,
        "lng": -81.207139,
        "descripcion": "Hotel de lujo en Varadero, con todo incluido y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 207,
        "nombre": "Hotel Meliá Las Américas Cubanacán",
        "lat": 23.172692,
        "lng": -81.213482,
        "descripcion": "Hotel en Varadero, con vista a las Américas y servicios de excelencia.",
        "categoria": "hotel"
      },
      {
        "id": 208,
        "nombre": "Hotel Micons",
        "lat": 22.417191,
        "lng": -83.689155,
        "descripcion": "Hotel en Pinar del Río, para trabajadores de la construcción.",
        "categoria": "hotel"
      },
      {
        "id": 209,
        "nombre": "Hotel Mirador",
        "lat": 22.646869,
        "lng": -83.371865,
        "descripcion": "Hotel en Los Palacios, con vistas panorámicas a la ciudad.",
        "categoria": "hotel"
      },
      {
        "id": 210,
        "nombre": "Hotel Miraflores",
        "lat": 20.664262,
        "lng": -74.946276,
        "descripcion": "Hotel en Moa, Holguín, con vistas a las flores y ambiente tranquilo.",
        "categoria": "hotel"
      },
      {
        "id": 211,
        "nombre": "Hotel Miramar",
        "lat": 23.166681,
        "lng": -82.139504,
        "descripcion": "Hotel en La Habana del Este, con vista al mar y cercano a la playa.",
        "categoria": "hotel"
      },
      {
        "id": 212,
        "nombre": "Hotel Moka",
        "lat": 22.84277,
        "lng": -82.94518,
        "descripcion": "Hotel en Candelaria, Pinar del Río, con temática de café moka.",
        "categoria": "hotel"
      },
      {
        "id": 213,
        "nombre": "Hotel Morón",
        "lat": 22.095181,
        "lng": -78.628452,
        "descripcion": "Hotel en Morón, Ciego de Ávila, céntrico y funcional.",
        "categoria": "hotel"
      },
      {
        "id": 214,
        "nombre": "Hotel O Farrill",
        "lat": 23.14124,
        "lng": -82.353586,
        "descripcion": "Hotel en La Habana Vieja, con ambiente histórico y acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 215,
        "nombre": "Hotel Oasis",
        "lat": 22.014504,
        "lng": -78.705718,
        "descripcion": "Hotel en Ciro Redondo, Ciego de Ávila, con oasis de paz.",
        "categoria": "hotel"
      },
      {
        "id": 216,
        "nombre": "Hotel Oasis Islazul",
        "lat": 23.130731,
        "lng": -81.318594,
        "descripcion": "Hotel en Varadero, con ambiente oasis y áreas verdes.",
        "categoria": "hotel"
      },
      {
        "id": 217,
        "nombre": "Hotel Ppp",
        "lat": 22.160194,
        "lng": -80.420317,
        "descripcion": "Hotel en Cienfuegos, con servicios básicos y ubicación céntrica.",
        "categoria": "hotel"
      },
      {
        "id": 218,
        "nombre": "Hotel Palma Real Gran Caribe",
        "lat": 23.153322,
        "lng": -81.246457,
        "descripcion": "Hotel en Varadero, rodeado de palmas reales y con playa.",
        "categoria": "hotel"
      },
      {
        "id": 219,
        "nombre": "Hotel Panamérica",
        "lat": 22.278393,
        "lng": -83.836736,
        "descripcion": "Hotel en San Juan y Martínez, con temática americana y sencilla.",
        "categoria": "hotel"
      },
      {
        "id": 220,
        "nombre": "Hotel Parkview",
        "lat": 23.140877,
        "lng": -82.358132,
        "descripcion": "Hotel en La Habana, con vista al parque y ambiente urbano.",
        "categoria": "hotel"
      },
      {
        "id": 221,
        "nombre": "Hotel Parque Central",
        "lat": 23.138046,
        "lng": -82.358964,
        "descripcion": "Hotel de lujo en La Habana Vieja, frente al Parque Central.",
        "categoria": "hotel"
      },
      {
        "id": 222,
        "nombre": "Hotel Pasacaballos",
        "lat": 22.062401,
        "lng": -80.458987,
        "descripcion": "Hotel en Cienfuegos, con ambiente de caballos y naturaleza.",
        "categoria": "hotel"
      },
      {
        "id": 223,
        "nombre": "Hotel Perla del Sur",
        "lat": 22.147861,
        "lng": -80.447682,
        "descripcion": "Hotel en Cienfuegos, con vista al sur y ambiente marítimo.",
        "categoria": "hotel"
      },
      {
        "id": 224,
        "nombre": "Hotel Pernik",
        "lat": 20.888967,
        "lng": -76.240476,
        "descripcion": "Hotel en Holguín, con arquitectura moderna y servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 225,
        "nombre": "Hotel Pinar del Río",
        "lat": 22.413279,
        "lng": -83.686263,
        "descripcion": "Hotel en Pinar del Río, céntrico y funcional.",
        "categoria": "hotel"
      },
      {
        "id": 226,
        "nombre": "Hotel Playa Caleta Gran Caribe",
        "lat": 23.131079,
        "lng": -81.306587,
        "descripcion": "Hotel en Varadero, con playa caleta y ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 227,
        "nombre": "Hotel Portales de Paseo",
        "lat": 23.132369,
        "lng": -82.396227,
        "descripcion": "Hotel en La Habana, con portales y paseo cercano.",
        "categoria": "hotel"
      },
      {
        "id": 228,
        "nombre": "Hotel Punta la Cueva",
        "lat": 22.114556,
        "lng": -80.433283,
        "descripcion": "Hotel en Cienfuegos, en punta de la cueva, con vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 229,
        "nombre": "Hotel Puntarena Gran Caribe",
        "lat": 23.131063,
        "lng": -81.309818,
        "descripcion": "Hotel en Varadero, con punta de arena y playa extensa.",
        "categoria": "hotel"
      },
      {
        "id": 230,
        "nombre": "Hotel Rancho Luna",
        "lat": 22.03499,
        "lng": -80.413935,
        "descripcion": "Hotel en Cienfuegos, con ambiente de rancho y luna, cerca de la playa.",
        "categoria": "hotel"
      },
      {
        "id": 231,
        "nombre": "Hotel Rancho San Vicente",
        "lat": 22.673289,
        "lng": -83.706698,
        "descripcion": "Hotel en Viñales, con aguas termales y paisajes de montaña.",
        "categoria": "hotel"
      },
      {
        "id": 232,
        "nombre": "Hotel Raquel",
        "lat": 23.136719,
        "lng": -82.350945,
        "descripcion": "Hotel en La Habana Vieja, con estilo art decó y ambiente elegante.",
        "categoria": "hotel"
      },
      {
        "id": 233,
        "nombre": "Hotel Riú Las Morlas Gran Caribe",
        "lat": 23.159925,
        "lng": -81.238656,
        "descripcion": "Hotel en Varadero, con todo incluido y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 234,
        "nombre": "Hotel Riú Turquesa Gran Caribe",
        "lat": 23.186819,
        "lng": -81.180306,
        "descripcion": "Hotel en Varadero, con piscinas turquesa y playa.",
        "categoria": "hotel"
      },
      {
        "id": 235,
        "nombre": "Hotel San Cristóbal",
        "lat": 22.712271,
        "lng": -83.044579,
        "descripcion": "Hotel en San Cristóbal, Pinar del Río, céntrico y acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 236,
        "nombre": "Hotel Sandals Royal Hicacos Cubanacán",
        "lat": 23.19367,
        "lng": -81.165713,
        "descripcion": "Hotel de lujo en Varadero, con temática real y todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 237,
        "nombre": "Hotel Santa Isabel",
        "lat": 23.139779,
        "lng": -82.348905,
        "descripcion": "Hotel en La Habana Vieja, con vista a la plaza y estilo colonial.",
        "categoria": "hotel"
      },
      {
        "id": 238,
        "nombre": "Hotel Santiago Habana",
        "lat": 21.84456,
        "lng": -78.764255,
        "descripcion": "Hotel en Ciego de Ávila, con ambiente habanero y servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 239,
        "nombre": "Hotel Saratoga",
        "lat": 22.64677,
        "lng": -83.372303,
        "descripcion": "Hotel en Los Palacios, Pinar del Río, con estilo clásico.",
        "categoria": "hotel"
      },
      {
        "id": 240,
        "nombre": "Hotel Sevilla",
        "lat": 21.841374,
        "lng": -78.76119,
        "descripcion": "Hotel en Ciego de Ávila, con estilo sevillano y céntrico.",
        "categoria": "hotel"
      },
      {
        "id": 241,
        "nombre": "Hotel Sol Cayo Coco",
        "lat": 22.535299,
        "lng": -78.355641,
        "descripcion": "Hotel en Cayo Coco, con todo incluido y playa de ensueño.",
        "categoria": "hotel"
      },
      {
        "id": 242,
        "nombre": "Hotel Sol Cayo Guillermo",
        "lat": 22.588908,
        "lng": -78.654009,
        "descripcion": "Hotel en Cayo Guillermo, con playa y servicios de calidad.",
        "categoria": "hotel"
      },
      {
        "id": 243,
        "nombre": "Hotel Sunbeach Gran Caribe",
        "lat": 23.137783,
        "lng": -81.279547,
        "descripcion": "Hotel en Varadero, con playa soleada y ambiente familiar.",
        "categoria": "hotel"
      },
      {
        "id": 244,
        "nombre": "Hotel Tejadillo",
        "lat": 23.141155,
        "lng": -82.352843,
        "descripcion": "Hotel en La Habana Vieja, con tejadillo colonial y ambiente acogedor.",
        "categoria": "hotel"
      },
      {
        "id": 245,
        "nombre": "Hotel Telégrafo",
        "lat": 23.137459,
        "lng": -82.359681,
        "descripcion": "Hotel en La Habana Vieja, con historia telegráfica y estilo colonial.",
        "categoria": "hotel"
      },
      {
        "id": 246,
        "nombre": "Hotel Victoria",
        "lat": 20.583476,
        "lng": -75.239583,
        "descripcion": "Hotel en Sagua de Tánamo, Holguín, con estilo victoriano.",
        "categoria": "hotel"
      },
      {
        "id": 247,
        "nombre": "Hotel Villa Clara",
        "lat": 23.129885,
        "lng": -82.355131,
        "descripcion": "Hotel en La Habana, con temática de Villa Clara y ambiente sencillo.",
        "categoria": "hotel"
      },
      {
        "id": 248,
        "nombre": "Hotel Villa Cuba Resort Gran Caribe",
        "lat": 23.159386,
        "lng": -81.237191,
        "descripcion": "Hotel en Varadero, con ambiente de villa y todo incluido.",
        "categoria": "hotel"
      },
      {
        "id": 249,
        "nombre": "Hotel Vueltabajo",
        "lat": 22.415694,
        "lng": -83.698778,
        "descripcion": "Hotel en Pinar del Río, con temática de Vueltabajo y céntrico.",
        "categoria": "hotel"
      },
      {
        "id": 250,
        "nombre": "Hotel Ciego de Ávila",
        "lat": 21.849991,
        "lng": -78.763762,
        "descripcion": "Hotel en Ciego de Ávila, céntrico y funcional.",
        "categoria": "hotel"
      },
      {
        "id": 251,
        "nombre": "Hotel Docente Regis",
        "lat": 23.141099,
        "lng": -82.358288,
        "descripcion": "Hotel docente en La Habana, para prácticas hoteleras.",
        "categoria": "hotel"
      },
      {
        "id": 252,
        "nombre": "Hotel Tryp Cayo Coco",
        "lat": 22.539369,
        "lng": -78.373708,
        "descripcion": "Hotel en Cayo Coco, con todo incluido y playa.",
        "categoria": "hotel"
      },
      {
        "id": 253,
        "nombre": "Hotel Copacabana",
        "lat": 23.11749,
        "lng": -82.434551,
        "descripcion": "Hotel en La Habana, con temática de Copacabana y ambiente playero.",
        "categoria": "hotel"
      },
      {
        "id": 254,
        "nombre": "Hotel Habana Libre",
        "lat": 23.138947,
        "lng": -82.38268,
        "descripcion": "Hotel emblemático en La Habana, con vistas al malecón y arquitectura moderna.",
        "categoria": "hotel"
      },
      {
        "id": 255,
        "nombre": "Hotel Inglaterra",
        "lat": 23.137154,
        "lng": -82.359488,
        "descripcion": "Hotel histórico en La Habana Vieja, con estilo inglés y céntrica ubicación.",
        "categoria": "hotel"
      },
      {
        "id": 256,
        "nombre": "Hotel Nacional",
        "lat": 23.142563,
        "lng": -82.38102,
        "descripcion": "Hotel nacional de Cuba, con historia y vistas al mar.",
        "categoria": "hotel"
      },
      {
        "id": 257,
        "nombre": "Hotel Neptuno Tritón",
        "lat": 23.109945,
        "lng": -82.441852,
        "descripcion": "Hotel en La Habana, con temática de Neptuno y Tritón, cerca del mar.",
        "categoria": "hotel"
      },
      {
        "id": 258,
        "nombre": "Hotel Plaza",
        "lat": 23.138122,
        "lng": -82.358295,
        "descripcion": "Hotel en La Habana Vieja, frente a la plaza, con ambiente colonial.",
        "categoria": "hotel"
      },
      {
        "id": 259,
        "nombre": "Hotel Presidente",
        "lat": 23.14235,
        "lng": -82.394454,
        "descripcion": "Hotel en La Habana, con estilo presidencial y servicios de calidad.",
        "categoria": "hotel"
      },
      {
        "id": 260,
        "nombre": "Hotel Riviera",
        "lat": 23.139827,
        "lng": -82.403539,
        "descripcion": "Hotel en La Habana, con vista a la riviera y ambiente moderno.",
        "categoria": "hotel"
      },
      {
        "id": 261,
        "nombre": "Hotel Sevilla",
        "lat": 23.140034,
        "lng": -82.358203,
        "descripcion": "Hotel en La Habana Vieja, con estilo sevillano y arquitectura colonial.",
        "categoria": "hotel"
      },
      {
        "id": 262,
        "nombre": "Hotel Victoria",
        "lat": 23.141748,
        "lng": -82.384579,
        "descripcion": "Hotel en La Habana, con ambiente victoriano y servicios básicos.",
        "categoria": "hotel"
      },
      {
        "id": 263,
        "nombre": "Hotelera Albergue Estudiantes",
        "lat": 22.061605,
        "lng": -80.471712,
        "descripcion": "Albergue para estudiantes en Cienfuegos, con instalaciones sencillas.",
        "categoria": "hotel"
      },
      {
        "id": 264,
        "nombre": "Hotelito Micons",
        "lat": 23.036556,
        "lng": -81.58304,
        "descripcion": "Pequeño hotel en Matanzas, para trabajadores de la construcción.",
        "categoria": "hotel"
      },
      {
        "id": 265,
        "nombre": "Hotelito Yaguacam",
        "lat": 21.856441,
        "lng": -80.206807,
        "descripcion": "Pequeño hotel en Cumanayagua, Cienfuegos, con ambiente de yaguacán.",
        "categoria": "hotel"
      },
      {
        "id": 266,
        "nombre": "Pto Renta Hotel Ciego",
        "lat": 21.849614,
        "lng": -78.763981,
        "descripcion": "Punto de renta de hotel en Ciego de Ávila.",
        "categoria": "hotel"
      },
      {
        "id": 267,
        "nombre": "Punto de Renta Hotel Blau",
        "lat": 22.545479,
        "lng": -78.376228,
        "descripcion": "Punto de renta del hotel Blau en Cayo Coco.",
        "categoria": "hotel"
      },
      {
        "id": 268,
        "nombre": "Punto de Renta Hotel Ciego de Ávila",
        "lat": 21.834224,
        "lng": -78.766721,
        "descripcion": "Punto de renta de hotel en Ciego de Ávila.",
        "categoria": "hotel"
      },
      {
        "id": 269,
        "nombre": "Punto de Renta Hotel Daiquirí",
        "lat": 22.579803,
        "lng": -78.648306,
        "descripcion": "Punto de renta del hotel Daiquirí en Cayo Coco.",
        "categoria": "hotel"
      },
      {
        "id": 270,
        "nombre": "Punto de Renta Hotel Meliá Cayo Coco",
        "lat": 22.535709,
        "lng": -78.353106,
        "descripcion": "Punto de renta del hotel Meliá en Cayo Coco.",
        "categoria": "hotel"
      },
      {
        "id": 271,
        "nombre": "Punto de Renta Hotel Meliá Guillermo",
        "lat": 22.585494,
        "lng": -78.651518,
        "descripcion": "Punto de renta del hotel Meliá en Cayo Guillermo.",
        "categoria": "hotel"
      },
      {
        "id": 272,
        "nombre": "Punto de Renta Hotel Morón",
        "lat": 22.095453,
        "lng": -78.628476,
        "descripcion": "Punto de renta del hotel Morón.",
        "categoria": "hotel"
      },
      {
        "id": 273,
        "nombre": "Punto de Renta Hotel Senador",
        "lat": 22.536796,
        "lng": -78.364363,
        "descripcion": "Punto de renta del hotel Senador en Cayo Coco.",
        "categoria": "hotel"
      },
      {
        "id": 274,
        "nombre": "Punto de Renta Hotel Sevilla",
        "lat": 21.841285,
        "lng": -78.761288,
        "descripcion": "Punto de renta del hotel Sevilla en Ciego de Ávila.",
        "categoria": "hotel"
      },
      {
        "id": 275,
        "nombre": "Punto de Renta Hotel Sevilla",
        "lat": 22.211854,
        "lng": -78.757994,
        "descripcion": "Punto de renta del hotel Sevilla en Ciego de Ávila.",
        "categoria": "hotel"
      },
      {
        "id": 276,
        "nombre": "Punto de Renta Hotel Sol Guillermo",
        "lat": 22.588907,
        "lng": -78.653911,
        "descripcion": "Punto de renta del hotel Sol en Cayo Guillermo.",
        "categoria": "hotel"
      },
      {
        "id": 277,
        "nombre": "Punto de Renta Hotel Sol Cayo Coco",
        "lat": 22.535307,
        "lng": -78.356127,
        "descripcion": "Punto de renta del hotel Sol en Cayo Coco.",
        "categoria": "hotel"
      },
      {
        "id": 278,
        "nombre": "Spa Club Comodoro (Hotel Comodoro)",
        "lat": 23.107486,
        "lng": -82.444084,
        "descripcion": "Spa del hotel Comodoro en La Habana, con servicios de bienestar.",
        "categoria": "hotel"
      },
      {
        "id": 279,
        "nombre": "Sucursal 5191 Hotel Ancón",
        "lat": 21.734399,
        "lng": -79.999454,
        "descripcion": "Sucursal del hotel Ancón en Trinidad.",
        "categoria": "hotel"
      },
      {
        "id": 280,
        "nombre": "Telecorreo Hotel Las Américas",
        "lat": 20.02583,
        "lng": -75.808991,
        "descripcion": "Telecorreo del hotel Las Américas en Santiago de Cuba.",
        "categoria": "hotel"
      },
      {
        "id": 281,
        "nombre": "Tele Correo Internacional Hotel",
        "lat": 22.0957,
        "lng": -78.628084,
        "descripcion": "Telecorreo internacional del hotel en Morón.",
        "categoria": "hotel"
      },
      {
        "id": 282,
        "nombre": "Unidad Hotel Internacionalis",
        "lat": 23.089487,
        "lng": -82.463278,
        "descripcion": "Unidad hotelera internacional en La Habana.",
        "categoria": "hotel"
      },
      {
        "id": 283,
        "nombre": "Unidad Hotel Sevilla",
        "lat": 20.844264,
        "lng": -77.575821,
        "descripcion": "Unidad hotelera Sevilla en Amancio, Las Tunas.",
        "categoria": "hotel"
      },
      {
        "id": 284,
        "nombre": "Cadeca Aeropuerto",
        "lat": 23.039146,
        "lng": -81.43641,
        "descripcion": "Casa de cambio en el aeropuerto de Varadero, para transacciones monetarias.",
        "categoria": "casa de cambio"
      },
      {
        "id": 285,
        "nombre": "Cadeca Cárdenas",
        "lat": 23.038925,
        "lng": -81.204887,
        "descripcion": "Casa de cambio en Cárdenas, Matanzas, con servicios de cambio de divisas.",
        "categoria": "casa de cambio"
      },
      {
        "id": 286,
        "nombre": "Cadeca Casa Matríz",
        "lat": 23.111103,
        "lng": -82.400291,
        "descripcion": "Casa matriz de CADECA en La Habana, central de cambio de moneda.",
        "categoria": "casa de cambio"
      },
      {
        "id": 287,
        "nombre": "Cadeca Colón",
        "lat": 22.715425,
        "lng": -80.906662,
        "descripcion": "Casa de cambio en Colón, Matanzas, para turistas y residentes.",
        "categoria": "casa de cambio"
      },
      {
        "id": 288,
        "nombre": "Cadeca Jagüey Grande",
        "lat": 22.527904,
        "lng": -81.130056,
        "descripcion": "Casa de cambio en Jagüey Grande, Matanzas, con servicios de cambio.",
        "categoria": "casa de cambio"
      },
      {
        "id": 289,
        "nombre": "Cadeca Martí",
        "lat": 22.944982,
        "lng": -80.916735,
        "descripcion": "Casa de cambio en Martí, Matanzas, para transacciones locales.",
        "categoria": "casa de cambio"
      },
      {
        "id": 290,
        "nombre": "Cadeca Segundo Frente",
        "lat": 20.413622,
        "lng": -75.533428,
        "descripcion": "Casa de cambio en Segundo Frente, Santiago de Cuba, en la montaña.",
        "categoria": "casa de cambio"
      },
      {
        "id": 291,
        "nombre": "Cadeca Santa Marta",
        "lat": 23.122792,
        "lng": -81.290705,
        "descripcion": "Casa de cambio en Santa Marta, Varadero, cerca de la playa.",
        "categoria": "casa de cambio"
      },
      {
        "id": 292,
        "nombre": "Cadeca Varadero",
        "lat": 23.14831,
        "lng": -81.26376,
        "descripcion": "Casa de cambio en Varadero, con servicios de cambio de divisas.",
        "categoria": "casa de cambio"
      },
      {
        "id": 293,
        "nombre": "Casa de Cambio Cadeca",
        "lat": 21.841099,
        "lng": -78.760904,
        "descripcion": "Casa de cambio en Ciego de Ávila, para turistas y locales.",
        "categoria": "casa de cambio"
      },
      {
        "id": 294,
        "nombre": "Cadeca Artemisa",
        "lat": 22.812915,
        "lng": -82.763765,
        "descripcion": "Casa de cambio en Artemisa, con servicios de cambio de moneda.",
        "categoria": "casa de cambio"
      },
      {
        "id": 295,
        "nombre": "Cadeca Batabanó",
        "lat": 22.684304,
        "lng": -82.290643,
        "descripcion": "Casa de cambio en Batabanó, La Habana, cerca del puerto.",
        "categoria": "casa de cambio"
      },
      {
        "id": 296,
        "nombre": "Cadeca Güines",
        "lat": 22.836787,
        "lng": -82.029906,
        "descripcion": "Casa de cambio en Güines, La Habana, para transacciones locales.",
        "categoria": "casa de cambio"
      },
      {
        "id": 297,
        "nombre": "Cadeca Güira de Melena",
        "lat": 22.794956,
        "lng": -82.507569,
        "descripcion": "Casa de cambio en Güira de Melena, La Habana.",
        "categoria": "casa de cambio"
      },
      {
        "id": 298,
        "nombre": "Cadeca Melena del Sur",
        "lat": 22.786328,
        "lng": -82.150172,
        "descripcion": "Casa de cambio en Melena del Sur, La Habana.",
        "categoria": "casa de cambio"
      },
      {
        "id": 299,
        "nombre": "Cadeca San Antonio",
        "lat": 22.888296,
        "lng": -82.504396,
        "descripcion": "Casa de cambio en San Antonio de los Baños, La Habana.",
        "categoria": "casa de cambio"
      },
      {
        "id": 300,
        "nombre": "Cadeca San José",
        "lat": 22.960795,
        "lng": -82.15161,
        "descripcion": "Casa de cambio en San José de las Lajas, La Habana.",
        "categoria": "casa de cambio"
      },
      {
        "id": 301,
        "nombre": "Cadeca Santa Cruz",
        "lat": 23.152555,
        "lng": -81.923119,
        "descripcion": "Casa de cambio en Santa Cruz del Norte, La Habana.",
        "categoria": "casa de cambio"
      },
      {
        "id": 302,
        "nombre": "Gerencia Cadeca",
        "lat": 21.84194,
        "lng": -78.762981,
        "descripcion": "Gerencia de CADECA en Ciego de Ávila, administración de cambio.",
        "categoria": "casa de cambio"
      },
      {
        "id": 303,
        "nombre": "Gerencia Cadeca Sancti Spíritus",
        "lat": 21.926163,
        "lng": -79.442575,
        "descripcion": "Gerencia de CADECA en Sancti Spíritus.",
        "categoria": "casa de cambio"
      },
      {
        "id": 304,
        "nombre": "Gerencia Provincial Cadeca Matanzas",
        "lat": 23.045394,
        "lng": -81.575955,
        "descripcion": "Gerencia provincial de CADECA en Matanzas.",
        "categoria": "casa de cambio"
      },
      {
        "id": 305,
        "nombre": "Gerencia Territorial Cadeca",
        "lat": 21.377746,
        "lng": -77.918122,
        "descripcion": "Gerencia territorial de CADECA en Camagüey.",
        "categoria": "casa de cambio"
      },
      {
        "id": 306,
        "nombre": "Gerencia Cadeca S. A.",
        "lat": 22.416328,
        "lng": -83.695266,
        "descripcion": "Gerencia de CADECA en Pinar del Río.",
        "categoria": "casa de cambio"
      },
      {
        "id": 307,
        "nombre": "Sucursal Cadeca, S. A.",
        "lat": 20.02114,
        "lng": -75.825366,
        "descripcion": "Sucursal de CADECA en Santiago de Cuba, servicios de cambio.",
        "categoria": "casa de cambio"
      },
      {
        "id": 308,
        "nombre": "Asociación Transporte por Ómnibus",
        "lat": 22.170527,
        "lng": -80.447364,
        "descripcion": "Agencia de viajes en Cienfuegos, con servicios de transporte por ómnibus.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 309,
        "nombre": "Base de Ómnibus",
        "lat": 21.947529,
        "lng": -79.442183,
        "descripcion": "Base de ómnibus en Sancti Spíritus, para transporte interprovincial.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 310,
        "nombre": "Base de Ómnibus",
        "lat": 20.036395,
        "lng": -77.588861,
        "descripcion": "Base de ómnibus en Niquero, Granma, para rutas locales.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 311,
        "nombre": "Base de Ómnibus",
        "lat": 20.146265,
        "lng": -77.429548,
        "descripcion": "Base de ómnibus en Media Luna, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 312,
        "nombre": "Base de Ómnibus",
        "lat": 20.233775,
        "lng": -77.2729,
        "descripcion": "Base de ómnibus en Campechuela, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 313,
        "nombre": "Base de Ómnibus",
        "lat": 20.18051,
        "lng": -76.757946,
        "descripcion": "Base de ómnibus en Buey Arriba, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 314,
        "nombre": "Base de Ómnibus",
        "lat": 20.908114,
        "lng": -77.273102,
        "descripcion": "Base de ómnibus en Jobabo, Las Tunas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 315,
        "nombre": "Base de Ómnibus",
        "lat": 20.297667,
        "lng": -76.258596,
        "descripcion": "Base de ómnibus en Contramaestre, Santiago de Cuba.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 316,
        "nombre": "Base de Ómnibus",
        "lat": 20.36714,
        "lng": -75.904836,
        "descripcion": "Base de ómnibus en Mella, Santiago de Cuba.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 317,
        "nombre": "Base de Ómnibus",
        "lat": 20.411247,
        "lng": -75.534904,
        "descripcion": "Base de ómnibus en Segundo Frente, Santiago de Cuba.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 318,
        "nombre": "Base de Ómnibus",
        "lat": 19.903501,
        "lng": -77.330978,
        "descripcion": "Base de ómnibus en Pilón, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 319,
        "nombre": "Base de Ómnibus",
        "lat": 22.516609,
        "lng": -79.472653,
        "descripcion": "Base de ómnibus en Caibarién, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 320,
        "nombre": "Base de Ómnibus",
        "lat": 22.647496,
        "lng": -80.040415,
        "descripcion": "Base de ómnibus en Cifuentes, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 321,
        "nombre": "Base de Ómnibus",
        "lat": 22.386997,
        "lng": -80.145445,
        "descripcion": "Base de ómnibus en Ranchuelo, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 322,
        "nombre": "Base de Ómnibus",
        "lat": 20.175359,
        "lng": -76.944802,
        "descripcion": "Base de ómnibus en Bartolomé Masó, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 323,
        "nombre": "Base de Ómnibus Báez",
        "lat": 22.216137,
        "lng": -79.75623,
        "descripcion": "Base de ómnibus Báez en Placetas, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 324,
        "nombre": "Base de Ómnibus Bayamo",
        "lat": 20.352902,
        "lng": -76.616975,
        "descripcion": "Base de ómnibus en Bayamo, Granma, para rutas provinciales.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 325,
        "nombre": "Base de Ómnibus Camajuaní",
        "lat": 22.463609,
        "lng": -79.731214,
        "descripcion": "Base de ómnibus en Camajuaní, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 326,
        "nombre": "Base de Ómnibus Corralillo",
        "lat": 22.97888,
        "lng": -80.561405,
        "descripcion": "Base de ómnibus en Corralillo, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 327,
        "nombre": "Base de Ómnibus de Carretera",
        "lat": 20.962107,
        "lng": -76.974978,
        "descripcion": "Base de ómnibus de carretera en Las Tunas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 328,
        "nombre": "Base de Ómnibus Encrucijada",
        "lat": 22.651654,
        "lng": -79.879395,
        "descripcion": "Base de ómnibus en Encrucijada, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 329,
        "nombre": "Base de Ómnibus Manzanillo",
        "lat": 20.337406,
        "lng": -77.079108,
        "descripcion": "Base de ómnibus en Manzanillo, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 330,
        "nombre": "Base de Ómnibus Masó",
        "lat": 20.110745,
        "lng": -76.998094,
        "descripcion": "Base de ómnibus en Bartolomé Masó, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 331,
        "nombre": "Base de Ómnibus Mayajigua",
        "lat": 22.241363,
        "lng": -79.071284,
        "descripcion": "Base de ómnibus en Mayajigua, Yaguajay, Sancti Spíritus.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 332,
        "nombre": "Base de Ómnibus Meneses",
        "lat": 22.253389,
        "lng": -79.263812,
        "descripcion": "Base de ómnibus en Meneses, Yaguajay, Sancti Spíritus.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 333,
        "nombre": "Base de Ómnibus Niquero",
        "lat": 20.036796,
        "lng": -77.590144,
        "descripcion": "Base de ómnibus en Niquero, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 334,
        "nombre": "Base de Ómnibus Placetas",
        "lat": 22.314944,
        "lng": -79.669185,
        "descripcion": "Base de ómnibus en Placetas, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 335,
        "nombre": "Base de Ómnibus Quemado de Güines",
        "lat": 22.784048,
        "lng": -80.256738,
        "descripcion": "Base de ómnibus en Quemado de Güines, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 336,
        "nombre": "Base de Ómnibus Remedios",
        "lat": 22.489666,
        "lng": -79.558423,
        "descripcion": "Base de ómnibus en Remedios, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 337,
        "nombre": "Base de Ómnibus Sagua",
        "lat": 22.804599,
        "lng": -80.077992,
        "descripcion": "Base de ómnibus en Sagua La Grande, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 338,
        "nombre": "Base de Ómnibus Santo Domingo",
        "lat": 22.593769,
        "lng": -80.245426,
        "descripcion": "Base de ómnibus en Santo Domingo, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 339,
        "nombre": "Base de Ómnibus Urbano",
        "lat": 20.962839,
        "lng": -76.974094,
        "descripcion": "Base de ómnibus urbano en Las Tunas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 340,
        "nombre": "Base de Ómnibus Vueltas",
        "lat": 22.516492,
        "lng": -79.697354,
        "descripcion": "Base de ómnibus en Vueltas, Camajuaní, Villa Clara.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 341,
        "nombre": "Base de Ómnibus Yara",
        "lat": 20.309731,
        "lng": -76.889825,
        "descripcion": "Base de ómnibus en Yara, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 342,
        "nombre": "Base de Ómnibus",
        "lat": 22.003257,
        "lng": -79.261479,
        "descripcion": "Base de ómnibus en Taguasco, Sancti Spíritus.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 343,
        "nombre": "Base de Ómnibus",
        "lat": 22.073555,
        "lng": -79.508092,
        "descripcion": "Base de ómnibus en Cabaiguán, Sancti Spíritus.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 344,
        "nombre": "Base de Ómnibus",
        "lat": 21.792451,
        "lng": -79.987079,
        "descripcion": "Base de ómnibus en Trinidad, Sancti Spíritus.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 345,
        "nombre": "Base de Ómnibus",
        "lat": 21.767358,
        "lng": -79.267352,
        "descripcion": "Base de ómnibus en La Sierpe, Sancti Spíritus.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 346,
        "nombre": "Base de Ómnibus",
        "lat": 22.111279,
        "lng": -79.726353,
        "descripcion": "Base de ómnibus en Fomento, Sancti Spíritus.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 347,
        "nombre": "Base Ómnibus",
        "lat": 20.15373,
        "lng": -76.275589,
        "descripcion": "Base de ómnibus en Tercer Frente, Santiago de Cuba.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 348,
        "nombre": "Base Ómnibus",
        "lat": 20.260216,
        "lng": -76.541871,
        "descripcion": "Base de ómnibus en Guisa, Granma.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 349,
        "nombre": "Base Ómnibus",
        "lat": 20.909336,
        "lng": -76.78156,
        "descripcion": "Base de ómnibus en Majibacoa, Las Tunas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 350,
        "nombre": "Base Ómnibus Astro",
        "lat": 21.947942,
        "lng": -79.441937,
        "descripcion": "Base de ómnibus Astro en Sancti Spíritus, para rutas nacionales.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 351,
        "nombre": "Base Ómnibus Palma",
        "lat": 20.228173,
        "lng": -76.008452,
        "descripcion": "Base de ómnibus en Palma Soriano, Santiago de Cuba.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 352,
        "nombre": "Bse de Ómnibus",
        "lat": 21.186631,
        "lng": -76.590289,
        "descripcion": "Base de ómnibus en Puerto Padre, Las Tunas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 353,
        "nombre": "Barbería Peluquería T.Ómnibus",
        "lat": 20.133954,
        "lng": -75.230775,
        "descripcion": "Barbería y peluquería en la terminal de ómnibus de Guantánamo.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 354,
        "nombre": "Base Integral Ómnibus No. 4",
        "lat": 23.123169,
        "lng": -82.283052,
        "descripcion": "Base integral de ómnibus en Guanabacoa, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 355,
        "nombre": "Base Integral Ómnibus No. 5",
        "lat": 23.00683,
        "lng": -82.216186,
        "descripcion": "Base integral de ómnibus en Cotorro, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 356,
        "nombre": "Base Integral Ómnibus No. 6",
        "lat": 23.05335,
        "lng": -82.469577,
        "descripcion": "Base integral de ómnibus en La Lisa, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 357,
        "nombre": "Base Integral Ómnibus No. 1",
        "lat": 23.085252,
        "lng": -82.474167,
        "descripcion": "Base integral de ómnibus en Playa, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 358,
        "nombre": "Base Integral Ómnibus No. 2",
        "lat": 23.09959,
        "lng": -82.439083,
        "descripcion": "Base integral de ómnibus en Playa, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 359,
        "nombre": "Base Integral Ómnibus No. 3",
        "lat": 23.067163,
        "lng": -82.340959,
        "descripcion": "Base integral de ómnibus en Arroyo Naranjo, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 360,
        "nombre": "Base No 1 de Ómnibus",
        "lat": 23.098377,
        "lng": -82.444573,
        "descripcion": "Base de ómnibus No 1 en Playa, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 361,
        "nombre": "Base Ómnibus",
        "lat": 21.938694,
        "lng": -78.424373,
        "descripcion": "Base de ómnibus en Primero de Enero, Ciego de Ávila.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 362,
        "nombre": "Base Ómnibus",
        "lat": 21.689415,
        "lng": -78.63343,
        "descripcion": "Base de ómnibus en Baraguá, Ciego de Ávila.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 363,
        "nombre": "Base Ómnibus",
        "lat": 22.334031,
        "lng": -80.262161,
        "descripcion": "Base de ómnibus en Cruces, Cienfuegos.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 364,
        "nombre": "Base Ómnibus",
        "lat": 22.391775,
        "lng": -80.854724,
        "descripcion": "Base de ómnibus en Aguada de Pasajeros, Cienfuegos.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 365,
        "nombre": "Base Ómnibus",
        "lat": 21.253339,
        "lng": -78.14606,
        "descripcion": "Base de ómnibus en Vertientes, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 366,
        "nombre": "Base Ómnibus",
        "lat": 21.534011,
        "lng": -78.235842,
        "descripcion": "Base de ómnibus en Florida, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 367,
        "nombre": "Base Ómnibus",
        "lat": 21.538051,
        "lng": -77.266,
        "descripcion": "Base de ómnibus en Nuevitas, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 368,
        "nombre": "Base Ómnibus",
        "lat": 21.680771,
        "lng": -77.689285,
        "descripcion": "Base de ómnibus en Sierra de Cubitas, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 369,
        "nombre": "Base Ómnibus",
        "lat": 21.848813,
        "lng": -78.115029,
        "descripcion": "Base de ómnibus en Esmeralda, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 370,
        "nombre": "Base Ómnibus",
        "lat": 21.609875,
        "lng": -78.32254,
        "descripcion": "Base de ómnibus en Carlos Manuel de Céspedes, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 371,
        "nombre": "Base Ómnibus",
        "lat": 22.344294,
        "lng": -80.556217,
        "descripcion": "Base de ómnibus en Rodas, Cienfuegos.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 372,
        "nombre": "Base Ómnibus Augusto C Sandino",
        "lat": 23.119444,
        "lng": -82.376676,
        "descripcion": "Base de ómnibus Augusto C Sandino en Cerro, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 373,
        "nombre": "Base Ómnibus Ch",
        "lat": 22.185779,
        "lng": -78.909974,
        "descripcion": "Base de ómnibus en Chambas, Ciego de Ávila.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 374,
        "nombre": "Base Ómnibus Escolares",
        "lat": 22.982377,
        "lng": -81.824583,
        "descripcion": "Base de ómnibus escolares en Madruga, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 375,
        "nombre": "Base Ómnibus Escolares",
        "lat": 21.059502,
        "lng": -77.358786,
        "descripcion": "Base de ómnibus escolares en Guáimaro, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 376,
        "nombre": "Base Ómnibus Escolares",
        "lat": 22.718726,
        "lng": -80.915984,
        "descripcion": "Base de ómnibus escolares en Colón, Matanzas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 377,
        "nombre": "Base Ómnibus Francisco Caamaño",
        "lat": 23.126514,
        "lng": -82.382873,
        "descripcion": "Base de ómnibus Francisco Caamaño en Plaza de la Revolución, La Habana.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 378,
        "nombre": "Base Ómnibus Guáimaro",
        "lat": 21.059973,
        "lng": -77.355357,
        "descripcion": "Base de ómnibus en Guáimaro, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 379,
        "nombre": "Base Ómnibus Minas",
        "lat": 21.500701,
        "lng": -77.598585,
        "descripcion": "Base de ómnibus en Minas, Camagüey.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 380,
        "nombre": "Base Ómnibus Pérez Vidal",
        "lat": 23.043706,
        "lng": -81.573236,
        "descripcion": "Base de ómnibus Pérez Vidal en Matanzas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 381,
        "nombre": "Base Ómnibus Servicio Público",
        "lat": 22.733691,
        "lng": -80.917475,
        "descripcion": "Base de ómnibus de servicio público en Colón, Matanzas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 382,
        "nombre": "Base Ómnibus Transbell",
        "lat": 23.027219,
        "lng": -81.213942,
        "descripcion": "Base de ómnibus Transbell en Cárdenas, Matanzas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 383,
        "nombre": "Base Ómnibus Transol",
        "lat": 23.029027,
        "lng": -81.212579,
        "descripcion": "Base de ómnibus Transol en Cárdenas, Matanzas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 384,
        "nombre": "Base Ómnibus Transol",
        "lat": 23.042503,
        "lng": -81.576431,
        "descripcion": "Base de ómnibus Transol en Matanzas.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 385,
        "nombre": "Base Ómnibus Ubet Majagua",
        "lat": 21.917994,
        "lng": -79.002494,
        "descripcion": "Base de ómnibus Ubet en Majagua, Ciego de Ávila.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 386,
        "nombre": "Base Ómnibus Urbano Nori",
        "lat": 20.594872,
        "lng": -76.137373,
        "descripcion": "Base de ómnibus urbano en Urbano Noris, Holguín.",
        "categoria": "agencia de viajes"
      },
      {
        "id": 387,
        "nombre": "Base Ómnibus Urbanos",
        "lat": 23.11813,
        "lng": -81.613352,
        "descripcion": "Base de ómnibus urbanos en Matanzas.",
        "categoria": "agencia de viajes"
      },
      {
        id: 388,
        nombre:'Hospital Clínico-Quirúrgico"',
        lat: 20.03462,
        lng: -75.79871,
        descripcion: 'Hospital Clínico-Quirúrgico, centro de referencia en la ciudad.',
        categoria: 'hospital'
      },
      {
        id: 389,
        nombre: 'Hospital Infantil Sur (Colonia)',
        lat: 20.01564,
        lng: -75.82681,
        descripcion: 'Centro pediátrico especializado.',
        categoria: 'hospital'
      },
      {
        id: 390,
        nombre: 'Hospital "Ambrosio Grillo"',
        lat: 20.06238,
        lng: -75.94571,
        descripcion: 'Importante centro médico en El Cobre.',
        categoria: 'hospital'
      },
      {
        id: 391,
        nombre: 'Hospital Militar ',
        lat: 20.01593,
        lng: -75.83939,
        descripcion: 'Brinda asistencia medica secundaria a militares ',
        categoria: 'hospital'
      },
      {
        id: 392,
        nombre: 'Hospital Psiquiatrico ',
        lat: 20.15248,
        lng: -75.72658,
        descripcion: 'Atención especializada en salud mental.',
        categoria: 'hospital'
      },
      {
        id: 393,
        nombre:'Hospital Provincial Saturnino Lora ',
        lat: 20.03298,
        lng: -75.81822,
        descripcion: '',
        categoria: 'hospital'
      },
      {
        id: 394,
        nombre: 'Ayuntamiento de Santiago (Museo 1er Frente)',
        lat: 20.021830,
        lng: -75.829486,
        descripcion: 'Desde su balcón se proclamó el triunfo de la Revolución.',
        categoria: 'museo'
      },
      {
        id: 395,
        nombre:'Museo Provincial "Emilio Bacardi Moreau ',
        lat: 20.02170,
        lng: -75.82774,
        descripcion: 'Museo mas importante de Santiago de Cuba, cuenta con una gran variedad de antiguedades',
        categoria: 'museo'
      },
      {
        id: 396,
        nombre: 'Museo de Ciencias Naturales Tomas Romay ',
        lat: 20.02214,
        lng: -75.82289,
        descripcion: 'Comprende la mayor coleccion de huesos de mamiferos de Cuba ',
        categoria: 'museo'
      },
      {
        id: 397,
        nombre: 'Museo de La Lucha Clandestina ',
        lat: 20.01938,
        lng: -75.83254,
        descripcion: 'Museo en la antigua estacion de policia asaltada el 30/11/1956 dedicada ' +
          'a la lucha clandestina y a Frank Pais Garcia ',
        categoria: 'museo'
      },
      {
        id: 398,
        nombre: 'Museo de la Piratería (El Morro)',
        lat: 20.032386,
        lng: -75.888259,
        descripcion: 'Exposición sobre piratas en el Caribe, dentro del Castillo de San Pedro.',
        categoria: 'museo'
      },
      {
        id:399,
        nombre: 'Galería Oriente (FCBC)',
        lat: 20.022215,
        lng: -75.828727,
        descripcion: 'Arte contemporáneo y exposiciones temporales.',
        categoria: 'museo'
      },
      {
        id: 400,
        nombre: 'Galería de la ACAA',
        lat: 20.022586,
        lng: -75.830857,
        descripcion: 'Artesanías y obras utilitarias decorativas.',
        categoria: 'museo'
      },
      {
        id: 401,
        nombre: 'Centro Comercial Libertad',
        lat: 20.020929,
        lng: -75.825851,
        descripcion: 'Ropa, calzado, perfumería y alimentos.',
        categoria: 'tienda'
      },
      {
        id: 402,
        nombre: 'Las Enramadas (Hotel Meliá)',
        lat: 20.022725,
        lng: -75.820823,
        descripcion: 'Confecciones, accesorios y perfumería.',
        categoria: 'tienda'
      },
      {
        id: 403,
        nombre: 'Casa del Habano "Tivolí"',
        lat: 20.022725,
        lng: -75.820823,
        descripcion: 'Tabaco, ron y café cubano.',
        categoria: 'tienda'
      },
      {
        id: 404,
        nombre: 'CARTELES #y4553r',
        lat: 20.020680,
        lng: -75.822960,
        descripcion: 'Tienda de todo a 100 (9:00-18:00).',
        categoria: 'tienda'
      },
      {
        id: 405,
        nombre: 'Punto de Venta "Terrazas"',
        lat: 20.027910,
        lng: -75.808050,
        descripcion: 'Electrodomésticos, operado por CIMEX.',
        categoria: 'tienda'
      },
      {
        id: 406,
        nombre: 'Primor',
        lat: 20.021622,
        lng: -75.828373,
        descripcion: 'Perfumería, joyería y adornos.',
        categoria: 'tienda'
      },
      {
        id: 407,
        nombre: 'La Granada (CARACOL)',
        lat: 20.021860,
        lng: -75.828778,
        descripcion: 'Calzado y accesorio ',
        categoria: 'tienda'
      },
      {
        id: 408,
        nombre: 'Palacio de la Artesanía "Espiral"',
        lat: 20.022089,
        lng: -75.830058,
        descripcion: 'Textiles, muebles y suvenires.',
        categoria: 'tienda'
      },
      {
        id: 409,
        nombre: 'Casa Granda Turística',
        lat: 20.021442,
        lng: -75.827774,
        descripcion: 'Souvenirs, artesanía, bebidas.',
        categoria: 'tienda'
      },
      {
        id: 410,
        nombre: 'La Dulce Mulata',
        lat: 20.021939,
        lng: -75.828424,
        descripcion: 'Rones, licores y suvenires con imagen de Cuba.',
        categoria: 'tienda'
      },
      {
        id: 411,
        nombre: 'Parque Céspedes (Plaza de Armas)',
        lat: 20.02156,
        lng: -75.82950,
        descripcion: 'Corazón histórico de Santiago, rodeado de edificios coloniales.',
        categoria: 'parque'
      },
      {
        id: 412,
        nombre: 'Parque Alameda',
        lat: 20.01993,
        lng: -75.83588,
        descripcion: 'Paseo peatonal con ambiente cultural y comercial.',
        categoria: 'parque'
      },
      {
        id: 413,
        nombre: 'Parque de los Pioneros',
        lat: 20.025929,
        lng: -75.821734,
        descripcion: 'Espacio recreativo para familias y jóvenes.',
        categoria: 'parque'
      },
      {
        id: 414,
        nombre: 'Parque del Fuerte',
        lat: 20.011297,
        lng: -75.834321,
        descripcion: 'Parque cercano al Policlínico "28 de Septiembre".',
        categoria: 'parque'
      },
      {
        id: 415,
        nombre: 'Parque del Amor (Terrazas)',
        lat: 20.026793,
        lng: -75.809572,
        descripcion: 'Pequeño parque en la zona de Terrazas.',
        categoria: 'parque'
      }
      /*,
      {
        id: 416,
        nombre:'Whiskey Hotel  ',
        lat: 38.89772,
        lng: -77.03673,
        descripcion:'',
        categoria:'hotel'
      },
      {
        id:417 ,
        nombre: 'Adams hotel ',
        lat: 38.9004,
        lng: -77.8375,
        descripcion:'',
        categoria: 'hotel'
      }
*/
    ]
    this.ubicacionesStore.set(ubicaciones);
  }
  setFilter(filtro: string) {
    this.ubicacionesStore.update({ filtro });
  }
}
