import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "./CartList";
import PhoneDetail from "./PhoneDetail";
import PhoneList from "./PhoneList";

export default class PhoneLayout extends Component {
  arrPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./Phone/img/vsphone.jpg",
    },
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
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./Phone/img/applephone.jpg",
    },
  ];

  state = {
    currentPhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./Phone/img/vsphone.jpg",
    },
  };

  changePhoneDetail = (phone) => {
    this.setState({
      currentPhone: phone,
    });
  };

  renderPhoneList = () => {
    let html = this.arrPhone.map((phone, index) => {
      return (
        <PhoneList changePhoneDetail={this.changePhoneDetail} phone={phone} />
      );
    });
    return html;
  };

  render() {
    return (
      <div className="container">
        <div className="cart">
          <CartList/>
        </div>
        <h3 className="text-danger text-center mb-3">Phone List</h3>
        <div className="row">{this.renderPhoneList()}</div>

        <div className="detail mt-5">
          <PhoneDetail currentPhone = {this.state.currentPhone}/>
        </div>
      </div>
    );
  }
}
