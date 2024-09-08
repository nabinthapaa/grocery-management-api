import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /admin/add:
 *   post:
 *    summary: Allows admins to add items to database
 *    tags: ['Admin Action']
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
 * /admin/retrieve:
 *   get:
 *    summary: Allows admin to retrieve the grocery items from database
 *    tags: ['Admin Action']
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
 * /admin/remove:
 *   delete:
 *    summary: Allows admins to remove the items
 *    tags: ['Admin Action']
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
 *   patch:
 *    summary: Allows admin to update the details of existing items
 *    tags: ['Admin Action']
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

/**
 * @swagger
 * /user/manage:
 *   post:
 *    summary: Allows admin to manage the items in database
 *    tags: ['Admin Action']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      200:
 *        description: Successfully updated items
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthResponse'
 *            example:
 *              error: User created Successfully
 *      500:
 *        description: Error while updating items
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              error: User already exists
 */
router.put("/manage");

export default router;
