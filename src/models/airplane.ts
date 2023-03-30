import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Flight from './flight';

const Airplane: any = db.define('airplane', {
    airplane_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
});

Airplane.hasMany( Flight, { foreignKey: 'airplane_id', sourceKey: 'airplane_id' });
Flight.belongsTo( Airplane, { foreignKey: 'airplane_id', targetKey: 'airplane_id' });

export default Airplane;