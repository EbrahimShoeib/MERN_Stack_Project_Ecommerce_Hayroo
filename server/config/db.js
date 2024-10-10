const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://codexTech:codexTech@e-commerce.spcjb.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected  ..");
}
