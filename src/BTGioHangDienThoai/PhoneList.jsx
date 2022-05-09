import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartAction } from "../redux/reducers/action/CartAction";

class PhoneList extends Component {
  render() {
    let { phone } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <div className="img">
            <img className="w-100" height={300} src={phone.hinhAnh} alt="" />
          </div>
          <div className="card-body">
            <p>{phone.tenSP}</p>
            <p>{phone.giaBan.toLocaleString()}</p>
            <button
              onClick={() => {
                this.props.changePhoneDetail(phone);
              }}
              className="btn btn-warning"
            >
              More Detail
            </button>
            <button onClick={()=>{this.props.addToCart(phone)}} className="btn btn-primary ml-3">Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    addToCart: (phone) => {
      console.log(phone);
      let phoneInCart = { ...phone, soLuong: 1 };
      dispatch(addToCartAction(phoneInCart));
    },
  };
};

export default connect(null, mapDispatchToProp)(PhoneList);
