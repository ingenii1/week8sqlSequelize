const {Sequelize} = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URI);

// sequelize.authenticate().then(()=>{
//     console.log("connected to DB")
// }).catch((error) =>{
//     console.log(error)
// })

// or to authenticate the connection

// let connection = async() =>{
//     try{
//         await sequelize.authenticate()
//     } catch (error) {
//         console.log(error)
//     }
// }
// connection()

module.exports = sequelize