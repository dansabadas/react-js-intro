import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/Hello";

// let React = require('react');
// let ReactDOM = require('react-dom');

//console.log('hello');

// var Hello = React.createClass({
//     render() {
//         //return React.createElement("h3", null, "Hello react with webpack!");
//         return <h3>This is webpack with jsx 2!</h3>;
//     }
// });

//ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
ReactDOM.render(<Hello />, document.getElementById('react'));