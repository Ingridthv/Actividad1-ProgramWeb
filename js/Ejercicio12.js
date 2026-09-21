        function calcular() {
            const mxn = parseFloat(document.getElementById('mxn').value);
            if (isNaN(mxn)) {
                alert('Por favor ingresa un número');
                return;
            }
            const usd = (mxn / 18.18);
            document.getElementById('usd').value = usd.toFixed(2);
        }