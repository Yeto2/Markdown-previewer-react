import React , {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [text , setText] = useState();
  return (
    <div className="container">
      <textarea 
        id="editor" 
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <div className='preview'>
      <ReactMarkdown children={text} />
      </div>

    </div>
  );
}

export default App;
