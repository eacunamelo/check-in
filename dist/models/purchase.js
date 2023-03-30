"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const boarding_pass_1 = __importDefault(require("./boarding_pass"));
const Purchase = connection_1.default.define('purchase', {
    purchase_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchase_date: {
        type: sequelize_1.DataTypes.DATE
    }
});
Purchase.hasMany(boarding_pass_1.default, { foreignKey: 'purchase_id', sourceKey: 'purchase_id' });
boarding_pass_1.default.belongsTo(Purchase, { foreignKey: 'purchase_id', targetKey: 'purchase_id' });
exports.default = Purchase;
//# sourceMappingURL=purchase.js.map