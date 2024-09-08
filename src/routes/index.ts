import { Router } from "express";
import adminRouter from "./admin";
import authRouter from "./auth";
import userRouter from "./user";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello world" });
});

router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/user", userRouter);

export default router;
