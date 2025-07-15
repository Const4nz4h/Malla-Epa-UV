const malla = [
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
  // Agrega aquí los semestres restantes...
  // Como ya hiciste para séptimo, octavo y noveno, colócalos en esta lista también.
];

// Renderizar la malla
window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("malla");

  malla.forEach((sem) => {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");

    const titulo = document.createElement("h3");
    titulo.textContent = sem.semestre;

    semestreDiv.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const ramoDiv = document.createElement("div");
      ramoDiv.classList.add("ramo");
      ramoDiv.textContent = ramo.nombre;
      semestreDiv.appendChild(ramoDiv);
    });

    contenedor.appendChild(semestreDiv);
  });
});
