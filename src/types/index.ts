export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface User {
  email: string;
  name: string;
}

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  ProductDetail: { productId: number };
};

export type MainTabParamList = {
  Masculino: undefined;
  Feminino: undefined;
};
