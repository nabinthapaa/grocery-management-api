import knex, { Knex } from "knex";
import db from "../utils/db";

/**
 * BaseModel class for providing a base database connection.
 * This class provides a static method to access the database connection.
 */
export class BaseModel {
  static connection: Knex = db;

  static queryBuilder() {
    return this.connection;
  }
}
