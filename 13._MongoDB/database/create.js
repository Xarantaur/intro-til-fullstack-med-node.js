import db from "./connection.js"

const createIceCream = await db.types.insertOne( {name: "twister", price: 20.19  })

