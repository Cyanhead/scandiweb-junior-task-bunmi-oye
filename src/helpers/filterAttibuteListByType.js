// function to sort the different attribute  ...
// ... type and then returns a new array of one type
export const filterAttibuteListByType = (attrArray, type = 'text') => {
  if (attrArray !== undefined && attrArray.length) {
    return attrArray.filter(attr => attr.type.toLowerCase() === type);
  }

  return 'filterAttibuteListByType func not working';
};
