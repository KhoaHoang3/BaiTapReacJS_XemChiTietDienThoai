import { ADD_TO_CART, DEL_PHONE, UPDATE_QUANTITY } from "../type/CartType";

export const addToCartAction = (phoneInCart) => {
  return {
    type: ADD_TO_CART,
    phoneInCart,
  };
};

export const delPhone = (code) => {
  return {
    type: DEL_PHONE,
    code,
  };
};

export const updateQuantity = (code, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    code,
    quantity,
  };
};
