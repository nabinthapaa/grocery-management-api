import { Request, Response } from "express";
import { AuthenticationService } from "../services";
import { AuthResponse, LoginData, RegisterData } from "../interfaces";
/*
P = core.ParamsDictionary, 
ResBody = any, 
ReqBody = any, 
ReqQuery = qs.ParsedQs, 
Locals extends Record<string, any> = Record<string, any>
*/

/*
ResBody = any, 
Locals extends Record<string, any> = Record<string, any>
*/

export function createUser(
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
