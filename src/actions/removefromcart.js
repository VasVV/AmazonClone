export const removefromcart = index => {
    return {
        type:  'REMOVE_FROM_CART',
        payload: index
    };
  };