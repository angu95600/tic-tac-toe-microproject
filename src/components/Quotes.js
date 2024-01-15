import React, { useEffect, useState } from 'react'
import '../quote.css'
import { json } from 'react-router-dom';

const Quotes = () => {
    const [quotes, setQuotes] = useState('');
    setInterval(()=>{},2000)
    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then((res) => res.json())
            .then((res) => {
                setTimeout(() => {
                    setQuotes(res.slip.advice)
                }, 4000);
            })
        
    },[quotes])
  return (
    <>
    <div className='qt' >
          <h1 className='quote'>quotes #1</h1>
      <div className='cont3'>{`"${quotes}"`}</div>
      <div className='cont4'></div>
      
      </div>

      </>
  )
}

export default Quotes
