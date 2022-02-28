const sequelize = require("../db/connection");
const {DataTypse} = require("sequelize");
const {
  setApproval,
  firstUpper,
  setTitle,
  setActor,
  setRating,
  setLower,
  changeItem,
} = require("./modelHelpers");


const Film = sequelize.define("Netflix", {
    name: {
        type : DataTypse.STRING,
        allowNull : false,
        get() {
      const rawValue = this.getDataValue("title");
      return firstUpper(rawValue);
    },
    set(value) {
      this.setDataValue("title", firstUpper(value));
    },
   },
    actor: {
        type : DataTypse.STRING,
        allowNull:false,
        get() {
      const rawValue = this.getDataValue("actor");
      return firstUpper(rawValue);
    },
  },

  approval: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue("approval");
      return firstUpper(rawValue);
    },
  },

  rating: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("approval", setApproval(value));
      this.setDataValue("rating", value);
    },
  },

});

module.exports = {Film};