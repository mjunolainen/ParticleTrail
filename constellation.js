import { canvas, ctx } from "./setup.js";
import { Particle } from "./Particle.js";

let particleArray = [];
let numberOfParticles = 150;

export function init() {
  particleArray = [];

  for (let i = 0; i < numberOfParticles; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 5 + 2;
    let color = "black";
    let weight = 1;
    particleArray.push(new Particle(x, y, size, color, weight));
  }
}

export function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
  connect();
  requestAnimationFrame(animate);
}

function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      let distance =
        (particleArray[a].x - particleArray[b].x) *
          (particleArray[a].x - particleArray[b].x) +
        (particleArray[a].y - particleArray[b].y) *
          (particleArray[a].y - particleArray[b].y);

      if (distance < 7000) {
        opacityValue = 1 - distance / 8000;
        ctx.strokeStyle = "rgba(255, 255, 255," + opacityValue + ")";
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}
