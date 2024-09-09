import { Errors, RegisterData, Result } from "../interfaces";

let users: RegisterData[] = [];

export class UserModel {
  static createUser(user: RegisterData): Result<void> {
    // get user by id
    const userWithEmail = users.find(({ email }) => email === user.email);
    const userWithUsername = users.find(
      ({ username }) => username === user.username,
    );
    if (userWithUsername || userWithEmail) {
      return {
        error: "User with email or username already exists",
      };
    } else {
      console.log(users);
      users = [...users, user];
      return { error: null };
    }
  }

  static updateUser(): void {}

  static deleteUser(): void {}

  static getUser(): void {}

  static getUserByUsername(username: string): Result<RegisterData> {
    const userWithUsername = users.find((user) => user.username === username);
    if (userWithUsername) {
      return {
        data: {
          username: userWithUsername.username,
          email: userWithUsername.email,
          password: userWithUsername.password,
        },
        error: null,
      };
    } else {
      return { error: "User with specified username not found" };
    }
  }

  static getAllUser(): void {}
}
