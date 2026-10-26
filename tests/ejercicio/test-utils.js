const fs = require('fs');

function readRequiredFile(filePath) {
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
        throw new Error(`El archivo requerido para el ejercicio no existe o no es un archivo: ${filePath}`);
    }

    return fs.readFileSync(filePath, 'utf8');
}

function getCssRule(content, selector) {
    const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = content.match(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`, 'i'));
    return match ? match[1] : '';
}

module.exports = { getCssRule, readRequiredFile };
