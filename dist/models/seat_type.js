"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const boarding_pass_1 = __importDefault(require("./boarding_pass"));
const Seat_Type = connection_1.default.define('seat_type', {
    seat_type_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    }
});
Seat_Type.hasMany(boarding_pass_1.default, { foreignKey: 'seat_type_id', sourceKey: 'seat_type_id' });
boarding_pass_1.default.belongsTo(Seat_Type, { foreignKey: 'seat_type_id', targetKey: 'seat_type_id' });
exports.default = Seat_Type;
//# sourceMappingURL=seat_type.js.map