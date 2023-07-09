import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

// import { Browserdivr as divr,  divs,  div} from "react-divr-dom";
import LoadingBar from 'react-top-loading-bar'






// import { Form } from 'react-divr-dom'; c
 
const App = () => {
  const pageSize = 5;
  // const apiKey = process.env.REACT_APP_NEWS_API 
  const [progress, setProgress] = useState(0)     

  const [mode, setMode] = useState('light')
  
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#333333' 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }


  return (
    <div>

      <NavBar mode={mode} toggleMode={toggleMode} /> 
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <News setProgress={setProgress}  mode={mode} key="general" pageSize={pageSize} country="in" category="general" />
    
      {/* <News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="business" /> */}

      {/* <div>
        <div exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></div>
        <div exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" /></div>
        <div exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></div>
        <div exact path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" /></div>
        <div exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" /></div>
        <div exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" /></div>
        <div exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" /></div>
        <div exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" /></div>
      </div> */}

    </div>
  )

}

export default App;