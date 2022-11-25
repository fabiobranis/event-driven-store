const PRICE_THRESHOLD = 10;

export const isLoweringPrice = ({ newPrice, oldPrice }) => {
  if (newPrice >= oldPrice) return false;

  return (oldPrice - newPrice) >= PRICE_THRESHOLD;
};
