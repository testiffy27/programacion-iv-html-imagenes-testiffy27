# Ejercicio 21: Aplicar CSS a los Ejercicios 15, 16 y 17

## 🖥️ Cómo Visualizar el Ejercicio con Live Server

Para visualizar y trabajar con este ejercicio en tiempo real:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo `src/index.html` (archivo principal del proyecto)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la lista de ejercicios
5. Haz clic en los enlaces de los **Ejercicios 15, 16 y 17** para ver los cambios visuales
6. Los cambios que hagas se reflejarán automáticamente en el navegador

## 🎯 Objetivo
Vincular una hoja de estilos CSS externa a los archivos HTML creados en los ejercicios 15, 16 y 17 (`index.html` y `galeria.html`). Aplicar estilos de tipografía, colores, layout y efectos interactivos a esos documentos.

> ⚠️ **Importante:** Solo debes **AÑADIR** el enlace `<link>` CSS y los estilos nuevos. **No modifiques** el texto ni la estructura existente de `index.html` ni `galeria.html`. Si eliminas o cambias el contenido ya existente, los tests de los ejercicios 15, 16 y 17 dejarán de pasar.

### Documentación
- [Enlazar CSS externo](https://developer.mozilla.org/es/docs/Learn/CSS/First_steps/How_CSS_is_structured#applying_css_to_html)
- [Pseudo-clase :hover](https://developer.mozilla.org/es/docs/Web/CSS/:hover)
- [Propiedad display](https://developer.mozilla.org/es/docs/Web/CSS/display)

---

## 📋 Instrucciones

### Paso 1 — Crear la carpeta `css`

Dentro de `src/ejercicio-15/`, crea una nueva carpeta llamada `css`:

```
src/
└── ejercicio-15/
    ├── index.html      ← ya existe (no borrar contenido)
    ├── galeria.html    ← ya existe (no borrar contenido)
    ├── images/         ← ya existe
    └── css/            ← NUEVA carpeta
```

### Paso 2 — Añadir el enlace CSS en `index.html`

Abre `src/ejercicio-15/index.html` y agrega la etiqueta `<link>` dentro del `<head>`, **sin eliminar nada** de lo que ya existe:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Principal - Ejercicio 15</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
```

### Paso 3 — Añadir el enlace CSS en `galeria.html`

Abre `src/ejercicio-15/galeria.html` y agrega el mismo `<link>` dentro del `<head>`:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de Imágenes - Ejercicio 16</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
```

### Paso 4 — Crear el archivo `css/estilos.css`

Dentro de `src/ejercicio-15/css/`, crea el archivo `estilos.css`.

#### 4.1 — Estilo base para el `body`

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 20px;
    padding: 0;
    color: #333333;
}
```

#### 4.2 — Estilo para el título `h1`

```css
h1 {
    color: #1a1a2e;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
}
```

#### 4.3 — Estilo para los párrafos

```css
p {
    line-height: 1.6;
}
```

#### 4.4 — Estilo base para los enlaces `<a>`

```css
a {
    color: #007bff;
    text-decoration: none;
}
```

---

### 🔀 Selección Múltiple 1 — Efecto visual al pasar el ratón sobre un enlace

Para cambiar el aspecto del enlace cuando el cursor pasa por encima, necesitas usar una **pseudo-clase CSS**. ¿Cuál de las siguientes opciones usa la sintaxis correcta?

**🅰 Opción A:**
```css
a:hover {
    color: #0056b3;
    text-decoration: underline;
}
```

**🅱 Opción B:**
```css
a.hover {
    color: #0056b3;
    text-decoration: underline;
}
```

**🅲 Opción C:**
```css
a#hover {
    color: #0056b3;
    text-decoration: underline;
}
```

> Copia **solo una** opción en tu `css/estilos.css` y ejecuta el test para comprobar tu elección.  
> Pista: Las pseudo-clases en CSS se escriben con `:` (dos puntos), no con `.` ni con `#`.

---

### 4.5 — Estilo para los pies de foto (`figcaption`)

```css
figcaption {
    text-align: center;
    color: #666666;
    font-size: 14px;
    margin-top: 8px;
}
```

---

### 🔀 Selección Múltiple 2 — Organizar las imágenes de la galería en filas

Las imágenes de la galería se muestran una debajo de otra porque `<figure>` es un elemento de bloque. Para colocarlas **lado a lado**, ¿qué valor de `display` debes usar en el selector `figure`?

**🅰 Opción A:**
```css
figure {
    display: block;
    width: 320px;
    margin: 10px;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    vertical-align: top;
}
```

**🅱 Opción B:**
```css
figure {
    display: none;
    width: 320px;
    margin: 10px;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    vertical-align: top;
}
```

**🅲 Opción C:**
```css
figure {
    display: inline-block;
    width: 320px;
    margin: 10px;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    vertical-align: top;
}
```

> Copia **solo una** opción. Observa en el navegador con Live Server cómo cambia la disposición de las imágenes según el valor que elijas.

---

### Paso 5 — Estilo para las imágenes `img`

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

---

## 📁 Estructura final esperada

```
src/
└── ejercicio-15/
    ├── index.html      ← modificado (solo se añadió <link>)
    ├── galeria.html    ← modificado (solo se añadió <link>)
    ├── images/
    └── css/
        └── estilos.css ← NUEVO
```

## ✅ Verificación

Para verificar solo el ejercicio 21:
```bash
npm test tests/ejercicio/21-css-ejercicios-15-17.test.js
```

Para verificar que los tests anteriores siguen pasando:
```bash
npm test tests/ejercicio/15-estructura-html.test.js
npm test tests/ejercicio/16-galeria-imagenes.test.js
npm test tests/ejercicio/17-navegacion-html.test.js
```

Para ejecutar todos los tests:
```bash
npm test
```

Si todas las pruebas pasan, ¡has completado el ejercicio con éxito!
