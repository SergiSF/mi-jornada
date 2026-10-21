# Mi Jornada

Aplicación para controlar las horas de trabajo de lunes a viernes.

## Cómo abrirla sin instalar nada (recomendado)
1. Sube el contenido de esta carpeta a un repositorio de GitHub (botón "Add file" → "Upload files").
2. Abre en el navegador: `https://stackblitz.com/github/TU_USUARIO/mi-jornada`
3. Espera a que termine de instalar; la aplicación aparece a la derecha.

## Cómo abrirla en tu ordenador (necesita Node.js)
En una terminal, dentro de esta carpeta:
- `npm install` (solo la primera vez)
- `npm run dev` y abre la dirección que aparece (normalmente http://localhost:5173)

## Estructura
- `src/App.tsx`: decide qué pantalla se muestra.
- `src/components/`: piezas reutilizables (menú, tarjetas…).
- `src/pages/`: una pantalla por archivo (Semana, Mes, Historial, Ajustes).
- `src/lib/`: lógica sin diseño (tema, navegación y, en la fase 2, los cálculos).
- `public/`: archivos que se sirven tal cual (icono).
