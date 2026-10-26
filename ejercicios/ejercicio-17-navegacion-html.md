# Ejercicio 17: Navegación entre Páginas HTML

## 🖥️ Cómo Visualizar el Ejercicio con Live Server

Para visualizar y trabajar con este ejercicio en tiempo real:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo `src/index.html` (archivo principal del proyecto)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la lista de ejercicios
5. Haz clic en el enlace del **Ejercicio 17** para probar la navegación
6. Verifica que los enlaces entre páginas funcionen correctamente
7. Los cambios que hagas se reflejarán automáticamente en el navegador

## 🎯 Objetivo
Aprender a crear enlaces de navegación entre diferentes páginas HTML de un mismo sitio web utilizando rutas relativas.

### Documentación
- [Enlaces en HTML](https://webtecnodidacticahoy.web.app/html/texto/enlaces.html)

## 📋 Instrucciones

1.  **Añadir enlace en `index.html`**: Abre el archivo `src/ejercicio-15/index.html` y añade un enlace que dirija a `galeria.html`.

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <!-- ... -->
        <title>Página Principal - Ejercicio 15</title>
    </head>
    <body>
        <h1>Página Principal</h1>
        <p>Bienvenido al ejercicio 15. Desde aquí podrás navegar a la galería de imágenes.</p>
        <a href="galeria.html">Ver Galería</a>
    </body>
    </html>
    ```

2.  **Añadir enlace en `galeria.html`**: Abre el archivo `src/ejercicio-15/galeria.html` y añade un enlace de regreso a `index.html`.

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <!-- ... -->
        <title>Galería de Imágenes - Ejercicio 16</title>
    </head>
    <body>
        <h1>Galería de Imágenes</h1>

        <!-- ... tus 6 imágenes ... -->

        <a href="index.html">Volver a la página principal</a>
    </body>
    </html>
    ```

3.  **Requisitos de los enlaces**:
    *   Deben usar rutas relativas.
    *   El texto del enlace debe ser descriptivo.

## ✅ Verificación
Para comprobar que la navegación funciona correctamente, ejecuta el siguiente comando:

```bash
npm test tests/ejercicio/17-navegacion-html.test.js
```
