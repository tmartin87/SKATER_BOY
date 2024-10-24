class Enemy {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("enemy");
        myGame.element.appendChild(this.element);
        this.positionLeft =   1400; // Posición inicial aleatoria
        this.speed = 35; // Velocidad de movimiento
        this.isActive = true; // Estado para controlar el movimiento
        this.move(); // Iniciar movimiento
    }

    getBounds() {
        return this.element.getBoundingClientRect(); // Devuelve las coordenadas del enemigo
    }

    move() {
        const moveInterval = setInterval(() => {
            if (this.positionLeft <= 0) { // Si el enemigo sale de la pantalla
                this.positionLeft = 1400; // Reinicia la posición a la derecha
            }
            this.positionLeft -= this.speed; // Mover hacia la izquierda
            this.element.style.left = this.positionLeft + "px"; // Actualiza la posición en el DOM
            
            if (!this.isActive) {
                clearInterval(moveInterval); // Detener el movimiento si no está activo
            }
        }, 50); // Actualiza cada 100 ms
    }

    stop() {
        this.isActive = false; // Cambia el estado a no activo
    }
}

const enemies = [];
        for (let i = 0; i < 1; i++) {
            enemies.push(new Enemy());
        }