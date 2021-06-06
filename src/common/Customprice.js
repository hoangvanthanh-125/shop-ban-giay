export const CustomPrice = (price) => {
  const priceString = price+'';
  const priceArr = priceString.split('');
  for(let i =priceArr.length - 3;i > 0; i -= 3){
     priceArr.splice(i,0,'.')
  };
  return priceArr.join('');
}