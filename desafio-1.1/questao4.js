import promptSync from 'prompt-sync';
var prompt = promptSync();

class Turma{
    #alunos = [];

    constructor(matr, nom){
        for(const i in a){
            console.log(a[i].keys);
            this.#alunos[i] = {matricula: a[i].matricula}, {nome: a[i].nome}, {p1: undefined}, {p2: undefined}, {nf: undefined};
        }
    }

    insert_student(st){
        for(const i in this.#alunos){
            if(st.matricula == this.#alunos[i].matricula){
                console.log('Matricula ja exitente!');
                return;
            }
        }

        this.#alunos.push(st);
    }

    get alunos(){
        return this.#alunos;
    }
}

let a = [], t, matr, nom, n;

n = prompt('Quantidade de alunos a inserir');

for(let i=0;i<n;i++){
    matr = prompt('Numero de matricula a inserir');
    nom = prompt('Nome do aluno a inserir');

    a[i] = [{matricula: matr}, {nome: nom}];
}

t = new Turma(a);

//console.log(t.alunos);