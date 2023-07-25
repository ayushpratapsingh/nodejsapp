const router = require("express").Router();
const { getTodos, createTodos, updateTodos ,deleteTodos } = require("./controllers/Todo");
router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});
router.get("/todos", getTodos);
router.post("/ctodos", createTodos);
router.put("/utodos/:todoID", updateTodos);
router.delete("/dtodos/:todoID", deleteTodos);
module.exports = router;
