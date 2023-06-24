const fs = require('fs');
const csv = require('csv-parser');
const Region = require('../models/Region.js');
const Commune = require('../models/Commune.js');



async function saveDataOnDb(fileRegion, fileCommune) {
    try {
        const regionStream = fs.createReadStream(fileRegion).pipe(csv());
        const communeStream = fs.createReadStream(fileCommune).pipe(csv());

        for await (const data of regionStream) {
            const newData = {
                id: parseInt(data.id),
                region: data.region,
                created_at:data.created_at,
                updated_at:data.created_at
            };

            const result = await Region.create(newData);
            console.log('Datos de Regiones guardados exitosamente:', result);
        }

        for await (const data of communeStream) {
            const newData = {
                id: parseInt(data.id),
                commune: data.commune,
                region_id: parseInt(data.region_id),
                created_at:data.created_at,
                updated_at:data.created_at
            };

            const result = await Commune.create(newData);
            console.log('Datos de las Comunas guardados exitosamente:', result);
        }

        console.log('Proceso de importación completado.');
    } catch (error) {
        console.error('Error al guardar los datos:', error);
    }
}



module.exports = saveDataOnDb;


