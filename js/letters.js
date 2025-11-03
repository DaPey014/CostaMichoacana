// Envuelve cada letra de los elementos con clase .service-text en un span
// y agrega listeners para aplicar la clase .grow en mouseover/mouseout

(function () {
    'use strict';

    function wrapLetters(node) {
        const text = node.textContent.trim();
        node.innerHTML = '';
        for (const char of text) {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // mantiene espacios
            node.appendChild(span);
        }
    }

    function addHoverEffects(node) {
        node.addEventListener('mouseover', (e) => {
            const spans = node.querySelectorAll('span');
            spans.forEach((s, i) => {
                // pequeño retardo por letra para efecto escalonado
                setTimeout(() => s.classList.add('grow'), i * 25);
            });
        });

        node.addEventListener('mouseout', (e) => {
            const spans = node.querySelectorAll('span');
            spans.forEach((s, i) => {
                setTimeout(() => s.classList.remove('grow'), i * 25);
            });
        });
    }

    function init() {
        const items = document.querySelectorAll('.service-text');
        items.forEach(item => {
            wrapLetters(item);
            addHoverEffects(item);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
