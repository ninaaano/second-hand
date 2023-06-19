export const DecimalPoint = (price: number) => {
  const option = {
    maximumFractionDigits: 3,
  };

  return price.toLocaleString('ko-KR', option);
};
