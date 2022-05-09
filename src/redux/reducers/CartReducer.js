import { ADD_TO_CART, DEL_PHONE, UPDATE_QUANTITY } from "./type/CartType";

const stateDefault = [
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./Phone/img/meizuphone.jpg",
    soLuong: 1,
  },
];

export const cartReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let cart = state;

      let phone = cart.find((prod) => prod.maSP === action.phoneInCart.maSP);

      if (phone) {
        phone.soLuong += 1;
      } else {
        cart.push(action.phoneInCart);
      }

      return [...state];
    }

    case DEL_PHONE: {
      let cart = [...state];

      let newCart = cart.filter((prod) => prod.maSP !== action.code);

      return newCart;
    }

    case UPDATE_QUANTITY: {
      let cart = state;

      let phone = cart.find((prod) => prod.maSP === action.code);

      if (phone) {
        phone.soLuong += action.quantity;
        if (phone.soLuong < 1) {
          if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
            let index = cart.findIndex((prod) => prod.maSP === action.code);
            cart.splice(index, 1);
          }
          phone.soLuong -= action.quantity;
        }
      }

      return [...state];
    }
    default:
      return state;
      break;
  }
};
