// Números a adivinar
const numerosAdivinar = [];
for (let i = 0; i <= 1000; i++) {
    numerosAdivinar.push(i);
}

// Número aleatorio
const numeroAleatorio = numerosAdivinar[Math.floor(Math.random() * numerosAdivinar.length)];

// Contador de chances
let chances = 10;

// Arreglo para almacenar los números seleccionados
const numerosSeleccionados = [];

function adivinarNumero() {
    // Obtener el número seleccionado por el usuario
    const numeroSeleccionado = parseInt(document.getElementById('numeroSeleccionado').value);

    // Comprobar si el número seleccionado está en el arreglo
    if (numerosAdivinar.includes(numeroSeleccionado)) {
        // Quitar el número seleccionado del arreglo
        const indice = numerosAdivinar.indexOf(numeroSeleccionado);
        numerosAdivinar.splice(indice, 1);

        // Decrementar el contador de chances
        chances--;

        // Mostrar si el número es mayor o menor
        if (numeroSeleccionado < numeroAleatorio) {
            document.getElementById('resultado').innerText = 'El número es mayor. Intenta de nuevo.';
        } else if (numeroSeleccionado > numeroAleatorio) {
            document.getElementById('resultado').innerText = 'El número es menor. Intenta de nuevo.';
        } else {
            document.getElementById('resultado').innerText = '¡Felicidades! Has adivinado el número.';
        }
    } else {
        document.getElementById('resultado').innerText = 'Por favor, selecciona un número válido entre 0 y 1000.';
    }

    // Mostrar el número de chances restantes
    document.getElementById('chances').innerText = `Chances restantes: ${chances}`;

    // Mostrar los números seleccionados
    numerosSeleccionados.push(numeroSeleccionado);
    document.getElementById('numerosSeleccionados').innerText = `Números seleccionados: ${numerosSeleccionados.join(', ')}`;

    // Verificar si se agotaron las chances
    if (chances === 0) {
        document.getElementById('resultado').innerText = '¡Se han agotado las chances! El número era: ' + numeroAleatorio;
    }
}
