# Design source assets

Archivos fuente de marca (no se usan en el build; solo referencia para futuras ediciones).

- `axiondev-logo-transparente.svg` — logo vectorial original (azul `#2F7AC0` / `#8FC9E8`, fondo transparente).
- `nvo_logo_axiondev.jpeg` — export raster original sobre fondo navy (sin transparencia).

## Versiones en producción (recoloreadas al índigo del sitio `#6164ef` / `#818cf8`)
- `public/logo.svg` — lockup del navbar.
- `public/favicon.svg` + `public/favicon_32.png` — ícono "A".
- `public/og-image.svg` + `public/og-image.png` — preview social con el logo embebido.

Para regenerar tras editar el logo: recolorear con `sed 's/#2F7AC0/#6164ef/g; s/#8FC9E8/#818cf8/g'` y rasterizar el OG desde el SVG (1200×630), cuantizando a 256 colores.
