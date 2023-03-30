"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const boarding_pass_1 = __importDefault(require("./boarding_pass"));
const Seat = connection_1.default.define('seat', {
    seat_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seat_column: {
        type: sequelize_1.DataTypes.STRING
    },
    seat_row: {
        type: sequelize_1.DataTypes.INTEGER
    },
    seat_type_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    airplane_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
});
Seat.hasMany(boarding_pass_1.default, { foreignKey: 'seat_id', sourceKey: 'seat_id' });
boarding_pass_1.default.belongsTo(Seat, { foreignKey: 'seat_id', targetKey: 'seat_id' });
exports.default = Seat;
//# sourceMappingURL=seat%20copy.js.map