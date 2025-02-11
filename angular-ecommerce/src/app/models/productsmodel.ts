export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  stock?: number;
  rating: {
    count: number;
    rate: number;
  };
}
