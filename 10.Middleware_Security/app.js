import "dotenv/config";



import express from "express";
const app = express();

app.use(express.static("public"))

app.use(express.json());

import session from "express-session";

/* console.log( process.env.SESSION_SECRET) */
app.use(
  session({
    
    secret: process.env.SESSION_SECRET,
    resave: false,  // selvom der ikke er ændret noget i session så gem alligevel hvis true, så false giver god mening
    saveUninitialized: true,  // først gang der laves et request så lav et session object 
    cookie: { secure: false },
  })
);
console.log(process.env.SESSION_SECRET)
import helmet from "helmet";
app.use(helmet());

import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);




import xxsRouter from "./routers/xssRouther.js"
app.use(xxsRouter)

import sessionRouter from "./routers/sessionRouter.js"
app.use(sessionRouter)





const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use("/auth", authRateLimiter);

function ipLogger(req, res, next) {
  console.log(req.ip);
  next();
}

app.use(ipLogger);

import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

const PORT = process.env.PORT ?? 8080;
/* app.listen(PORT, () => console.log("server is running on port: ", PORT)); */
const server = app.listen(PORT, () => console.log("server is running on port: ", server.address().port));
