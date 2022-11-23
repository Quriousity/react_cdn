// 1. Hello World
var root1 = ReactDOM.createRoot(document.getElementById('root1'));
console.log(document.getElementById('hello_world'));
root1.render(React.createElement(
  'h1',
  null,
  'Hello, React!!!'
));