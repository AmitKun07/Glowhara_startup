/* script.js */
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 200;
let player = { x: 50, y: 150, width: 30, height: 30, color: "yellow" };
let obstacles = [];
let gameRunning = false;

document.getElementById("startGame").addEventListener("click", () => {
    gameRunning = true;
    obstacles = [{ x: 400, y: 150, width: 20, height: 20, color: "red" }];
    gameLoop();
});

function gameLoop() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    obstacles.forEach((obs, index) => {
        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        obs.x -= 2;
        if (obs.x + obs.width < 0) {
            obstacles.splice(index, 1);
            obstacles.push({ x: 400, y: 150, width: 20, height: 20, color: "red" });
        }
    });
    requestAnimationFrame(gameLoop);
}