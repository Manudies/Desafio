import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textbox from './components/textbox/Textbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Textbox/>
      </div>
    </>
  );
};

export default App
