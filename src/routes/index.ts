import { Router } from "express";
import adminRouter from "./admin";
import authRouter from "./auth";
import userRouter from "./user";
import { authorize } from "../middlewares";

const router = Router();

router.get("/", (_, res) => {
  return res.status(200).json({ message: "Hello world" });
});

router.use("/auth", authRouter);
router.use("/admin", authorize("admin"), adminRouter);
router.use("/user", userRouter);

export default router;
