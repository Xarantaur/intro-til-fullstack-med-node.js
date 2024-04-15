import { Router } from "express";
const router = Router();

import escape from "escape-html";

const message= []

router.get("/messages", (req, res ) => {
    res.send({ data: messages})
});
router.post("/messages", (req, res ) => {
    messages.push(req.body.message);
    console.log(messages)
    res.send({ data: messages });
});


export default router;