const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { readRequiredFile } = require('./test-utils');

describe('Ejercicio 17: Navegación entre Páginas HTML', () => {
    const baseDir = path.join(__dirname, '../../src/ejercicio-15');
    const indexPath = path.join(baseDir, 'index.html');
    const galeriaPath = path.join(baseDir, 'galeria.html');

    test('el archivo "index.html" debe contener un enlace a "galeria.html"', () => {
        const html = readRequiredFile(indexPath);
        const dom = new JSDOM(html);
        const link = dom.window.document.querySelector('a[href="galeria.html"]');
        expect(link).not.toBeNull();
        if (link) expect(link.textContent.trim()).not.toBe('');
    });

    test('el archivo "galeria.html" debe contener un enlace de regreso a "index.html"', () => {
        const html = readRequiredFile(galeriaPath);
        const dom = new JSDOM(html);
        const link = dom.window.document.querySelector('a[href="index.html"]');
        expect(link).not.toBeNull();
        if (link) expect(link.textContent.trim()).not.toBe('');
    });
});
