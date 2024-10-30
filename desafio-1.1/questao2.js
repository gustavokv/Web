import promptSync from 'prompt-sync';
var prompt = promptSync();

class Vertice{
    #vertice = [];

    constructor(nx, ny){
        this.#vertice = {x: nx, y: ny};
    }
    
    get x(){
        return this.#vertice.x;
    }

    get y(){
        return this.#vertice.y;
    }

    getDistancia(v){
        return Math.sqrt((v.x - this.#vertice.x) ** 2 + (v.y - this.#vertice.y) ** 2);
    }

    move(nx, ny){
        this.#vertice = {x: nx, y: ny};
    }

    equals(v){
        if(v.x == this.#vertice.x && v.y == this.#vertice.y)
            return true;

        return false;
    }
}

class Triangulo{
    
}