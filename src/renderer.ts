import Graphics from "./Toolbox/Graphics";
import SandboxGame from "./SandboxGame";

const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gfx = new Graphics(canvas.getContext('2d')!);
const game = new SandboxGame(gfx);

function gameLoop(timeStamp: DOMHighResTimeStamp) {
  const dt = timeStamp - lastFrameTime;
  lastFrameTime = timeStamp;
  game.advanceGame(dt);
  requestAnimationFrame(gameLoop);
}
let lastFrameTime = performance.now();
requestAnimationFrame(gameLoop);