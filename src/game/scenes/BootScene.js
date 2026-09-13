// src/game/scenes/BootScene.js
import { Player } from '../entities/Player.js';

export class BootScene {
  constructor(game) {
    this.game = game;
    // Inizializziamo il giocatore al centro del terreno
    this.player = new Player(50, 150);
  }

  update(deltaTime) {
    // Aggiorna la logica del giocatore (movimento, gravità, tasti)
    this.player.update(deltaTime);
  }

  draw(ctx) {
    // 1. Pulisci lo schermo (Sfondo azzurro cielo)
    ctx.fillStyle = '#5c94fc';
    ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // 2. Disegna un terreno di prova (Verde/Marrone stile Mario)
    ctx.fillStyle = '#e75910'; // Terra
    ctx.fillRect(0, 200, this.game.canvas.width, 40);
    ctx.fillStyle = '#00a800'; // Erba in cima
    ctx.fillRect(0, 200, this.game.canvas.width, 5);

    // 3. Disegna il giocatore
    this.player.draw(ctx);
  }
}
