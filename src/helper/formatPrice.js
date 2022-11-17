export const formatPrice = price => {
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// export const formatPrice2 = price => {
//   return Intl.NumberFormat().format(price);
// };
