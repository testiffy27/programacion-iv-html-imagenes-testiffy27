# Ejercicio 18: Selectores CSS Básicos

## 🖥️ Cómo Visualizar el Ejercicio con Live Server

Para visualizar y trabajar con este ejercicio en tiempo real:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo `src/index.html` (archivo principal del proyecto)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la lista de ejercicios
5. Haz clic en el enlace del **Ejercicio 18** para ver tu trabajo
6. Los cambios que hagas se reflejarán automáticamente en el navegador

## 🎯 Objetivo
Aprender a utilizar los tres tipos de selectores CSS fundamentales: **selector de elemento**, **selector de clase** y **selector de ID**. Comprender cómo vincular un archivo CSS externo a un documento HTML y aplicar propiedades básicas de tipografía y color.

### Documentación
- [Selectores CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_selectors)
- [Propiedad color](https://developer.mozilla.org/es/docs/Web/CSS/color)
- [Propiedad font-family](https://developer.mozilla.org/es/docs/Web/CSS/font-family)

---

## 📋 Instrucciones

### Paso 1 — Crear la estructura de carpetas

Dentro de `src`, crea la carpeta `ejercicio-18`. Dentro de ella, crea una carpeta `css`:

```
src/
└── ejercicio-18/
    └── css/
```

### Paso 2 — Crear el archivo `index.html`

Dentro de `src/ejercicio-18/`, crea el archivo `index.html` con el siguiente contenido **exacto**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selectores CSS - Ejercicio 18</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <h1 id="titulo-principal">Selectores CSS</h1>
    <p class="destacado">Este párrafo tiene la clase "destacado".</p>
    <p class="secundario">Este párrafo tiene la clase "secundario".</p>
    <p>Este párrafo no tiene clase.</p>
    <footer id="pie-pagina">Pie de página - Ejercicio 18</footer>
</body>
</html>
```

> **Importante:** Fíjate en los atributos `id` y `class` de los elementos. Los utilizarás en el CSS.

### Paso 3 — Crear el archivo `css/estilos.css`

Dentro de `src/ejercicio-18/css/`, crea el archivo `estilos.css`.

#### 3.1 — Selector de elemento: aplica a `body`

Añade esta regla para dar una tipografía y fondo a toda la página:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f4f8;
}
```

#### 3.2 — Selector de elemento: aplica a `h1`

```css
h1 {
    color: #1a1a2e;
    text-align: center;
}
```

#### 3.3 — Selector de clase: aplica a `.secundario`

```css
.secundario {
    color: #555555;
    font-style: italic;
}
```

---

### 🔀 Selección Múltiple 1 — Propiedad para cambiar el tamaño del texto

Para el selector `.destacado`, necesitas aplicar un tamaño de fuente de **20 píxeles**.  
¿Cuál de las siguientes opciones usa la **propiedad CSS correcta**?

**🅰 Opción A:**
```css
.destacado {
    color: navy;
    text-size: 20px;
}
```

**🅱 Opción B:**
```css
.destacado {
    color: navy;
    font-size: 20px;
}
```

**🅲 Opción C:**
```css
.destacado {
    color: navy;
    size: 20px;
}
```

> Digita **solo una** de estas opciones en tu `css/estilos.css` y ejecuta el test para verificar si elegiste correctamente.

---

### 🔀 Selección Múltiple 2 — Selector de ID para `#titulo-principal`

Necesitas aplicar un borde inferior al título principal usando su **selector de ID**.  
¿Cuál opción usa correctamente la **sintaxis del selector de ID**?

**🅰 Opción A:**
```css
.titulo-principal {
    border-bottom: 3px solid #007bff;
    padding-bottom: 8px;
}
```

**🅱 Opción B:**
```css
titulo-principal {
    border-bottom: 3px solid #007bff;
    padding-bottom: 8px;
}
```

**🅲 Opción C:**
```css
#titulo-principal {
    border-bottom: 3px solid #007bff;
    padding-bottom: 8px;
}
```

> Digita **solo una** opción en tu `css/estilos.css` y ejecuta el test.

---

### Paso 4 — Añadir el estilo para `#pie-pagina`

Una vez resueltas las selecciones múltiples, añade esta regla:

```css
#pie-pagina {
    color: #888888;
    font-size: 14px;
    text-align: center;
    margin-top: 40px;
}
```

---

## 📁 Estructura final esperada

```
src/
└── ejercicio-18/
    ├── index.html
    └── css/
        └── estilos.css
```

## ✅ Verificación

```bash
npm test tests/ejercicio/18-selectores-css.test.js
```

Si todas las pruebas pasan, ¡has completado el ejercicio con éxito!
