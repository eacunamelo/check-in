import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Boarding_Pass: any = db.define('boarding_pass', {
    boarding_pass_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchase_id: {
        type: DataTypes.INTEGER
    },
    passenger_id: {
        type: DataTypes.INTEGER
    },
    seat_type_id: {
        type: DataTypes.INTEGER
    },
    seat_id: {
        type: DataTypes.INTEGER
    },
    flight_id: {
        type: DataTypes.INTEGER
    }
});

export default Boarding_Pass;