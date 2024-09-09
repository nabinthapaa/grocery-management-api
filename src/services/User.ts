import { RetrievalError } from "../errors/RetrievalError";
import { WriteError } from "../errors/WriteError";
import { RegisterData } from "../interfaces";
import { UserModel } from "../models/User";

export function createUser(data: RegisterData) {
  const { error } = UserModel.createUser(data);
  if (error) {
    throw new WriteError(error);
  }
  return;
}

export function getUserByUsername(username: string) {
  const { error, data } = UserModel.getUserByUsername(username);
  if (error) {
    throw new RetrievalError(error);
  }
  return data;
}
