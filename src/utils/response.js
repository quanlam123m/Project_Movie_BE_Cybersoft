// const res = require("express/lib/response");

// Hàm format kết quả trả về của API khi thành công cho client
const ReS = (data, code, message = "") => {
  let result = { success: true };

  if (message) {
    result.message = message;
  }

  return { code, data, ...result };
};

// Hàm format kết quả trả về của API khi thất bại cho client
const ReE = (code, err, message = "") => {
  const resp = { success: false };
  let errors = [];

  if (code) {
    resp.statusCode = code;
  }

  if (message) {
    resp.message = message;
  }

  if (Array.isArray(err) && err.length > 0) {
    errors = err.map((e) => e.message);
  } else if (typeof err === "object" && err.message) {
    errors = [err.message];
  } else {
    errors = [err];
  }

  return { errors, ...resp };
};

module.exports = {
  ReS,
  ReE,
};
