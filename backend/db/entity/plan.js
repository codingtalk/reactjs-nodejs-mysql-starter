var Sequelize = require("sequelize");
var { sequelize } = require("../sequelize.js");

var plan = sequelize.define(
  "plan",
  {
    id: {
      type: Sequelize.BIGINT(20),
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    type_id:  Sequelize.BIGINT(20),
    member_id:  Sequelize.BIGINT(20),
    is_delete: Sequelize.BIGINT(20),
    create_time: Sequelize.DATE,
    update_time: Sequelize.DATE,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = plan;
