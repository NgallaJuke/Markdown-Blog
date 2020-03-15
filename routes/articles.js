const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("THIS IS ARTICLES");
});
module.exports = router;
