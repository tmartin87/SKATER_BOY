class Enemy {
    static classes = ["enemy1","enemy2","enemy3"]
  constructor() {

    this.element = document.createElement("div");
    this.element.classList.add(Enemy.classes[Math.floor(Math.random()*3)]);
    myGame.element.appendChild(this.element);
    this.positionLeft = 1400;
    this.speed = 7;
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

const enemyInterval = setInterval(() => {
  enemies.push(new Enemy());
  if(!myGame.isActive){
    clearInterval(enemyInterval)
  }
}, 2000);
