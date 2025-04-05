import React from 'react'

const Button = ({btn , handleClick, handleClear}) => {
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