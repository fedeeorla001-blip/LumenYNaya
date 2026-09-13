// src/game/entities/Player.js
export class Player {
  constructor(x, y) {
    // Posizione e dimensioni
    this.x = x;
    this.y = y;
    this.width = 16;
    this.height = 20;

    // Velocità e Fisica
    this.vx = 0;
    this.vy = 0;
    this.speed = 120; // Velocità di corsa
    this.jumpForce = -220; // Forza del salto (verso l'alto = negativo)
    this.gravity = 500; // Gravità verso il basso
    this.isGrounded = false; // Il giocatore sta toccando terra?

    // Gestione input tastiera
    this.keys = {};
    window.addEventListener('keydown', (e) => this.keys[e.code] = true);
    window.addEventListener('keyup', (e) => this.keys[e.code] = false);
  }

  update(deltaTime) {
    // --- 1. Movimento Orizzontale (Frecce o A/D) ---
    this.vx = 0;
    if (this.keys['ArrowRight'] || this.keys['KeyD']) {
      this.vx = this.speed;
    }
    if (this.keys['ArrowLeft'] || this.keys['KeyA']) {
      this.vx = -this.speed;
    }

    // --- 2. Salto (Freccia Su / W / Spazio) ---
    if ((this.keys['ArrowUp'] || this.keys['KeyW'] || this.keys['Space']) && this.isGrounded) {
      this.vy = this.jumpForce;
      this.isGrounded = false;
    }

    // --- 3. Applicazione della Gravità ---
    this.vy += this.gravity * deltaTime;

    // --- 4. Aggiornamento Posizione ---
    this.x += this.vx * deltaTime;
    this.y += this.vy * deltaTime;

    // --- 5. Collisione Base col Terreno (a y = 200) ---
    const groundLevel = 200 - this.height;
    if (this.y >= groundLevel) {
      this.y = groundLevel;
      this.vy = 0;
      this.isGrounded = true;
    }
  }

  draw(ctx) {
    // Per ora disegniamo un rettangolo rosso stile "Mario Placeholder"
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(Math.floor(this.x), Math.floor(this.y), this.width, this.height);
  }
}
