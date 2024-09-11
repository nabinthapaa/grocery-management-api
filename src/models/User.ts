import { RegisterData } from "../interfaces";
import { BaseModel } from "./BaseModel";

export class UserModel extends BaseModel {
  static async createUser(user: RegisterData) {
    return await UserModel.queryBuilder()
      .table("users")
      .insert({ ...user });
  }

  static async updateUser(userId: number, userInfo: Partial<RegisterData>) {
    return await UserModel.queryBuilder()
      .table("users")
      .where({ id: userId })
      .update(userInfo);
  }

  static async deleteUser(userId: number) {
    return await UserModel.queryBuilder()
      .table("users")
      .where({ id: userId })
      .del();
  }

  static async getUser(userId: number) {
    const data = await UserModel.queryBuilder()
      .table("users")
      .where({ id: userId })
      .first<RegisterData>();

    return data;
  }

  static async getUserByUsername(username: string) {
    const data = await UserModel.queryBuilder()
      .table("users")
      .where({ username })
      .first<RegisterData>();

    return data;
  }

  static async getUserByEmail(email: string) {
    const data = await UserModel.queryBuilder()
      .table("users")
      .where({ email })
      .first<RegisterData>();

    return data;
  }

  static async getAllUser() {
    const data = await UserModel.queryBuilder().table<RegisterData>("users");
    return data;
  }
}
