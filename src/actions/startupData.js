import { UPDATE_PROPERTIES } from "./actionTypes";

export const loadProperties = properties => {
  const filterProperties = properties.filter(it => Boolean(it.ForFilter));
  const formProperties = properties.filter(it => Boolean(it.ForForm));
  const tableProperties = properties.filter(it => Boolean(it.ForTable));
  return {
    type: UPDATE_PROPERTIES,
    payload: {
      properties,
      filterProperties,
      formProperties,
      tableProperties
    }
  }
}