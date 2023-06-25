const Region = require('../models/Region.js');
const Commune = require('../models/Commune.js');

const allRegions = async () => {
  const data = await Region.findAll();
  return data;
}

const getCommunesByRegion = async (id) => {
    const data = await Commune.findAll({
        where: {
          region_id: id,
        },
        attributes: [ 'commune'],
      });
    console.log(data)
    return data;
}

module.exports={
    allRegions,
    getCommunesByRegion
}