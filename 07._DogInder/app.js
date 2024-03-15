import express from "express";
// ændre packeage.json til at indeholde "type":"module" for at kunne importere
const app = express();

app.use(express.static("public"));

import { homepagePage, matchesPage, contactPage } from "./util/readPages.js";

import { readPage, renderPage } from "./util/templatingEngine.js";


/* console.log(__dirname); */ // __dirname virker ikke længere fordi vi bruger module i dependencies, den vil have en abosulute path
// istedet for kan vi importere path :
/* console.log(path.resolve("public/homepage/homepage.html"));
 */
// ================HTML=========================

import playRouter from "./routers/playRouter.js"
app.use(playRouter)
import matchesRouter from "./routers/matchesRouter.js"
app.use(matchesRouter)
import pagesRouter from "./routers/pagesRouter.js"
app.use(pagesRouter)


/* app.get("/", (req, res) => {
  res.send(homepagePage);
});

app.get("/matches", (req, res) => {
  res.send(matchesPage);
});

app.get("/contact", (req, res) => {
  res.send(contactPage);
});

app.get("/page", (req, res) => {
  res.send("<div>sdadasd</div>");   // udnyt til serverside rendering.
}); */

// ==================API ====================


/* app.get("/api/matches", async (req, res) => {
  const matches = await getMatches();
  res.send({ data: matches });
}); */

const PORT = 8080;
app.listen(PORT, () => console.log("server is running on port: ", PORT));
