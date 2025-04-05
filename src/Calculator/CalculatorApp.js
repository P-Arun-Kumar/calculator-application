import React, { useState } from 'react'
import Display from './Display'
import ButtonComp from './ButtonComp'

function CalculatorApp() {
    let [input,setInput] = useState('')
    let handleClick = (value) => {
        if(value == "=") {
            setInput(eval(input).toString())
        }else{
            setInput(input+value)
        }
    }
    let handleClear =() => {
        setInput('')
    }
  return (
    <div>
        <h1>Calculator</h1>
        <Display input={input}/>
        <ButtonComp handleClick={handleClick} handleClear={handleClear}/>
    </div>
  )
}

export default CalculatorApp