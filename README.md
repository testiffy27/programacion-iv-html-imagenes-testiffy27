# Multimedia e Inserción - Imágenes en HTML

## 🖥️ Cómo Visualizar los Ejercicios con Live Server

Para visualizar y trabajar con los ejercicios en tiempo real:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo [src/index.html](src/index.html)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la lista de ejercicios
5. Navega por los ejercicios usando los enlaces proporcionados

Este repositorio contiene una carpeta llamada "ejercicios" donde encontrarás un archivo por cada ejercicio a realizar. Cada ejercicio incluye pruebas automatizadas para autocorrección y calificación automática.

## Estructura del Proyecto

```
./
├── src/                # Carpeta donde trabajarás
│   ├── index.html      # Página principal con enlaces a ejercicios
│   ├── ejercicio-15/   # Carpeta para los ejercicios 15, 16, 17 y 21
│   └── ejercicio-18/   # Carpeta para los ejercicios 18, 19 y 20
├── ejercicios/         # Instrucciones de los ejercicios
├── tests/              # Pruebas automatizadas (no tocar ni modificar nada)
├── .github/workflows/  # Configuración de GitHub Actions (no tocar ni modificar nada)
└── package.json        # Dependencias para las pruebas (no tocar ni modificar nada)
```

## Ejercicios

### Ejercicio 15: Estructura de Carpetas y Archivo Principal
El objetivo de este ejercicio es aprender a crear una estructura de carpetas organizada y un archivo `index.html` semántico como base para un proyecto web.

### Ejercicio 16: Creación de una Galería de Imágenes
Aprender a insertar imágenes en una página web utilizando las etiquetas `figure` y `figcaption` para una estructura semántica, y configurar los atributos esenciales de la imagen como `src`, `alt`, `width`, `height` y `title`.

### Ejercicio 17: Navegación entre Páginas HTML
Aprender a crear enlaces de navegación entre diferentes páginas HTML de un mismo sitio web utilizando rutas relativas.

### Ejercicio 18: Selectores CSS Básicos
Aprender a utilizar los tres tipos de selectores CSS fundamentales: **selector de elemento**, **selector de clase** (`.clase`) y **selector de ID** (`#id`). Incluye ejercicios de selección múltiple donde el estudiante debe experimentar con distintas opciones hasta que el test pase.

### Ejercicio 19: Colores y Fondos CSS
Aplicar colores en CSS usando los formatos **hexadecimal** (`#RRGGBB`), **rgb()** y **rgba()** para lograr transparencia. Contiene preguntas de selección múltiple sobre el uso correcto de cada función de color.

### Ejercicio 20: Bordes y Modelo de Caja CSS
Aplicar propiedades de bordes (`border` shorthand), esquinas redondeadas (`border-radius`), espaciado (`padding` y `margin`) y sombras (`box-shadow`) como concepto CSS intermedio. Selección múltiple sobre la sintaxis correcta del shorthand y el valor de `border-radius` para crear círculos.

### Ejercicio 21: Aplicar CSS a los Ejercicios 15, 16 y 17
Vincular una hoja de estilos externa (`css/estilos.css`) a los archivos `index.html` y `galeria.html` creados en los ejercicios anteriores, sin romper ningún test existente. Aplicar estilos de tipografía, color, layout y efectos interactivos. Incluye selección múltiple sobre pseudo-clases (`:hover`) y valores de `display` para organizar la galería.

## Ejecución de Pruebas

Para ejecutar las pruebas localmente:

```bash
npm install
npm test
```

La calificación automática suma 100 puntos. Cada ejercicio se califica por separado, por lo que aprobar un test de ejercicio otorga sus puntos aunque otros ejercicios sigan pendientes.

## Cómo Usar Este Repositorio

1. Clona el repositorio en tu máquina local o codespace.
2. Navega a la carpeta del proyecto.
3. Instala las dependencias ejecutando `npm install`.
4. Completa los ejercicios siguiendo las instrucciones en los archivos .md de cada ejercicio ubicados en la carpeta ejercicios.
5. Ejecuta las pruebas utilizando `npm test` para verificar tu trabajo.

¡Buena suerte y diviértete aprendiendo HTML!