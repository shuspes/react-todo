import { filterProperties, tasksProperties, tasksList, createGuid } from "./appData";

export const getAppSettings = () => new Promise(resolve => setTimeout(resolve, 0, ({filterProperties, tasksProperties})));

export const getTasks = _ => new Promise(resolve => setTimeout(resolve, 0, tasksList));
