// persona.js

// Función que verifica si una persona puede aplicar a jubilación
function verificarJubilacion(edad, aportes) {
  if (edad < 0) {
    return "Valor no válido para edad";
  } else if (edad === 0) {
    return "Debe ingresar una edad verdadera";
  } else if (edad < 18) {
    return "Solo mayores de edad pueden aplicar a jubilación";
  } else if (edad >= 65 && aportes >= 240) {
    return "Puede aplicar a jubilación";
  } else {
    return "No cumple con los requisitos para aplicar a jubilación";
  }
}

// Función para leer datos del usuario
function leerDatos() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Ingrese la edad de la persona: ", (edadInput) => {
    const edad = parseInt(edadInput, 10);
    rl.question("Ingrese la cantidad de aportes al IGSS: ", (aportesInput) => {
      const aportes = parseInt(aportesInput, 10);
      const resultado = verificarJubilacion(edad, aportes);
      console.log(resultado);
      rl.close();
    });
  });
}

// Ejecutar solo si este archivo es el principal
if (require.main === module) {
  leerDatos();
}

module.exports = { verificarJubilacion };
