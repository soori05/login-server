
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://soori-admin:1234567890@cluster0.20zol.mongodb.net/dashboardDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));
