"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Purchase = connection_1.default.define('purchase', {
    passenger_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    passenger_date: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = Purchase;
//# sourceMappingURL=purchase%20copy.js.map