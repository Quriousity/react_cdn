// 1. Hello World
var root1 = ReactDOM.createRoot(document.getElementById('root1'));
console.log(document.getElementById('hello_world'));
root1.render(React.createElement(
    'h1',
    null,
    'Hello, React!!!'
));

// 2, JSX
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

var user = {
    firstName: 'Qurious',
    lastName: 'Park'
};

var element = React.createElement(
    'h1',
    null,
    'Hello, ',
    formatName(user),
    '!'
);
var root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(element);

// 3. 엘리먼트 렌더링
function tick() {
    var element = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Hello, world!'
        ),
        React.createElement(
            'h2',
            null,
            'It is ',
            new Date().toLocaleTimeString(),
            '.'
        )
    );
    root3.render(element);
}
var root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(element);
setInterval(tick, 1000);