import React from 'react';

type TestDisplayProps = {
  testOutput: TestOutput[]
}

type TestOutput = {
  err? : { message?: string }
  title?: string
  fullTitle?: string
}

const TestDisplay = ({ testOutput }: TestDisplayProps): JSX.Element => {
  const tests: JSX.Element[] = [];
  console.log('hi', testOutput);
  testOutput.forEach((obj: TestOutput, i: number ) => {
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