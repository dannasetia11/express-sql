const router = require("express").Router();

router.get("/:name", require("./controller").getAll);
router.post("/", require("./controller").addOne);
router.put("/:id", require("./controller").updateOne);
router.delete("/:id", require("./controller").deleteOne);

module.exports = router;
