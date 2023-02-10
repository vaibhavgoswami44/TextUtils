import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {

  const [mode, setMode] = useState('light')
  const [textMode, setTextMode] = useState('dark')
  const [modeText, setModeText] = useState('Enable Dark mode')
  const [alert, setAlert] = useState(null);
  const [btnClass, abtnClass] = useState('classTwo');
  const [text, setText] = useState('')

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const handleMode = () => {

    if (mode === 'light') {
      setMode('dark')
      setTextMode('light')
      setModeText('Disable Dark Mode')
      showAlert("Dark Mode Has been Enabled", "success")
      abtnClass('classOne')
    }
    else {
      setMode('light')
      setTextMode('dark')
      setModeText('Enable Dark Mode')
      showAlert("Dark Mode Has been Disabled", "success")
      abtnClass("classTwo")
    }
  }

  const handleText = (evt) => {
    setText(evt.target.value)
  }

  const handleUpperCase = () => {
    if (text.length === 0) {
      showAlert("Please Enter Text ", "danger")
    }
    else {
      setText(text.toLocaleUpperCase())
      showAlert("Text Converted Into UpperCase", "success")
    }
  }

  const handleLowerCase = () => {
    if (text.length === 0) {
      showAlert("Please Enter Text ", "danger")
    }
    else {
      setText(text.toLocaleLowerCase())
      showAlert("Text Converted Into LowerCase", "success")
    }
  }

  const handleCopy = () => {
    if (text.length === 0) {
      showAlert("Please Enter Text ", "danger")
    }
    else {
      navigator.clipboard.writeText(text);
      showAlert("Copied to Clipboard!", "success");
    }

  }

  const handleExtraSpaces = () => {
    if (text.length === 0) {
      showAlert("Please Enter Text ", "danger")
    }
    else {

      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      showAlert("Extra spaces removed!", "success");
    }

  }

  const handleClearText = () => {
    setText('')
    showAlert("Text Clered", "success")
  }



  return (
    <div className={`mDiv`} style={{ background: mode === 'light' ? 'white' : 'rgb(11 12 68)' }} >
      <div className='' style={{height:'100px'}}>
        <Navbar btnClass={btnClass} mode={mode} textMode={textMode} handleMode={handleMode} modeText={modeText} />
        <Alert alert={alert} />
      </div>
      <Routes>
        <Route path='/' element={<Home mode={mode} textMode={textMode} text={text} handleText={handleText} handleUpperCase={handleUpperCase} handleLowerCase={handleLowerCase} handleClearText={handleClearText} handleCopy={handleCopy} handleExtraSpaces={handleExtraSpaces} />} />
        <Route path='/About' element={<About mode={mode} textMode={textMode} />} />
      </Routes>


    </div>
  );
}

export default App;
