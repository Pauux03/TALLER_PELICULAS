# Catálogo de películas

Aplicación web hecha con React y Vite para explorar un catálogo interactivo de películas, sin backend.

## Funcionalidades

- Catálogo con póster, título, género, año, calificación y descripción.
- Buscador por título que se actualiza mientras se escribe.
- Filtros por género, año, calificación mínima y solo favoritas, combinables con el buscador.
- Detalle completo de cada película.
- Agregar y quitar películas de favoritos, con una sección para verlas.
- Calificación personal de 1 a 5 estrellas.
- Mensaje cuando no hay resultados.

## Cómo ejecutarlo

1. Clona el repositorio:

```bash
git clone https://github.com/TU_USUARIO/catalogo-peliculas.git
```

2. Entra a la carpeta e instala las dependencias:

```bash
cd catalogo-peliculas
npm install
```

3. Inicia el proyecto:

```bash
npm run dev
```

4. Abre en el navegador la dirección que aparece en la terminal, normalmente http://localhost:5173

## Estructura

```
src/
├── App.jsx
├── App.css
├── main.jsx
├── data/
│   └── movies.js
└── components/
    ├── Header.jsx
    ├── SearchBar.jsx
    ├── Filters.jsx
    ├── MovieList.jsx
    ├── MovieCard.jsx
    ├── MovieDetail.jsx
    ├── Favorites.jsx
    └── StarRating.jsx
```

## Tecnologías

- React
- Vite
- CSS

## Enlace de la aplicación



