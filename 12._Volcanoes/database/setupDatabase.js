import db from "./connection.js";

// DDL : Data definition Language  ( schemes e.g.)

// ORM System : alt det nede under.


const isDeleteMode = process.argv.find((arg) => arg === 'delete')
console.log(isDeleteMode)

/* 
const isDeleteMode = false; */
if (isDeleteMode) {
  await db.run(`DROP TABLE IF EXISTS volcanoes;`);
  await db.run(`DROP TABLE IF EXISTS villages;`);
}

await db.exec(` CREATE TABLE IF NOT EXISTS volcanoes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    is_Active BOOLEAN,
    type TEXT CHECK( type IN('Caldera', 'Pointy','Underwater','underground','Super Volcanoe') )
)
`);

await db.exec(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    volcanoe_id INTEGER,
    FOREIGN KEY (volcanoe_id) REFERENCES villages (id)
)`);

// DML
// SEEDING THE DATABASE:  populater databsen med data.
if (isDeleteMode) {
  await db.run(`INSERT INTO volcanoes( name, is_AcTive, type )
VALUES ( 'johnny', 'true', 'Pointy') 
`);

  await db.run(`INSERT INTO volcanoes( name, is_AcTive, type )
VALUES ( 'Susan fra kommunen','true', 'Super Volcanoe') 
`);

  await db.run(`INSERT INTO villages( name, volcanoe_id )
VALUES ( 'johnnyboiss', '1')`);
}
