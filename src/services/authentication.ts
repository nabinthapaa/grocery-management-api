import { UserService } from ".";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { LoginData, RegisterData } from "../interfaces";

export function createUser(data: RegisterData) {
  return UserService.createUser(data);
}

export function login(data: LoginData) {
  const user = UserService.getUserByUsername(data.username) as RegisterData;

  if (user.password !== data.password) {
    throw new UnauthorizedError("Username or password invalid");
  }

  return;
}
