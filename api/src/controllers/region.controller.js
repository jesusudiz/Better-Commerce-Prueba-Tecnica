const { allRegions, getCommunesByRegion } = require('../queries/getRegions.js');



const getAllRegions = async (req, res) => {
    try {

        const regions = await allRegions();
        return res.status(200).json(regions);

    } catch (error) {
        return res.status(500).json(`Error al intentar obtener los datos:${error.message}`)

    }
};

const getAllCommuneByRegion = async (req, res) => {
    try {
        const { regionId } = req.params;
        const region = await getCommunesByRegion(regionId);

        if (!region) return res.status(404).json("no existe la region solicitada");

        return res.status(200).json(region);

    } catch (error) {
        return res.status(500).json(`Error al intentar obtener los datos:${error.message}`)
    }
};

module.exports = {
    getAllCommuneByRegion,
    getAllRegions
}