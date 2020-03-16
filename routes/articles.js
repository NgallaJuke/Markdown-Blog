const router = require("express").Router();

const Article = require("./../models/article");
router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

router.post("/", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  });
  try {
    console.log("TRY", article);
    article = await article.save(); // CHECK WHY IT4S NOT SAVING
    res.redirect(`/articles/${article._id}`);
  } catch (error) {
    console.log("ERROR", error);
    res.render("articles/new", { article });
  }
});

module.exports = router;
