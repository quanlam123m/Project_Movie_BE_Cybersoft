const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Ticket extends Model {
    static associate(db) {
      // Khai báo các mối quan hệ
      this.belongsTo(db.Films, {
        as: "films",
        foreignKey: "filmsId",
      });
    }
  }

  Ticket.init(
    {
      showtimes: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "showtimes",
      },
      seats: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "seats",
      },
      movie: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "movie_name",
      },
      room: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "room",
      },
    },
    {
      sequelize,
      modelName: "Ticket", //Tên model
      tableName: "ticket", //Tên table
      timestamps: true, // Nếu fales Bỏ qua createdAt, updatedAt
    }
  );

  return Ticket;
};
