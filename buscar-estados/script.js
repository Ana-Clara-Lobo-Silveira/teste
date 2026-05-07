const estado = document.getElementById('estados');
console.log(estado);
const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`;
const consulta = fetch(url)
console.log(consulta);
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
