import { SelectOption } from "./SelectOption";

export type PurchaseData = {
  checkedStickers: string[];
  stickersQuantity: number;
  comments: string;
  paymentMethod: SelectOption | null;
};
