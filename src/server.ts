import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3003, () => console.log("Server is running on PORT 3003"));