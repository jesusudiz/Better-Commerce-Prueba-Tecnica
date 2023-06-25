const app = require("./src/app.js")
const sequelize=require("./src/database/db.js")
const CargarDatos=require('./src/database/loadData.js')
const regions = './src/database/regions.csv';
const communes = './src/database/communes.csv';

async function  main(){

    try {
        await sequelize.sync({force:true});
        console.log('Connection has been established successfully.');

        await CargarDatos(regions,communes); // *descomentar esta linea de codigo para cargar datos en la base de datospor primera vez

        app.listen(3001);
        console.log("server is listening on port 3001")
        
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();