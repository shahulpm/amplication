import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  category?: Array<Category>;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
