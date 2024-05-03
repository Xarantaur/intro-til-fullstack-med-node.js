import db from "./connection.js";

const result = await db.types.deleteMany({ name: "twister" })
console.log(result)