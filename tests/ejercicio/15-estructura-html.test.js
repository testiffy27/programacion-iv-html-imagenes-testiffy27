const fs = require('fs');
const path = require('path');
const { readRequiredFile } = require('./test-utils');

describe('Ejercicio 15: Estructura de Carpetas y Archivo Principal', () => {
    const baseDir = path.join(__dirname, '../../src/ejercicio-15');
    const indexPath = path.join(baseDir, 'index.html');

    test('debe existir la carpeta "ejercicio-15" en "src"', () => {
        expect(fs.existsSync(baseDir)).toBe(true);
    });

    test('debe existir la carpeta "images" en "src/ejercicio-15"', () => {
        const imagesDir = path.join(baseDir, 'images');
        expect(fs.existsSync(imagesDir)).toBe(true);
        if (fs.existsSync(imagesDir)) expect(fs.statSync(imagesDir).isDirectory()).toBe(true);
    });

    test('debe existir el archivo "index.html" en "src/ejercicio-15"', () => {
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
        expect(content).toMatch(/<meta charset="UTF-8">/i);
        expect(content).toMatch(/<meta name="viewport" content="width=device-width, initial-scale=1\.0">/i);
        expect(content).toMatch(/<title>.*<\/title>/i);
    });

    test('el archivo "index.html" debe contener un h1 y un p', () => {
        const content = readRequiredFile(indexPath);
        expect(content).toMatch(/<h1>Página Principal<\/h1>/i);
        expect(content).toMatch(/<p>Bienvenido al ejercicio 15. Desde aquí podrás navegar a la galería de imágenes.<\/p>/i);
    });
});
