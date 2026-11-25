
import './style.css'


const vine = (className = '') => `
  <svg class="ornament ${className}" viewBox="0 0 500 90"
       fill="none" xmlns="http://www.w3.org/2000/svg"
       aria-hidden="true">

    <g stroke="currentColor" stroke-width="1.4"
       stroke-linecap="round" stroke-linejoin="round">

      <!-- Main organic stems -->
      <path d="M8 47 C55 12 75 75 125 42
               C170 12 195 68 250 43
               C305 18 330 74 375 42
               C420 12 450 65 492 38"/>

      <path d="M8 47 C52 80 83 15 125 42
               C168 75 203 20 250 43
               C294 72 335 14 375 42
               C420 73 458 22 492 38"
            opacity=".55"/>

      <!-- Left leaves -->
      <path d="M54 37 C36 8 18 12 29 31 C36 41 46 41 54 37Z"/>
      <path d="M84 54 C65 79 49 78 57 59 C64 51 75 50 84 54Z"/>
      <path d="M112 38 C102 12 115 2 123 20 C126 29 121 35 112 38Z"/>

      <!-- Right leaves -->
      <path d="M388 40 C402 12 421 13 413 32 C407 41 397 43 388 40Z"/>
      <path d="M420 54 C438 78 455 74 446 57 C439 50 428 49 420 54Z"/>
      <path d="M464 36 C474 11 490 9 485 28 C481 36 472 39 464 36Z"/>

      <!-- Thorn details -->
      <path d="M145 35 L137 20 L150 30"/>
      <path d="M185 49 L176 64 L190 54"/>
      <path d="M310 34 L303 18 L316 29"/>
      <path d="M350 49 L342 65 L356 54"/>

      <!-- Small central flower -->
      <path d="M250 43 C238 31 232 39 244 45
               C230 52 239 61 250 49
               C261 61 270 52 256 45
               C268 39 262 31 250 43Z"/>
      <circle cx="250" cy="45" r="2"/>

      <!-- Fine tendrils -->
      <path d="M29 31 C12 20 10 8 21 7"/>
      <path d="M57 59 C38 64 35 81 49 82"/>
      <path d="M413 32 C431 20 432 8 421 7"/>
      <path d="M446 57 C466 65 467 81 453 82"/>

    </g>
  </svg>
`


const corner = (className = '') => `
  <svg class="corner-ornament ${className}" viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M5 95 C5 48 22 15 95 5 M5 72 C30 72 34 48 25 36 C16 25 4 34 10 45
      M28 72 C48 62 51 42 43 32 C35 22 24 29 29 39
      M48 50 C66 38 69 22 61 14"
      stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M10 45 C20 39 23 48 18 55 C11 61 5 53 10 45Z
      M29 39 C39 33 43 42 37 49 C30 55 24 46 29 39Z
      M61 14 C72 10 75 19 69 25 C63 30 56 23 61 14Z"
      fill="currentColor"/>
  </svg>
`


document.querySelector('#app').innerHTML = `
<main>

<div class="bunny-layer" aria-hidden="true">
  <img src="/stickers/bunny1.png" class="bunny bunny-1" alt="">
  <img src="/stickers/bunny2.png" class="bunny bunny-2" alt="">
  <img src="/stickers/bunny3.png" class="bunny bunny-3" alt="">
  <img src="/stickers/bunny4.png" class="bunny bunny-4" alt="">

  <img src="/stickers/bunny3.png" class="bunny bunny-5" alt="">
  <img src="/stickers/bunny1.png" class="bunny bunny-6" alt="">
  <img src="/stickers/bunny4.png" class="bunny bunny-7" alt="">
  <img src="/stickers/bunny2.png" class="bunny bunny-8" alt="">

  <img src="/stickers/bunny2.png" class="bunny bunny-9" alt="">
  <img src="/stickers/bunny4.png" class="bunny bunny-10" alt="">
</div>


  <!-- HERO -->
  <section class="hero site-section" id="top">

    <div class="hero-noise"></div>
    <div class="hero-stain hero-stain-one"></div>
    <div class="hero-stain hero-stain-two"></div>

    <nav class="navbar">
      <a class="logo" href="#top">DIANA<span>®</span></a>

      <div class="nav-links">
        <a href="#work">WORK</a>
        <a href="#playground">PLAYGROUND</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>

      <span class="nav-status">AVAILABLE FOR PROJECTS</span>
    </nav>

    <div class="hero-content">

      <div class="hero-label">
        <span>DIANA BARRIENTOS</span>
        <span class="hero-label-separator">/</span>
        <span>SIGILRABBIT.NULL</span>
      </div>

      <p class="hero-pretitle">VISUAL ARTIST & CREATIVE TECHNOLOGIST</p>

      <div class="hero-title-wrap">
        <h1 class="hero-title" aria-label="Diseño, experiencias, visuales">
          <span class="type-line" data-text="DISEÑO">DISEÑO</span>
          <span class="type-line type-line-offset" data-text="EXPERIENCIAS">EXPERIENCIAS</span>
          <span class="type-line" data-text="VISUALES">VISUALES</span>
        </h1>
      </div>

      <div class="hero-divider">
        ${vine('hero-vine')}
      </div>

      <div class="hero-lower">
        <p class="hero-intro">
          Visuales, 3D, experiencias interactivas y experimentos audiovisuales.
        </p>

        <a href="#work" class="scroll-note">
          <span>SCROLL TO EXPLORE</span>
          <span class="scroll-arrow">↓</span>
        </a>
      </div>

    </div>

    <div class="hero-bottom">
      <span>EST. 2026</span>
      <span>MTY · MX</span>
      <span>PORTFOLIO / VOL. 001</span>
    </div>

    <div class="hero-side-mark hero-side-left">VISUAL CULTURE</div>
    <div class="hero-side-mark hero-side-right">LIVE SYSTEMS · 3D · EXPERIMENTAL</div>

  </section>


  <!-- FLYER ORBIT -->
  <section class="site-section flyer-section" id="flyers">

    <div class="section-topline">
      <span>01 / VISUAL ARCHIVE</span>
      <span>SELECT A TRANSMISSION</span>
    </div>

    <div class="flyer-heading">
      <h2 class="section-heading">
        GOT A SHOW?<span class="heading-period">.</span>
      </h2>
    </div>

    <!-- CIRCULAR FLYER GALLERY -->
    <div class="flyer-orbit" aria-label="Circular flyer carousel">

      <div class="orbit-center">
        <span>SIGIL</span>
        <strong>RABBIT</strong>
        <span>SELECT / OPEN</span>
      </div>

      <button class="orbit-card is-active"
        data-index="0"
        aria-label="Open flyer 01"
        aria-pressed="true">

        <video src="/slides/slide-01.mp4"
          autoplay muted loop playsinline preload="metadata"></video>

        <span>01 / OPEN</span>
      </button>

      <button class="orbit-card"
        data-index="1"
        aria-label="Open flyer 02"
        aria-pressed="false">

        <video src="/slides/slide-02.mp4"
          autoplay muted loop playsinline preload="metadata"></video>

        <span>02 / OPEN</span>
      </button>

      <button class="orbit-card"
        data-index="2"
        aria-label="Open flyer 03"
        aria-pressed="false">

        <video src="/slides/slide-03.mp4"
          autoplay muted loop playsinline preload="metadata"></video>

        <span>03 / OPEN</span>
      </button>

      <button class="orbit-card"
        data-index="3"
        aria-label="Open flyer 04"
        aria-pressed="false">

        <video src="/slides/slide-04.mp4"
          autoplay muted loop playsinline preload="metadata"></video>

        <span>04 / OPEN</span>
      </button>

      <button class="orbit-card"
        data-index="4"
        aria-label="Open flyer 05"
        aria-pressed="false">

        <video src="/slides/slide-05.mp4"
          autoplay muted loop playsinline preload="metadata"></video>

        <span>05 / OPEN</span>
      </button>

    </div>

    <div class="flyer-instructions">
      <span>CLICK A CARD TO REVEAL</span>
      <span>CLICK AGAIN TO EXPAND ↗</span>
    </div>

    <div class="flyer-expanded" aria-live="polite" hidden>

      <div class="flyer-expanded-image">
        <video src="/slides/slide-01.mp4" controls playsinline></video>
      </div>

      <div class="flyer-expanded-info">

        <p class="eyebrow">
          SELECTED TRANSMISSION / 001
        </p>

        <h3>FLYER TITLE</h3>

        <p>
          Promotional artwork and visual experiments.
        </p>

        <button class="flyer-close" type="button">
          CLOSE ×
        </button>

      </div>

    </div>

  </section>


  <!-- WORK -->
  <section class="site-section work-section" id="work">

    <div class="section-topline">
      <span>01 / SELECTED WORK</span>
      <span>VISUAL WORLDS & DIGITAL EXPERIMENTS</span>
    </div>

    <div class="section-heading-wrap">
      <h2 class="section-heading">THE WORK<span class="heading-period">.</span></h2>
      <p class="section-intro">
        Una colección de imágenes, sistemas y experimentos entre lo digital y lo físico.
      </p>
    </div>

    <div class="project-grid">

      <article class="project-card project-card-one">
        <div class="project-art art-live">
          <div class="art-label">LIVE / 001</div>
          <div class="live-shape live-shape-one"></div>
          <div class="live-shape live-shape-two"></div>
          <div class="live-shape live-shape-three"></div>
          <div class="art-crosshair">+</div>
          <span class="art-number">01</span>
        </div>

        <div class="project-info">
          <div class="project-type">01 — AUDIOVISUAL</div>
          <h3>LIVE VISUALS</h3>
          <p>Visuales generativos y sistemas audiovisuales para escenarios.</p>
          <div class="card-bottom-line">
            <span>TOUCHDESIGNER / REALTIME</span>
            <span class="project-arrow">↗</span>
          </div>
        </div>
      </article>


      <article class="project-card project-card-two">
        <div class="project-art art-generative">
          <div class="art-label">SYSTEM / 002</div>
          <div class="generative-ring ring-one"></div>
          <div class="generative-ring ring-two"></div>
          <div class="generative-ring ring-three"></div>
          <div class="generative-center"></div>
          <span class="art-number">02</span>
        </div>

        <div class="project-info">
          <div class="project-type">02 — CREATIVE CODING</div>
          <h3>GENERATIVE WORLDS</h3>
          <p>Formas, movimiento, color y sistemas visuales en constante cambio.</p>
          <div class="card-bottom-line">
            <span>CODE / EXPERIMENTS</span>
            <span class="project-arrow">↗</span>
          </div>
        </div>
      </article>


      <article class="project-card project-card-three">
        <div class="project-art art-3d">
          <div class="art-label">OBJECT / 003</div>
          <div class="cube-shape">
            <div class="cube-face cube-face-front"></div>
            <div class="cube-face cube-face-side"></div>
            <div class="cube-face cube-face-top"></div>
          </div>
          <div class="cube-shadow"></div>
          <span class="art-number">03</span>
        </div>

        <div class="project-info">
          <div class="project-type">03 — CGI / 3D</div>
          <h3>3D & CGI</h3>
          <p>Objetos, espacios e imágenes construidas digitalmente.</p>
          <div class="card-bottom-line">
            <span>3D / RENDER / IMAGE</span>
            <span class="project-arrow">↗</span>
          </div>
        </div>
      </article>


      <article class="project-card project-card-four">
        <div class="project-art art-interactive">
          <div class="art-label">INPUT / 004</div>
          <div class="interactive-orbit orbit-one"></div>
          <div class="interactive-orbit orbit-two"></div>
          <div class="interactive-core"></div>
          <div class="interactive-line"></div>
          <span class="art-number">04</span>
        </div>

        <div class="project-info">
          <div class="project-type">04 — INTERACTIVE</div>
          <h3>PLAYFUL SYSTEMS</h3>
          <p>Experiencias interactivas que conectan imagen, cuerpo y tecnología.</p>
          <div class="card-bottom-line">
            <span>INTERACTION / INPUT</span>
            <span class="project-arrow">↗</span>
          </div>
        </div>
      </article>

    </div>

    <div class="work-footer">
      <span>END OF SELECTION</span>
      <span>MORE EXPERIMENTS IN PROGRESS</span>
    </div>

  </section>



  <!-- PLAYGROUND -->
  <section class="site-section playground-section" id="playground">

    <div class="section-topline">
      <span>02 / EXPERIMENTAL ZONE</span>
      <span>NOT EVERYTHING NEEDS A PURPOSE</span>
    </div>

    <div class="playground-layout">

      <div class="playground-content">
        <p class="eyebrow">UNCONTROLLED DIGITAL BEHAVIOR</p>

        <h2 class="section-heading">
          THE<br>PLAYGROUND<span class="heading-period">.</span>
        </h2>

        <p class="section-intro">
          Un pequeño laboratorio audiovisual. Alimenta el sistema con sonido,
          cámara y un poco de caos.
        </p>

        <div class="playground-note">
          <span class="coming-dot"></span>
          LIVE INPUT / EXPERIMENT_001
        </div>
      </div>

      <div class="playground-window">

        <div class="window-bar">
          <span>SIGILRABBIT // AV-LAB_001</span>
          <span id="playgroundStatus">SYSTEM IDLE</span>
        </div>

        <div class="playground-screen-wrap">
          <video id="playgroundCamera" autoplay muted playsinline></video>
          <canvas id="playgroundCanvas" width="640" height="360"></canvas>

          <div class="playground-screen-label">
            <span>INPUT_001</span>
            <span id="playgroundEffectLabel">BODY SCANNER</span>
          </div>

          <div class="playground-screen-hint" id="playgroundHint">
            ACTIVATE CAMERA TO BEGIN
          </div>
        </div>

        <div class="playground-controls">

          <div class="playground-control-group">
            <span class="control-label">01 / AUDIO INPUT</span>

            <div class="playground-button-row">
              <button class="pg-button is-active" type="button" data-audio="mic">
                MICROPHONE
              </button>

              <button class="pg-button" type="button" data-audio="file">
                LOAD MP3
              </button>

              <input
                type="file"
                id="playgroundAudioFile"
                accept="audio/*"
                hidden
              >
            </div>
          </div>

          <div class="playground-control-group">
            <span class="control-label">02 / CAMERA</span>

            <div class="playground-button-row">
              <button class="pg-button" id="playgroundCameraToggle" type="button">
                ACTIVATE CAMERA
              </button>
            </div>
          </div>

          <div class="playground-control-group">
            <span class="control-label">03 / VISUAL MUTATION</span>

            <div class="playground-button-row">
              <button class="pg-button is-active" type="button" data-effect="body">
                BODY SCANNER
              </button>

              <button class="pg-button" type="button" data-effect="liquid">
                LIQUID FEVER
              </button>

              <button class="pg-button" type="button" data-effect="xerox">
                XEROX MACHINE
              </button>

              <button class="pg-button" type="button" data-effect="mirror">
                MUTANT MIRROR
              </button>
            </div>
          </div>

          <div class="playground-control-group">
            <label class="control-label" for="playgroundIntensity">
              04 / INTENSITY
            </label>

            <input
              type="range"
              id="playgroundIntensity"
              min="0"
              max="100"
              value="55"
            >
          </div>

          <div class="playground-control-footer">
            <button class="pg-button pg-random" id="playgroundRandom" type="button">
              RANDOMIZE ↗
            </button>

            <button class="pg-button pg-expand-button"
              id="playgroundExpand"
              type="button"
              aria-expanded="false">
              EXPAND LAB +
            </button>
          </div>

          <audio id="playgroundAudio" controls hidden></audio>

        </div>

        <div class="window-footer">
          <span>STATUS: EXPERIMENTAL</span>
          <span>BUILD 001 / 2026</span>
        </div>

      </div>

    </div>

  </section>


  <!-- ABOUT -->
  <section class="site-section about-section" id="about">

    <div class="section-topline">
      <span>03 / WHO'S BEHIND THE PIXELS?</span>
      <span>MONTERREY, MX</span>
    </div>

    <div class="about-layout">

      <div class="about-heading">
        <p class="eyebrow">A LITTLE ABOUT ME</p>
        <h2 class="section-heading">ABOUT<br>ME<span class="heading-period">.</span></h2>
        <div class="about-flourish">${vine()}</div>
      </div>

      <div class="about-copy">
        <p class="about-lead">
          Me gusta construir universos visuales y encontrar maneras inesperadas
          de conectar imagen, tecnología y emoción.
        </p>

        <p>
          Mi práctica cruza visuales en tiempo real, TouchDesigner, creative coding,
          3D y experiencias interactivas. Me interesa experimentar, mezclar
          disciplinas y crear imágenes que se sientan vivas.
        </p>

        <a class="text-link" href="#contact">
          LET'S MAKE SOMETHING <span>↗</span>
        </a>
      </div>

    </div>

    <div class="about-bottom-mark">
      <span>IMAGE</span>
      <span class="about-mark-line"></span>
      <span>TECHNOLOGY</span>
      <span class="about-mark-line"></span>
      <span>EMOTION</span>
    </div>

  </section>


  <!-- CONTACT -->
  <section class="site-section contact-section" id="contact">

    <div class="section-topline">
      <span>04 / YOUR TURN</span>
      <span>OPEN FOR COLLABORATIONS</span>
    </div>

    <div class="contact-content">

      <p class="eyebrow">HAVE A WEIRD IDEA? GOOD.</p>

      <h2 class="section-heading">
        LET'S<br>CREATE<span class="heading-period">.</span>
      </h2>

      <p class="contact-description">
        Proyectos, colaboraciones, conciertos o simplemente saludar.
      </p>

      <a class="whatsapp-button"
        href="https://wa.me/528112667517"
        target="_blank"
        rel="noopener noreferrer">
        GET IN TOUCH <span>↗</span>
      </a>

    </div>

    <div class="contact-ornament">${vine()}</div>

    <footer class="site-footer">
      <a class="footer-logo" href="#top">DIANA®</a>
      <span>MADE WITH CURIOSITY · MTY, MX</span>
      <a href="#top" class="back-to-top">BACK TO TOP ↑</a>
    </footer>

  </section>

</main>
`


/* =========================================
   LIVE VISUALS — PROJECT ARCHIVE
========================================= */

const liveArchiveMarkup = `
  <section class="live-archive" id="liveArchive" hidden>

    <header class="archive-header">
      <a href="#work" class="archive-logo">DIANA®</a>
      <span>LIVE VISUALS / PROJECT INDEX</span>
      <button class="archive-close" type="button">CLOSE ×</button>
    </header>

    <!-- PROJECT SELECTION -->
    <div class="archive-projects" id="archiveProjects">

      <div class="archive-intro">
        <p class="eyebrow">SELECTED LIVE PROJECTS / 001</p>
        <h2 class="section-heading">
          LIVE VISUALS<span class="heading-period">.</span>
        </h2>
        <p>Visual systems, stage experiments and live audiovisual experiences.</p>
      </div>

      <div class="archive-project-grid">

        <button class="archive-project archive-moorelo"
          type="button" data-open-project="moorelo">
          <span class="archive-project-number">01 / PROJECT</span>
          <span class="archive-project-name">MOORELO</span>
          <span class="archive-project-description">
            LIVE VISUALS / GENERATIVE SYSTEMS
          </span>
          <span class="archive-project-arrow">↗</span>
        </button>

        <button class="archive-project archive-brkt"
          type="button" data-open-project="brkt">
          <span class="archive-project-number">02 / PROJECT</span>
          <span class="archive-project-name">BRKT RECORDS</span>
          <span class="archive-project-description">
            LIVE VISUALS / EVENT PRODUCTION
          </span>
          <span class="archive-project-arrow">↗</span>
        </button>

      </div>
    </div>

    <!-- MOORELO GALLERY -->
    <div class="archive-gallery-view" id="mooreloGallery" hidden>

      <div class="archive-gallery-heading">
        <button class="archive-back" type="button">← BACK TO PROJECTS</button>
        <p class="eyebrow">LIVE VISUALS / PROJECT 001</p>
        <h2 class="section-heading">
          MOORELO<span class="heading-period">.</span>
        </h2>
        <p>Live audiovisual experiences, visual experiments and moments from the show.</p>
        <div class="archive-gallery-meta">
          <span>19 PHOTOGRAPHS</span>
          <span>06 VIDEOS</span>
          <span>MONTERREY / MX</span>
        </div>
      </div>

      <div class="moorelo-masonry" id="mooreloMasonry"></div>

      <button class="archive-back archive-back-bottom" type="button">
        ← BACK TO PROJECTS
      </button>

    </div>

    <!-- BRKT RECORDS GALLERY -->
    <div class="archive-gallery-view" id="brktGallery" hidden>

      <div class="archive-gallery-heading">
        <button class="archive-back" type="button">← BACK TO PROJECTS</button>

        <p class="eyebrow">LIVE VISUALS / PROJECT 002</p>

        <h2 class="section-heading">
          BRKT RECORDS<span class="heading-period">.</span>
        </h2>

        <p>Live visuals, audiovisual experiments and moments from the shows.</p>

        <div class="archive-gallery-meta">
          <span>08 VIDEOS</span>
          <span>LIVE VISUALS</span>
          <span>MONTERREY / MX</span>
        </div>
      </div>

      <div class="moorelo-masonry brkt-masonry" id="brktMasonry"></div>

      <button class="archive-back archive-back-bottom" type="button">
        ← BACK TO PROJECTS
      </button>

    </div>

    <!-- MEDIA LIGHTBOX -->
    <div class="archive-lightbox" id="archiveLightbox" hidden>
      <button class="lightbox-close" type="button">CLOSE ×</button>
      <button class="lightbox-prev" type="button" aria-label="Previous item">←</button>
      <div class="lightbox-content" id="lightboxContent"></div>
      <button class="lightbox-next" type="button" aria-label="Next item">→</button>
      <span class="lightbox-counter" id="lightboxCounter"></span>
    </div>

  </section>
`

document.querySelector('main').insertAdjacentHTML(
  'beforeend',
  liveArchiveMarkup
)


/* =========================================
   LIVE VISUALS — NAVIGATION
========================================= */

const liveArchive = document.querySelector('#liveArchive')
const archiveProjects = document.querySelector('#archiveProjects')
const mooreloGallery = document.querySelector('#mooreloGallery')
const brktGallery = document.querySelector('#brktGallery')
const liveVisualsCard = document.querySelector('.project-card-one')

const archiveClose = document.querySelector('.archive-close')
const archiveBackButtons = document.querySelectorAll('.archive-back')

function showLiveArchive() {
  liveArchive.hidden = false
  archiveProjects.hidden = false
  mooreloGallery.hidden = true
  brktGallery.hidden = true

  document.body.classList.add('archive-open')
  liveArchive.scrollTop = 0
}

function showMoorelo() {
  archiveProjects.hidden = true
  mooreloGallery.hidden = false
  brktGallery.hidden = true
  liveArchive.scrollTop = 0
}

function showBrkt() {
  archiveProjects.hidden = true
  mooreloGallery.hidden = true
  brktGallery.hidden = false
  liveArchive.scrollTop = 0
}

function closeLiveArchive() {
  closeArchiveLightbox()
  liveArchive.hidden = true
  document.body.classList.remove('archive-open')
}

liveVisualsCard.addEventListener('click', showLiveArchive)

archiveClose.addEventListener('click', closeLiveArchive)

document.querySelector('[data-open-project="moorelo"]')
  .addEventListener('click', showMoorelo)

document.querySelector('[data-open-project="brkt"]')
  .addEventListener('click', showBrkt)

archiveBackButtons.forEach(button => {
  button.addEventListener('click', () => {
    mooreloGallery.hidden = true
    brktGallery.hidden = true
    archiveProjects.hidden = false
    liveArchive.scrollTop = 0
  })
})


/* =========================================
   MOORELO — MASONRY GALLERY
========================================= */

const mooreloPhotos = Array.from(
  { length: 19 },
  (_, i) => `/moorelo/photo-${String(i + 1).padStart(2, '0')}.jpg`
)

const mooreloVideos = Array.from(
  { length: 6 },
  (_, i) => `/moorelo/video${String(i + 1).padStart(2, '0')}.mp4`
)

// Interleave photos and videos in the gallery.
const mooreloItems = []

const maxItems = Math.max(
  mooreloPhotos.length,
  mooreloVideos.length
)

for (let i = 0; i < maxItems; i++) {
  if (mooreloPhotos[i]) {
    mooreloItems.push({
      type: 'photo',
      src: mooreloPhotos[i]
    })
  }

  if (mooreloVideos[i]) {
    mooreloItems.push({
      type: 'video',
      src: mooreloVideos[i]
    })
  }
}

const mooreloMasonry = document.querySelector('#mooreloMasonry')

mooreloMasonry.innerHTML = mooreloItems.map((item, index) => {
  if (item.type === 'video') {
    return `
      <button class="masonry-item masonry-video"
        type="button" data-media-index="${index}"
        aria-label="Open video ${index + 1}">

        <video src="${item.src}"
          muted loop playsinline preload="metadata"></video>

        <span class="masonry-media-label">VIDEO / ${String(index + 1).padStart(2, '0')} ↗</span>
      </button>
    `
  }

  return `
    <button class="masonry-item masonry-photo"
      type="button" data-media-index="${index}"
      aria-label="Open photograph ${index + 1}">

      <img src="${item.src}"
        alt="MOORELO live visuals photograph ${index + 1}"
        loading="lazy">

      <span class="masonry-media-label">MOORELO / ${String(index + 1).padStart(2, '0')} ↗</span>
    </button>
  `
}).join('')


/* =========================================
   VIDEO HOVER PREVIEW — BOTH GALLERIES
========================================= */

function enableVideoPreviews(container) {
  container.querySelectorAll('video').forEach(video => {
    const card = video.closest('.masonry-video')

    card.addEventListener('pointerenter', () => {
      video.play().catch(() => {})
    })

    card.addEventListener('pointerleave', () => {
      video.pause()
      video.currentTime = 0
    })
  })
}

enableVideoPreviews(mooreloMasonry)


/* =========================================
   BRKT RECORDS — VIDEO GALLERY
========================================= */

const brktVideos = Array.from(
  { length: 8 },
  (_, i) => `/brkt/video${String(i + 1).padStart(2, '0')}.mp4`
)

const brktItems = brktVideos.map(src => ({
  type: 'video',
  src
}))

const brktMasonry = document.querySelector('#brktMasonry')

brktMasonry.innerHTML = brktItems.map((item, index) => `
  <button class="masonry-item masonry-video"
    type="button"
    data-media-index="${index}"
    aria-label="Open BRKT video ${index + 1}">

    <video src="${item.src}"
      muted loop playsinline preload="metadata"></video>

    <span class="masonry-media-label">
      BRKT / ${String(index + 1).padStart(2, '0')} ↗
    </span>
  </button>
`).join('')

enableVideoPreviews(brktMasonry)


/* =========================================
   SHARED LIGHTBOX — MOORELO + BRKT
========================================= */

const archiveLightbox = document.querySelector('#archiveLightbox')
const lightboxContent = document.querySelector('#lightboxContent')
const lightboxCounter = document.querySelector('#lightboxCounter')

let activeMediaIndex = 0
let activeMediaItems = mooreloItems

function openArchiveMedia(index, items) {
  activeMediaItems = items
  activeMediaIndex = index

  renderArchiveMedia()

  archiveLightbox.hidden = false
  document.body.classList.add('lightbox-open')
}

function renderArchiveMedia() {
  const item = activeMediaItems[activeMediaIndex]

  document.querySelectorAll('.masonry-video video')
    .forEach(video => video.pause())

  if (item.type === 'video') {
    lightboxContent.innerHTML = `
      <video src="${item.src}" controls autoplay playsinline></video>
    `
  } else {
    lightboxContent.innerHTML = `
      <img src="${item.src}" alt="MOORELO photograph">
    `
  }

  lightboxCounter.textContent =
    `${String(activeMediaIndex + 1).padStart(2, '0')} / ${String(activeMediaItems.length).padStart(2, '0')}`
}

function closeArchiveLightbox() {
  archiveLightbox.hidden = true
  lightboxContent.innerHTML = ''
  document.body.classList.remove('lightbox-open')
}

function connectGallery(container, items) {
  container.addEventListener('click', event => {
    const card = event.target.closest('[data-media-index]')
    if (!card) return

    openArchiveMedia(
      Number(card.dataset.mediaIndex),
      items
    )
  })
}

connectGallery(mooreloMasonry, mooreloItems)
connectGallery(brktMasonry, brktItems)

document.querySelector('.lightbox-close')
  .addEventListener('click', closeArchiveLightbox)

archiveLightbox.addEventListener('click', event => {
  if (event.target === archiveLightbox) {
    closeArchiveLightbox()
  }
})

document.querySelector('.lightbox-prev').addEventListener('click', () => {
  activeMediaIndex =
    (activeMediaIndex - 1 + activeMediaItems.length) % activeMediaItems.length

  renderArchiveMedia()
})

document.querySelector('.lightbox-next').addEventListener('click', () => {
  activeMediaIndex =
    (activeMediaIndex + 1) % activeMediaItems.length

  renderArchiveMedia()
})

document.addEventListener('keydown', event => {
  if (archiveLightbox.hidden) return

  if (event.key === 'Escape') closeArchiveLightbox()

  if (event.key === 'ArrowRight') {
    activeMediaIndex =
      (activeMediaIndex + 1) % activeMediaItems.length

    renderArchiveMedia()
  }

  if (event.key === 'ArrowLeft') {
    activeMediaIndex =
      (activeMediaIndex - 1 + activeMediaItems.length) % activeMediaItems.length

    renderArchiveMedia()
  }
})


/* =========================================
   HERO TYPEWRITER
========================================= */

const typeLines = [...document.querySelectorAll('.type-line')]

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

async function runTypewriter() {
  if (prefersReducedMotion) {
    typeLines.forEach(line => {
      line.textContent = line.dataset.text
      line.classList.add('typed')
    })
    return
  }

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  await sleep(450)

  for (const line of typeLines) {
    const text = line.dataset.text
    line.textContent = ''
    line.classList.add('typing')

    for (let i = 0; i < text.length; i++) {
      line.textContent += text[i]
      await sleep(75)
    }

    line.classList.remove('typing')
    line.classList.add('typed')

    await sleep(220)
  }
}

runTypewriter()


/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealElements = document.querySelectorAll(
  '.project-card, .playground-content, .playground-window, .about-heading, .about-copy, .contact-content'
)

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.12
  })

  revealElements.forEach(element => {
    element.classList.add('reveal')
    revealObserver.observe(element)
  })
} else {
  revealElements.forEach(element => element.classList.add('is-visible'))
}


/* =========================================
   FLYER ORBIT — INTERACTIVE CAROUSEL
========================================= */

const orbitCards = [...document.querySelectorAll('.orbit-card')]
const flyerExpanded = document.querySelector('.flyer-expanded')

const expandedVideo = flyerExpanded.querySelector('.flyer-expanded-image video')
const expandedTitle = flyerExpanded.querySelector('.flyer-expanded-info h3')
const expandedDescription = flyerExpanded.querySelector('.flyer-expanded-info > p:not(.eyebrow)')
const expandedEyebrow = flyerExpanded.querySelector('.flyer-expanded-info .eyebrow')
const closeFlyer = flyerExpanded.querySelector('.flyer-close')

let activeFlyer = 0

function updateOrbit() {
  const step = 360 / orbitCards.length

  orbitCards.forEach((card, index) => {
    const position = (index - activeFlyer + orbitCards.length) % orbitCards.length
    const angle = position * step - 90

    card.style.setProperty('--angle', `${angle}deg`)
    card.style.setProperty('--counter-angle', `${-angle}deg`)

    card.classList.toggle('is-active', index === activeFlyer)

    card.style.zIndex = index === activeFlyer ? 5 : 2

    card.setAttribute(
      'aria-pressed',
      index === activeFlyer ? 'true' : 'false'
    )
  })
}

function openFlyer(index) {
  const card = orbitCards[index]
  const video = card.querySelector('video')

  activeFlyer = index

  expandedVideo.src = video.currentSrc || video.src
  expandedVideo.load()

  expandedTitle.textContent =
    `PROMOTIONAL VIDEO / ${String(index + 1).padStart(2, '0')}`

  expandedDescription.textContent =
    'Promotional artwork and visual experiments.'

  expandedEyebrow.textContent =
    `SELECTED TRANSMISSION / ${String(index + 1).padStart(3, '0')}`

  flyerExpanded.hidden = false

  updateOrbit()

  expandedVideo.play().catch(() => {})
}

orbitCards.forEach((card, index) => {
  card.addEventListener('click', () => {

    if (index !== activeFlyer) {
      activeFlyer = index
      flyerExpanded.hidden = true
      expandedVideo.pause()
      updateOrbit()

    } else if (flyerExpanded.hidden) {
      openFlyer(index)

    } else {
      flyerExpanded.hidden = true
      expandedVideo.pause()
    }

  })
})

closeFlyer.addEventListener('click', () => {
  flyerExpanded.hidden = true
  expandedVideo.pause()
})

updateOrbit();



/* =========================================
   PLAYGROUND / AUDIO VISUAL LAB
========================================= */

(() => {
  const video = document.querySelector('#playgroundCamera');
  const canvas = document.querySelector('#playgroundCanvas');
  const screen = document.querySelector('.playground-screen-wrap');
  const hint = document.querySelector('#playgroundHint');
  const status = document.querySelector('#playgroundStatus');
  const effectLabel = document.querySelector('#playgroundEffectLabel');

  const cameraButton = document.querySelector('#playgroundCameraToggle');
  const audioFileButton = document.querySelector('[data-audio="file"]');
  const micButton = document.querySelector('[data-audio="mic"]');
  const fileInput = document.querySelector('#playgroundAudioFile');
  const audio = document.querySelector('#playgroundAudio');

  const intensity = document.querySelector('#playgroundIntensity');
  const randomButton = document.querySelector('#playgroundRandom');
  const expandButton = document.querySelector('#playgroundExpand');
  const layout = document.querySelector('.playground-layout');

  if (!video || !canvas || !screen) return;

  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  const buffer = document.createElement('canvas');
  buffer.width = 320;
  buffer.height = 180;
  const bctx = buffer.getContext('2d', { willReadFrequently: true });

  let cameraStream = null;
  let micStream = null;
  let audioContext = null;
  let analyser = null;
  let frequencyData = null;
  let micSource = null;
  let fileSource = null;

  let currentEffect = 'body';
  let audioLevel = 0;
  let bass = 0;
  let cameraActive = false;
  let animationFrame = null;
  let fileURL = null;

  const effects = {
    body: 'BODY SCANNER',
    liquid: 'LIQUID FEVER',
    xerox: 'XEROX MACHINE',
    mirror: 'MUTANT MIRROR'
  };

  function setStatus(message) {
    if (status) status.textContent = message;
  }

  function setHint(message, visible = true) {
    if (!hint) return;
    hint.textContent = message;
    hint.style.display = visible ? 'grid' : 'none';
  }

  function setActiveButton(selector, active) {
    document.querySelectorAll(selector).forEach(button => {
      button.classList.toggle('is-active', button === active);
    });
  }

  // AUDIO ENGINE

  function prepareAudio() {
    if (!audioContext) {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) {
        throw new Error('Web Audio is not supported');
      }

      audioContext = new AudioContextClass();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.78;

      frequencyData = new Uint8Array(analyser.frequencyBinCount);
    }

    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  function stopMic() {
    if (micStream) {
      micStream.getTracks().forEach(track => track.stop());
      micStream = null;
    }

    if (micSource) {
      micSource.disconnect();
      micSource = null;
    }
  }

  async function activateMic() {
    try {
      prepareAudio();

      audio.pause();

      if (analyser) {
        try {
          analyser.disconnect(audioContext.destination);
        } catch (error) {}
      }

      stopMic();

      micStream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      micSource = audioContext.createMediaStreamSource(micStream);
      micSource.connect(analyser);

      setActiveButton('[data-audio]', micButton);
      setStatus('MICROPHONE ACTIVE');
    } catch (error) {
      console.error('Microphone error:', error);
      setStatus('MICROPHONE ERROR');
      setHint('ALLOW MICROPHONE ACCESS IN YOUR BROWSER');
    }
  }

  async function loadAudioFile(file) {
    if (!file) return;

    try {
      prepareAudio();
      stopMic();

      if (fileURL) URL.revokeObjectURL(fileURL);

      fileURL = URL.createObjectURL(file);
      audio.src = fileURL;

      if (!fileSource) {
        fileSource = audioContext.createMediaElementSource(audio);
        fileSource.connect(analyser);
      }

      analyser.connect(audioContext.destination);

      await audio.play();

      setActiveButton('[data-audio]', audioFileButton);
      setStatus('AUDIO FILE PLAYING');
    } catch (error) {
      console.error('Audio file error:', error);
      setStatus('AUDIO ERROR');
    }
  }

  function readAudio() {
    if (!analyser || !frequencyData) {
      audioLevel *= 0.94;
      bass *= 0.94;
      return;
    }

    analyser.getByteFrequencyData(frequencyData);

    let total = 0;
    let bassTotal = 0;

    for (let i = 0; i < frequencyData.length; i++) {
      total += frequencyData[i];
      if (i < 9) bassTotal += frequencyData[i];
    }

    audioLevel = (total / frequencyData.length) / 255;
    bass = (bassTotal / 9) / 255;
  }

  // CAMERA

  async function toggleCamera() {
    if (cameraActive) {
      cameraStream.getTracks().forEach(track => track.stop());
      cameraStream = null;
      video.srcObject = null;
      cameraActive = false;

      cameraButton.textContent = 'ACTIVATE CAMERA';
      setStatus('CAMERA OFF');
      setHint('ACTIVATE CAMERA TO BEGIN');
      return;
    }

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera access unavailable');
      }

      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        },
        audio: false
      });

      video.srcObject = cameraStream;
      await video.play();

      cameraActive = true;
      cameraButton.textContent = 'TURN CAMERA OFF';

      setStatus('CAMERA ACTIVE');
      setHint('', false);
    } catch (error) {
      console.error('Camera error:', error);
      setStatus('CAMERA ERROR');
      setHint('ALLOW CAMERA ACCESS IN YOUR BROWSER');
    }
  }

  // VISUAL EFFECTS

  function drawCover(source, targetCtx, width, height) {
    const sw = source.videoWidth || source.width;
    const sh = source.videoHeight || source.height;

    if (!sw || !sh) return;

    const scale = Math.max(width / sw, height / sh);
    const dw = sw * scale;
    const dh = sh * scale;

    targetCtx.drawImage(
      source,
      (width - dw) / 2,
      (height - dh) / 2,
      dw,
      dh
    );
  }

  function drawBody() {
    bctx.drawImage(video, 0, 0, 160, 90);

    const pixels = bctx.getImageData(0, 0, 160, 90).data;

    ctx.fillStyle = '#0D0B0F';
    ctx.fillRect(0, 0, W, H);

    const spacing = 4;
    const power = Number(intensity.value) / 100;
    const threshold = 45 + power * 55;

    for (let y = 0; y < 90; y += 1) {
      for (let x = 0; x < 160; x += 1) {
        const i = (y * 160 + x) * 4;
        const brightness =
          (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;

        if (brightness > threshold) {
          const size = 0.7 + (brightness / 255) * 2.5
            + bass * power * 3;

          ctx.fillStyle = `rgba(193,139,201,${0.25 + brightness / 340})`;
          ctx.beginPath();
          ctx.arc(
            x * spacing + 2,
            y * spacing + 2,
            size,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }
    }

    ctx.strokeStyle = 'rgba(208,168,213,0.18)';
    ctx.lineWidth = 1;

    const scanY = (performance.now() * 0.06) % H;
    ctx.beginPath();
    ctx.moveTo(0, scanY);
    ctx.lineTo(W, scanY);
    ctx.stroke();
  }

  function drawLiquid() {
    const power = Number(intensity.value) / 100;
    const displacement = 4 + bass * power * 55;
    const time = performance.now() * 0.001;

    ctx.fillStyle = '#0D0B0F';
    ctx.fillRect(0, 0, W, H);

    const strips = 48;
    const stripHeight = H / strips;

    for (let i = 0; i < strips; i++) {
      const y = i * stripHeight;
      const wave = Math.sin(time * 2 + i * 0.23);
      const offset = wave * displacement;

      ctx.drawImage(
        video,
        0,
        (y / H) * video.videoHeight,
        video.videoWidth,
        video.videoHeight / strips,
        offset,
        y,
        W,
        stripHeight + 1
      );
    }

    ctx.fillStyle = `rgba(193,139,201,${0.04 + bass * 0.2})`;
    ctx.fillRect(0, 0, W, H);
  }

  function drawXerox() {
    const power = Number(intensity.value) / 100;

    bctx.drawImage(video, 0, 0, 320, 180);

    const image = bctx.getImageData(0, 0, 320, 180);
    const pixels = image.data;
    const threshold = 100 + power * 65 - bass * 70;

    for (let i = 0; i < pixels.length; i += 4) {
      const gray =
        pixels[i] * 0.299 +
        pixels[i + 1] * 0.587 +
        pixels[i + 2] * 0.114;

      const value = gray > threshold ? 235 : 18;

      pixels[i] = value;
      pixels[i + 1] = value * 0.78;
      pixels[i + 2] = value;
    }

    bctx.putImageData(image, 0, 0);

    ctx.fillStyle = '#0D0B0F';
    ctx.fillRect(0, 0, W, H);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(buffer, 0, 0, W, H);
    ctx.imageSmoothingEnabled = true;

    ctx.fillStyle = `rgba(193,139,201,${0.08 + bass * power * 0.25})`;
    ctx.fillRect(0, 0, W, H);
  }

  function drawMirror() {
    const power = Number(intensity.value) / 100;
    const zoom = 1 + bass * power * 0.45;
    const halfW = W / 2;
    const halfH = H / 2;

    ctx.fillStyle = '#0D0B0F';
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.translate(halfW, halfH);
    ctx.scale(zoom, zoom);

    ctx.drawImage(video, -halfW, -halfH, halfW, halfH);

    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -halfW, -halfH, halfW, halfH);
    ctx.restore();

    ctx.save();
    ctx.scale(1, -1);
    ctx.drawImage(video, -halfW, -halfH, halfW, halfH);
    ctx.restore();

    ctx.save();
    ctx.scale(-1, -1);
    ctx.drawImage(video, -halfW, -halfH, halfW, halfH);
    ctx.restore();

    ctx.restore();

    ctx.fillStyle = `rgba(193,139,201,${0.05 + bass * power * 0.2})`;
    ctx.fillRect(0, 0, W, H);
  }

  function drawIdle() {
    ctx.fillStyle = '#0D0B0F';
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = 'rgba(193,139,201,0.25)';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(W / 2, H / 2, 48 + Math.sin(performance.now() * 0.001) * 5, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#D0A8D5';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SIGILRABBIT // AV LAB', W / 2, H / 2 + 4);
  }

  function render() {
    readAudio();

    if (cameraActive && video.readyState >= 2) {
      if (currentEffect === 'body') drawBody();
      if (currentEffect === 'liquid') drawLiquid();
      if (currentEffect === 'xerox') drawXerox();
      if (currentEffect === 'mirror') drawMirror();
    } else {
      drawIdle();
    }

    animationFrame = requestAnimationFrame(render);
  }

  function selectEffect(effect) {
    if (!effects[effect]) return;

    currentEffect = effect;
    effectLabel.textContent = effects[effect];

    document.querySelectorAll('[data-effect]').forEach(button => {
      button.classList.toggle(
        'is-active',
        button.dataset.effect === effect
      );
    });
  }

  // BUTTON EVENTS

  document.querySelectorAll('[data-effect]').forEach(button => {
    button.addEventListener('click', () => {
      selectEffect(button.dataset.effect);
    });
  });

  if (cameraButton) {
    cameraButton.addEventListener('click', toggleCamera);
  }

  if (micButton) {
    micButton.addEventListener('click', activateMic);
  }

  if (audioFileButton && fileInput) {
    audioFileButton.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', event => {
      loadAudioFile(event.target.files[0]);
    });
  }

  if (randomButton) {
    randomButton.addEventListener('click', () => {
      const choices = Object.keys(effects).filter(
        effect => effect !== currentEffect
      );

      const next = choices[Math.floor(Math.random() * choices.length)];
      selectEffect(next);
    });
  }

  if (expandButton && layout) {
    expandButton.addEventListener('click', () => {
      const expanded = layout.classList.toggle('is-expanded');

      expandButton.textContent = expanded
        ? 'COLLAPSE LAB −'
        : 'EXPAND LAB +';

      expandButton.setAttribute('aria-expanded', String(expanded));
    });
  }

  // START

  selectEffect('body');
  drawIdle();
  render();

})();
