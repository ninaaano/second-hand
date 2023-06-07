export const FILTER_ACTION_TYPES = {
  CLICK_MENU: 'CLICK_MENU',
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.CLICK_MENU: {
      const { filterType, id } = action.payload;
      const value = state[filterType] !== id || state[filterType] === null ? id : null;

      return { ...state, [filterType]: value };
    }

    default:
      return state;
  }
};
