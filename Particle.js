import { canvas, mouse } from "./setup.js";

// Create particles
export class Particle {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.weight = weight;
  }

  update() {
    this.size -= 0.05;
    if (this.size < 0) {
      this.x = mouse.x + (Math.random() * 20 - 10);
      this.y = mouse.y + (Math.random() * 20 - 10);
      this.size = Math.random() * 5 + 5;
      this.weight = Math.random() * 10 - 0.5;
    }
    this.y += this.weight;
    this.weight += 0.2;

    if (this.y > canvas.height - this.size) {
      this.weight *= -0.4;
    }
  }
}
