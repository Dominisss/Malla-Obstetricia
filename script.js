
function crearMalla() {
  const grid = document.querySelector(".grid");
  const niveles = [...new Set(courses.map(c => c.nivel))];

  niveles.forEach(nivel => {
    const titulo = document.createElement("div");
    titulo.className = "semester-title";
    titulo.textContent = `Nivel ${nivel}`;
    grid.appendChild(titulo);

    courses.filter(c => c.nivel === nivel).forEach(curso => {
      const div = document.createElement("div");
      div.className = "course";
      div.textContent = curso.nombre;
      div.dataset.id = curso.id;
      grid.appendChild(div);
    });
  });

  desbloquearCursos();
}

function desbloquearCursos() {
  const aprobados = JSON.parse(localStorage.getItem("aprobados") || "[]");

  document.querySelectorAll(".course").forEach(div => {
    const curso = courses.find(c => c.id === div.dataset.id);
    const desbloqueado = curso.prerrequisitos.every(pr => aprobados.includes(pr));

    if (desbloqueado) {
      div.classList.add("unlocked");
      div.onclick = () => {
        if (!aprobados.includes(curso.id)) {
          aprobados.push(curso.id);
          localStorage.setItem("aprobados", JSON.stringify(aprobados));
          location.reload();
        }
      };
    }
  });
}

crearMalla();
