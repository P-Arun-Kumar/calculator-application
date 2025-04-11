import React, { useContext } from 'react'
import CalculatorData from './CalculatorContext'

const Display = () => {
  let {input} = useContext(CalculatorData)
  console.log(input)
  return (
    <div>
<input type='text' value={input} readOnly/>

</div>
  )
}

export default Display