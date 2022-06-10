const { buscaGenero } = require("../integrations/gender");
const { buscaIdade } = require("../integrations/age");
const { buscaDoguinhos } = require("../integrations/dogs");

class Controller {
        async buscar (req, res){
            const {nome} = req.body;
            const genero= await buscaGenero(nome);
            
            const idade = await buscaIdade(nome);
            const cachorro = await buscaDoguinhos();
            if (genero && idade && cachorro) {
                return res.render('screen', { genero: genero, idade:idade, cachorro:cachorro});
            }
            return res.send("ooops, nome nao encontrado");
        }

}

module.exports = {Controller};