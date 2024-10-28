class Player {
  constructor() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "player");
    
    myGame.element.appendChild(this.element);
    this.positionBottom = 70; 
    this.positionLeft = 100; 
    this.element.style.left = this.positionLeft + 'px';
    this.element.style.bottom = this.positionBottom + 'px'; 

    this.isJumping = false;

  
    this.isActive = true; 
    

  }

 

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.element.classList.add('saltando'); 

      setTimeout(() => {
        this.element.classList.remove('saltando');
        this.isJumping = false; 
      }, 900);
    }
  }

  getBounds() {
      return this.element.getBoundingClientRect();


  }

  stop() {
      this.isActive = false; 
     const currentBottom =  myGame.element.getBoundingClientRect().bottom - this.element.getBoundingClientRect().bottom  
      this.element.style.bottom = currentBottom + "px" 

      console.log(this.element.getBoundingClientRect().bottom);
      
  }
  
}

const player = new Player(); 
