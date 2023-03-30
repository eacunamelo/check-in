import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Boarding_Pass from './boarding_pass';

const Seat: any = db.define('seat', {
    seat_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seat_column: {
        type: DataTypes.STRING
    },
    seat_row: {
        type: DataTypes.INTEGER
    },
    seat_type_id: {
        type: DataTypes.INTEGER
    },
    airplane_id: {
        type: DataTypes.INTEGER
    },
});

Seat.hasMany( Boarding_Pass, { foreignKey: 'seat_id', sourceKey: 'seat_id' });
Boarding_Pass.belongsTo( Seat, { foreignKey: 'seat_id', targetKey: 'seat_id' });

export default Seat;