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
    #vertices = [3];
    #a;
    #b;
    #c;

    constructor(x1, y1, x2, y2, x3, y3){
        this.#vertices[0] = new Vertice(x1, y1);
        this.#vertices[1] = new Vertice(x2, y2);
        this.#vertices[2] = new Vertice(x3, y3);

        this.#a = this.#vertices[0].getDistancia(this.#vertices[1]);
        this.#b = this.#vertices[0].getDistancia(this.#vertices[2]);
        this.#c = this.#vertices[1].getDistancia(this.#vertices[2]);
        
        if(!(this.#a + this.#b > this.#c && this.#a + this.#c > this.#b && this.#b + this.#c > this.#a))
            throw 'Os vertices nao formam um triangulo';
    }

    get a(){
        return this.#a;
    }

    get b(){
        return this.#b;
    }

    get c(){
        return this.#c;
    }

    #swap(x, y){ return [y, x]; }

    #sort_values(x, y, z){
        if (x > z)
            [x, z] = this.#swap(x, z);
        if (x > y)
            [x, y] = this.#swap(x, y);
        if (y > z)
            [y, z] = this.#swap(y, z);

        return [x, y, z];
    }

    equals(t){
        let a1, b1, c1;
        let a2, b2, c2;

        [a1, b1, c1] = this.#sort_values(this.#a, this.#b, this.#c);
        [a2, b2, c2] = this.#sort_values(t.a, t.b, t.c);

        if(a1 == a2 && b1 == b2 && c1 == c2)
            return true;
        
        return false;
    }

    get perimetro(){
        return this.#a+this.#b+this.#c;
    }

    tipo(){
        if(this.#a == this.#b && this.#a == this.#c)
            return 'Equilatero';
        if(this.#a == this.#b || this.#a == this.#c || this.#b == this.#c)
            return 'Isosceles';
        else
            return 'Escaleno';
    }

    clone(){
        return this;
    }

    get area(){
        let s = this.perimetro / 2;

        return Math.sqrt(s * (s - this.#a) * (s - this.#b) * (s - this.#c));
    }
}

let t1, t2, t3, x = [3], y = [3];

console.log('Triangulo 1');
for(let i=0;i<3;i++){
    x[i] = prompt('x' + Number(i+1) + ' ');
    y[i] = prompt('y' + Number(i+1) + ' ');
}

t1 = new Triangulo(x[0], y[0], x[1], y[1], x[2], y[2]);

console.log('Triangulo 2');
for(let i=0;i<3;i++){
    x[i] = prompt('x' + Number(i+1) + ' ');
    y[i] = prompt('y' + Number(i+1) + ' ');
}

t2 = new Triangulo(x[0], y[0], x[1], y[1], x[2], y[2]);

console.log('Triangulo 3');
for(let i=0;i<3;i++){
    x[i] = prompt('x' + Number(i+1) + ' ');
    y[i] = prompt('y' + Number(i+1) + ' ');
}

t3 = new Triangulo(x[0], y[0], x[1], y[1], x[2], y[2]);

console.log(t1.equals(t2));
console.log(t2.perimetro);
console.log(t3.tipo());
t3 = t2.clone();
console.log(t1.area);