import express from "express"

const app = express();
app.use(express.json())

import volcanoRouter from "./routers/volcanoesRouter.js"
app.use(volcanoRouter)


const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", 8080));