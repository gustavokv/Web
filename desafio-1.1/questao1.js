import promptSync from 'prompt-sync';
var prompt = promptSync();

class Vertice{
    #vertice = [];

    constructor(x, y){
        this._x = x;
        this._y = y;
    }
    
    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    getDistancia(v){
        return Math.sqrt((v.x - this._x) ** 2 + (v.y - this._y) ** 2);
    }

    move(nx, ny){
        this._x = nx;
        this._y = ny;
    }

    equals(v){
        if(v.x == this._x && v.y == this._y)
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

    V[i] = new Vertice(x,y);
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
