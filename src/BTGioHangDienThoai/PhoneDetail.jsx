import React, { Component } from "react";

export default class PhoneDetail extends Component {
  render() {
    let {
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      hinhAnh,
    } = this.props.currentPhone;
    return (
      <div className="row">
        <div className="col-4">
          <h3 className="text-center">{tenSP}</h3>
          <div className="img">
            <img className="w-100" src={hinhAnh} alt="" />
          </div>
        </div>

        <div className="col-8">
          <h3 className="text-center">Phone Detail</h3>
          <table className="table">
            <tr>
              <th>Screen</th>
              <th>{manHinh}</th>
            </tr>

            <tr>
              <th>Operation</th>
              <th>{heDieuHanh}</th>
            </tr>

            <tr>
              <th>Front Camera</th>
              <th>{cameraTruoc}</th>
            </tr>

            <tr>
              <th>BeHind Camera</th>
              <th>{cameraSau}</th>
            </tr>

            <tr>
              <th>RAM</th>
              <th>{ram}</th>
            </tr>

            <tr>
              <th>ROM</th>
              <th>{rom}</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
