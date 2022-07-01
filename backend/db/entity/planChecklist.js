var Sequelize = require("sequelize");
var { sequelize } = require("../sequelize.js");

var planChecklist = sequelize.define(
  "plan_checklist",
  {
    id: {
      type: Sequelize.BIGINT(20),
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING(255),
    description: Sequelize.TEXT,
    is_delete: Sequelize.BIGINT(20),
    create_time: Sequelize.DATE,
    update_time: Sequelize.DATE,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = planChecklist;
