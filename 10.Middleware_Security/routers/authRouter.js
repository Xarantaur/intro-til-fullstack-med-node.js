import { Router } from "express";
const router = Router();


function isAdmin(req, res, next) {
    // todo simulate databse or similar to check if the user is an admin

    req.isAdmin = true;
    req.user = {
        name: "Owner of the house"
    };

    next();
}

router.get("/auth/lockedRoom",isAdmin , (req, res) => {
    console.log(req.isAdmin, req.user)
  res.send({ message: "you are in the locked room"})
});

export default router;