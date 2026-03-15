export const convertToBRL = (priceInUSD: number): number => {
  const exchangeRate = 5.00;
  return priceInUSD * exchangeRate;
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
