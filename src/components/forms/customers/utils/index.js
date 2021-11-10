const checkEditFields = (obj) => {
  const stateToCheck = obj;
  
  if (stateToCheck.hasOwnProperty('first_name') || 
      stateToCheck.hasOwnProperty('last_name') ||
      stateToCheck.hasOwnProperty('email') ||
      stateToCheck.hasOwnProperty('phone') ||
      stateToCheck.hasOwnProperty('st_address') ||
      stateToCheck.hasOwnProperty('city') ||
      stateToCheck.hasOwnProperty('state') ||
      stateToCheck.hasOwnProperty('zip_code')
      ) {
    return false
  } else {
    return true
  }
  
};

const checkAddFields = (obj) => {
  const stateToCheck = obj;
  
  if (stateToCheck.hasOwnProperty('first_name') && 
      stateToCheck.hasOwnProperty('last_name') &&
      stateToCheck.hasOwnProperty('email') &&
      stateToCheck.hasOwnProperty('phone') &&
      stateToCheck.hasOwnProperty('st_address') &&
      stateToCheck.hasOwnProperty('city') &&
      stateToCheck.hasOwnProperty('state') &&
      stateToCheck.hasOwnProperty('zip_code')
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