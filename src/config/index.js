require("dotenv").config();

module.exports = {
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_ROOT_USER,
  db_password: process.env.DB_ROOT_PASSWORD,
  dv_dialect: process.env.DB_DIALECT,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,

  secret_key: process.env.SECRET_KEY,

  s3_bucket_name: process.env.BUCKET_NAME,
  s3_domain_name: process.env.DOMAIN,
  s3_access_key: process.env.ACCESS_KEY,
  s3_secret_key: process.env.S3_SECRET_KEY,
};
