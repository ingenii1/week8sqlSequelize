const sequelize = require("../db/connection");
const {DataTypse} = require("sequelize");

const Film = sequelize.define("Netflix", {
    name: {
        type : DataTypse.STRING,
        allowNull : false
    },
    actor: {
        type : DataTypse.STRING,
        allowNull:false
    }
})

module.exports = Film;