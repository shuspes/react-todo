export default (list, dependentProperties, values) => {
  return list.filter(item => {
    return dependentProperties.every(prop => {
      if(prop.Type === "dateRange") {
        return filterDateRangeProperty(item, prop, values);
      } else if(Array.isArray(prop.DependentProperty)) {
        return prop.DependentProperty
          .some(dependencyProp => filterOneProperty(
              item, 
              dependencyProp, 
              prop.ShouldIgnoreByValue,               
              prop.Type, 
              values[prop.Key]
            ));
      } else {
        return filterOneProperty(
              item, 
              prop.DependentProperty, 
              prop.ShouldIgnoreByValue,               
              prop.Type, 
              values[prop.Key]
            );
      }
    });
  });
};

const filterOneProperty = (item, dependentProperty, shouldIgnoreByValue, propertyType, value) => {
  if(shouldIgnoreByValue != null && shouldIgnoreByValue === value) return true;
  if(value == null || value === "") return true;  
  if(item[dependentProperty] == null) return true;
  if(propertyType === "string" || propertyType === "longString") {
    return item[dependentProperty].toLowerCase().includes(value.toLowerCase());
  }
  return item[dependentProperty] === value;
};

const filterDateRangeProperty = (item, prop, values) => {
  let itemValue = item[prop.DependentProperty];
  const propValue = values[prop.Key];
  if(!Array.isArray(propValue) || propValue.length < 2 
        || propValue.every(val => val === "") || itemValue == null) return true;

  const fromValue = new Date(propValue[0]);
  const toValue = new Date(propValue[1]);
  itemValue = new Date(itemValue);
  const ignoredValue = prop.ShouldIgnoreByValue;

  if(propValue.some(val => val === "")) { //NOTE: exists only one value
    if(propValue[0] !== "") { //NOTE: exists only from
      return itemValue >= fromValue || (ignoredValue != null && ignoredValue === fromValue)
    }
    if(propValue[1] !== "") { //NOTE: exists only to
      return itemValue <= toValue || (ignoredValue != null && ignoredValue === toValue)
    }
    return true;
  } else { //NOTE: exists both values
    return (itemValue >= fromValue || (ignoredValue != null && ignoredValue === fromValue)) 
      && (itemValue <= toValue || (ignoredValue != null && ignoredValue === toValue));
  }
};