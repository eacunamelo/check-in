"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Boarding_Pass = connection_1.default.define('boarding_pass', {
    boarding_pass_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchase_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    passenger_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    seat_type_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    seat_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    flight_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Boarding_Pass;
//# sourceMappingURL=boarding_pass.js.map