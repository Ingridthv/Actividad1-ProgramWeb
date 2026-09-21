        function calcular() {
            const kilometros = parseFloat(document.getElementById('kilometros').value);
            if (isNaN(kilometros)) {
                alert('Por favor ingresa un número');
                return;
            }
            const millas = (kilometros * 0.621371);
            document.getElementById('millas').value = millas.toFixed(5);
        }