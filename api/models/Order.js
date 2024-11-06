const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" }
});

module.exports = mongoose.model("Order", orderSchema);
