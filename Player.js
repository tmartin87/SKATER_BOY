class Player {
    constructor() {
      this.element = document.createElement("div");
      this.element.setAttribute("id", "player");
      myGame.element.appendChild(this.element);
      

      this.positionBottom = 0;
      this.positionLeft = 0;
      this.distance = 0;
      

    }
  
    
    
  }
  
  const player = new Player();