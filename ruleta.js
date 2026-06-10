// ==========================================
// 1. BASE DE DATOS SECRETA DE LA RULETA
// (Cada código tiene su destino escrito)
// ==========================================
const baseDeDatosCodigos = {
    // 3 Pines de Plástico
    "XK9-B4M": "Pin de Plástico Gratis",
    "T7W-R2P": "Pin de Plástico Gratis",
    "L5N-J8C": "Pin de Plástico Gratis",
    
    // 2 Descuentos
    "V3D-Q9F": "10% de Descuento",
    "H6Y-K1T": "10% de Descuento",

    // 10 Sigue participando
    "P8M-C4W": "¡Sigue participando!", "D2R-F7N": "¡Sigue participando!",
    "J9C-W3X": "¡Sigue participando!", "M1T-L6B": "¡Sigue participando!",
    "Y4V-K8H": "¡Sigue participando!", "G7P-N2R": "¡Sigue participando!",
    "X5B-D9M": "¡Sigue participando!", "W3F-J1C": "¡Sigue participando!",
    "R6N-T8P": "¡Sigue participando!", "K2H-V5Y": "¡Sigue participando!",

    // 10 Gracias por tu compra
    "B4C-M9X": "¡Gracias por tu compra!", "F8T-R2N": "¡Gracias por tu compra!",
    "N1P-L5W": "¡Gracias por tu compra!", "C7D-J3M": "¡Gracias por tu compra!",
    "H2B-V8K": "¡Gracias por tu compra!", "T5R-P9C": "¡Gracias por tu compra!",
    "W6N-F4Y": "¡Gracias por tu compra!", "L3X-D7B": "¡Gracias por tu compra!",
    "M8K-R1T": "¡Gracias por tu compra!", "V9P-C5N": "¡Gracias por tu compra!"
};

// ==========================================
// 2. LÓGICA DE VALIDACIÓN Y GIRO
// ==========================================
function abrirRuleta() {
    document.getElementById('modal-ruleta').classList.remove('hidden');
    document.getElementById('resultado-ruleta').classList.add('hidden');
    document.getElementById('input-codigo').value = '';
    
    // Pintamos la ruleta para que coincida con los 4 premios
    const rueda = document.getElementById('rueda-ruleta');
    rueda.style.background = `conic-gradient(
        #31cddb 0 90deg,      /* Pin Gratis */
        #f4f4f4 90deg 180deg,  /* Sigue Participando */
        #ffaa00 180deg 270deg, /* Descuento */
        #e2e8f0 270deg 360deg  /* Gracias */
    )`;
}

function cerrarRuleta() {
    document.getElementById('modal-ruleta').classList.add('hidden');
}

function girarRuleta() {
    const input = document.getElementById('input-codigo').value.trim().toUpperCase();
    const errorMsg = document.getElementById('error-codigo');
    
    // Recuperar códigos ya usados en este navegador (Sistema Anti-trampas)
    let codigosUsados = JSON.parse(localStorage.getItem('codigosUsados')) || [];

    // Validaciones
    if (!baseDeDatosCodigos.hasOwnProperty(input)) {
        errorMsg.innerText = "Código inválido o mal escrito. Verifica e intenta de nuevo.";
        return;
    }
    if (codigosUsados.includes(input)) {
        errorMsg.innerText = "Este código ya fue utilizado.";
        return;
    }

    // Si es válido, lo marcamos como usado
    errorMsg.innerText = "";
    codigosUsados.push(input);
    localStorage.setItem('codigosUsados', JSON.stringify(codigosUsados));

    // Bloqueamos el botón mientras gira
    const rueda = document.getElementById('rueda-ruleta');
    const botonGirar = document.getElementById('btn-girar');
    botonGirar.disabled = true;
    botonGirar.innerText = "Girando...";

    // Vemos qué premio le toca según el código
    const premioGanado = baseDeDatosCodigos[input];

    // Calculamos los grados para que la ruleta se detenga exactamente en el color correcto
    let gradosGiro = 1800; // 5 vueltas completas de emoción
    if (premioGanado === "Pin de Plástico Gratis") gradosGiro += 315;
    else if (premioGanado === "¡Sigue participando!") gradosGiro += 225;
    else if (premioGanado === "10% de Descuento") gradosGiro += 135;
    else if (premioGanado === "¡Gracias por tu compra!") gradosGiro += 45;

    // Aplicamos el giro visual
    rueda.style.transform = `rotate(${gradosGiro}deg)`;

    // Esperamos 4 segundos a que termine de girar para mostrar el mensaje
    setTimeout(() => {
        mostrarResultado(premioGanado, input);
        botonGirar.disabled = false;
        botonGirar.innerText = "Girar Ruleta";
        // Reseteamos la posición visual para el próximo intento (opcional)
        rueda.style.transitionDuration = '0s';
        rueda.style.transform = `rotate(${gradosGiro % 360}deg)`;
        setTimeout(() => rueda.style.transitionDuration = '4s', 50);
    }, 4000); 
}

function mostrarResultado(premio, codigo) {
    const contenedorResultado = document.getElementById('resultado-ruleta');
    const textoPremio = document.getElementById('texto-premio');
    const btnReclamar = document.getElementById('btn-reclamar');
    
    contenedorResultado.classList.remove('hidden');
    
    // Verificamos si es un premio ganador o no
    if (premio === "¡Sigue participando!" || premio === "¡Gracias por tu compra!") {
        textoPremio.innerHTML = `<span class="text-slate-400 font-medium">La ruleta se ha detenido en:<br><span class="text-xl text-white font-bold">${premio}</span><br>¡Te esperamos en tu próxima compra!</span>`;
        btnReclamar.classList.add('hidden'); // Escondemos el botón de WhatsApp
    } else {
        textoPremio.innerHTML = `<span class="text-white">¡Felicidades! Te has ganado: <br><span class="text-3xl font-black text-[#ffaa00]">${premio}</span></span>`;
        btnReclamar.classList.remove('hidden'); // Mostramos el botón de WhatsApp
        
        // Configuramos el botón para que te avise por WhatsApp
        const mensaje = `¡Hola! Usé mi código especial *${codigo}* en la ruleta de la página y me gané: *${premio}*. ¿Cómo puedo reclamarlo?`;
        btnReclamar.onclick = () => {
            window.open(`https://wa.me/50300000000?text=${encodeURIComponent(mensaje)}`, '_blank');
        };
    }
}