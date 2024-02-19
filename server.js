import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import dbConnection from "./database/db.js";
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const PORT = process.env.PORT || 8000;

dbConnection();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
