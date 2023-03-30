"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const flight_1 = __importDefault(require("./flight"));
const Airplane = connection_1.default.define('airplane', {
    airplane_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    }
});
Airplane.hasMany(flight_1.default, { foreignKey: 'airplane_id', sourceKey: 'airplane_id' });
flight_1.default.belongsTo(Airplane, { foreignKey: 'airplane_id', targetKey: 'airplane_id' });
exports.default = Airplane;
//# sourceMappingURL=airplane.js.map