// ==========================================
// 1. VARIABLES DE ESTADO GLOBALES
// (Memoria temporal de la página)
// ==========================================
let categoriaSeleccionada = 'Todos';
let pinSeleccionado = null;
let indiceImagenActual = 0;

// ==========================================
// 2. FUNCIONES DE RENDERIZADO (Pintar en HTML)
// ==========================================
function renderCategorias() {
    const container = document.getElementById('categorias-container');
    container.innerHTML = '';
    
    categorias.forEach(cat => {
        const isActive = categoriaSeleccionada === cat;
        const button = document.createElement('button');
        
        button.className = `px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 ${
            isActive
            ? 'bg-sky-500 text-slate-950 font-medium shadow-lg shadow-sky-500/20 scale-105'
            : 'border border-slate-700/50 text-slate-400 hover:border-sky-500/50 hover:text-sky-400 bg-slate-900/30'
        }`;
        button.innerText = cat;
        button.onclick = () => {
            categoriaSeleccionada = cat;
            renderCategorias();
            renderPines();
        };
        
        container.appendChild(button);
    });
}

function renderPines() {
    const grid = document.getElementById('pines-grid');
    const noResults = document.getElementById('no-results');
    grid.innerHTML = '';
    
    // Filtrado lógico
    const filtrados = categoriaSeleccionada === 'Todos' 
        ? pines 
        : pines.filter(p => p.category === categoriaSeleccionada);

    // Si no hay resultados, mostramos el mensaje
    if (filtrados.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    } else {
        grid.classList.remove('hidden');
        noResults.classList.add('hidden');
    }

    // Dibujar tarjetas
    filtrados.forEach(pin => {
        const card = document.createElement('div');
        card.className = "group cursor-pointer flex flex-col h-full";
        card.onclick = () => abrirModal(pin.id);

        const countIndicator = pin.imageUrls.length > 1 
            ? `<div class="absolute bottom-2 right-2 bg-black/10 backdrop-blur-sm text-[10px] font-bold px-1.5 py-0.5 rounded text-gray-700 z-10">1/${pin.imageUrls.length}</div>` 
            : '';
            
        const badge = pin.bestSeller 
            ? `<div class="absolute top-4 left-4 bg-[#ffaa00] text-white text-[10px] font-bold px-2 py-0.5 tracking-wider z-10 shadow-sm">BEST SELLER</div>` 
            : '';

        card.innerHTML = `
            <div class="flex flex-col bg-[#f4f4f4] rounded-sm border border-gray-300/50 overflow-hidden h-full shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300">
                <div class="relative aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-200">
                    ${badge}
                    <img src="${pin.imageUrls[0]}" alt="${pin.name}" class="object-contain w-full h-full drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none"></div>
                    ${countIndicator}
                </div>
                <div class="flex flex-col flex-1 p-4">
                    <span class="text-[11px] text-gray-500 mb-0.5 font-medium">${pin.category}</span>
                    <h3 class="text-[13px] font-black text-black uppercase leading-tight mb-0.5 group-hover:text-[#31cddb] transition-colors line-clamp-2">${pin.name}</h3>
                    <span class="text-[12px] text-gray-600 mb-4">Pin</span>
                    <div class="mt-auto flex items-center justify-between">
                        <button class="bg-[#31cddb] hover:bg-[#28b6c3] text-white font-bold text-[11px] px-4 py-1.5 rounded-sm transition-colors shadow-sm" onclick="abrirModal(${pin.id}); event.stopPropagation();">VER MÁS</button>
                        <span class="font-black text-[#31cddb] text-lg">$${pin.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

// ==========================================
// 3. LÓGICA DEL MODAL (Vista Detallada)
// ==========================================
function abrirModal(id) {
    pinSeleccionado = pines.find(p => p.id === id);
    indiceImagenActual = 0;
    renderModalContent();
    document.getElementById('modal').classList.remove('hidden');
}

function cerrarModal() {
    document.getElementById('modal').classList.add('hidden');
    pinSeleccionado = null;
}

function cambiarImagen(index) {
    indiceImagenActual = index;
    renderModalContent();
}

function imagenSiguiente(e) {
    if(e) e.stopPropagation();
    if(pinSeleccionado) {
        indiceImagenActual = (indiceImagenActual === pinSeleccionado.imageUrls.length - 1) ? 0 : indiceImagenActual + 1;
        renderModalContent();
    }
}

function imagenAnterior(e) {
    if(e) e.stopPropagation();
    if(pinSeleccionado) {
        indiceImagenActual = (indiceImagenActual === 0) ? pinSeleccionado.imageUrls.length - 1 : indiceImagenActual - 1;
        renderModalContent();
    }
}

// ==========================================
// 4. SISTEMA DE COMPRA
// ==========================================
function comprar() {
    const mensaje = `¡Hola! Me interesa comprar el "${pinSeleccionado.name}" (ID: ${pinSeleccionado.id}) que cuesta $${pinSeleccionado.price.toFixed(2)}. ¿Sigue disponible?`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// ==========================================
// 5. RENDERIZADO DEL MODAL
// ==========================================
function renderModalContent() {
    if (!pinSeleccionado) return;
    
    const modalContent = document.getElementById('modal-content');
    const tieneMultiples = pinSeleccionado.imageUrls.length > 1;

    let miniaturasHtml = '';
    if (tieneMultiples) {
        miniaturasHtml = `<div class="flex gap-2 p-4 overflow-x-auto bg-slate-900 border-t border-slate-800 scrollbar-hide">`;
        pinSeleccionado.imageUrls.forEach((url, index) => {
            const activeClass = index === indiceImagenActual ? 'border-sky-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100';
            miniaturasHtml += `
                <button onclick="cambiarImagen(${index})" class="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeClass}">
                    <img src="${url}" class="w-full h-full object-cover" />
                </button>
            `;
        });
        miniaturasHtml += `</div>`;
    }

    let flechasHtml = '';
    if (tieneMultiples) {
        flechasHtml = `
            <button onclick="imagenAnterior(event)" class="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-slate-950/40 hover:bg-slate-950/80 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100">
                <i data-lucide="chevron-left" class="h-6 w-6"></i>
            </button>
            <button onclick="imagenSiguiente(event)" class="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-950/40 hover:bg-slate-950/80 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100">
                <i data-lucide="chevron-right" class="h-6 w-6"></i>
            </button>
        `;
    }

    modalContent.innerHTML = `
        <button onclick="cerrarModal()" class="absolute top-4 right-4 z-20 p-2 bg-slate-950/50 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
            <i data-lucide="x" class="h-5 w-5"></i>
        </button>

        <div class="w-full md:w-1/2 flex flex-col bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800">
            <div class="relative aspect-square w-full group flex-1">
                <img src="${pinSeleccionado.imageUrls[indiceImagenActual]}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" />
                ${flechasHtml}
            </div>
            ${miniaturasHtml}
        </div>

        <div class="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
            <span class="text-sky-500 text-xs font-medium tracking-[0.2em] uppercase mb-3">Pieza #${pinSeleccionado.id}</span>
            <h2 class="text-3xl font-light text-white mb-2">${pinSeleccionado.name}</h2>
            <span class="text-2xl font-medium text-slate-300 mb-6">$${pinSeleccionado.price.toFixed(2)}</span>
            <div class="h-px w-full bg-slate-800 mb-6 shrink-0"></div>
            <p class="text-slate-400 font-light leading-relaxed mb-8">${pinSeleccionado.fullDesc}</p>
            <div class="space-y-4 mb-10 text-sm font-light">
                <div class="flex justify-between border-b border-slate-800/50 pb-2">
                    <span class="text-slate-500">Material</span>
                    <span class="text-slate-300">${pinSeleccionado.material}</span>
                </div>
                <div class="flex justify-between border-b border-slate-800/50 pb-2">
                    <span class="text-slate-500">Dimensiones</span>
                    <span class="text-slate-300">${pinSeleccionado.size}</span>
                </div>
            </div>
            <button onclick="comprar()" class="w-full mt-auto flex items-center justify-center gap-2 bg-sky-600/90 hover:bg-sky-500 text-white py-4 px-6 rounded-xl font-medium transition-all shadow-lg shadow-sky-900/20 shrink-0">
                <i data-lucide="message-circle" class="h-5 w-5"></i>
                Adquirir vía WhatsApp
            </button>
        </div>
    `;
    lucide.createIcons();
}

// ==========================================
// 6. INICIALIZACIÓN DE LA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderCategorias();
    renderPines();
    lucide.createIcons();
});