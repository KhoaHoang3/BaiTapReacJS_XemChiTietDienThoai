import React, { Component } from "react";
import { connect } from "react-redux";

class TangGiamSoLuongRedux extends Component {
  render() {
    return (
      <div className="container d-flex">
        <button onClick={()=>{this.props.tangGiamSoLuong(-1)}} className="btn btn-danger mr-2">-</button>
        <p>{this.props.number}</p>
        <button onClick={()=>{this.props.tangGiamSoLuong(1)}} className="btn btn-danger ml-2">+</button>
      </div>
    );
  }
}

// Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
  return {
    number: rootReducer.stateNumber,
  };
};

// Định nghĩa 1 hàm => nhiệm vụ: tạo ra các props cho component là hàm
const mapDispatchToProp = (dispatch) => {
  return {
    tangGiamSoLuong: (soLuong) => {
      // Gửi dữ liệu lên redux
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        soLuong,
      };

      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(TangGiamSoLuongRedux);
