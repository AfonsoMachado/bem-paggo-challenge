import { SelectOption } from "@/types/SelectOption";

export const StickersOptions: string[] = [
  "React",
  "Angular",
  "Vue.js",
  "Svelte",
  "React Native",
  "Flutter",
  "Node.js",
];

export const PaymentMethods: SelectOption[] = [
  { label: "Boleto Bancário", value: "boleto" },
  { label: "Cartão de Crédito", value: "credit-card" },
  { label: "Cartão de Débito", value: "debit-card" },
  { label: "Dinheiro", value: "money" },
  { label: "PayPal", value: "paypal" },
  { label: "Pix", value: "pix" },
];
