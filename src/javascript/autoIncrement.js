const createAutoIncrement = (initialValue = 1) => {
  let currentValue = initialValue;
  return () => {
    return currentValue++;
  };
};
