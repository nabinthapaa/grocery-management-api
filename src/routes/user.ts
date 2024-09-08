import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /user/add:
 *   post:
 *    summary: Allows users to add items to their cart
 *    tags: ['User Action']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      200:
 *        description: Items added Successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthResponse'
 *            example:
 *              error: User created Successfully
 *      500:
 *        description: Error while adding items
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              error: User already exists
 */
router.post("/add");

/**
 * @swagger
 * /user/retrieve:
 *   get:
 *    summary: Allows user to retrieve the grocery items from their cart
 *    tags: ['User Action']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      200:
 *        description: Successfull retrival of items
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthResponse'
 *            example:
 *              error: User created Successfully
 *      500:
 *        description: Error retrieving items
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              error: User already exists
 */
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

/**
 * @swagger
 * /user/remove:
 *   delete:
 *    summary: Allows users to remove items from their cart
 *    tags: ['User Action']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      200:
 *        description: Successfully removed item
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthResponse'
 *            example:
 *              error: User created Successfully
 *      500:
 *        description: Error Removing items
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              error: User already exists
 */
router.delete("/remove");

/**
 * @swagger
 * /user/update:
 *   put:
 *    summary: Allows user to update items in cart
 *    tags: ['User Action']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      200:
 *        description: Successfully update item
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthResponse'
 *            example:
 *              error: User created Successfully
 *      500:
 *        description: Error while updating item
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              error: User already exists
 */
router.put("/update");

export default router;
