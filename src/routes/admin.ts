import { Router } from "express";

const router = Router();

router.post("/add");
router.get("/retrieve", (req, res) => {
  return res.status(200).json([
    {
      id: 1,
      name: "Cabbage",
      noOfItems: 20,
    },
    {
      id: 2,
      name: "Carrot",
      noOfItems: 10,
    },
    {
      id: 3,
      name: "Potato",
      noOfItems: 200,
    },
  ]);
});
router.delete("/remove");
router.put("/update");
router.put("/manage");

export default router;
