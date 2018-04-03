import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Seatbelt Entry Point';
const arr = [1,2,3]
ReactDOM.render(<div>{title}</div>, document.getElementById('app'));

module.hot.accept();

console.log('Entry Point')
