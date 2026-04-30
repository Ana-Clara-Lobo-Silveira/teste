// try{
//     let idade = -5;
//     if(idade < 0){
//         let erro = new Error('Idade não pode ser menor que 0!')
//         erro.codigo = 1000;
//         erro.tipo = 3030;
//         throw erro;
//     }
// }catch(erro){
//         let text = `
//         <strong>Nome do erro: </strong>${erro.name}<br>
//         <strong>Mensagem:</strong> ${erro.message}<br>
//         <strong>Código:</strong> ${erro.codigo}<br>
//         <strong>Tipo:</strong> ${erro.tipo}<br>
//         <strong>Stack:</strong><pre>${erro.stack}</pre>
        
//     `
//     document.body.innerHTML = text;
// };


/* Criar uma função geradora de erro */

const geradoraErro = (mensagem, codigo, tipo) =>{
    
    erro = new Error(mensagem);
    erro.codigo_a = codigo;
    erro.tipo_a = tipo;
    return erro;
};

    try{
        let saldo = -100;
        if(saldo<0){
            throw geradoraErro('oi', 100, 110);
        }
        
    }catch(erro){
        let text = `
        <strong>Mensagem:</strong> ${erro.message}<br>
        <strong>Código:</strong> ${erro.codigo_a}<br>
        <strong>Tipo:</strong> ${erro.tipo_a}<br>
        
    `
    document.body.innerHTML = text;
    console.log(erro, erro.codigo_a, erro.tipo_a);
};

/* Criar uma requisição HTTP com fetch e .then */

/* Criar uma requisição HTTP com fecth e async/await */

