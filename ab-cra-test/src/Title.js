import React from 'react';

// export default function Title(props) {
//     return <p>{props.title}</p>
// }

// export default function Title({title}) {
//     console.log("Title Rendering");
//     return <p>{title}</p>;
// }

function Title({title}) {
    console.log("Title Rendering");
    return <p>{title}</p>;
}

export default React.memo(Title);