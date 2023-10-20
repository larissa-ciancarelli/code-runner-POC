import { EditorView, basicSetup } from 'codemirror'
import React from 'react';

const Editor = () => {
  return (
    <div id="editor">
      hello
    </div>
  )
}

new EditorView({
  doc: 'hi there :)',
  extensions: [
    basicSetup,
  ],
  parent: document.querySelector('#container'),
})

export default Editor;