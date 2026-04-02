const errorHandler = (err, req, res, next) => {
    console.log(`ERRO: ${req.method} ${req.url}`, err.menssage)

    const status = err.status || 500;

    res.status(status).json({
        erro: err.menssage || "Erro interno na Biblioteca M2",
        caminho: req.url,
    });
};

module.exports = errorHandler;