const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js");
const Commune = require("./Commune.js")

const Region = sequelize.define("regions", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    region: {
        type: DataTypes.STRING
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
});

Region.hasMany(Commune, {
    foreignKey: "region_id",
    sourceKey: "id"
  });
  
  Commune.belongsTo(Region, {
    foreignKey: "region_id",
    targetKey: "id"
  });

module.exports = Region;