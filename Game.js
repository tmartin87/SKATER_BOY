class Game {

    constructor(){

        this.score = 0;
        this.bestScore = 0;
        this.element = document.querySelector("#game-area");
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        
    }
}


const myGame = new Game();
