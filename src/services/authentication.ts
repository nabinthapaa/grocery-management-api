import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config";
import { UnauthorizedError } from "../errors";
import { LoginData, RegisterData } from "../interfaces";
import { UserService } from "./User";

export class AuthenticationService {
  static async register(userData: RegisterData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await UserService.createUser({
      ...userData,
      password: hashedPassword,
    });

    return { success: true, user: newUser };
  }

  static async login({ email, password }: LoginData) {
    const user = await UserService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedError("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid password or email");
    }

    const token = jwt.sign(
      { id: user.id, account_type: user.account_type },
      config.jwt.secret,
      {
        expiresIn: "1h",
      },
    );

    return { success: true, token };
  }
}
