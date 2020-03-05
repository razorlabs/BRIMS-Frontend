import React from 'react';
import QRCode from 'qrcode.react';
import BarcodeReader from 'react-barcode-reader';

export default class BarCode extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        result: 'None',
      }
      this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
      this.setState({
        result: data,
      })
  };
  handleError (err) {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QRCode value="Hi Sheldon" />
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
