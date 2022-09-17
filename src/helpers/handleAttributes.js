// function to sort the different attribute types
export const handleAttributes = (attrArray, type = 'text') => {
  if (attrArray !== undefined || attrArray.length) {
    return attrArray.filter(attr => attr.type.toLowerCase() === type);
  }

  return 'handleAttributes func not working';
};
