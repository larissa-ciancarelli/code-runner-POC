import { createRoot } from 'react-dom/client';
import React from 'react'
import Editor from './Editor'

const App = (): React.JSX.Element => {
  return (
    <div id='app'>
      <h2>Hello would you like to code? :)</h2>
      <Editor />
    </div>
  )
};

const root = createRoot(document.getElementById('container'));
root.render(<App />);
