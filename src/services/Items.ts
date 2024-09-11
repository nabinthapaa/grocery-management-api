import { ItemModel } from "../models";
import { IItem } from "../interfaces";
import { NotFoundError } from "../errors";

export class ItemService {
  static async createItem(itemData: IItem) {
    const existingItem = await ItemModel.getItemByName(itemData.name);

    if (existingItem) {
      const updatedItem = await ItemModel.udateItem(existingItem.id, {
        price: itemData.price,
        image: itemData.image,
        quantity: itemData.quantity,
      });
      return {
        success: true,
        item: updatedItem,
        message: "Item updated instead of created due to existing name.",
      };
    }
  }
  static async updateItem(itemId: number, updateData: Partial<IItem>) {
    const existingItem = await ItemModel.getItem(itemId);

    if (!existingItem) {
      throw new NotFoundError("Item not found.");
    }

    const updatedItem = await ItemModel.udateItem(itemId, updateData);
    return { success: true, item: updatedItem };
  }

  static async removeItem(itemId: number) {
    const existingItem = await ItemModel.getItem(itemId);

    if (!existingItem) {
      throw new NotFoundError("Item not found.");
    }

    await ItemModel.removeItem(itemId);
    return { success: true, message: "Item removed successfully." };
  }

  static async getItem(itemId: number) {
    const item = await ItemModel.getItem(itemId);

    if (!item) {
      throw new NotFoundError("Item not found.");
    }

    return { success: true, item };
  }

  static async getAllItems() {
    const items = await ItemModel.asyncgetAllItem();
    return { success: true, items };
  }
}
