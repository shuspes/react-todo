export default (list, propertyKey, order) => {
  if(list.length === 0 || !propertyKey || !order) return list;
  return [...list].sort((a, b) => {
    const aProp = a[propertyKey];
    const bProp = b[propertyKey];

    return aProp > bProp 
      ? order === "asc" 
        ? 1 
        : -1
      : aProp === bProp 
        ? 0 
        : order === "asc" 
          ? -1 
          : 1;
  });
}