const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "first_name", // key để truy suất database
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "last_name",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, // Không được null
        unique: true, // Không được trùng lặp
        validate: {
          isEmail: {
            msg: "Email không đúng định dạng",
          },
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // Set sẽ được tự động thực thi khi ta create
        set(value) {
          // VD muốn xử lý trường hợp admin thêm 1 user vào chỉ cần nhập email
          // Ta sẽ gen ra 1 password
          if (!value) {
            value = nanoid();
          }

          // Không được lưu password dưới dạng plaintext
          // Ta cần mã hóa password trước khi save xuống database
          // Để mã hóa password ta dùng thư viện bcrypt

          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(value, salt);
          this.setDataValue("password", hash);
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "User",
      },
      avatar: {
        type: DataTypes.STRING(1000),
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
      modelName: "User", // Tên model,
      tableName: "users",
      timestamps: true, // Nếu fales Bỏ qua createdAt, updatedAt
    }
  );

  return User;
};
