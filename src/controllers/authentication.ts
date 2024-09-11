import { Request, Response } from "express";
import { AuthResponse, LoginData, RegisterData } from "../interfaces";
import { AuthenticationService } from "../services";
import { httpStatusCode } from "../utils";

export async function register(
  req: Request<any, AuthResponse, RegisterData>,
  res: Response<AuthResponse>,
) {
  const { body } = req;
  await AuthenticationService.register({ ...body });
  return res.status(httpStatusCode.OK).json({
    message: "User created Successfully",
  });
}

export async function login(
  req: Request<any, AuthResponse, LoginData>,
  res: Response<AuthResponse>,
) {
  const { body } = req;
  const data = await AuthenticationService.login({ ...body });
  return res.status(httpStatusCode.OK).json({
    message: "Logged in Successfully",
    token: data.token,
  });
}
