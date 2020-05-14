const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: { type: String, required: true },
    password: {type: String, select: false}
})


UserSchema.pre("save", function(next) {
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
  });   

module.exports = mongoose.model("User", UserSchema)