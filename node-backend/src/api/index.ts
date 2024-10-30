import express from "express";
import cors from "cors";
import activityRouter from "./activity";

const app = express();
app.use(cors());
app.use("/", activityRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API Server is running at http://localhost:${PORT}`);
});
