const express = require("express");
const rootRouter = require("./routes/v1");
const cors = require("cors");
const multer = require("multer");
const { responseInterceptor } = require("./middlewares/interceptors");
const aws = require("aws-sdk");
const config = require("./config");

// Setup express
const app = express();
app.use(express.json());
app.use("/static", express.static("static"));
app.use(cors());
app.use(responseInterceptor);

// Setup multer middleware, xử lý file upload tuy nhiên không lưu vào server
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Setup AWS S3
const s3 = new aws.S3({
  accessKeyId: config.s3_access_key,
  secretAccessKey: config.s3_secret_key,
});

app.use("/api/v1", rootRouter);

app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const { folder } = req.body;
  const { buffer, originalname, mimetype } = req.file;
  const dst = `${folder}/${Date.now()}_${originalname}`;

  const params = {
    Bucket: config.s3_bucket_name,
    Key: dst,
    Body: buffer,
    ContentType: mimetype,
  };

  s3.putObject(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const url = `${config.s3_domain_name}/${dst}`;
      res.status(200).json(200, url);
    }
  });
});

app.listen(8080, () => {
  console.log("Listening at port 8080");
});
