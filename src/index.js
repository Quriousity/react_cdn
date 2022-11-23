// 1. Hello World
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
console.log(document.getElementById('hello_world'));
root1.render(<h1>Hello, React!!!</h1>);

// 2, JSX
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const user = {
    firstName: 'Qurious',
    lastName: 'Park'
};
  
const element = (
    <h1>
        Hello, {formatName(user)}!  
    </h1>
);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(element);

// 3. 엘리먼트 렌더링
function tick() {
    const element = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    );
    root3.render(element);
}
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(element);
setInterval(tick, 1000);