

document.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "ArrowUp") {
    player.jump();
    jumpSound.currentTime = 0;
    jumpSound.play();
  }
});



function checkCollision() {
  const playerBounds = player.getBounds();

  enemies.forEach((enemy) => {
    const enemyBounds = enemy.getBounds();

    if (
      playerBounds.left < enemyBounds.right &&
      playerBounds.right > enemyBounds.left &&
      playerBounds.top < enemyBounds.bottom &&
      playerBounds.bottom > enemyBounds.top
    ) {
      
      enemy.stop();

     
      player.stop();
      const source = document.querySelector("#background-video");
      if (source) {
        source.remove();
      }
      enemies.forEach((enemy) => {
        enemy.stop();
      });
      myGame.stop();
       backgroundMusic.pause();
      backgroundMusic.currentTime = 0;

      clearInterval(scoreInterval);
      document.getElementById("restart-button").style.display = "block";
    }
    
  });
}

setInterval(checkCollision, 1);

const scoreCounter = document.getElementById('score-counter');
let score = 0;
let scoreInterval;

// Función para incrementar el puntaje
const incrementScore = () => {
  score += 100; // Suma 100 puntos
  scoreCounter.textContent = `Score: ${score}`;
};

// Inicia el contador de puntos
scoreInterval = setInterval(incrementScore, 1000);


 