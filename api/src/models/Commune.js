const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js");


const Commune = sequelize.define("communes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    commune: {
        type: DataTypes.STRING
    },
    region_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'regions',
            key: 'id',
        },
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Commune;