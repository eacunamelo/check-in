import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Boarding_Pass from './boarding_pass';

const Passenger: any = db.define('passenger', {
    passenger_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    country: {
        type: DataTypes.STRING
    }
});


Passenger.hasMany( Boarding_Pass, { foreignKey: 'passenger_id', sourceKey: 'passenger_id' });
Boarding_Pass.belongsTo( Passenger, { foreignKey: 'passenger_id', targetKey: 'passenger_id' });

export default Passenger;