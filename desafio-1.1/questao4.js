import promptSync from 'prompt-sync';
var prompt = promptSync();

class Turma{
    #alunos = [];

    constructor(matr, nom){
        for(const i in a){
            this.#alunos[i] = {matricula: a[i].matricula, nome: a[i].nome, p1: undefined, p2: undefined, nf: undefined};
        }
    }

    insert_student(st){
        let ns;
        
        if((this.#alunos.find(({matricula}) => matricula == st.matricula)) == undefined){
            ns = {matricula: st.matricula, nome: st.nome, p1: undefined, p2: undefined, nf: undefined};
            this.#alunos.push(ns);
        }
        else
            console.log('Matricula', `${st.matricula}`, 'ja existe');
    }

    remove_student(matr){
        let i;

        if((i = this.#alunos.findIndex(({matricula}) => matricula == matr)) != -1)
            this.#alunos.splice(i, 1);
        else
            console.log('Matricula', `${matr}`, 'nao encontrada!');
    }

    insert_grade(matr, grade, p){
        let i;

        if((i = this.#alunos.findIndex(({matricula}) => matricula == matr)) > -1){
            if(p == 'p1'){
                this.#alunos[i].p1 = grade;
            }
            else
                this.#alunos[i].p2 = grade;
        }
        else
            console.log('Matricula', `${matr}`, 'nao encontrada!');
    }

    #seeP(p, i){
        if(p == 'p1'){
            if(this.#alunos[i].p1 != undefined)
                return this.#alunos[i].p1;

            return '-';
        }
        
        if(this.#alunos[i].p2 != undefined)
            return this.#alunos[i].p2;
        
        return '-';
    }

    #calculateNF(i){
        let P1, P2;

        if(this.#alunos[i].p1 != undefined)
            P1 = this.#alunos[i].p1;
        else
            P1 = 0;

        if(this.#alunos[i].p2 != undefined)
            P2 = this.#alunos[i].p2;
        else
            P2 = 0;

        return (P1+P2) / 2;
    }

    get alunos(){
        console.log('—---------------------------------------');
        console.log('Matricula   Nome        P1    P2    NF');

        for(const i in this.#alunos){
            console.log((this.#alunos[i].matricula).padEnd(11), (this.#alunos[i].nome).padEnd(11), (`${this.#seeP('p1', i)}`).padEnd(5), (`${this.#seeP('p2', i)}`).padEnd(5), (this.#calculateNF(i)).toFixed(1));
        }

        console.log('—---------------------------------------');
    }
}

let a = [], t, matr, nom, n;

n = prompt('Quantidade de alunos a inserir: ');

for(let i=0;i<n;i++){
    matr = prompt('Numero de matricula a inserir: ');
    nom = prompt('Nome do aluno a inserir: ');

    a[i] = {matricula: matr, nome: nom};
}

t = new Turma(a);

t.insert_student({matricula: '12334', nome: 'Leoncio'});
t.remove_student(12812);
t.insert_grade(1234, 7.5, 'p1');
t.insert_grade(1234, 10, 'p2');
console.log(t.alunos);