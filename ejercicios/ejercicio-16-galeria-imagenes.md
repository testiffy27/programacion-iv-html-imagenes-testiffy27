# Ejercicio 16: Creación de una Galería de Imágenes

## 🖥️ Cómo Visualizar el Ejercicio con Live Server

Para visualizar y trabajar con este ejercicio en tiempo real:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo `src/index.html` (archivo principal del proyecto)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la lista de ejercicios
5. Haz clic en el enlace del **Ejercicio 16** para ver tu galería de imágenes
6. Los cambios que hagas se reflejarán automáticamente en el navegador

## 🎯 Objetivo
Aprender a insertar imágenes en una página web utilizando las etiquetas `figure` y `figcaption` para una estructura semántica, y configurar los atributos esenciales de la imagen como `src`, `alt`, `width`, `height` y `title`.

### Documentación
- [Imágenes en HTML](https://webtecnodidacticahoy.web.app/html/Multimedia/imagenes.html)
- [Elementos `figure` y `figcaption`](https://developer.mozilla.org/es/docs/Web/HTML/Element/figure)

## 📋 Instrucciones

1.  **Crear el archivo `galeria.html`**: Dentro de la carpeta `src/ejercicio-15`, crea un nuevo archivo llamado `galeria.html`.

2.  **Añadir imágenes**: Descarga 6 imágenes de tu elección y guárdalas en la carpeta `src/ejercicio-15/images`. Puedes usar imágenes de `https://picsum.photos/` o cualquier otra fuente. Asegúrate de que los nombres de archivo no contengan espacios (usa guiones o guiones bajos).

3.  **Estructura de `galeria.html`**: El archivo debe tener una estructura HTML5 básica y contener una galería con exactamente 6 imágenes.

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Galería de Imágenes - Ejercicio 16</title>
    </head>
    <body>
        <h1>Galería de Imágenes</h1>

        <figure>
            <img src="images/nombre-de-tu-imagen-1.jpg" alt="Descripción de la imagen 1" width="300" height="200" title="Título de la imagen 1">
            <figcaption>Descripción de la imagen 1 con más detalle.</figcaption>
        </figure>

        <figure>
            <img src="images/nombre-de-tu-imagen-2.jpg" alt="Descripción de la imagen 2" width="300" height="200" title="Título de la imagen 2">
            <figcaption>Descripción de la imagen 2 con más detalle.</figcaption>
        </figure>

        <!-- Repite la estructura para las 6 imágenes -->

    </body>
    </html>
    ```

4.  **Requisitos para cada imagen**:
    *   **`src`**: La ruta a la imagen debe ser relativa (ej. `images/mi-imagen.jpg`).
    *   **`alt`**: Un texto alternativo descriptivo.
    *   **`width` y `height`**: El ancho y alto de la imagen en píxeles.
    *   **`title`**: Un título que se mostrará como tooltip.
    *   Cada imagen debe estar contenida en un elemento `<figure>` con su respectivo `<figcaption>`.

## ✅ Verificación
Para verificar tu trabajo, ejecuta el siguiente comando:

```bash
npm test tests/ejercicio/16-galeria-imagenes.test.js
```
