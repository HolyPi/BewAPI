const mongoose = require("mongoose")
assert =  require("assert")
mongoose.Promise = global.Promise;
const url = "mongodb://localhost/idea-node-db";
mongoose.connect( "mongodb://localhost/idea-node-db", { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
console.error.bind(console, "MongoDB connection Error:")

})

module.exports = mongoose.connection;