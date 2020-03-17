const mongoose = require("mongoose");
const marked = require("marked"); //allows to create markdown and turn it into HTML
const slugify = require("slugify"); // allows to converte our title into URL slug

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
});

articleSchema.pre("validate", function(next) {
  if (this.title) {
    this.slug = slugify(this.title, { mower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Article", articleSchema);
