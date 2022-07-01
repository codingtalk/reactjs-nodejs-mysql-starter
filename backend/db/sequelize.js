var Sequelize = require("sequelize");

var argvUtil = require("../utils/argvUtil");
var config = require("../config");

if (argvUtil.get("env") === "test") {
  var config = require("../config/index.test");
}

if (argvUtil.get("env") === "prod") {
  var config = require("../config/index.prod");
}

var sequelize = new Sequelize(
  config.mysql.DATABASE,
  config.mysql.USERNAME,
  config.mysql.PASSWORD,
  {
    logging: function (sql) {
      if (process.env.NODE_ENV !== "production") {
        console.log(sql);
      }
    },
    port: config.mysql.PORT,
    host: config.mysql.HOST,
    dialect: "mysql",
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    pool: {
      max: 20,
      min: 1,
      acquire: 60000,
      idle: 10000,
    },
    timezone: "+08:00",
  }
);

exports.sequelize = sequelize;

exports.defineModel = function (name, attributes) {
  var attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === "object" && value["type"]) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
      };
    }
  }
  attrs.version = {
    type: Sequelize.BIGINT,
  };
  attrs.createUser = {
    type: Sequelize.STRING,
    allowNull: false,
  };
  attrs.updateUser = {
    type: Sequelize.STRING,
    allowNull: false,
  };
  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: true,
    paranoid: true,
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
    hooks: {
      beforeBulkCreate: function (obj) {
        obj.version = 0;
      },
      beforeValidate: function (obj) {
        if (obj.isNewRecord) {
          console.log("first");
          obj.version = 0;
        } else {
          console.log("not first");
          obj.version = obj.version + 1;
        }
      },
    },
  });
};
