import React from 'react';
import ScannerDetector from 'js-scanner-detection'

export default class BarCode extends React.Component {
  render() {
    let onComplete = (barcode) =>{
        // Do stuff with the barcode
          console.log(barcode)
    };
    let options = {
        onComplete:onComplete
    };
    let scannerDetector = new ScannerDetector(options);

    return (
      <div>
        <p>Hold</p>
      </div>
    )
  };
}
