import { IItem } from "../interfaces";
import { BaseModel } from "./BaseModel";

export class ItemModel extends BaseModel {
  static async addItem(item: IItem) {
    return await ItemModel.queryBuilder()
      .table("items")
      .insert({ ...item });
  }

  static async getItem(itemId: number) {
    const data = await ItemModel.queryBuilder()
      .table("items")
      .where({ id: itemId })
      .first<IItem>();

    return data;
  }

  static async getItemByName(name: string) {
    const data = await ItemModel.queryBuilder()
      .table("items")
      .where({ name })
      .first<IItem>();

    return data;
  }

  static async asyncgetAllItem() {
    const data = await ItemModel.queryBuilder().table<IItem>("items");
    return data;
  }

  static async udateItem(itemId: number, itemInfo: Partial<IItem>) {
    return await ItemModel.queryBuilder()
      .table("items")
      .where({ id: itemId })
      .update(itemInfo);
  }

  /// Should probably use  transaction or soft delte
  /// to also remove items from user's cart
  static async removeItem(itemId: number) {
    return await ItemModel.queryBuilder()
      .table("items")
      .where({ id: itemId })
      .del();
  }
}
