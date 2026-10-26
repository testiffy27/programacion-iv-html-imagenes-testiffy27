const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { readRequiredFile } = require('./test-utils');

describe('Ejercicio 16: Creación de una Galería de Imágenes', () => {
    const galeriaPath = path.join(__dirname, '../../src/ejercicio-15/galeria.html');

    test('debe existir el archivo "galeria.html"', () => {
        expect(fs.existsSync(galeriaPath)).toBe(true);
    });

    test('el archivo "galeria.html" debe tener la estructura HTML5 básica', () => {
        const content = readRequiredFile(galeriaPath);
        expect(content).toMatch(/<!DOCTYPE html>/i);
        expect(content).toMatch(/<html lang="es">/i);
        expect(content).toMatch(/<head>/i);
        expect(content).toMatch(/<\/head>/i);
        expect(content).toMatch(/<meta charset="UTF-8">/i);
        expect(content).toMatch(/<title>.*<\/title>/i);
        expect(content).toMatch(/<body>/i);
        expect(content).toMatch(/<\/body>/i);
    });

    test('la galería debe contener exactamente 6 imágenes', () => {
        const dom = new JSDOM(readRequiredFile(galeriaPath));
        const images = dom.window.document.querySelectorAll('img');
        expect(images.length).toBe(6);
    });

    test('cada imagen debe estar dentro de un <figure> y tener un <figcaption>', () => {
        const dom = new JSDOM(readRequiredFile(galeriaPath));
        const figures = dom.window.document.querySelectorAll('figure');
        expect(figures.length).toBe(6);
        figures.forEach(figure => {
            expect(figure.querySelector('img')).not.toBeNull();
            const caption = figure.querySelector('figcaption');
            expect(caption).not.toBeNull();
            if (caption) expect(caption.textContent.trim()).not.toBe('');
        });
    });

    test('cada imagen debe tener los atributos src, alt, width, height y title', () => {
        const dom = new JSDOM(readRequiredFile(galeriaPath));
        const images = dom.window.document.querySelectorAll('img');
        images.forEach(img => {
            expect(img.hasAttribute('src')).toBe(true);
            expect(img.getAttribute('src')).not.toBe('');
            expect(img.hasAttribute('alt')).toBe(true);
            expect(img.getAttribute('alt')).not.toBe('');
            expect(img.hasAttribute('width')).toBe(true);
            expect(img.getAttribute('width')).toMatch(/^[1-9]\d*$/);
            expect(img.hasAttribute('height')).toBe(true);
            expect(img.getAttribute('height')).toMatch(/^[1-9]\d*$/);
            expect(img.hasAttribute('title')).toBe(true);
            expect(img.getAttribute('title')).not.toBe('');
            expect(img.getAttribute('src')).toMatch(/^images\/[^/]+/);
        });
    });
});
