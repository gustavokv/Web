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

let x,y;
let V = [3];

/* Preencher o array de vértices */
for(let i=0;i<3;i++){
    x = prompt('x' + Number(i+1) + ' ');
    y = prompt('y' + Number(i+1) + ' ');

    V[i] = new Vertice(parseInt(x), parseInt(y));
}

for (const i in V) {
    console.log(V[i].x, V[i].y);
}

/* Testes dos métodos */
console.log(V[0].getDistancia(V[1]));
console.log(V[0].equals(V[1]));
console.log(V[1].equals(V[2]));
V[0].move(10, 15);
console.log(V[0].x, V[0].y);