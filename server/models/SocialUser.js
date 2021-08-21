const { Schema, model } = require("mongoose");

const socialUserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"]
  }
});

const SocialUser = model("SocialUser", socialUserSchema);

module.exports = SocialUser;
