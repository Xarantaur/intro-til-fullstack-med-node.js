import { Router } from "express";
const router = Router();

function ipLogger( req, res, next){
    console.log( req.ip);
    next();
}

/* app.use(ipLogger) */

// middleware :
function doorman(req, res, next) {
    if(req.query.secret?.toLowerCase() === "open sesame"){ 
        next();
    } else{
        res.status(401).send({ message: "You are not allowed to get into the room"})
    }
    
}



function greeter(req, res, next) {
    /* res.status(401).send({ message: "Hello"}) */
    console.log("Hello")
    next();
}

/* 
router.get("*", (req, res) => {
    res.status(404).send("<h1>Not Found</h1>")
}) */

router.get("/room",greeter, doorman, (req, res, next) => {  // next kalder næste match.
    console.log("room1")
    /* res.send({data: "you are in room 1"})  cannot send two respondses (header cannot be set when its already send)*/
    next(); 
}) 

        // inline middleware
        router.get("/room",(req,res, next)=> {
            console.log("On to the next room...");
            next();
        }, (req, res, next) => {
            console.log("you are in room 2")
            next()
        })

router.get("/room", (req, res, next) => {
    res.send({data: "you are in room 2"})
})

/* router.all("*", (req, res) =>{
    res.status(404).send({ message: "Not Found" })
}) */


export default router;

