import React, { useState } from 'react';
import Counter from './Counter';

// let color = 'red';
// export default function App() {
//   function onClick() {
//     color = 'blue';
//   }
//   return (
//     <button style={{ backgroundColor: color }} onClick={onClick}>
//       좋아요
//     </button>
//   )
// }


export default function App() {
  const [color, setColor] = useState('red');
  function onClick() {
    setColor('blue')
  }
  return (
    <div>
      <Counter />
      <button style={{ backgroundColor: color }} onClick={onClick}>
        좋아요
    </button>

    </div>
  )
}


