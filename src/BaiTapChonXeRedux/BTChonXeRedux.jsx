import React, { Component } from "react";
import { connect } from "react-redux";

class BTChonXeRedux extends Component {
  render() {
    return (
      <div className="container">
        <div className="img">
          <img className="w-100" src={this.props.imgCar} alt="" />
        </div>

        <div className="button text-center">
          <button
            onClick={() => {
              this.props.changeColor("black");
            }}
            className="btn text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => {
              this.props.changeColor("red");
            }}
            className="btn text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              this.props.changeColor("steel");
            }}
            className="btn text-dark"
            style={{ backgroundColor: "steel" }}
          >
            Steel
          </button>
          <button
            onClick={() => {
              this.props.changeColor("silver");
            }}
            className="btn text-dark"
            style={{ backgroundColor: "silver" }}
          >
            Silver
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    imgCar: rootReducer.stateImgCar,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    changeColor: (newColor) => {
      const action = {
        type: "CHANGE_COLOR",
        newColor,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(BTChonXeRedux);
