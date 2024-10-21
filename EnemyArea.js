class EnemyArea {
    constructor(){
        
        this.element = document.querySelector("#enemy_area");
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
       

    }
}


const enemyArea = new EnemyArea();