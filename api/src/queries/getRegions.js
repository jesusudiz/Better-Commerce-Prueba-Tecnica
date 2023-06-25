const Region = require('../models/Region.js');
const Commune = require('../models/Commune.js');

const allRegions = async () => {
  const data = await Region.findAll();
  return data;
}

const getRegion = async (id) => {
    const data = await Region.findByPk(id,{
        include:{
            model:Commune,
            attributes:['commune']
        }
    })
    return data;
}

module.exports={
    allRegions,
    getRegion
}