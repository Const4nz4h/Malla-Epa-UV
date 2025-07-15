const malla = [
  // Primer Año
  {
    semestre: "Primer Semestre",
    ramos: [
      { id: "Parv111", nombre: "Parv 111 - Bases Socio Antropológicas y Filosóficas de la Educación" },
      { id: "Parv112", nombre: "Parv 112 - Infancia y Transformaciones de la Modernidad" },
      { id: "Parv113", nombre: "Parv 113 - Desarrollo Personal, Emocionalidad y Autorregulación" },
      { id: "Parv114", nombre: "Parv 114 - Lenguaje y Cognición" },
      { id: "Parv115", nombre: "Parv 115 - Fundamentos y Práctica de la Educación Parvularia" },
      { id: "Parv116", nombre: "Parv 116 - Sensibilidad, Creatividad y Lenguajes Expresivos" },
      { id: "Parv117", nombre: "Parv 117 - Biología Humana" },
    ]
  },
  {
    semestre: "Segundo Semestre",
    ramos: [
      { id: "Parv121", nombre: "Parv 121 - Teorías de la Educación y Corrientes Pedagógicas Contemporáneas" },
      { id: "Parv122", nombre: "Parv 122 - Ética, Valores y Ciudadanía" },
      { id: "Parv123", nombre: "Parv 123 - Construcción de la Identidad Profesional" },
      { id: "Parv124", nombre: "Parv 124 - Lenguajes Artísticos" },
      { id: "Parv125", nombre: "Parv 125 - Profesionalismo y Práctica Inicial I" },
      { id: "Parv126", nombre: "Parv 126 - Bases Neurobiológicas del Ser Humano" },
      { id: "Parv127", nombre: "Parv 127 - Psicología General y del Desarrollo" },
    ]
  },

  // Segundo Año
  {
    semestre: "Tercer Semestre",
    ramos: [
      { id: "Parv211", nombre: "Parv 211 - Currículum En Educación" },
      { id: "Parv212", nombre: "Parv 212 - Psicología Del Aprendizaje" },
      { id: "Parv213", nombre: "Parv 213 - Liderazgo y Gestión De Organizaciones" },
      { id: "Parv214", nombre: "Parv 214 - Didáctica De Los Lenguajes Artísticos" },
      { id: "Parv216", nombre: "Parv 216 - Didáctica Del Desarrollo Personal Y Oscila" },
      { id: "Parv215", nombre: "Parv 215 - Profesionalismo y Práctica Inicial II" },
      { id: "Parv217", nombre: "Parv 217 - Salud y Desarrollo Humano" },
      { id: "Parv218", nombre: "Parv 218 - Taller De Nivelación De Inglés" },
    ]
  },
  {
    semestre: "Cuarto Semestre",
    ramos: [
      { id: "Parv221", nombre: "Parv 221 - Evaluación Educativa" },
      { id: "Parv222", nombre: "Parv 222 - Lenguaje y Comunicación" },
      { id: "Parv223", nombre: "Parv 223 - Familia y Derechos De Familia" },
      { id: "Parv224", nombre: "Parv 224 - Didáctica Para La Comprensión Del Entorno Natural" },
      { id: "Parv226", nombre: "Parv 226 - Motricidad Infantil" },
      { id: "Parv227", nombre: "Parv 227 - Profesionalismo y Práctica Intermedia I" },
      { id: "Parv225", nombre: "Parv 225 - Salud En La Primera Infancia" },
      { id: "Parv228", nombre: "Parv 228 - Promoción De La Salud" },
    ]
  },

  // Tercer Año
  {
    semestre: "Quinto Semestre",
    ramos: [
      { id: "Parv311", nombre: "Parv 311 - Métodos De Investigación Cuantitativa" },
      { id: "Parv312", nombre: "Parv 312 - Territorio, Comunidad Y Trabajo En Redes" },
      { id: "Parv314", nombre: "Parv 314 - Didáctica Del Lenguaje Oral Y Escrito" },
      { id: "Parv315", nombre: "Parv 315 - Didáctica Para La Comprensión Del Entorno Sociocultural" },
      { id: "Parv316", nombre: "Parv 316 - Didáctica De La Motricidad Infantil" },
      { id: "Parv317", nombre: "Parv 317 - Profesionalismo Y Práctica Intermedia II" },
      { id: "Parv313", nombre: "Parv 313 - Diversidades, Interculturalidades Y Perspectiva De Género" },
    ]
  },
  {
    semestre: "Sexto Semestre",
    ramos: [
      { id: "Parv321", nombre: "Parv 321 - Métodos De Investigación Cualitativa" },
      { id: "Parv322", nombre: "Parv 322 - Proyectos Educativos" },
      { id: "Parv323", nombre: "Parv 323 - Tecnologías E Informática Educativa" },
      { id: "Parv324", nombre: "Parv 324 - Didáctica Para El Desarrollo Del Pensamiento Matemático" },
      { id: "Parv326", nombre: "Parv 326 - Diversificación De La Enseñanza" },
      { id: "Parv325", nombre: "Parv 325 - Profesionalismo Y Práctica Intermedia III" },
      { id: "Parv327", nombre: "Parv 327 - Taller De Integración Perfil UV I" },
    ]
  },

  // Cuarto Año - Mención Promoción De La Salud
  {
    semestre: "Séptimo Semestre (Promoción De La Salud)",
    ramos: [
      { id: "ParvPDS411", nombre: "Parv-PDS 411 - Factores Protectores Psicosociales" },
      { id: "ParvPDS412", nombre: "Parv-PDS 412 - Motricidad Y Vida Saludable" },
      { id: "ParvPDS413", nombre: "Parv-PDS Alimentación Saludable En La Niñez" },
      { id: "ParvPDS414", nombre: "Parv-PDS 414 - Tesis I" },
      { id: "ParvPDS415", nombre: "Parv-PDS 415 - Practica Mención Promoción De La Salud I" },
    ]
  },
  {
    semestre: "Octavo Semestre (Promoción De La Salud)",
    ramos: [
      { id: "ParvPDS421", nombre: "Parv-PDS 421 - Educación Para La Salud En La Primera Infancia" },
      { id: "ParvPDS422", nombre: "Parv-PDS 422 - Contextos Educativos Saludables Y Sostenibles" },
      { id: "ParvPDS423", nombre: "Parv-PDS 423 - Tesis II" },
      { id: "ParvPDS424", nombre: "Parv-PDS 424 - Practica Mención Promoción De La Salud II" },
      { id: "ParvPDS425", nombre: "Parv-PDS 425 - Taller De Integración Perfil UV II" },
    ]
  },

  // Cuarto Año - Mención Comunicación Y Trastornos Del Lenguaje
  {
    semestre: "Séptimo Semestre (Comunicación Y Trastornos Del Lenguaje)",
    ramos: [
      { id: "ParvCTL411", nombre: "Parv-CTL 411 - Bases Anatómicas Del Crecimiento Y Desarrollo De La Infancia" },
      { id: "ParvCTL412", nombre: "Parv-CTL 412 - Evolución Del Lenguaje Oral" },
      { id: "ParvCTL413", nombre: "Parv-CTL 413 - Evolución Del Lenguaje Escrito" },
      { id: "ParvCTL414", nombre: "Parv-CTL 414 - Tesis I" },
      { id: "ParvCTL415", nombre: "Parv-CTL 415 - Practica Mención Comunicación Y Trastornos Del Lenguaje I" },
    ]
  },
  {
    semestre: "Octavo Semestre (Comunicación Y Trastornos Del Lenguaje)",
    ramos: [
      { id: "ParvCTL421", nombre: "Parv-CTL 421 - Trastornos Del Lenguaje" },
      { id: "ParvCTL422", nombre: "Parv-CTL 422 - Contextos Educativos Saludables Y Sostenibles" },
      { id: "ParvCTL423", nombre: "Parv-CTL 423 - Tesis II" },
      { id: "ParvCTL424", nombre: "Parv-CTL 424 - Practica Mención Comunicación Trastornos Del Lenguaje II" },
      { id: "ParvCTL425", nombre: "Parv-CTL 425 - Taller De Integración Perfil UV II" },
    ]
  },

  // Quinto Año
  {
    semestre: "Noveno Semestre",
    ramos: [
      { id: "Parv511", nombre: "Parv 511 - Practica Profesional" },
      { id: "Parv512", nombre: "Parv 512 - Taller Práctica Profesional" },
      { id: "Parv513", nombre: "Parv 513 - Taller De Integración Perfil UV II" },
    ]
  }
];
