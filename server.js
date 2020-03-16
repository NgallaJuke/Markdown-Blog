const express = require("express");
const articlesRouter = require("./routes/articles");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Article 1",
      createdAt: new Date(),
      description: "Test Description 1"
    },
    {
      title: "Article 2",
      createdAt: new Date(),
      description: "Test Description 2"
    },
    {
      title: "Article 3",
      createdAt: new Date(),
      description: "Test Description 3"
    },
    {
      title: "Article 4",
      createdAt: new Date(),
      description: "Test Description 4"
    }
  ];
  res.render("articles/index", { articles });
});
app.use("/articles", articlesRouter);
app.listen(5000);
