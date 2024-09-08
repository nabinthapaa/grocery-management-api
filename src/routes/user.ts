import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /user/register:
 *   post:
 *    summary: Registers a user to the server
 *    tags: ['User Auth']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      200:
 *        description: Successfully created user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Register'
 *      500:
 *        description: Erorr registering user
 */
router.post("/register", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    ...req.body,
  });
});

/**
 * @swagger
 * /user/login:
 *   post:
 *    summary: Logs in the registered user
 *    tags: ['User Auth']
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: Successfully created user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Register'
 *      500:
 *        description: Erorr registering user
 */
router.post("/login", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    ...req.body,
  });
});

export default router;
