const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "md-mujer",
  api_key: "856294724554942",
  api_secret: "j12JADF5v8ybBQpyCJFA8nfexFw",
});

export default cloudinary;
