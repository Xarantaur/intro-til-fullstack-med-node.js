import express from "express";
// ændre packeage.json til at indeholde "type":"module" for at kunne importere
const app = express();

app.use(express.static("public"));

import path from "path";
import getMatches from "./util/matches.js";

/* console.log(__dirname); */ // __dirname virker ikke længere fordi vi bruger module i dependencies, den vil have en abosulute path
// istedet for kan vi importere path :
/* console.log(path.resolve("public/homepage/homepage.html"));
 */
// ================HTML=========================

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

app.get("/matches", (req, res) => {
  res.sendFile(path.resolve("public/pages/matches/matches.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("public/pages/contact/contact.html"));
});

// ==================API ====================

app.get("/api/matches", async (req, res) => {
  const matches = await getMatches();
  res.send({ data: matches });
});

const PORT = 8080;
app.listen(PORT, () => console.log("server is running on port: ", PORT));
