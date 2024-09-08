import { Router } from "express";
import adminRouter from "./admin";
import userRouter from "./user";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello world" });
});

router.use("/admin", adminRouter);
router.use("/user", userRouter);

export default router;
