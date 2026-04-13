const mongoose = require("mongoose");

// REVIEW: No email format validation (`match` or custom validator) or reasonable `min`/`max` on `age` — enforce at schema level to match frontend rules.

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
