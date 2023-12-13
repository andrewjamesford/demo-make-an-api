const app = require("./app");
const port = process.env.PORT || 5001;
const mongoose = require("mongoose");

let mongoUrlK8s = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`;
// const mongoUrlK8s = process.env.MONGO_URI || "mongodb://localhost:27017/mongo";
const dbURI = mongoUrlK8s;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000
}).then(() => console.log("Connected to database")).catch((err) => {
    console.log(err)
    console.log("MONGO_URI=", process.env.MONGO_URI);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});