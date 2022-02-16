const { ReS, ReE } = require("../utils/response");

const responseInterceptor = (req, res, next) => {
  // Gán method res.json mặc định của express cho biến originalJson
  const originalJson = res.json;
  // Ghi đè lại hành vi mặc định của res.json của express
  // => sau này khi ta gọi tới res.json trong các hàm controller là ta đang gọi tới hàm
  res.json = function (code, payload, message) {
    // Code nằm trong khoảng 200-300 là thành công
    if (code >= 200 && code < 300) {
      const data = ReS(payload, code, message);
      originalJson.call(res, data);
    }
    const data = ReE(code, payload, message);
    originalJson.call(res, data);
  };
  next();
};

module.exports = {
  responseInterceptor,
};
