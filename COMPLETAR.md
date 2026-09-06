# PORTFOLIO — Guía para completarlo

## Estructura creada

```
C:\Users\Mateo\mateo-portfolio\
├── index.html          ← el sitio (abre con Live Server en VS Code)
├── css/style.css       ← tema cósmico B&W, responsive
├── js/main.js          ← constelación, reveal, i18n EN/ES
├── assets/
│   ├── screenshots/    ← pon aquí tus screenshots
│   └── videos/         ← pon aquí tu showreel (showreel.mp4)
├── REFERENCIAS-FORMATO.md  ← resumen de investigación
└── COMPLETAR.md        ← esta guía
```

---

## Qué falta para que esté listo

### 1. Showreel (45–60 segundos) — PRIORIDAD ALTA
- **Formato:** MP4, 16:9, mute (autoplay con música que tú pongas al subirlo)
- **Contenido:** 5–10 segundos por proyecto, texto encima nombrando el sistema
  - 0:00 El Show Olvidado — Gameplay Ability System · Unreal C++
  - 0:12 Galactum — Networking · Godot · WebSocket
  - 0:24 Roblox Obby — Sistemas de Gameplay · Luau
  - 0:35 Dead Genre — Combate souls-like · Godot
  - 0:45 NOVALINK — Equipo · Game Jam · Producción
- **Ponlo en:** `assets/videos/showreel.mp4`
- **Formato de referencia:** Riot recomienda 60–90s; Ubisoft recomienda mostrar solo el mejor trabajo primero

### 2. Screenshots — PRIORIDAD ALTA
Cada proyecto necesita 1–3 screenshots para su thumbnail:
- `assets/screenshots/show-olvidado.jpg` → gameplay del obby Unreal
- `assets/screenshots/galactum.jpg` → vista del mundo o diagrama de arquitectura
- `assets/screenshots/roblox.jpg` → 2–3 screenshots del obby de Roblox
- `assets/screenshots/dead-genre.jpg` → enemigo o combate
- `assets/screenshots/gamejam.jpg` → interrogatorio o heartbeat
- `assets/screenshots/showreel-poster.jpg` → frame del showreel

### 3. Links específicos
En `index.html`, busca cada `href="#"` y reemplaza por:
- `href="https://www.roblox.com/games/XXXXX"` (link de tu obby en Roblox)
- `href="https://github.com/mateoorellana/synco-ai-showcase"` (u otro repo)
- `href="https://github.com/mateoorellana/galactum"` (u otro repo)
- Crea repos GitHub limpios (README + src) para cada proyecto

### 4. Código real
Los fragmentos de código en `<code class="block">` son placeholders realistas
basados en lo que encontré en tu código. Cuando tengas los repos listos:
- Crea repos GitHub limpios con README + src
- Saca los fragmentos más legibles de cada proyecto
- Reemplaza en el HTML los bloque "<!-- código aquí -->"

### 5. CV en PDF
- Pon tu CV en `assets/Mateo_Orellana_CV.pdf`
- Actualiza el link en el hero: `<a class="btn" href="assets/Mateo_Orellana_CV.pdf" download>`

### 6. Nombre del Game Jam
En el proyecto 05 puse "InterDemo" (del project.godot). Si tiene otro nombre, cámbialo.

### 7. Email de contacto
Verifica que `mateo.orellana.villegas@gmail.com` es el correcto (lo saqué de tu perfil).

---

## Para ver el portfolio
1. Abre VS Code en `C:\Users\Mateo\mateo-portfolio`
2. Click derecho en `index.html` → Open with Live Server
3. Abre en Opera: `http://127.0.0.1:5500`

---

## Estructura de repos GitHub recomendada
Para cada proyecto, crea un repo público con esta estructura:
```
synco-ai-showcase/
├── README.md           ← overview, GIF, link al juego
├── src/                ← código extraído limpio
├── docs/               ← architecture diagram
└── screenshots/        ← imágenes
```

---

## ¿Qué cubre el portfolio (basado en investigación)?

| Sección | Qué responde | Fuente |
|---|---|---|
| Hero + reel | "¿Puede esta persona enviar un juego?" | Ubisoft, Riot, generalistprogrammer |
| "My role" | "¿Qué hizo específicamente?" | Ubisoft, Game Developer |
| 4–6 proyectos best-first | Calidad > cantidad | generalistprogrammer, myseera |
| Problema técnico → solución | Preparación para entrevista | Riot, Game Developer |
| Fragmentos de código | ¿Sabe programar de verdad? | generalistprogrammer |
| GitHub links | Verificable y público | Riot, Game Developer |
| 75% programación / 10% liderazgo | Proporción para postular de programador | ChatGPT (tu sugerencia original) |

---

## Notas
- El portfolio está en español por defecto con toggle a EN
- Compatible con prefers-reduced-motion
- Responsive para celular
- Compatible con aria / accesibilidad básica