import React from 'react';

const Console = ({ content }) => {
  const items = ['hello'];

  content.forEach(obj => {
    items.push(<li>{obj.record}</li>);
  })
  
  return (
  <div>
    <ol>
      {items}
    </ol>
  </div>
  )
};

// return (
//   <div id="console-output">
//     <ul title="console-list">
//       {content.map((obj, i) => (
//         <li
//           className={obj.type === 'err' ? 'outputerr' : 'outputlog'}
//           key={`${i}`}
//         >
//           {obj.record}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
export default Console;