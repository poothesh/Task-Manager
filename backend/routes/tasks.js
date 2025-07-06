const router = require("express").Router();
const verifyToken = require("../middleware/auth");
const { getTasks, addTask, updateTask, deleteTask, shareTask } = require("../controllers/taskController");

router.get("/", verifyToken, getTasks);
router.post("/", verifyToken, addTask);
router.put("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);
router.post("/:taskId/share", verifyToken, shareTask);

module.exports = router;