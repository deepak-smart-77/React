import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    const increament = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    const reset = () => {
        setCount(0)
    }

    return(<div className='container'>
        <p className='count-value'>{count}</p>
        <button className='counter-button' onClick={increament}>increment</button>
        <button className='counter-button' onClick={reset}>reset</button>
        <button className='counter-button' onClick={decrement}>decrement</button>
    </div>)

}
export default Counter