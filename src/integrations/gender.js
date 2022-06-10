
  
const axios = require('axios');

const buscaGenero = async (nome) => {
   
    //const URL = `https://wordsapiv1.p.mashape.com/words/example`
   const URL = `https://api.genderize.io/?name=${nome}`
     //const URL= `https://api.agify.io?name=${nome}`
    try {
        const resposta = await axios.get(URL);
        console.log(resposta.data);
        return resposta.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { buscaGenero  };