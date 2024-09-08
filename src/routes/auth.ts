import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /auth/register:
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
 *              $ref: '#/components/schemas/AuthResponse'
 *            example:
 *              error: User created Successfully
 *      500:
 *        description: Error during user creation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              error: User already exists
 */
router.post("/register", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    ...req.body,
  });
});

/**
 * @swagger
 * /auth/login:
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
 *              $ref: '#/components/schemas/AuthResponse'
 *            example:
 *              error: Login Successfull
 *      500:
 *        description: Error during logging user in
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              error: Invalid credentials provided
 *
 */
router.post("/login", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    ...req.body,
  });
});

export default router;
