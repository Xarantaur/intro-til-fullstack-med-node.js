import fs from "fs"
// synkront readfile gør at der ikke kan ske noget samtidig med dette :
export function readPage(path) {
    return fs.readFileSync(path).toString();

}

// nullish coalesce operator ?? || 
/* const value = "";
console.log(value ?? "some other value") brug denne.
console.log(value || "some other value") */ // if 0 then = some other value , faktisk type coerces. takes falsyy values and coerces

const header = fs.readFileSync("./public/components/header/header.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(page, config={}) {
    return header.replace("$TAB_TITLE$", config.tabTitle ?? "DogInder")
                 .replace("$CSS_LINKS$", config.CSSLinks ?? "")
    + page 
    + footer;
}

