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