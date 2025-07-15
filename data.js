
const courses = [
  // NIVEL 101
  { id: "intro-profesion", nombre: "Introducción a la profesión", nivel: "101", tipo: "especialidad", prerrequisitos: [] },
  { id: "anatomia", nombre: "Anatomía general", nivel: "101", tipo: "general", prerrequisitos: [] },
  { id: "biologia", nombre: "Biología molecular de la célula", nivel: "101", tipo: "general", prerrequisitos: [] },
  { id: "quimica", nombre: "Química general y orgánica", nivel: "101", tipo: "general", prerrequisitos: [] },
  { id: "taller-personal", nombre: "Taller desarrollo personal", nivel: "101", tipo: "general", prerrequisitos: [] },

  // NIVEL 102
  { id: "bioetica", nombre: "Bioética y aspectos legales", nivel: "102", tipo: "especialidad", prerrequisitos: [] },
  { id: "bioquimica", nombre: "Bioquímica clínica", nivel: "102", tipo: "general", prerrequisitos: ["biologia", "quimica"] },
  { id: "ingles1", nombre: "Inglés 1", nivel: "102", tipo: "general", prerrequisitos: [] },
  { id: "morfologia", nombre: "Morfología reproductiva", nivel: "102", tipo: "general", prerrequisitos: ["anatomia"] },
  { id: "psicologia-desarollo", nombre: "Psicología del desarrollo", nivel: "102", tipo: "general", prerrequisitos: [] },
  { id: "salud-publica", nombre: "Salud pública", nivel: "102", tipo: "especialidad", prerrequisitos: [] },
  { id: "promocion1", nombre: "Promoción y educación para la salud 1", nivel: "102", tipo: "especialidad", prerrequisitos: [] },

  // NIVEL 201
  { id: "bioestadistica", nombre: "Bioestadística", nivel: "201", tipo: "especialidad", prerrequisitos: [] },
  { id: "desarrollo-embrio", nombre: "Desarrollo embrio fetal", nivel: "201", tipo: "especialidad", prerrequisitos: ["biologia", "morfologia"] },
  { id: "epidemiologia", nombre: "Epidemiología clínica y social", nivel: "201", tipo: "especialidad", prerrequisitos: ["salud-publica"] },
  { id: "fisiologia", nombre: "Fisiología", nivel: "201", tipo: "general", prerrequisitos: ["bioquimica", "anatomia"] },
  { id: "microbiologia", nombre: "Microbiología y parasitología clínica", nivel: "201", tipo: "general", prerrequisitos: ["bioquimica"] },
  { id: "promocion2", nombre: "Promoción y educación para la salud 2", nivel: "201", tipo: "especialidad", prerrequisitos: ["promocion1", "salud-publica"] },
  { id: "salud-familiar", nombre: "Salud familiar y comunitaria", nivel: "201", tipo: "especialidad", prerrequisitos: ["salud-publica"] },

  // NIVEL 202
  { id: "farmacologia", nombre: "Farmacología general y gineco-obstétrica", nivel: "202", tipo: "especialidad", prerrequisitos: ["bioquimica"] },
  { id: "fisiopatologia", nombre: "Fisiopatología", nivel: "202", tipo: "general", prerrequisitos: ["fisiologia"] },
  { id: "gineco1", nombre: "Ginecología 1", nivel: "202", tipo: "especialidad", prerrequisitos: ["salud-familiar", "desarrollo-embrio"] },
  { id: "ingles2", nombre: "Inglés 2", nivel: "202", tipo: "general", prerrequisitos: ["ingles1"] },
  { id: "neonato1", nombre: "Neonatología 1", nivel: "202", tipo: "especialidad", prerrequisitos: ["salud-familiar", "desarrollo-embrio"] },
  { id: "obstetricia1", nombre: "Obstetricia 1", nivel: "202", tipo: "especialidad", prerrequisitos: ["salud-familiar", "desarrollo-embrio"] },
  { id: "proceso-enfermeria", nombre: "Proceso de atención de enfermería", nivel: "202", tipo: "practica", prerrequisitos: ["fisiologia", "microbiologia"] },

  // NIVEL 301
  { id: "atencion-obstetrica", nombre: "Atención primaria obstétrica", nivel: "301", tipo: "practica", prerrequisitos: ["promocion2", "obstetricia1"] },
  { id: "clinica-enfermeria", nombre: "Clínica de proceso de enfermería", nivel: "301", tipo: "practica", prerrequisitos: ["promocion2", "proceso-enfermeria"] },
  { id: "gineco2", nombre: "Ginecología 2", nivel: "301", tipo: "especialidad", prerrequisitos: ["gineco1", "fisiopatologia"] },
  { id: "investigacion1", nombre: "Investigación en salud 1", nivel: "301", tipo: "especialidad", prerrequisitos: ["bioestadistica"] },
  { id: "neonato2", nombre: "Neonatología 2", nivel: "301", tipo: "especialidad", prerrequisitos: ["neonato1", "fisiopatologia"] },
  { id: "obstetricia2", nombre: "Obstetricia 2", nivel: "301", tipo: "especialidad", prerrequisitos: ["obstetricia1", "fisiopatologia"] },

  // NIVEL 302
  { id: "atencion-ginecologica", nombre: "Atención primaria ginecológica", nivel: "302", tipo: "practica", prerrequisitos: ["gineco2", "atencion-obstetrica"] },
  { id: "enfermeria-quirurgica", nombre: "Enfermería médico quirúrgica", nivel: "302", tipo: "practica", prerrequisitos: ["clinica-enfermeria"] },
  { id: "ingles3", nombre: "Inglés 3", nivel: "302", tipo: "general", prerrequisitos: ["ingles2"] },
  { id: "integracion", nombre: "Integración profesional", nivel: "302", tipo: "especialidad", prerrequisitos: ["obstetricia2", "neonato2", "gineco2"] },
  { id: "investigacion2", nombre: "Investigación en salud 2", nivel: "302", tipo: "especialidad", prerrequisitos: ["investigacion1"] },
  { id: "psico-mujer", nombre: "Psicología de la mujer", nivel: "302", tipo: "especialidad", prerrequisitos: ["psicologia-desarollo"] },
  { id: "sexologia", nombre: "Sexualidad y sexología", nivel: "302", tipo: "especialidad", prerrequisitos: ["gineco2"] },

  // NIVEL 401
  { id: "clinica-neonato1", nombre: "Clínica de neonatología 1", nivel: "401", tipo: "practica", prerrequisitos: ["neonato2", "integracion"] },
  { id: "clinica-gineco1", nombre: "Clínica de servicios gineco obstétricos 1", nivel: "401", tipo: "practica", prerrequisitos: ["integracion", "atencion-ginecologica"] },
  { id: "gestion1", nombre: "Gestión en salud 1", nivel: "401", tipo: "especialidad", prerrequisitos: ["atencion-ginecologica"] },
  { id: "intervencion", nombre: "Proceso de intervención comunitaria", nivel: "401", tipo: "practica", prerrequisitos: ["integracion"] },
  { id: "proyecto1", nombre: "Proyecto de licenciatura 1", nivel: "401", tipo: "especialidad", prerrequisitos: ["investigacion2"] },

  // NIVEL 402
  { id: "clinica-neonato2", nombre: "Clínica de neonatología 2", nivel: "402", tipo: "practica", prerrequisitos: ["clinica-neonato1"] },
  { id: "clinica-gineco2", nombre: "Clínica de servicios gineco obstétricos 2", nivel: "402", tipo: "practica", prerrequisitos: ["clinica-gineco1"] },
  { id: "gestion2", nombre: "Gestión en salud 2", nivel: "402", tipo: "especialidad", prerrequisitos: ["gestion1"] },
  { id: "proyecto2", nombre: "Proyecto de licenciatura 2", nivel: "402", tipo: "especialidad", prerrequisitos: ["proyecto1"] },

  // NIVEL 501
  { id: "gestion3", nombre: "Gestión en salud 3", nivel: "501", tipo: "especialidad", prerrequisitos: ["gestion2"] },
  { id: "internado-comunitario", nombre: "Internado atención primaria y comunitaria", nivel: "501", tipo: "practica", prerrequisitos: ["intervencion"] },
  { id: "internado-intrahospitalario", nombre: "Internado intrahospitalario", nivel: "501", tipo: "practica", prerrequisitos: ["clinica-gineco2", "clinica-neonato2"] },
  { id: "electivo", nombre: "Electivo", nivel: "501", tipo: "general", prerrequisitos: [] },

  // NIVEL 502
  { id: "internado-integral", nombre: "Internado Integral", nivel: "502", tipo: "practica", prerrequisitos: ["internado-intrahospitalario", "internado-comunitario", "gestion3", "electivo"] }
];
