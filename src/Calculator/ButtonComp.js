import React from 'react'
import Button from './Button'

const ButtonComp = () => {
  
    let buttons =[
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','-',
        '0','.','=','+'
    ]
  return (
    <div className='button-element'>
        {buttons.map((btn)=>(
           <Button key={btn} btn={btn}/>
           
        ))}
        <Button btn={"C"}/>
    </div>
  )
}

export default ButtonComp