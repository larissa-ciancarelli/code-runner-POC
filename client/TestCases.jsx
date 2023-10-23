import React from 'react';

const TestDisplay = ({ testOutput }) => {
  const tests = [];

  testOutput.forEach((obj, i ) => {
    if (obj.err.message){
      tests.push(<li className="err" key={`${obj.err.message} ${i}`}>
        X: `${obj.fullTitle}`
      </li>)
    } else {
      tests.push(<li className="success" key={`${obj.title} ${i}`}>
        +: `${obj.fullTitle}`
      </li>)
    }
  });

  return (
    <div style={styles}>
      {tests}
    </div>
  )
};

const styles = {
  overflowy: scroll,
  border: '1px solid',
  maxheight: '100px',
  width: '428px',
  margin: '10px 0 0 0',
}

export default TestDisplay;