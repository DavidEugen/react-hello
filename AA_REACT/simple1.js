function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요'; // return React.createElement(
  //     'button',   // keyof ReactHTML
  //     { onClick: () => setLiked(!liked) }, // ...children : 이하 children 속성
  //     text,
  // );

  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLinked(!liked)
  }, text);
}

function Container() {
  const [count, setCount] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer); //const domContainer = document.getElementById('root');
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