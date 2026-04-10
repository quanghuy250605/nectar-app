export type Product = {
  id: string;
  name: string;
  size: string;
  price: number;
  emoji: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "apple",
    name: "Natural Red Apple",
    size: "1kg, Price",
    price: 4.99,
    emoji: "🍎",
    category: "fruits",
  },
  {
    id: "banana",
    name: "Organic Bananas",
    size: "7pcs, Price",
    price: 4.99,
    emoji: "🍌",
    category: "fruits",
  },
  {
    id: "pepper",
    name: "Bell Pepper Red",
    size: "1kg, Price",
    price: 4.99,
    emoji: "🫑",
    category: "vegetables",
  },
  {
    id: "ginger",
    name: "Ginger",
    size: "250gm, Price",
    price: 2.99,
    emoji: "🫚",
    category: "vegetables",
  },
];
