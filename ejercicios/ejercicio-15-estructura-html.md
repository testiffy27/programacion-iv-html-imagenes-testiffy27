# Ejercicio 15: Estructura de Carpetas y Archivo Principal

## 🖥️ Cómo Visualizar el Ejercicio con Live Server

Para visualizar y trabajar con este ejercicio en tiempo real:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo `src/index.html` (archivo principal del proyecto)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la lista de ejercicios
5. Haz clic en el enlace del **Ejercicio 15** para ver tu trabajo
6. Los cambios que hagas se reflejarán automáticamente en el navegador

## 🎯 Objetivo
El objetivo de este ejercicio es aprender a crear una estructura de carpetas organizada y un archivo `index.html` semántico como base para un proyecto web.

### Documentación
- [Estructura de un documento HTML](https://webtecnodidacticahoy.web.app/html/texto/parrafos.html)
- [Semántica HTML](https://webtecnodidacticahoy.web.app/html/semantica/semantica.html)

## 📋 Instrucciones

1.  **Crear la estructura de carpetas**: Dentro de la carpeta `src`, crea una nueva carpeta llamada `ejercicio-15`. Dentro de `ejercicio-15`, crea una carpeta `images`. La estructura debe quedar así:

    ```
    src/
    └── ejercicio-15/
        └── images/
    ```

2.  **Crear el archivo `index.html`**: Dentro de la carpeta `src/ejercicio-15`, crea un archivo llamado `index.html`.

3.  **Añadir contenido a `index.html`**: El archivo `index.html` debe tener la siguiente estructura HTML5 básica:

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Principal - Ejercicio 15</title>
    </head>
    <body>
        <h1>Página Principal</h1>
        <p>Bienvenido al ejercicio 15. Desde aquí podrás navegar a la galería de imágenes.</p>
    </body>
    </html>
    ```

## ✅ Verificación
Para verificar que has completado el ejercicio correctamente, ejecuta el siguiente comando en tu terminal:

```bash
npm test tests/ejercicio/15-estructura-html.test.js
```

Si todas las pruebas pasan, ¡has completado el ejercicio con éxito!