const malla = document.getElementById("malla");

const asignaturas = [
  {
    semestre: "Primer Semestre",
    ramos: [
      { id: "Parv111", nombre: "Parv 111 - Bases Socio Antropológicas y Filosóficas de la Educación" },
      { id: "Parv112", nombre: "Parv 112 - Infancia y Transformaciones de la Modernidad" },
      { id: "Parv113", nombre: "Parv 113 - Desarrollo Personal, Emocionalidad Autorregulación" },
      { id: "Parv114", nombre: "Parv 114 - Lenguaje y Cognición" },
      { id: "Parv115", nombre: "Parv 115 - Fundamentos y Práctica de la Educación Parvularia" },
      { id: "Parv116", nombre: "Parv 116 - Sensibilidad, Creatividad y Lenguajes Expresivos" },
      { id: "Parv117", nombre: "Parv 117 - Biología Humana" },
    ]
  },
  // Puedes continuar agregando los demás semestres aquí con su misma estructura.
];

const requisitos = {
  Parv124: ["Parv116"],
  Parv125: ["Parv115"],
  Parv126: ["Parv117"],
  Parv212: ["Parv127"],
  Parv214: ["Parv124"],
  Parv215: ["Parv125"],
  Parv216: ["Parv115"],
  Parv221: ["Parv211"],
  Parv224: ["Parv211"],
  Parv227: ["Parv215"],
  Parv228: ["Parv217"],
  Parv314: ["Parv221"],
  Parv315: ["Parv221"],
  Parv316: ["Parv226"],
  Parv317: ["Parv227"],
  Parv324: ["Parv221"],
  Parv325: ["Parv317"],
  "PARV-PDS423": ["PARV-PDS414"],
  "PARV-PDS424": ["PARV-PDS415"],
  "PARV-PDS425": ["Parv327"],
  "PARV-CTL423": ["Parv414"],
  "PARV-CTL424": ["PARV-CTL415"],
  "PARV-CTL425": ["Parv327"],
  Parv511: ["licenciatura"],
  Parv512: ["licenciatura"],
  Parv513: ["PARV-PDS425", "PARV-CTL425"]
};

function crearMalla() {
  asignaturas.forEach(bloque => {
    const div = document.createElement("div");
    div.className = "semestre";

    const h2 = document.createElement("h2");
    h2.textContent = bloque.semestre;
    div.appendChild(h2);

    bloque.ramos.forEach(ramo => {
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo";
      ramoDiv.textContent = ramo.nombre;
      ramoDiv.id = ramo.id;

      if (requisitos[ramo.id]) {
        ramoDiv.classList.add("bloqueado");
      }

      ramoDiv.addEventListener("click", () => {
        if (ramoDiv.classList.contains("bloqueado")) return;

        ramoDiv.classList.toggle("aprobado");
        desbloquearRamos();
      });

      div.appendChild(ramoDiv);
    });

    malla.appendChild(div);
  });
}

function desbloquearRamos() {
  Object.entries(requisitos).forEach(([id, prereqs]) => {
    const ramo = document.getElementById(id);
    if (!ramo) return;

    const cumplidos = prereqs.every(req => {
      const el = document.getElementById(req);
      return el && el.classList.contains("aprobado");
    });

    if (cumplidos) {
      ramo.classList.remove("bloqueado");
    }
  });
}

crearMalla();
