document.addEventListener('keydown', (event) => {
    if (event.key === " " || event.key === "ArrowUp" ) { 
      player.jump();
    }
  });

  

 function checkCollision() {
            const playerBounds = player.getBounds(); 

            enemies.forEach(enemy => {
                const enemyBounds = enemy.getBounds();  

                
                if (
                    playerBounds.left < enemyBounds.right &&
                    playerBounds.right > enemyBounds.left &&
                    playerBounds.top < enemyBounds.bottom &&
                    playerBounds.bottom > enemyBounds.top
                ) {
                    console.log("¡Colisión detectada!");
                    enemy.stop();
                    
                   player.element.style.animationPlayState = "paused"
                   player.stop()
                
                }
            });
        }

        
        setInterval(checkCollision, 1); 