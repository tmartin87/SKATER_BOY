class Enemy {
    static classes = ["enemy1","enemy2","enemy3"]
  constructor() {

    this.element = document.createElement("div");
    this.element.classList.add(Enemy.classes[Math.floor(Math.random()*3)]);
    myGame.element.appendChild(this.element);
    this.positionLeft = 1350;
    this.speed = 4;
    this.isActive = true;
    this.move();
    
  }

  getBounds() {
    return this.element.getBoundingClientRect();
  }

  move() {
    if (this.isActive) {
      const animate = () => {
        if (this.positionLeft <= 0) {
          this.element.remove();
        }

        this.positionLeft -= this.speed;
        this.element.style.left = this.positionLeft + "px";

        if (this.isActive) {
          requestAnimationFrame(animate);
        }
      };

      if (this.isActive) {
        requestAnimationFrame(animate);
      }
    }
  }

  stop() {
    this.isActive = false;
    console.log("STOP!");
    
    this.speed = 0;
    this.element.classList.add("static")
    clearInterval(enemyInterval)
  }
}

const enemies = [];
let enemySpawnInterval = 2000; 
let enemyInterval;


function startEnemySpawn() {
 
  clearInterval(enemyInterval);
  enemyInterval = setInterval(() => {
    if (myGame.isActive) {
      enemies.push(new Enemy());
    } else {
      clearInterval(enemyInterval); 
    }
  }, enemySpawnInterval);
}


function increaseEnemySpawnRate() {
  enemySpawnInterval = Math.max(500, enemySpawnInterval * 0.8); 
  startEnemySpawn(); 
}


startEnemySpawn();

 
setInterval(increaseEnemySpawnRate, 15000);