const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = models.User || model("User", UserSchema);
