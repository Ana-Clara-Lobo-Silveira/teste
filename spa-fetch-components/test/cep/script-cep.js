
const botao1 = document.getElementById('botaoThen');
const botao2 = document.getElementById('botaoAsAw');

const cep = document.getElementById('inputCep');

function buscarCepThen(){
    
const url = `https://viacep.com.br/ws/${cep.value}/json/`;
const consulta = fetch(url)

consulta
.then((resposta) => { 
    if(!resposta.ok){
        throw new Error('Erro na requisição.')
    }
    return resposta.json()
})
.then((dados) => {
    if(dados.erro){
        throw new Error('Verifique o CEP novamente!')
    }
    console.log(dados)})
.catch((error) =>{console.warn(error.message)});
};

// -------------------------------------------------------------


    

async function buscarCep(){
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    const consulta = fetch(url)
    let resposta = await consulta;
    let dataObj = await resposta.json();
    console.log(dataObj)
};

botao1.addEventListener('click', buscarCepThen)
botao2.addEventListener('click', buscarCep)