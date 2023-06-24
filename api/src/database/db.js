require('dotenv').config();
const {Sequelize} = require('sequelize');
const {DB_USER,DB_PORT,DB_PASSWORD,DB_NAME}=process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}`,{logging: false}) 

module.exports = sequelize;
