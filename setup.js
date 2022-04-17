// Canvas setup
export const canvas = document.getElementById("canvas1");
export const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Mouse position
export let mouse = {
  x: null,
  y: null,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// set mouse position to undefined when mouse leaves the canvas to avoid creating particles to the last known position
// maybe trigger a callback function on mouseleave event instead?
setInterval(function () {
  mouse.x = undefined;
  mouse.y = undefined;
}, 200);
