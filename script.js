const malla = [
  {
    anio: "Primer Año",
    semestres: [
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
          { id: "Parv124", nombre: "Parv 124 - Lenguajes Artísticos", requisitos: ["Parv116"] },
          { id: "Parv125", nombre: "Parv 125 - Profesionalismo y Práctica Inicial I", requisitos: ["Parv115"] },
          { id: "Parv126", nombre: "Parv 126 - Bases Neurobiológicas del Ser Humano", requisitos: ["Parv117"] },
          { id: "Parv127", nombre: "Parv 127 - Psicología General y del Desarrollo" },
        ]
      },
    ]
  },
  {
    anio: "Segundo Año",
    semestres: [
      {
        semestre: "Tercer Semestre",
        ramos: [
          { id: "Parv211", nombre: "Parv 211 - Currículum en Educación" },
          { id: "Parv212", nombre: "Parv 212 - Psicología del Aprendizaje", requisitos: ["Parv127"] },
          { id: "Parv213", nombre: "Parv 213 - Liderazgo y Gestión de Organizaciones" },
          { id: "Parv214", nombre: "Parv 214 - Didáctica de los Lenguajes Artísticos", requisitos: ["Parv124"] },
          { id: "Parv216", nombre: "Parv 216 - Didáctica del Desarrollo Personal y Oscila", requisitos: ["Parv115"] },
          { id: "Parv215", nombre: "Parv 215 - Profesionalismo y Práctica Inicial II", requisitos: ["Parv125"] },
          { id: "Parv217", nombre: "Parv 217 - Salud y Desarrollo Humano" },
          { id: "Parv218", nombre: "Parv 218 - Taller de Nivelación de Inglés" },
        ]
      },
      {
        semestre: "Cuarto Semestre",
        ramos: [
          { id: "Parv221", nombre: "Parv 221 - Evaluación Educativa", requisitos: ["Parv211"] },
          { id: "Parv222", nombre: "Parv 222 - Lenguaje y Comunicación" },
          { id: "Parv223", nombre: "Parv 223 - Familia y Derechos de Familia" },
          { id: "Parv224", nombre: "Parv 224 - Didáctica para la Comprensión del Entorno Natural", requisitos: ["Parv211"] },
          { id: "Parv226", nombre: "Parv 226 - Motricidad Infantil" },
          { id: "Parv227", nombre: "Parv 227 - Profesionalismo y Práctica Intermedia I", requisitos: ["Parv215"] },
          { id: "Parv225", nombre: "Parv 225 - Salud en la Primera Infancia" },
          { id: "Parv228", nombre: "Parv 228 - Promoción de la Salud", requisitos: ["Parv217"] },
        ]
      },
    ]
  },
  {
    anio: "Tercer Año",
    semestres: [
      {
        semestre: "Quinto Semestre",
        ramos: [
          { id: "Parv311", nombre: "311 - Métodos de Investigación Cuantitativa" },
          { id: "Parv312", nombre: "Parv 312 - Territorio, Comunidad y Trabajo en Redes" },
          { id: "Parv314", nombre: "Parv 314 - Didáctica del Lenguaje Oral y Escrito", requisitos: ["Parv221"] },
          { id: "Parv315", nombre: "Parv 315 - Didáctica para la Comprensión del Entorno Sociocultural", requisitos: ["Parv221"] },
          { id: "Parv316", nombre: "Parv 316 - Didáctica de la Motricidad Infantil", requisitos: ["Parv226"] },
          { id: "Parv317", nombre: "Parv 317 - Profesionalismo y Práctica Intermedia II", requisitos: ["Parv227"] },
          { id: "Parv313", nombre: "Parv 313 - Diversidades, Interculturalidades y Perspectiva de Género" },
        ]
      },
      {
        semestre: "Sexto Semestre",
        ramos: [
          { id: "Parv321", nombre: "321 - Métodos de Investigación Cualitativa" },
          { id: "Parv322", nombre: "Parv 322 - Proyectos Educativos" },
          { id: "Parv323", nombre: "Parv 323 - Tecnologías e Informática Educativa" },
          { id: "Parv324", nombre: "Parv 324 - Didáctica para el Desarrollo del Pensamiento Matemático", requisitos: ["Parv221"] },
          { id: "Parv326", nombre: "Parv 326 - Diversificación de la Enseñanza" },
          { id: "Parv325", nombre: "Parv 325 - Profesionalismo y Práctica Intermedia III", requisitos: ["Parv317"] },
          { id: "Parv327", nombre: "Parv 327 - Taller de Integración Perfil UV I" },
        ]
      }
    ]
  },
  {
    anio: "Cuarto Año - Mención Promoción de la Salud",
    semestres: [
      {
        semestre: "Séptimo Semestre",
        ramos: [
          { id: "ParvPDS411", nombre: "Parv-PDS 411 - Factores Protectores Psicosociales", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvPDS412", nombre: "Parv-PDS 412 - Motricidad y Vida Saludable", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvPDS413", nombre: "Parv-PDS 413 - Alimentación Saludable en la Niñez", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvPDS414", nombre: "Parv-PDS 414 - Tesis I", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvPDS415", nombre: "Parv-PDS 415 - Práctica Mención Promoción de la Salud I", requisitos: ["PrimerPlanAprobado"] },
        ]
      },
      {
        semestre: "Octavo Semestre",
        ramos: [
          { id: "ParvPDS421", nombre: "Parv-PDS 421 - Educación para la Salud en la Primera Infancia", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvPDS422", nombre: "Parv-PDS 422 - Contextos Educativos Saludables y Sostenibles", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvPDS423", nombre: "Parv-PDS 423 - Tesis II", requisitos: ["ParvPDS414"] },
          { id: "ParvPDS424", nombre: "Parv-PDS 424 - Práctica Mención Promoción de la Salud II", requisitos: ["ParvPDS415"] },
          { id: "ParvPDS425", nombre: "Parv-PDS 425 - Taller de Integración Perfil UV II", requisitos: ["Parv327"] },
        ]
      }
    ]
  },
  {
    anio: "Cuarto Año - Mención Comunicación y Trastornos del Lenguaje",
    semestres: [
      {
        semestre: "Séptimo Semestre",
        ramos: [
          { id: "ParvCTL411", nombre: "PARV-CTL 411 - Bases Anatómicas del Crecimiento y Desarrollo de la Infancia", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvCTL412", nombre: "PARV-CTL 412 - Evolución del Lenguaje Oral", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvCTL413", nombre: "PARV-CTL 413 - Alteraciones de la Comunicación Oral", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvCTL414", nombre: "PARV-CTL 414 - Diagnóstico de los Trastornos del Lenguaje", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvCTL415", nombre: "PARV-CTL 415 - Práctica Mención Comunicación y Trastornos del Lenguaje I", requisitos: ["PrimerPlanAprobado"] },
        ]
      },
      {
        semestre: "Octavo Semestre",
        ramos: [
          { id: "ParvCTL421", nombre: "PARV-CTL 421 - Prácticas Pedagógicas para la Atención de las Alteraciones del Lenguaje", requisitos: ["ParvCTL415"] },
          { id: "ParvCTL422", nombre: "PARV-CTL 422 - Tesis I", requisitos: ["PrimerPlanAprobado"] },
          { id: "ParvCTL423", nombre: "PARV-CTL 423 - Tesis II", requisitos: ["ParvCTL422"] },
          { id: "ParvCTL424", nombre: "PARV-CTL 424 - Práctica Mención Comunicación y Trastornos del Lenguaje II", requisitos: ["ParvCTL415"] },
          { id: "ParvCTL425", nombre: "PARV-CTL 425 - Taller de Integración Perfil UV II", requisitos: ["Parv327"] },
        ]
      }
    ]
  },
  // Aquí agregamos el Quinto Año con el Noveno Semestre y sus ramos
  {
    anio: "Quinto Año",
    semestres: [
      {
        semestre: "Noveno Semestre",
        ramos: [
          {
            id: "Parv501",
            nombre: "Parv 501 - Seminario de Investigación Avanzada",
            requisitos: ["Parv321", "Parv322"]
          },
          {
            id: "Parv502",
            nombre: "Parv 502 - Práctica Profesional Avanzada",
            requisitos: ["Parv325"]
          },
          {
            id: "Parv503",
            nombre: "Parv 503 - Ética Profesional y Liderazgo",
            requisitos: ["Parv213"]
          }
        ]
      }
    ]
  }
];

// Función para validar si el primer plan está aprobado (todos ramos primeros 3 años)
const aprobados = new Set();

function primerPlanAprobado() {
  for (let i = 0; i < 3; i++) {
    let anio = malla[i];
    for (let sem of anio.semestres) {
      for (let ramo of sem.ramos) {
        if (!aprobados.has(ramo.id)) {
          return false;
        }
      }
    }
  }
  return true;
}

function puedeAprobar(ramo) {
  if (!ramo.requisitos) return true;

  return ramo.requisitos.every(reqId => {
    if (reqId === "PrimerPlanAprobado") {
      return primerPlanAprobado();
    } else {
      return aprobados.has(reqId);
    }
  });
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  malla.forEach(anio => {
    const anioDiv = document.createElement("div");
    anioDiv.id = "anio";

    const anioTitulo = document.createElement("h2");
    anioTitulo.textContent = anio.anio;
    anioDiv.appendChild(anioTitulo);

    anio.semestres.forEach(sem => {
      const semestreDiv = document.createElement("div");
      semestreDiv.classList.add("semestre");

      const titulo = document.createElement("h3");
      titulo.textContent = sem.semestre;
      semestreDiv.appendChild(titulo);

      sem.ramos.forEach(ramo => {
        const ramoDiv = document.createElement("div");
        ramoDiv.classList.add("ramo");
        ramoDiv.textContent = ramo.nombre;
        ramoDiv.dataset.id = ramo.id;

        if (aprobados.has(ramo.id)) {
          ramoDiv.classList.add("aprobado");
          ramoDiv.title = "Ramo aprobado. Haz clic para desmarcar.";
        } else if (!puedeAprobar(ramo)) {
          ramoDiv.classList.add("bloqueado");
          ramoDiv.title = "Debe aprobar prerrequisitos primero";
        } else {
          ramoDiv.title = "Haz clic para aprobar";
        }

        ramoDiv.addEventListener("click", () => {
          if (aprobados.has(ramo.id)) {
            aprobados.delete(ramo.id);
          } else if (puedeAprobar(ramo)) {
            aprobados.add(ramo.id);
          }
          renderMalla();
        });

        semestreDiv.appendChild(ramoDiv);
      });

      anioDiv.appendChild(semestreDiv);
    });

    contenedor.appendChild(anioDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
});
