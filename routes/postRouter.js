import express from "express";
import database from "../configs/database.js";

const postRouter = express.Router();

//routes for post 
postRouter.get("/", async (req, res) => {
  const [result, response] = await database.execute("SELECT * FROM post");
  res.json({ message: "ini dari route post", users: result });
});

postRouter.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const [result, response] = await database.execute(
    "SELECT * FROM post WHERE id = ?",
    [postId]
  );
  res.json({
    postId: postId,
    user: result[0],
    message: `detail post dengan id ${postId}`,
  });
});

postRouter.post("/", async (req, res) => {
  const { judul, tulisan, user_id } = req.body;
  console.log(req.body);
  const [result, response] = await database.execute(
    "INSERT INTO post (judul, tulisan, user_id) VALUES (?,?,?)",
    [judul, tulisan, user_id]
  );

  res.json({ message: "post berhasil ditambahkan", result });
});

postRouter.delete("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const [result, response] = await database.execute(
    "DELETE FROM post WHERE id = ?",
    [postId]
  );

  res.json({ message: "post berhasil dihapus", result });
});

export default postRouter