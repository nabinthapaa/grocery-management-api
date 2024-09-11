import { UserExistsError, NotFoundError } from "../errors";
import { RegisterData } from "../interfaces";
import { UserModel } from "../models";

export class UserService {
  static async createUser(userData: RegisterData) {
    const existingUserByUsername = await UserModel.getUserByUsername(
      userData.username,
    );
    if (existingUserByUsername) {
      throw new UserExistsError("Username already exists.");
    }

    const existingUserByEmail = await UserModel.getUserByEmail(userData.email);
    if (existingUserByEmail) {
      throw new UserExistsError("Email already exists.");
    }

    const newUser = await UserModel.createUser(userData);
    return { success: true, user: newUser };
  }

  static async getUserByUsername(username: string) {
    return await UserModel.getUserByUsername(username);
  }

  static async getUserByEmail(email: string) {
    return await UserModel.getUserByEmail(email);
  }

  static async updateUser(userId: number, updateData: Partial<RegisterData>) {
    const existingUser = await UserModel.getUser(userId);

    if (!existingUser) {
      throw new NotFoundError("User not found.");
    }

    if (updateData.username && updateData.username !== existingUser.username) {
      const userWithSameUsername = await UserModel.getUserByUsername(
        updateData.username,
      );
      if (userWithSameUsername) {
        throw new UserExistsError("Username already exists.");
      }
    }

    if (updateData.email && updateData.email !== existingUser.email) {
      const userWithSameEmail = await UserModel.getUserByEmail(
        updateData.email,
      );
      if (userWithSameEmail) {
        throw new UserExistsError("Email already exists.");
      }
    }

    const updatedUser = await UserModel.updateUser(userId, updateData);
    return { success: true, user: updatedUser };
  }

  static async removeUser(userId: number) {
    const existingUser = await UserModel.getUser(userId);

    if (!existingUser) {
      throw new NotFoundError("User not found.");
    }

    await UserModel.deleteUser(userId);
    return { success: true, message: "User removed successfully." };
  }

  static async getUser(userId: number) {
    const user = await UserModel.getUser(userId);

    if (!user) {
      throw new NotFoundError("User not found.");
    }

    return { success: true, user };
  }
}
