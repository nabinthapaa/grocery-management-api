import { Request, Response } from "express";
import { AuthenticationService } from "../services";
import { AuthResponse, LoginData, RegisterData } from "../interfaces";

export function register(
  req: Request<any, AuthResponse, RegisterData>,
  res: Response<AuthResponse>,
) {
  const { body } = req;
  AuthenticationService.createUser({ ...body });
  return res.status(200).json({
    message: "User created Successfully",
  });
}

export function login(
  req: Request<any, AuthResponse, LoginData>,
  res: Response<AuthResponse>,
) {
  const { body } = req;
  AuthenticationService.login({ ...body });
  return res.status(200).json({
    message: "Logged in Successfully",
  });
}
