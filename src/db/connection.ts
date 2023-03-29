import { Sequelize } from 'sequelize';

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
const db = new Sequelize( 'airline', 'bsale_test', 'bsale_test', {
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

export default db;