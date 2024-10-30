import promptSync from 'prompt-sync';
var prompt = promptSync();

class Vertice{
    #x;
    #y;

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

class Triangulo{
    
}