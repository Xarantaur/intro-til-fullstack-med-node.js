import bcrypt from "bcrypt";

const saltRounds = 14;
const plaintextPassword = "hunter123"
const passwordHash = "$2b$14$m88nIt3WhTjFjqxXj.xCjeTL2q7joIJwh9uYpUb1nV6ol2P2uPAuq"


const hashedPassword = await bcrypt.hash( plaintextPassword, saltRounds)

console.log(hashedPassword)

const isSame = await bcrypt.compare(plaintextPassword, passwordHash)

console.log(isSame)