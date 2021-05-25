export const addtocart = productinfo => {
    return {
        type:  'ADD_TO_CART',
        payload: productinfo
    };
  };