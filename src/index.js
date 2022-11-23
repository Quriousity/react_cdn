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
            <h1>Hello, Qurious!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root3.render(element);
}
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(element);
setInterval(tick, 1000);

// 4. Component, Props
function formatDate(date) {
    return date.toLocaleDateString();
}
  
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name} />
    );
}
  
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
            {props.user.name}
            </div>
        </div>
    );
}
  
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
  
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
  
const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
);

// 5. State, Lifecycle
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
  
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    // Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정, Mount
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    // Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제, Unmount
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
  
    tick() {
        this.setState({date: new Date()});
    }
  
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}
  
function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}
  
const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<App />);
  
