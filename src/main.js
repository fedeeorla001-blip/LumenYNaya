// src/main.js
import { BootScene } from './game/scenes/BootScene.js';

class Game {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    
    // Risoluzione interna stile pixel-art (es. 16:9 widescreen retro)
    this.canvas.width = 426;
    this.canvas.height = 240;
    
    document.getElementById('game-container').appendChild(this.canvas);

    // Disabilita l'anti-aliasing per mantenere la pixel-art nitida
    this.ctx.imageSmoothingEnabled = false;

    // Inizializza la prima scena
    this.currentScene = new BootScene(this);
    
    this.lastTime = 0;
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  loop(timeStamp) {
    const deltaTime = (timeStamp - this.lastTime) / 1000;
    this.lastTime = timeStamp;

    // Aggiorna e disegna la scena corrente
    if (this.currentScene) {
      this.currentScene.update(deltaTime);
      this.currentScene.draw(this.ctx);
    }

    requestAnimationFrame(this.loop);
  }
}

// Avvio al caricamento della pagina
window.addEventListener('load', () => {
  new Game();
});
