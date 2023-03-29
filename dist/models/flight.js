"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Flight = connection_1.default.define('flight', {
    flight_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    takeoff_date_time: {
        type: sequelize_1.DataTypes.STRING
    },
    takeoff_airport: {
        type: sequelize_1.DataTypes.STRING
    },
    landing_date_time: {
        type: sequelize_1.DataTypes.DATE
    },
    landing_airport: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    airplane_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Flight;
//# sourceMappingURL=flight.js.map