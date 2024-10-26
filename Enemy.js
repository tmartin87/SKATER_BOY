class Enemy {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("enemy");
        myGame.element.appendChild(this.element);
        this.positionLeft = 1400; 
        this.speed = 5; 
        this.isActive = true; 
        this.move(); 
    }

    getBounds() {
        return this.element.getBoundingClientRect(); 
    }

    move() {
        const animate = () => {
            if (this.positionLeft <= 0) { 
                this.positionLeft = 1400; 
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

    stop() {
        this.isActive = false; 
        
        
    }
}

const enemies = [];
        for (let i = 0; i < 6; i++) {
            enemies.push(new Enemy());
        }


          