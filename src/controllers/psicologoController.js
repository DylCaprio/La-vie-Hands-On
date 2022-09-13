const psicologoController = {
    listarPsicologo: (req, res) => {
        res.json([{nome: 'psicologo 1'}, {nome: 'psicologo 2'}]);
    }
}

module.exports = psicologoController;
