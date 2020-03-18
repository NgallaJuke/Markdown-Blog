const express = require("express");
const articlesRouter = require("./routes/articles");
const mongoose = require("mongoose");
const Article = require("./models/article");
const methodOverride = require("method-override"); //allow to use Delete methods on Form
const app = express();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));//Use BodyPArser
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles });
});
app.use("/articles", articlesRouter);
app.listen(3000);
