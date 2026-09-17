<<<<<<< HEAD
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {

    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (num1 === "" || num2 === "") {
        Swal.fire("Campos vacíos", "Ingresa los dos números", "warning");
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire("Datos inválidos", "Ingresa solo números", "error");
        return;
    }

    let resultado;

    if (operacion === "suma") {
        resultado = sumar(num1, num2);
    }

    if (operacion === "resta") {
        resultado = restar(num1, num2);
    }

    if (operacion === "multiplicacion") {
        resultado = multiplicar(num1, num2);
    }

    if (operacion === "division") {
        resultado = dividir(num1, num2);

        if (resultado === 'Error: División por cero') {
            Swal.fire("División por cero", "No puedes dividir entre cero", "error");
            return;
        }
    }

    document.getElementById("resultado").value = resultado;
=======
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {

    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (num1 === "" || num2 === "") {
        Swal.fire("Campos vacíos", "Ingresa los dos números", "warning");
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire("Datos inválidos", "Ingresa solo números", "error");
        return;
    }

    let resultado;

    if (operacion === "suma") {
        resultado = sumar(num1, num2);
    }

    if (operacion === "resta") {
        resultado = restar(num1, num2);
    }

    if (operacion === "multiplicacion") {
        resultado = multiplicar(num1, num2);
    }

    if (operacion === "division") {
        resultado = dividir(num1, num2);

        if (resultado === 'Error: División por cero') {
            Swal.fire("División por cero", "No puedes dividir entre cero", "error");
            return;
        }
    }

    document.getElementById("resultado").value = resultado;
>>>>>>> f2be3890d9fe38831b29f6b37fe6c35ff83d2037
};