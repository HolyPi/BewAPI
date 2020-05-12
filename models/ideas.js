const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IdeaSchema = new Schema({
  idea_by: { type: String },
  idea: { type : String },
});

module.exports = mongoose.model("Idea", IdeaSchema);