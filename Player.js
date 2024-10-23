class Player {
    constructor() {
      this.element = document.createElement("div");
      this.element.setAttribute("id", "player");
      myGame.element.appendChild(this.element);
  
      this.isJumping = false; 
    }
  
    jump() {
      if (!this.isJumping) {
        this.isJumping = true;
        this.element.classList.add('saltando'); 
  
        setTimeout(() => {
          this.element.classList.remove('saltando');
          this.isJumping = false; // 
        }, 600);
      }
    }
  }
  
  const player = new Player();