const stateDefaultImg = "./products/red-car.jpg";

export const stateImgCar = (state = stateDefaultImg, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      {
        state = `./products/${action.newColor}-car.jpg`;
        return state;
      }
      break;

    default:
      return state;
      break;
  }
};
