const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

class Stage extends Model{}

Stage.init({
    stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stage_name: {
        type: DataTypes.STRING,
        allowNull: false

    },
}, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
})

module.exports = Stage

