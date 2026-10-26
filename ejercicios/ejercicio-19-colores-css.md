# Ejercicio 19: Colores y Fondos CSS

## 🖥️ Cómo Visualizar el Ejercicio con Live Server

Para visualizar y trabajar con este ejercicio en tiempo real:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo `src/index.html` (archivo principal del proyecto)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la lista de ejercicios
5. Haz clic en el enlace del **Ejercicio 19** para ver tu trabajo
6. Los cambios que hagas se reflejarán automáticamente en el navegador

## 🎯 Objetivo
Aprender a aplicar colores en CSS utilizando los tres formatos principales: **hexadecimal** (`#RRGGBB`), **rgb()** y **rgba()**. Aplicar colores de texto y de fondo a distintos elementos HTML.

### Documentación
- [Valores de color CSS](https://developer.mozilla.org/es/docs/Web/CSS/color_value)
- [Propiedad background-color](https://developer.mozilla.org/es/docs/Web/CSS/background-color)
- [Función rgba()](https://developer.mozilla.org/es/docs/Web/CSS/color_value/rgba)

---

## 📋 Instrucciones

> **Nota:** Este ejercicio se basa en la carpeta `src/ejercicio-18/` creada en el ejercicio anterior. Asegúrate de haberlo completado.

### Paso 1 — Crear el archivo `colores.html`

Dentro de `src/ejercicio-18/`, crea el archivo `colores.html` con el siguiente contenido **exacto**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colores CSS - Ejercicio 19</title>
    <link rel="stylesheet" href="css/colores.css">
</head>
<body>
    <div class="contenedor">
        <h1 class="titulo">Colores en CSS</h1>
        <p class="texto-primario">Este texto usa un color definido con formato hexadecimal.</p>
        <p class="texto-secundario">Este texto usa un color definido con la función rgb().</p>
        <div class="caja-transparente">Caja con fondo semitransparente</div>
        <div class="caja-fondo">Caja con color de fondo sólido</div>
    </div>
</body>
</html>
```

### Paso 2 — Crear el archivo `css/colores.css`

Dentro de `src/ejercicio-18/css/`, crea el archivo `colores.css`.

#### 2.1 — Color en formato hexadecimal para `.titulo`

```css
.titulo {
    color: #1a237e;
    text-align: center;
}
```

#### 2.2 — Color con función `rgb()` para `.texto-secundario`

```css
.texto-secundario {
    color: rgb(80, 80, 80);
    font-size: 16px;
}
```

#### 2.3 — Color de fondo sólido para `.caja-fondo`

```css
.caja-fondo {
    background-color: #4a90d9;
    color: #ffffff;
    padding: 15px;
    margin: 10px 0;
}
```

---

### 🔀 Selección Múltiple 1 — Color hexadecimal para `.texto-primario`

Para el texto de `.texto-primario`, necesitas usar un color **en formato hexadecimal**.  
¿Cuál de las siguientes opciones aplica correctamente un color hexadecimal?

**🅰 Opción A:**
```css
.texto-primario {
    color: hex(0, 100, 200);
    font-size: 16px;
}
```

**🅱 Opción B:**
```css
.texto-primario {
    color: #0064C8;
    font-size: 16px;
}
```

**🅲 Opción C:**
```css
.texto-primario {
    color: 0x0064C8;
    font-size: 16px;
}
```

> Digita **solo una** de estas opciones en tu `css/colores.css` y ejecuta el test para verificar.

---

### 🔀 Selección Múltiple 2 — Fondo semitransparente para `.caja-transparente`

La caja `.caja-transparente` debe tener un fondo azul con **opacidad del 30%** (semitransparente).  
¿Cuál función CSS permite agregar transparencia a un color?

**🅰 Opción A:**
```css
.caja-transparente {
    background-color: rgb(0, 128, 255, 0.3);
    padding: 15px;
    margin: 10px 0;
    color: #1a1a1a;
}
```

**🅱 Opción B:**
```css
.caja-transparente {
    background-color: rgba(0, 128, 255, 0.3);
    padding: 15px;
    margin: 10px 0;
    color: #1a1a1a;
}
```

**🅲 Opción C:**
```css
.caja-transparente {
    background-color: blue-opacity(0.3);
    padding: 15px;
    margin: 10px 0;
    color: #1a1a1a;
}
```

> Digita **solo una** de estas opciones. La diferencia entre `rgb()` y `rgba()` es el **cuarto parámetro** que controla la opacidad (de 0 a 1).

---

### Paso 3 — Añadir el estilo para `.contenedor`

```css
.contenedor {
    max-width: 700px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f5f5f5;
}
```

---

## 📁 Estructura final esperada

```
src/
└── ejercicio-18/
    ├── index.html
    ├── colores.html
    └── css/
        ├── estilos.css
        └── colores.css
```

## ✅ Verificación

```bash
npm test tests/ejercicio/19-colores-css.test.js
```

Si todas las pruebas pasan, ¡has completado el ejercicio con éxito!
