const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./conn/conn");
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");
const port = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1",User);
app.use("/api/v1",Books);
app.use("/api/v1",Favourite);
app.use("/api/v1",Cart);
app.use("/api/v1",Order);


// Creating port
app.listen(port, ()=>{
    console.log(`Server Started on ${port}`);
})