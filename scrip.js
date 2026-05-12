// --- FUNCIONALIDADE 1: TEMA CLARO/ESCURO ---
function mudarTema() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('tema-copa', isDark ? 'dark' : 'light');

}

// --- FUNCIONALIDADE 2: TAMANHO DA FONTE ---
let currentFontSize = 16; // Valor inicial em pixels

function mudarfonte(intervalo) {
    currentFontSize += intervalo;
    
    // Limites de segurança para não quebrar o site
    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 28) currentFontSize = 28;
    
    // Aplicamos direto no elemento raiz (HTML)
    // Isso faz com que tudo que usa 'rem' ou não tem tamanho fixo aumente junto
    document.documentElement.style.fontSize = currentFontSize + "px";
}

// Manter o tema ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema-copa');
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-mode');
    }
});