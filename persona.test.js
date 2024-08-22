const { verificarJubilacion } = require("./persona");

describe("Pruebas para verificarJubilacion", () => {
  test("Debería devolver 'Valor no válido para edad' para edad negativa", () => {
    expect(verificarJubilacion(-1, 250)).toBe("Valor no válido para edad");
  });

  test("Debería devolver 'Debe ingresar una edad verdadera' para edad cero", () => {
    expect(verificarJubilacion(0, 250)).toBe(
      "Debe ingresar una edad verdadera"
    );
  });

  test("Debería devolver 'Solo mayores de edad pueden aplicar a jubilación' para edad menor de 18 años", () => {
    expect(verificarJubilacion(17, 250)).toBe(
      "Solo mayores de edad pueden aplicar a jubilación"
    );
  });

  test("Debería devolver 'Puede aplicar a jubilación' para edad 65 o más y 240 o más aportes", () => {
    expect(verificarJubilacion(65, 240)).toBe("Puede aplicar a jubilación");
  });

  test("Debería devolver 'No cumple con los requisitos para aplicar a jubilación' para edad 18 o más pero menos de 65 años o menos de 240 aportes", () => {
    expect(verificarJubilacion(30, 239)).toBe(
      "No cumple con los requisitos para aplicar a jubilación"
    );
  });
});
