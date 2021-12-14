const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "entregaspro",
  api_key: "345719359751421",
  api_secret: "G3awlyLUJOe3exE8ksRpTgkgJ-g",
});

export default cloudinary;
