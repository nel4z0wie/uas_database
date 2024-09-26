import express from "express";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";

const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3000, () => {
  console.log("Server is runnin on port 3000");
});