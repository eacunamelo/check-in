"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const boarding_pass_1 = __importDefault(require("./boarding_pass"));
const Passenger = connection_1.default.define('passenger', {
    passenger_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: {
        type: sequelize_1.DataTypes.STRING
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER
    },
    country: {
        type: sequelize_1.DataTypes.STRING
    }
});
Passenger.hasMany(boarding_pass_1.default, { foreignKey: 'passenger_id', sourceKey: 'passenger_id' });
boarding_pass_1.default.belongsTo(Passenger, { foreignKey: 'passenger_id', targetKey: 'passenger_id' });
exports.default = Passenger;
//# sourceMappingURL=passenger.js.map