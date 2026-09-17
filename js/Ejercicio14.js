<<<<<<< HEAD
function calcular() {
    const num = document.getElementById('num').value;
    if (num.trim() === "") {
        alert('Por favor ingresa una cadena de números separadas por comas');
        return;
    }

    const separarnum = num.split(",");
    
    const numero = separarnum.map(function (valor) {
        return Number(valor.trim());
    });

    const hayInvalido = numero.some(function (n) {
        return isNaN(n);
    });

    if (hayInvalido) {
        alert('Ingresa solo números válidos separados por comas');
        return;
    }

    const maximo = Math.max(...numero);
    const minimo = Math.min(...numero);

    const suma = numero.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);
    const promedio = suma / numero.length;

    document.getElementById('nummay').value = maximo;
    document.getElementById('nummen').value = minimo;
    document.getElementById('prom').value = promedio.toFixed(2);
=======
function calcular() {
    const num = document.getElementById('num').value;
    if (num.trim() === "") {
        alert('Por favor ingresa una cadena de números separadas por comas');
        return;
    }

    const separarnum = num.split(",");
    
    const numero = separarnum.map(function (valor) {
        return Number(valor.trim());
    });

    const hayInvalido = numero.some(function (n) {
        return isNaN(n);
    });

    if (hayInvalido) {
        alert('Ingresa solo números válidos separados por comas');
        return;
    }

    const maximo = Math.max(...numero);
    const minimo = Math.min(...numero);

    const suma = numero.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);
    const promedio = suma / numero.length;

    document.getElementById('nummay').value = maximo;
    document.getElementById('nummen').value = minimo;
    document.getElementById('prom').value = promedio.toFixed(2);
>>>>>>> f2be3890d9fe38831b29f6b37fe6c35ff83d2037
}