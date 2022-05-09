import React, { Component } from "react";
import { connect } from "react-redux";
import { delPhone, updateQuantity } from "../redux/reducers/action/CartAction";

class CartList extends Component {
  totalProduct = () => {
    let products = this.props.cartList;

    products = products.reduce((total, phone) => {
      return (total += phone.soLuong);
    }, 0);

    return products;
  };
  render() {
    return (
      <div>
        <h5 className="text-danger text-right">Cart ({this.totalProduct()})</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Prod Code</th>
              <th>Prod Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {this.props.cartList.map((phone, index) => {
              return (
                <tr key={index}>
                  <td>{phone.maSP}</td>
                  <td>{phone.tenSP}</td>
                  <td>
                    <img src={phone.hinhAnh} height={50} width={50} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.updateQuantity(phone.maSP, -1);
                      }}
                      className="btn btn-success mr-2"
                    >
                      -
                    </button>

                    {phone.soLuong}
                    <button
                      onClick={() => {
                        this.props.updateQuantity(phone.maSP, 1);
                      }}
                      className="btn btn-success ml-2"
                    >
                      +
                    </button>
                  </td>
                  <td>{phone.giaBan.toLocaleString()}</td>
                  <td>{(phone.giaBan * phone.soLuong).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.delPhone(phone.maSP);
                      }}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    cartList: rootReducer.cartReducer,
  };
};

const mapDisPatchToProp = (dispatch) => {
  return {
    delPhone: (code) => {
      dispatch(delPhone(code));
    },

    updateQuantity: (code, quantity) => {
      console.log(code);
      dispatch(updateQuantity(code, quantity));
    },
  };
};
export default connect(mapStateToProps, mapDisPatchToProp)(CartList);
