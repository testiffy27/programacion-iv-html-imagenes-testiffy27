const fs = require('fs');
const path = require('path');
const { getCssRule, readRequiredFile } = require('./test-utils');

describe('Ejercicio 19: Colores y Fondos CSS', () => {
    const baseDir = path.join(__dirname, '../../src/ejercicio-18');
    const coloresPath = path.join(baseDir, 'colores.html');
    const cssPath = path.join(baseDir, 'css', 'colores.css');

    describe('Archivo colores.html', () => {
        test('debe existir el archivo "colores.html" en "src/ejercicio-18"', () => {
            expect(fs.existsSync(coloresPath)).toBe(true);
        });

        test('el archivo "colores.html" debe tener la estructura HTML5 básica', () => {
            const content = readRequiredFile(coloresPath);
            expect(content).toMatch(/<!DOCTYPE html>/i);
            expect(content).toMatch(/<html lang="es">/i);
            expect(content).toMatch(/<head>/i);
            expect(content).toMatch(/<\/head>/i);
            expect(content).toMatch(/<body>/i);
            expect(content).toMatch(/<\/body>/i);
            expect(content).toMatch(/<meta charset="UTF-8">/i);
            expect(content).toMatch(/<title>.*<\/title>/i);
        });

        test('el archivo "colores.html" debe enlazar la hoja de estilos "css/colores.css"', () => {
            const content = readRequiredFile(coloresPath);
            expect(content).toMatch(/href=["']css\/colores\.css["']/);
        });
    });

    describe('Archivo css/colores.css', () => {
        const getCss = () => {
            return readRequiredFile(cssPath);
        };

        test('debe existir el archivo "css/colores.css"', () => {
            expect(fs.existsSync(cssPath)).toBe(true);
        });

        test('debe contener al menos un color en formato hexadecimal (#RRGGBB o #RGB) (Selección múltiple 1)', () => {
            const content = getCss();
            const hexColor = /color\s*:\s*#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/;
            expect(getCssRule(content, '.texto-primario')).toMatch(hexColor);
            expect(getCssRule(content, '.titulo')).toMatch(hexColor);
        });

        test('debe contener al menos un color con la función rgb()', () => {
            const content = getCss();
            expect(getCssRule(content, '.texto-secundario')).toMatch(/color\s*:\s*rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/);
        });

        test('debe contener la función rgba() para color semitransparente (Selección múltiple 2)', () => {
            const content = getCss();
            expect(getCssRule(content, '.caja-transparente')).toMatch(/background-color\s*:\s*rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\.3\s*\)/);
        });

        test('debe contener la propiedad "background-color"', () => {
            const content = getCss();
            expect(getCssRule(content, '.caja-fondo')).toMatch(/background-color\s*:/);
            expect(getCssRule(content, '.contenedor')).toMatch(/background-color\s*:/);
        });

        test('debe contener la propiedad "color" para el texto', () => {
            const content = getCss();
            expect(getCssRule(content, '.texto-primario')).toMatch(/\bcolor\s*:/);
        });

        test('debe tener al menos 3 reglas de estilo CSS', () => {
            const content = getCss();
            const rules = (content.match(/\{/g) || []).length;
            expect(rules).toBeGreaterThanOrEqual(3);
        });

        test('debe definir el tamaño del texto secundario y el layout del contenedor', () => {
            const content = getCss();
            expect(getCssRule(content, '.texto-secundario')).toMatch(/font-size\s*:\s*16px/);
            expect(getCssRule(content, '.contenedor')).toMatch(/max-width\s*:\s*700px/);
            expect(getCssRule(content, '.contenedor')).toMatch(/padding\s*:/);
            expect(getCssRule(content, '.contenedor')).toMatch(/margin\s*:/);
        });
    });
});
