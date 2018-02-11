
const INITIAL_STATE = {
  isOpen: false,
  taskId: ""
};

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  if (!type) return state;

  switch (type) {
    default:
      return state;
  }
}