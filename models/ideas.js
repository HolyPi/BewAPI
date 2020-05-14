const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IdeaSchema = new Schema({
  idea_by: { type: String, required: true },
  idea: { type : String, required: true },
});

module.exports = mongoose.model("Idea", IdeaSchema);