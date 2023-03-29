"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Desarrollo
// const db = new Sequelize( 'sribd', 'root', 'root', {
//     host: 'Localhost',
//     dialect: 'mysql',
//     // logging: false,
//     define: {
//         // Deshabilita la creacion de campos de Sequelize
//         timestamps: false,
//         // Deshabilita el cambio de nombre de tablas de Sequelize
//         freezeTableName: true
//     },
// }); 
//Produccion
const db = new sequelize_1.Sequelize('airline', 'bsale_test', 'bsale_test', {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: 'mysql',
    // logging: false,
    define: {
        // Deshabilita la creacion de campos de Sequelize
        timestamps: false,
        // Deshabilita el cambio de nombre de tablas de Sequelize
        freezeTableName: true
    },
});
exports.default = db;
//# sourceMappingURL=connection.js.map