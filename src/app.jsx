
{/*bootstrap and top level stuff*/}


var React = require('react');
var Dropdown = require('./dropdown');

var options ={
  title: 'Choose a desert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ] 
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));