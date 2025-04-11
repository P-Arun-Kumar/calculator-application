import React, { useContext, useState } from 'react'
import Display from './Display'
import ButtonComp from './ButtonComp'
import CalculatorData from './CalculatorContext'
function CalculatorApp() {
    let [input,setInput] = useState('')
    
    let handleClick = (value) => {
        if(value == "=") {
            try {
                setInput(eval(input).toString())
            } catch (error) {
                setInput("Error")
            }
            
        }else{
            setInput(input+value)
        }
    }
    let handleClear =() => {
        setInput('')
    }
    let context = {
        input,
        handleClick,
        handleClear
    }
  return (
    <CalculatorData.Provider value={context}>
    <div>
        <h1>Calculator</h1>
        {/* <Display input={input}/> */}
        <Display/>
        {/* <ButtonComp handleClick={handleClick} handleClear={handleClear}/> */}
        <ButtonComp/>
    </div>
    </CalculatorData.Provider>
  )
}

export default CalculatorApp