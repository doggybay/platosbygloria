
const checkEditFields = (obj) => {
  const stateToCheck = obj;
  
  if (stateToCheck.hasOwnProperty('name') || 
      stateToCheck.hasOwnProperty('description') ||
      stateToCheck.hasOwnProperty('picture') ||
      stateToCheck.hasOwnProperty('price') 
      ) {
    return false
  } else {
    return true
  }
  
};

const checkAddFields = (obj) => {
  const stateToCheck = obj;
  
  if (stateToCheck.hasOwnProperty('name') && 
      stateToCheck.hasOwnProperty('description') &&
      stateToCheck.hasOwnProperty('picture') &&
      stateToCheck.hasOwnProperty('price') 
      ) {
    return false
  } else {
    return true
  }
  
};

export {
  checkEditFields,
  checkAddFields
}