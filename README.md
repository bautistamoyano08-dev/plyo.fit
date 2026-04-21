# PlyoTracker

PWA de entrenamiento pliométrico para Futsal y Básquetbol con integración de Spotify Premium.

## Setup (una sola vez)

### 1. Subir a GitHub Pages

1. Crear un repo nuevo en GitHub (público o privado).
2. Subir el contenido de esta carpeta al root del repo.
3. En el repo: **Settings → Pages → Source: Deploy from branch → `main` / (root)** → Save.
4. Esperar ~1 minuto. Tu URL será:

   ```
   https://<tu-usuario>.github.io/<nombre-del-repo>/plyo.html
   ```

### 2. Registrar la app en Spotify

1. Entrar a https://developer.spotify.com/dashboard → **Create app**.
2. Rellenar:
   - **App name / description**: lo que quieras.
   - **Redirect URI** (este valor es crítico, cópialo exacto):

     ```
     https://<tu-usuario>.github.io/<nombre-del-repo>/spotify-callback.html
     ```
   - **APIs used**: marcar **Web API**.
3. Aceptar términos → **Save**.
4. Ir a **Settings** de la app → copiar **Client ID**.

### 3. Pegar el Client ID

Abrir `spotify.js`, línea 8, reemplazar:

```js
const SPOTIFY_CLIENT_ID = 'PEGA_AQUI_TU_CLIENT_ID';
```

por tu Client ID real. Commit + push → GitHub Pages redesplegará automáticamente.

> El Client ID de Spotify PKCE es **público por diseño** (no es un secreto). No hay problema en que quede en el repo.

## Uso

- Abrir la URL de GitHub Pages en el celular.
- En iOS: Safari → compartir → **Añadir a pantalla de inicio** (se instala como PWA).
- En Android: Chrome te ofrecerá instalar.
- Dentro de training, tocar **Conectar** en el panel 🎧 → login Spotify → listo.

## Estructura

| Archivo | Rol |
|---|---|
| `plyo.html` | Entry point |
| `plyo.js` | Lógica principal (ejercicios, metrónomo, dashboard) |
| `plyo.css` | Estilos |
| `spotify.js` | OAuth PKCE + Web API + UI del panel |
| `spotify-callback.html` | Página de retorno de OAuth |
| `service-worker.js` | Caché offline |
| `manifest.json` | Config PWA |
| `plyo-icon.svg` | Ícono |

## Limitaciones conocidas

- Requiere **Spotify Premium** para controlar reproducción.
- BPM automático por canción: no disponible (Spotify eliminó el endpoint `audio-features` en nov-2024). Se compensa con el tap-to-sync 👆 del metrónomo.
- iOS PWA instalada: el primer login de Spotify debe hacerse en Safari (no dentro de la PWA standalone) por una limitación del sistema.
