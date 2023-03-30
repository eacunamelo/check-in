import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Boarding_Pass from './boarding_pass';

const Flight: any = db.define('flight', {
    flight_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    takeoff_date_time: {
        type: DataTypes.STRING
    },
    takeoff_airport: {
        type: DataTypes.STRING
    },
    landing_date_time: {
        type: DataTypes.DATE
    },
    landing_airport: {
        type: DataTypes.BOOLEAN
    },
    airplane_id: {
        type: DataTypes.INTEGER
    }
});

Flight.hasMany( Boarding_Pass, { foreignKey: 'flight_id', sourceKey: 'flight_id' });
Boarding_Pass.belongsTo( Flight, { foreignKey: 'flight_id', targetKey: 'flight_id' });

export default Flight;