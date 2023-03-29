import { DataTypes } from 'sequelize';
import db from '../db/connection';

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

export default Flight;