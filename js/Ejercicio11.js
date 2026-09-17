<<<<<<< HEAD
        function calcular() {
            const kilometros = parseFloat(document.getElementById('kilometros').value);
            if (isNaN(kilometros)) {
                alert('Por favor ingresa un número');
                return;
            }
            const millas = (kilometros * 0.621371);
            document.getElementById('millas').value = millas.toFixed(5);
=======
        function calcular() {
            const kilometros = parseFloat(document.getElementById('kilometros').value);
            if (isNaN(kilometros)) {
                alert('Por favor ingresa un número');
                return;
            }
            const millas = (kilometros * 0.621371);
            document.getElementById('millas').value = millas.toFixed(5);
>>>>>>> f2be3890d9fe38831b29f6b37fe6c35ff83d2037
        }