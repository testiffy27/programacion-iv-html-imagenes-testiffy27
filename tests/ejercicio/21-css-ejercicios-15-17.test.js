const fs = require('fs');
const path = require('path');
const { getCssRule, readRequiredFile } = require('./test-utils');

describe('Ejercicio 21: CSS para Ejercicios 15, 16 y 17', () => {
    const baseDir = path.join(__dirname, '../../src/ejercicio-15');
    const indexPath = path.join(baseDir, 'index.html');
    const galeriaPath = path.join(baseDir, 'galeria.html');
    const cssDir = path.join(baseDir, 'css');
    const cssPath = path.join(cssDir, 'estilos.css');

    const getCss = () => {
        return readRequiredFile(cssPath);
    };

    describe('Estructura de carpetas', () => {
        test('debe existir la carpeta "css" dentro de "src/ejercicio-15"', () => {
            expect(fs.existsSync(cssDir)).toBe(true);
        });
    });

    describe('Enlace CSS en los archivos HTML existentes', () => {
        test('el archivo "index.html" debe enlazar "css/estilos.css" sin perder su contenido original', () => {
            const content = readRequiredFile(indexPath);
            expect(content).toMatch(/href=["']css\/estilos\.css["']/);
            // Verificar que el contenido original de ejercicio 15 sigue intacto
            expect(content).toMatch(/<h1>Página Principal<\/h1>/i);
        });

        test('el archivo "galeria.html" debe enlazar "css/estilos.css" sin perder su contenido original', () => {
            const content = readRequiredFile(galeriaPath);
            expect(content).toMatch(/href=["']css\/estilos\.css["']/);
            // Verificar que el contenido original de ejercicio 16 sigue intacto
            const { JSDOM } = require('jsdom');
            const dom = new JSDOM(content);
            const images = dom.window.document.querySelectorAll('img');
            expect(images.length).toBe(6);
        });
    });

    describe('Archivo css/estilos.css', () => {
        test('debe existir el archivo "css/estilos.css" en "src/ejercicio-15/css"', () => {
            expect(fs.existsSync(cssPath)).toBe(true);
        });

        test('debe aplicar estilos al selector "body" con la propiedad "font-family"', () => {
            const content = getCss();
            expect(getCssRule(content, 'body')).toMatch(/font-family\s*:/);
        });

        test('debe aplicar la propiedad "color" al selector "h1"', () => {
            const content = getCss();
            expect(getCssRule(content, 'h1')).toMatch(/\bcolor\s*:/);
            expect(getCssRule(content, 'h1')).toMatch(/border-bottom\s*:/);
        });

        test('debe contener la pseudo-clase "a:hover" para el efecto al pasar el ratón (Selección múltiple 1)', () => {
            const content = getCss();
            expect(getCssRule(content, 'a:hover')).not.toBe('');
        });

        test('debe contener "display: inline-block" en el selector "figure" para organizar la galería (Selección múltiple 2)', () => {
            const content = getCss();
            expect(getCssRule(content, 'figure')).toMatch(/display\s*:\s*inline-block/);
        });

        test('debe contener las propiedades "padding" y "margin"', () => {
            const content = getCss();
            expect(getCssRule(content, 'body')).toMatch(/\bmargin\s*:/);
            expect(getCssRule(content, 'body')).toMatch(/\bpadding\s*:/);
            expect(getCssRule(content, 'figure')).toMatch(/\bpadding\s*:/);
            expect(getCssRule(content, 'figure')).toMatch(/\bmargin\s*:/);
        });

        test('debe tener al menos 4 reglas de estilo CSS', () => {
            const content = getCss();
            const rules = (content.match(/\{/g) || []).length;
            expect(rules).toBeGreaterThanOrEqual(4);
        });

        test('debe estilizar los párrafos, enlaces, pies de foto e imágenes', () => {
            const content = getCss();
            expect(getCssRule(content, 'p')).toMatch(/line-height\s*:/);
            expect(getCssRule(content, 'a')).toMatch(/color\s*:/);
            expect(getCssRule(content, 'figcaption')).toMatch(/text-align\s*:/);
            expect(getCssRule(content, 'img')).toMatch(/max-width\s*:\s*100%/);
            expect(getCssRule(content, 'img')).toMatch(/height\s*:\s*auto/);
        });
    });
});
