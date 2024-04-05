import { Router } from "express"

import { contactPage } from "../util/readPages.js"

const router = Router();

router.post("/api/contact", (req, res) => {
    console.log("Form submitted" , req.body);
    res.redirect("/");
    
})

export default router;