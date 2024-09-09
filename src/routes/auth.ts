import { Router } from "express";
import { AuthenticationController } from "../controllers";
import { LoginData, RegisterData } from "../interfaces";
import { validateRequestBody } from "../middlewares";
import { LoginSchema, RegisterSchema } from "../Schemas/Authentication";
import { requestHandler } from "../utils/requestHandler";

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
router.post(
  "/register",
  validateRequestBody<RegisterData>(RegisterSchema),
  requestHandler(AuthenticationController.register),
);

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
router.post(
  "/login",
  validateRequestBody<LoginData>(LoginSchema),
  requestHandler(AuthenticationController.login),
);

export default router;
