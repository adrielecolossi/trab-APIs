const { buscaFrase } = require("../integrations/quotes");
const { buscaIdade } = require("../integrations/age");

class Controller {
        async buscar (req, res){
            const {nome} = req.body;
            const frase= await buscaFrase();
            const idade = await buscaIdade(nome);
            if (frase) {
                return res.render('screen', { frase: frase, idade:idade});
            }
            return res.send("ooops, id nao encontrado");
        }

}

module.exports = {Controller};