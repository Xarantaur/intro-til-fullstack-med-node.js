import { Router } from "express";

const router = Router();

router.get("/playpoint", (req, res) => {
  res.send({ data: "yaayy" });
});

export default router;
