var Sequelize = require("sequelize");
var { sequelize } = require("../sequelize.js");

var planType = sequelize.define(
  "plan_type",
  {
    id: {
      type: Sequelize.BIGINT(20),
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING(255),
    amount_per_month: Sequelize.DECIMAL(10, 2),
    valid_checklist_ids: Sequelize.STRING(255),
    is_delete: Sequelize.BIGINT(20),
    create_time: Sequelize.DATE,
    update_time: Sequelize.DATE,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = planType;
