import React from 'react';

const Console = ({ content }) => {
  const items = [];

  content.forEach((obj, i) => {
    items.push(<li className={obj.type === 'err' ? 'err' : 'log'}
    key={obj.record + `${i}`}
    >{obj.record}</li>);
  })
  
  return (
  <div id='console' style={style}>
    <ul className='console-items'>
      {items}
    </ul>
  </div>
  )
};

const style = {
  overflowy: scroll,
  border: '1px solid',
  maxheight: '50px',
  height: '50px',
  width: '428px',
  margin: '10px 0 0 0',
}



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