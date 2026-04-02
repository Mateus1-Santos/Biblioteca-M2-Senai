const CHAVE_DE_ACESSO = 'bibilioteca-ralph-teddy';

const autenticar = (req, res, next) => {
    const autHeader = req.headers['authorization']

    if (!autHeader){
        returnres.status(401).json(
            {
                erro: "Acesso Negado - Falta de Token",
            });
    }

    const token  = autHeader.split(' ') [1];

    if (token !== CHAVE_DE_ACESSO)({
        erro: 'acesso proibido'
})
    next();

};
module.exports = autenticar;