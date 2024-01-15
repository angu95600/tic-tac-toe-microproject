import React from 'react'
import '../quit.css'
import { Link } from 'react-router-dom'
import { reset } from '../Logic/Logic'

const Quit = ({setPopup}) => {
    const clear = () => {
        reset();
        localStorage.setItem("user", "0");
        localStorage.setItem("pc", "0");
        localStorage.setItem("tie", "0");
        localStorage.setItem("sign1", "n");
        localStorage.setItem("sign2", "n");
    }
 const nextRound = () => {
     reset();
     setPopup(false);
   
    }
//      height: 45rem;
//   width: 30rem;

    return (
      <>
     <div className='quit-container'style={{display:"flex"}}>
      <div className='quit'style={{ backgroundColor: "#192A32", position: "absolute", display:"flex",flexDirection:"column", alignItems:"center",height: "15rem",width:"30rem", zIndex:"revert"}}>
      {/* <div className='yw'>You Won</div> */}
          <div className='tr'>Do You Want To Quit ?</div>
          <div className='decesion'>
                  <Link className='quit-cont' to='/' onClick={() => { clear() }} >QUIT</Link>
              <button className='next-round'  onClick={()=>{nextRound()}}>NEXT ROUND</button>
              </div>
      </div>
            </div>
            </>
  )
}

export default Quit
