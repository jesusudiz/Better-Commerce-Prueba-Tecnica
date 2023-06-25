const { oneCommune, allCommunes } = require('../../queries/getCommunes.js');

const getAllCommunes = async (req, res) => {
    try {
        const communes = await allCommunes();
        return res.status(200).json(communes);

    } catch (error) {
        return res.status(500).json(`Error al obtener los datos:${error.message}`);
        
    }
}
const getOneCommune = async (req, res) => {
    try {
        const { id } = req.params;
        const commune = await oneCommune(id);

        if (!id) return res.status(404).json("No existe la comuna solicitada");

        return res.status(200).json(commune);
    } catch (error) {
        return res.status(500).json(`Error al obtener los datos:${error.message}`);
    }
}

module.exports = {
    getAllCommunes,
    getOneCommune
}