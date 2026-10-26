const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { getCssRule, readRequiredFile } = require('./test-utils');

describe('Ejercicio 18: Selectores CSS Básicos', () => {
    const baseDir = path.join(__dirname, '../../src/ejercicio-18');
    const indexPath = path.join(baseDir, 'index.html');
    const cssDir = path.join(baseDir, 'css');
    const cssPath = path.join(cssDir, 'estilos.css');

    describe('Estructura de carpetas', () => {
        test('debe existir la carpeta "ejercicio-18" en "src"', () => {
            expect(fs.existsSync(baseDir)).toBe(true);
        });

        test('debe existir la carpeta "css" dentro de "src/ejercicio-18"', () => {
            expect(fs.existsSync(cssDir)).toBe(true);
        });
    });

    describe('Archivo index.html', () => {
        test('debe existir el archivo "index.html" en "src/ejercicio-18"', () => {
            expect(fs.existsSync(indexPath)).toBe(true);
        });

        test('el archivo "index.html" debe tener la estructura HTML5 básica', () => {
            const content = readRequiredFile(indexPath);
            expect(content).toMatch(/<!DOCTYPE html>/i);
            expect(content).toMatch(/<html lang="es">/i);
            expect(content).toMatch(/<head>/i);
            expect(content).toMatch(/<\/head>/i);
            expect(content).toMatch(/<body>/i);
            expect(content).toMatch(/<\/body>/i);
            expect(content).toMatch(/<title>.*<\/title>/i);
        });

        test('el archivo "index.html" debe enlazar la hoja de estilos "css/estilos.css"', () => {
            const content = readRequiredFile(indexPath);
            const document = new JSDOM(content).window.document;
            expect(document.querySelector('link[rel="stylesheet"][href="css/estilos.css"]')).not.toBeNull();
        });

        test('el archivo "index.html" debe tener un elemento con id="titulo-principal"', () => {
            const content = readRequiredFile(indexPath);
            const document = new JSDOM(content).window.document;
            expect(document.querySelector('#titulo-principal')).not.toBeNull();
        });

        test('el archivo "index.html" debe tener elementos con class="destacado" y class="secundario"', () => {
            const content = readRequiredFile(indexPath);
            const document = new JSDOM(content).window.document;
            expect(document.querySelector('.destacado')).not.toBeNull();
            expect(document.querySelector('.secundario')).not.toBeNull();
        });
    });

    describe('Archivo css/estilos.css', () => {
        const getCss = () => {
            return readRequiredFile(cssPath);
        };

        test('debe existir el archivo "css/estilos.css"', () => {
            expect(fs.existsSync(cssPath)).toBe(true);
        });

        test('debe contener un selector de elemento (body, h1, p, footer, etc.)', () => {
            const content = getCss();
            expect(getCssRule(content, 'body')).not.toBe('');
        });

        test('debe contener el selector de clase ".destacado"', () => {
            const content = getCss();
            expect(getCssRule(content, '.destacado')).not.toBe('');
        });

        test('debe contener el selector de ID "#titulo-principal" (Selección múltiple 2)', () => {
            const content = getCss();
            expect(getCssRule(content, '#titulo-principal')).not.toBe('');
        });

        test('debe contener la propiedad "font-family"', () => {
            const content = getCss();
            expect(getCssRule(content, 'body')).toMatch(/font-family\s*:/);
            expect(getCssRule(content, 'body')).toMatch(/background-color\s*:/);
        });

        test('debe contener "font-size: 20px" (Selección múltiple 1 — propiedad correcta para el tamaño del texto)', () => {
            const content = getCss();
            expect(getCssRule(content, '.destacado')).toMatch(/font-size\s*:\s*20px/);
        });

        test('debe contener la propiedad "color" en al menos un selector', () => {
            const content = getCss();
            expect(getCssRule(content, '.secundario')).toMatch(/\bcolor\s*:/);
            expect(getCssRule(content, 'h1')).toMatch(/text-align\s*:\s*center/);
        });

        test('debe incluir los estilos requeridos para h1, .secundario y #pie-pagina', () => {
            const content = getCss();
            expect(getCssRule(content, 'h1')).toMatch(/\bcolor\s*:/);
            expect(getCssRule(content, '.secundario')).toMatch(/font-style\s*:\s*italic/);
            const footerRule = getCssRule(content, '#pie-pagina');
            expect(footerRule).toMatch(/color\s*:/);
            expect(footerRule).toMatch(/font-size\s*:\s*14px/);
            expect(footerRule).toMatch(/text-align\s*:\s*center/);
            expect(footerRule).toMatch(/margin-top\s*:\s*40px/);
        });
    });
});
