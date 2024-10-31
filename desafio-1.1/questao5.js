import promptSync from 'prompt-sync';
var prompt = promptSync();

let nome, cpf, dataRead, data, renda, estado, depend;

function checkAge(data){
    let end = new Date();

    let diff = end.getFullYear() - data.getFullYear();

    if(diff > 17)
        return false;

    return true;
}

do{
    nome = prompt('Nome: ');
} while(typeof nome != 'string' || nome.length < 5);

do{
    cpf = prompt('CPF: ');
}while(cpf.toString().length != 11);

cpf = Number(cpf);

do{
    dataRead = prompt('Data de nascimento: ');

    dataRead = dataRead.split("/");

    data = new Date(+dataRead[2], dataRead[1], +dataRead[0]);
}while(checkAge(data));

do{
    renda = prompt('Renda mensal: ');
}while(renda < 0);

renda = Number(renda);
renda = renda.toFixed(2);

do{
    estado = prompt('Estado civil: ');
}while(estado != 'C' && estado != 'S' && estado != 'D' && estado != 'V');

do{
    depend = prompt('Dependentes: ');
}while(depend < 0 || depend > 10);

let stringcpf = cpf.toString();

stringcpf = stringcpf.slice(0, 3) + '.' + stringcpf.slice(3, 6) + '.' + stringcpf.slice(6, 9) + '-' + stringcpf.slice(9, 11);

console.log('Nome:', `${nome}`, 'CPF:', `${stringcpf}`, 'Renda:', renda, 'Data de nascimento:', data.getDate(), '/', data.getMonth(), '/', data.getFullYear());