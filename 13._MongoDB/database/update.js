import db from "./connection.js"

const result = await db.types.updateOne({ name: "Kung-fu"}, { $set: { price: 12}})
console.log(result)