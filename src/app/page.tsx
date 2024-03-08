'use client'

import Editor from '@monaco-editor/react'
import { useState, useRef } from 'react';
import "./app.css"
import {handleCode} from "../submit"


export default function Home() {

  // State variable to set users source code 
  const [userCode, setUserCode] = useState(``); 
  
  // State variable to set editors default language 
  const [userLang, setUserLang] = useState("cpp"); 

  // State variable to set editors default theme 
  const [userTheme, setUserTheme] = useState("vs-dark"); 

  // State variable to set editors default font size 
  const [fontSize, setFontSize] = useState(18); 

  // State variable to set users input 
  const [userInput, setUserInput] = useState(""); 

  // State variable to set users output 
  const [userOutput, setUserOutput] = useState(""); 

  // Loading state variable to show spinner 
  // while fetching data 
  const [loading, setLoading] = useState(false); 

  function handleEditorChange(value, event) {
    setUserCode(value);
    console.log(value);
  }

  const options = { 
      fontSize: fontSize 
  }

  function clearOutput() { 
    setUserOutput(""); 
  } 

  function compile(){
    console.log(userInput);
    handleCode(userCode, userInput);
  }

  return (
    <main className='wrapper'>
      <div className="left">
        <Editor 
            options={options} 
            height="100vh"
            width="100%"
            theme={userTheme} 
            language={userLang}
            onChange={handleEditorChange}
            defaultValue="// Enter your code here" 
        /> 
        <button className="run-btn" onClick={() => compile()}> 
            Run 
        </button>
      </div>
      <div className="right">
      <h4>Input:</h4> 
        <div className="input-box"> 
            <textarea id="code-inp" onChange= 
                {(e) => setUserInput(e.target.value)}> 
            </textarea> 
        </div> 
        <h4>Output:</h4> 
        {loading ? ( 
            <div className="spinner-box"> 
                <p>Loading</p>
            </div> 
        ) : ( 
            <div className="output-box"> 
                <pre>{userOutput}</pre> 
                <button onClick={() => { clearOutput() }} 
                    className="clear-btn"> 
                    Clear 
                </button> 
            </div> 
        )} 
      </div>      
    </main>
  )
}
