import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Boarding_Pass from './boarding_pass';

const Purchase: any = db.define('purchase', {
    purchase_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchase_date: {
        type: DataTypes.DATE
    }
});

Purchase.hasMany( Boarding_Pass, { foreignKey: 'purchase_id', sourceKey: 'purchase_id' });
Boarding_Pass.belongsTo( Purchase, { foreignKey: 'purchase_id', targetKey: 'purchase_id' });

export default Purchase;