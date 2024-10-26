class Enemy {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("enemy");
        myGame.element.appendChild(this.element);
        this.positionLeft =   1400; 
        this.speed = 35; 
        this.isActive = true; 
        this.move(); 

    getBounds() {
        return this.element.getBoundingClientRect(); // Devuelve las coordenadas del enemigo
    }

    move() {
        const animate = () => {
            if (this.positionLeft <= 0) { 
                this.positionLeft = 1400; 
            }
            
            this.positionLeft -= this.speed; 
            this.element.style.left = this.positionLeft + "px"; 
    
            if (this.isActive) {
                requestAnimationFrame(animate); // Llama a animate solo si isActive es true
            }
        };
        
        // Inicia la animación
        if (this.isActive) {
            requestAnimationFrame(animate);
        }
    }

    stop() {
        this.isActive = false; // Cambia el estado a no activo
    }
}

const enemies = [];
        for (let i = 0; i < 1; i++) {
            enemies.push(new Enemy());
        }