import React from 'react';
import { useRef } from 'react';
import { codeRunner } from '@codesmithllc/utils';
import Console from './Console.jsx';
import TestDisplay from './TestCases.jsx';

const Editor = () => {  
  const { 
    outputContent, 
    startRun, 
    stopRun, 
    statusMessage, 
    startTestCode, 
    testOutputContent, 
    worker 
  } = codeRunner();
  
  const codeToRun = useRef(null);
  
  const runCode = () => {
    startRun(codeToRun.current.value);
  };
  
  const runTests = () => {
    startTestCode(codeToRun.current.value, `describe('fizzbuzz test', () => {
      const arr = fizzbuzz(31);
      
      it('should work for non-multiples of 3 and 5', () => {
        expect(arr.length).to.equal(31);

        expect(arr[0]).to.equal(1);
        expect(arr[6]).to.equal(7);
        expect(arr[10]).to.equal(11);
      });
    });`);
  }

  return (
    <div id="editor">
      <textarea title="code" ref={codeToRun} rows="10" cols="50"></textarea>
      <br></br>
      <button onClick={() => runCode()}>run me :)</button>
      <button onClick={() => stopRun()}>stop me</button>
      <button onClick={() => runTests()}>run tests</button>
  
      <div>
      {worker.current && <p>hello I am running your code!</p>}
      {!worker.current && <p>press the button to run your code</p>}
      <Console content={outputContent} />
      </div>

      <div id="test-display">
        <TestDisplay testOutput={testOutputContent}/>
      </div>
    </div>
  )
};

export default Editor;

// function fizzbuzz(n){
//   const arr = []
//   for (let i = 1; i <= n; i += 1){
//     arr.push(i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz' :
//       i % 3 === 0 ? 'fizz' :
//       i % 5 === 0 ? 'buzz' :
//       i);
//   }
//   return arr;
// }

// console.log(fizzbuzz(20))




