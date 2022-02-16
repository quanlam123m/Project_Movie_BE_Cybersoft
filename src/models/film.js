const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Films extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.CinemaConnectMovie, {
        foreignKey: "movieId",
      });
    }
  }
  Films.init(
    {
      name: DataTypes.STRING,
      //   poster: {
      //     type: DataTypes.STRING,
      //     defaultValue: "",
      //   },
      trailer: DataTypes.STRING,
      description: DataTypes.TEXT,
      isHot: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isNowShowing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Films",
      tableName: "films",
    }
  );
  return Films;
};
