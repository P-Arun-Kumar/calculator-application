import React, { useContext } from 'react'
import CalculatorData from './CalculatorContext'

const Button = ({btn}) => {
    let {handleClick,handleClear} = useContext(CalculatorData)
    let handleFunction = (value) => {
        if(value=="C") {
            handleClear(value)
        }else(
            handleClick(value)
        )
    }

  return (
    <button onClick={()=>handleFunction(btn)}>{btn}</button>
  )
}

export default Button