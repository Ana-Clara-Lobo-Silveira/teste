
/* Criar uma requisição HTTP com fetch e .then */
const url = 'https://viacep.com.br/ws/01011000/json/';
const consulta = fetch(url)
consulta
.then((resposta) => { 
    if(!resposta.ok){
        throw new Error('Erro na requisição.')
    }
    return resposta.json()})
.then((dados) => {
    if(dados.erro){
        throw new Error('Verifique o CEP novamente!')
    }
    console.log(dados)})
.catch((error) =>{console.warn(error.message)});


/* Criar uma requisição HTTP com fecth e async/await */

