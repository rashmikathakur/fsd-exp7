const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// test route (working already)
app.get("/test", (req, res) => {
  res.send("Test working ✅");
});

// 👇 MongoDB connect
.connect(process.env.MONGODB_URI || "mongodb+srv://drishtiparas786_db_user:Dparas_786@cluster0.eryb4mm.mongodb.net/fsdDB?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// 👇 Product model (IMPORTANT)
const Product = mongoose.model(
  "Product",
  {
    name: String,
    price: Number,
    image: String
  },
  "products"
);

// 👇 API
app.get("/api/products", async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👇 server start (last me)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running 🚀 on ${PORT}`));