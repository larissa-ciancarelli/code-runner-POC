import React from 'react';
import { useRef } from 'react';
import { codeRunner } from '@codesmithllc/utils';
import Console from './Console';
import TestDisplay from './TestCases';
import fizzbuzzTest from './__tests__/fizzbuzz';

const Editor = (): JSX.Element => {  
  const { 
    outputContent, 
    startRun, 
    stopRun, 
    statusMessage, 
    startTestCode, 
    testOutputContent, 
    worker 
  } = codeRunner();
  
  const codeToRun = useRef<HTMLTextAreaElement>(null);
  
  const runCode = (): void => {
    startRun(codeToRun.current.value);
  };
  
  const runTests = (): void => {
    startTestCode(codeToRun.current.value, fizzbuzzTest);
  }

  return (
    <div id="editor">
      <textarea title="code" ref={codeToRun} rows={10} cols={50}></textarea>
      <br></br>
      <button onClick={() => runCode()}>run code</button>
      <button onClick={() => stopRun()}>stop code</button>
      <button onClick={() => runTests()}>run tests</button>
  
      <div>
      {worker.current && <p>your code is running!</p>}
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
