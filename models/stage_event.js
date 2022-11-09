const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

class StageEvent extends Model{}

StageEvent.init({
    stage_events_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stage_id: {
        type: DataTypes.SMALLINT,   
        allowNull: false
    },
    event_id: {
        type: DataTypes.SMALLINIT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'StageEvents',
    tableName: 'stage_events',
    timestamps: false,
})

module.exports = StageEvent