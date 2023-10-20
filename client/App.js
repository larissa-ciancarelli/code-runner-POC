import { createRoot } from 'react-dom/client';
import React from 'react'
import Editor from './CodeMirror';
import { EditorView, basicSetup } from 'codemirror'
const targetElement = document.querySelector('#container')
// import CSXBin from './CSXBin/CSXBin.jsx';
;
const App = () => {
  return (
    <div id='app'>
      <h2>This is the App</h2>
      <Editor />
    </div>
  )
}
new EditorView({
  doc: 'hi there :)',
  extensions: [
    basicSetup,
  ],
  parent: targetElement,
})

const root = createRoot(document.getElementById('container'));
root.render(<App />);
