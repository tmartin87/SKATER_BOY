class Enemy {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("enemy");
        myGame.element.appendChild(this.element);
        this.positionLeft =   1400; 
        this.speed = 35; 
        this.isActive = true; 
        this.move(); 
    }

    getBounds() {
        return this.element.getBoundingClientRect(); 
    }

    move() {
        const moveInterval = setInterval(() => {
            if (this.positionLeft <= 0) { 
                this.positionLeft = 1400; 
            }
            this.positionLeft -= this.speed; 
            this.element.style.left = this.positionLeft + "px"; 
            
            if (!this.isActive) {
                clearInterval(moveInterval); 
            }
        }, 50); 
    }

    stop() {
        this.isActive = false; 
    }
}

const enemies = [];
        for (let i = 0; i < 1; i++) {
            enemies.push(new Enemy());
        }