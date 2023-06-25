const Commune = require('../models/Commune.js');
const Region = require('../models/Region.js');


const allCommunes = async () => {
    const data = await Commune.findAll();
    return data;
};

const getCommune = async (id) => {
    const data = await Commune.findByPk(id, {

        include: {
            model: Region,
            attributes: ['region'],
        },
    })
    return data;
};

module.exports={
    getCommune,
    allCommunes
}