import { combineReducers, createStore } from "redux";
import { stateImgCar } from "../Reducers/stateImgCarReducer";
import { cartReducer } from "./reducers/CartReducer";

const rootReducer = combineReducers({
  stateNumber: (state = 1, action) => {
    switch (action.type) {
      case "TANG_GIAM_SO_LUONG":
        {
          state = state + action.soLuong;
          return state;
        }
        break;

      default:
        return state;
        break;
    }
  },

  stateImgCar: stateImgCar,
  cartReducer: cartReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
