function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    // return React.createElement(
    //     'button',   // keyof ReactHTML
    //     { onClick: () => setLiked(!liked) }, // ...children : 이하 children 속성
    //     text,
    // );
    return <button onClick={() => setLinked(!liked)}>{text}</button>;
}

function Container() {
    const [count, setCount] = React.useState(false);
    return (
        <div>
            <LikeButton />
            <div>
                <span>현재 카운트: </span>
                <span style={{ marginRight: 10 }}>{count}</span>
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
            </div>
        </div>

    )
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);

//const domContainer = document.getElementById('root');
//ReactDOM.render(React.createElement(LikeButton), domContainer); // ReactDom , 스크림트 실행될때 전역변수로 노출된다.

// 방법 1
// const domContainer1 = document.getElementById('root1');
// ReactDOM.render(React.createElement(LikeButton), domContainer1); // ReactDom , 스크림트 실행될때 전역변수로 노출된다.
// const domContainer2 = document.getElementById('root2');
// ReactDOM.render(React.createElement(LikeButton), domContainer2); 
// const domContainer3 = document.getElementById('root3');
// ReactDOM.render(React.createElement(LikeButton), domContainer3); 

// 방법 2
//const domContainer = document.getElementById('root');
//ReactDOM.render(
//     React.createElement(
//         'div',
//         null,
//         React.createElement(LikeButton),
//         React.createElement(LikeButton),
//         React.createElement(LikeButton),
//     ),
//     domContainer
// );