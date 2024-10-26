class Player {
    constructor() {
      this.element = document.createElement("div");
      this.element.setAttribute("id", "player");
      myGame.element.appendChild(this.element);
      this.positionBottom = 80; 
      this.positionLeft = 100; 
      this.element.style.left = this.positionLeft + 'px';
      this.element.style.bottom = this.positionBottom + 'px'; 
  
      this.isJumping = false;
      

    }

   
  
    jump() {
      if (!this.isJumping) {
        this.isJumping = true;
        this.element.classList.add('saltando'); 
  
        setTimeout(() => {
          this.element.classList.remove('saltando');
          this.isJumping = false; // 
        }, 700);
      }
    }

    getBounds() {
        return this.element.getBoundingClientRect();


    }
    
  }
  
  const player = new Player();