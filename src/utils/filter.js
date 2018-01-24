export default (list, dependentProperties, values) => {
  return list.filter(item => {
    return dependentProperties.every(prop => {
      if(prop.Type === "dateRange") {
        let itemValue = item[prop.DependentProperty];
        const propValue = values[prop.Key];
        if(!Array.isArray(propValue) || propValue.length < 2) return true;
        if(itemValue == null) return true;
        const fromValue = new Date(propValue[0]);
        const toValue = new Date(propValue[1]);
        itemValue = new Date(itemValue);

        if(propValue.every(val => val === "")) {
          return true;
        } else if(propValue.some(val => val === "")) {
          return (propValue[0] !== "" 
            && (itemValue >= fromValue 
              || (prop.ShouldIgnoreByValue != null && prop.ShouldIgnoreByValue === fromValue))) 
          || (propValue[1] !== "" 
            && (itemValue <= toValue
              || (prop.ShouldIgnoreByValue != null && prop.ShouldIgnoreByValue === toValue)));
        } else {
          return (itemValue >= fromValue || (prop.ShouldIgnoreByValue != null && prop.ShouldIgnoreByValue === fromValue)) 
            && (itemValue <= toValue || (prop.ShouldIgnoreByValue != null && prop.ShouldIgnoreByValue === toValue));
        }
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

const filterOneProperty =(item, dependentProperty, shouldIgnoreByValue, propertyType, value) => {
  if(shouldIgnoreByValue != null && shouldIgnoreByValue === value) return true;
  if(value == null || value === "") return true;  
  if(item[dependentProperty] == null) return true;
  if(propertyType === "string" || propertyType === "longString") {
    return item[dependentProperty].toLowerCase().includes(value.toLowerCase());
  }
  return item[dependentProperty] === value;
};