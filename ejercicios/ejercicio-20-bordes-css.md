# Ejercicio 20: Bordes y Modelo de Caja CSS

## 🖥️ Cómo Visualizar el Ejercicio con Live Server

Para visualizar y trabajar con este ejercicio en tiempo real:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo `src/index.html` (archivo principal del proyecto)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la lista de ejercicios
5. Haz clic en el enlace del **Ejercicio 20** para ver tu trabajo
6. Los cambios que hagas se reflejarán automáticamente en el navegador

## 🎯 Objetivo
Aprender a aplicar **bordes** (`border`), **bordes redondeados** (`border-radius`), **espaciado interno** (`padding`) y **espaciado externo** (`margin`). Como concepto intermedio, aplicar la propiedad `box-shadow` para añadir sombras a elementos.

### Documentación
- [Propiedad border](https://developer.mozilla.org/es/docs/Web/CSS/border)
- [Propiedad border-radius](https://developer.mozilla.org/es/docs/Web/CSS/border-radius)
- [Modelo de caja CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Propiedad box-shadow](https://developer.mozilla.org/es/docs/Web/CSS/box-shadow)

---

## 📋 Instrucciones

> **Nota:** Este ejercicio se basa en la carpeta `src/ejercicio-18/` creada en los ejercicios anteriores.

### Paso 1 — Crear el archivo `bordes.html`

Dentro de `src/ejercicio-18/`, crea el archivo `bordes.html` con el siguiente contenido **exacto**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bordes y Modelo de Caja - Ejercicio 20</title>
    <link rel="stylesheet" href="css/bordes.css">
</head>
<body>
    <div class="tarjeta">
        <h1>Bordes y Modelo de Caja</h1>
        <p>Esta tarjeta tiene bordes, espaciado y sombra.</p>
    </div>
    <div class="circulo">Avatar</div>
    <div class="caja-espaciado">Caja con padding y margin definidos</div>
</body>
</html>
```

### Paso 2 — Crear el archivo `css/bordes.css`

Dentro de `src/ejercicio-18/css/`, crea el archivo `bordes.css`.

#### 2.1 — Espaciado general del `body`

```css
body {
    font-family: Arial, sans-serif;
    background-color: #eef2f7;
    margin: 0;
    padding: 20px;
}
```

#### 2.2 — Propiedad `text-align` para el `h1` dentro de `.tarjeta`

```css
.tarjeta h1 {
    text-align: center;
    color: #2c3e50;
}
```

---

### 🔀 Selección Múltiple 1 — Shorthand de `border` para `.tarjeta`

La tarjeta `.tarjeta` necesita un borde visible. La propiedad `border` acepta un **shorthand** (atajo) que combina grosor, estilo y color en una sola línea.  
¿Cuál de las siguientes opciones es la sintaxis **correcta y completa**?

**🅰 Opción A:**
```css
.tarjeta {
    border: solid #2c3e50;
    padding: 25px;
    margin: 20px auto;
    max-width: 600px;
}
```

**🅱 Opción B:**
```css
.tarjeta {
    border: 2px solid #2c3e50;
    padding: 25px;
    margin: 20px auto;
    max-width: 600px;
}
```

**🅲 Opción C:**
```css
.tarjeta {
    border: 2px #2c3e50;
    padding: 25px;
    margin: 20px auto;
    max-width: 600px;
}
```

> El shorthand de `border` requiere **tres valores**: `grosor estilo color`.  
> Por ejemplo: `border: 2px solid #333;`  
> Digita **solo una** opción y ejecuta el test.

---

### 🔀 Selección Múltiple 2 — `border-radius` para crear un círculo

El elemento `.circulo` debe ser perfectamente **circular**. `border-radius` controla el redondeo de las esquinas.  
¿Cuál valor convierte un elemento cuadrado en un círculo perfecto?

**🅰 Opción A:**
```css
.circulo {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    border-radius: 0%;
    color: white;
    text-align: center;
    line-height: 100px;
    margin: 20px auto;
}
```

**🅱 Opción B:**
```css
.circulo {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    border-radius: 10px;
    color: white;
    text-align: center;
    line-height: 100px;
    margin: 20px auto;
}
```

**🅲 Opción C:**
```css
.circulo {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 100px;
    margin: 20px auto;
}
```

> Un valor de `50%` aplica un radio igual a la mitad del ancho/alto, creando un círculo perfecto.  
> Digita **solo una** opción en tu CSS y observa la diferencia visual con Live Server.

---

### Paso 3 — `box-shadow` (CSS Intermedio)

`box-shadow` añade una sombra alrededor de un elemento. Su sintaxis es:  
`box-shadow: desplazamiento-x desplazamiento-y difuminado color;`

Añade esta regla a la tarjeta (puedes agregarla dentro del bloque `.tarjeta` que ya creaste, o como una regla separada):

```css
.tarjeta {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
}
```

> Si ya tienes un bloque `.tarjeta` de la Selección Múltiple 1, agrega las propiedades `box-shadow` y `background-color` dentro de ese mismo bloque.

### Paso 4 — Estilo para `.caja-espaciado`

Añade padding y margin explícitos para practicar el modelo de caja:

```css
.caja-espaciado {
    padding: 20px;
    margin: 30px auto;
    max-width: 400px;
    border: 1px dashed #999;
    text-align: center;
    color: #555;
}
```

---

## 📁 Estructura final esperada

```
src/
└── ejercicio-18/
    ├── index.html
    ├── colores.html
    ├── bordes.html
    └── css/
        ├── estilos.css
        ├── colores.css
        └── bordes.css
```

## ✅ Verificación

```bash
npm test tests/ejercicio/20-bordes-css.test.js
```

Para ejecutar todos los ejercicios a la vez:

```bash
npm test
```

Si todas las pruebas pasan, ¡has completado el ejercicio con éxito!
