const fs = require('fs');
const path = require('path');
const { getCssRule, readRequiredFile } = require('./test-utils');

describe('Ejercicio 20: Bordes y Modelo de Caja CSS', () => {
    const baseDir = path.join(__dirname, '../../src/ejercicio-18');
    const bordesPath = path.join(baseDir, 'bordes.html');
    const cssPath = path.join(baseDir, 'css', 'bordes.css');

    describe('Archivo bordes.html', () => {
        test('debe existir el archivo "bordes.html" en "src/ejercicio-18"', () => {
            expect(fs.existsSync(bordesPath)).toBe(true);
        });

        test('el archivo "bordes.html" debe tener la estructura HTML5 básica', () => {
            const content = readRequiredFile(bordesPath);
            expect(content).toMatch(/<!DOCTYPE html>/i);
            expect(content).toMatch(/<html lang="es">/i);
            expect(content).toMatch(/<head>/i);
            expect(content).toMatch(/<\/head>/i);
            expect(content).toMatch(/<body>/i);
            expect(content).toMatch(/<\/body>/i);
            expect(content).toMatch(/<meta charset="UTF-8">/i);
            expect(content).toMatch(/<title>.*<\/title>/i);
        });

        test('el archivo "bordes.html" debe enlazar la hoja de estilos "css/bordes.css"', () => {
            const content = readRequiredFile(bordesPath);
            expect(content).toMatch(/href=["']css\/bordes\.css["']/);
        });
    });

    describe('Archivo css/bordes.css', () => {
        const getCss = () => {
            return readRequiredFile(cssPath);
        };

        test('debe existir el archivo "css/bordes.css"', () => {
            expect(fs.existsSync(cssPath)).toBe(true);
        });

        test('debe contener el shorthand "border" con grosor, estilo y color (Selección múltiple 1)', () => {
            const content = getCss();
            expect(getCssRule(content, '.tarjeta')).toMatch(/border\s*:\s*\d+px\s+(solid|dashed|dotted|double|groove|ridge)\s+\S+/);
        });

        test('debe contener "border-radius: 50%" para crear un elemento circular (Selección múltiple 2)', () => {
            const content = getCss();
            expect(getCssRule(content, '.circulo')).toMatch(/border-radius\s*:\s*50%/);
            expect(getCssRule(content, '.circulo')).toMatch(/width\s*:\s*100px/);
            expect(getCssRule(content, '.circulo')).toMatch(/height\s*:\s*100px/);
        });

        test('debe contener la propiedad "padding"', () => {
            const content = getCss();
            expect(getCssRule(content, '.caja-espaciado')).toMatch(/\bpadding\s*:/);
        });

        test('debe contener la propiedad "margin"', () => {
            const content = getCss();
            expect(getCssRule(content, '.caja-espaciado')).toMatch(/\bmargin\s*:/);
        });

        test('debe contener la propiedad "box-shadow" (CSS intermedio)', () => {
            const content = getCss();
            expect(getCssRule(content, '.tarjeta')).toMatch(/box-shadow\s*:/);
            expect(getCssRule(content, '.tarjeta')).toMatch(/background-color\s*:/);
        });

        test('debe contener la propiedad "text-align"', () => {
            const content = getCss();
            expect(getCssRule(content, '.tarjeta h1')).toMatch(/text-align\s*:/);
        });
    });
});
