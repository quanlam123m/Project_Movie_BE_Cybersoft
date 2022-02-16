const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Cinema extends Model {
    static associate(db) {
      // Khai báo các mối quan hệ
      this.belongsTo(db.Cineplex, {
        as: "cineplex",
        foreignKey: "cineplexId",
      });
      this.hasMany(db.CinemaConnectMovie, {
        foreignKey: "cinemaId",
      });
    }
  }

  Cinema.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name",
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "address",
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "img",
      },
      cineplexId: {
        type: DataTypes.INTEGER,
        field: "cineplex_id",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.fn("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "Cinema", //Tên model
      tableName: "cinemas", //Tên table
      timestamps: true, // Nếu fales Bỏ qua createdAt, updatedAt
    }
  );

  return Cinema;
};
