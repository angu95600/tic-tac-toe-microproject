import React from 'react'
import '../container.css';
import { Link, NavLink } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Container = (props) => {
  function help1() {
  toast.custom((t) => (
    <div
      style={{marginTop:"4rem"}} 
  
  >
      <div className='box' style={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        height: "3rem",
        width: "15rem",
        borderRadius:"6px",
        backgroundColor: "#192A32",
        fontSize: "large",
        fontWeight:"bold",
        color:"#F2B237"
      }}>Invite Link Copied</div>
  </div>
))
  }
  function help(){
    localStorage.setItem("sign1", "y");
  }
  function help2() {
    localStorage.setItem("sign2", "y");
  }
  return (
    <>
          <div className='icons'>
              <div className='img1'></div>
              <div className='img2'></div>
          </div>
          <div className='pickplayer'>
              <h3 className='text'>Pick Player</h3>
              <div className='signs'>
                  <button className='btn1'onClick={()=>{help()}}></button>
                  <button className='btn2'onClick={()=>{help2()}}></button>
              </div>
          </div>
          <Link to='/newgame' className='newgame'>New Game (Vs CPU)</Link>
          <button  className='ng-vs-human'>New Game (Vs HUMAN)</button>
      <button className='invite' onClick={()=>{help1()}}>Invite Your Friend</button>
      <Toaster
      position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default Container
