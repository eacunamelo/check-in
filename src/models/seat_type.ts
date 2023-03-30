import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Boarding_Pass from './boarding_pass';

const Seat_Type: any = db.define('seat_type', {
    seat_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
});

Seat_Type.hasMany( Boarding_Pass, { foreignKey: 'seat_type_id', sourceKey: 'seat_type_id' });
Boarding_Pass.belongsTo( Seat_Type, { foreignKey: 'seat_type_id', targetKey: 'seat_type_id' });

export default Seat_Type;