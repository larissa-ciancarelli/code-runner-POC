import React from 'react';
import { useRef } from 'react';
import { codeRunner } from '@codesmithllc/utils';
import Console from './Console.jsx';

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
    console.log('HELLO VALUE', typeof codeToRun.current.value);
    startRun(codeToRun.current.value);
    console.log(outputContent);
  };
  
  return (
    <div id="editor">
      <textarea title="code" ref={codeToRun} rows="10" cols="50"></textarea>
      <button onClick={() => runCode()}>run me :)</button>
      <button onClick={() => stopRun()}>stop me</button>
  
      <div>
      <Console content={outputContent} />
      </div>
    </div>
  )
};
//   const { outputContent, startRun, stopRun, statusMessage, worker } =
//   codeRunner();

// const codeInput = useRef(null);

// const runCode = () => {
//   startRun(codeInput.current.value);
// };

// return (
//   <div className="MockApp">
//     <textarea title="code-input" ref={codeInput}></textarea>
//     <button onClick={() => runCode()}>Start Run</button>
//     <button onClick={() => stopRun()}>Stop Run</button>

//     <div title="code-output">
//       <Console content={outputContent} />
//     </div>
//     <input title="time-out"></input>

//     {worker.current && <p title="worker">worker-on</p>}

//     {!worker.current && <p title="worker">worker-off</p>}
//   </div>
// );

export default Editor;
