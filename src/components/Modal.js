
import '../model.css';
import {Link } from 'react-router-dom'
import  { reset } from '../Logic/Logic'

const Modal = (props) => {

  const handler = () => {
        // document.getElementsByClassName('popup')[0].style.display= "none";
        // document.getElementsByClassName('popup-container')[0].style.display = "none";
        reset();
      localStorage.setItem("user", "0");
       localStorage.setItem("tie", "0");
    localStorage.setItem("pc", "0");
    localStorage.setItem("sign1", "n");
    localStorage.setItem("sign2", "n");
       
  }
  const nextRound = () => {
    
    reset();
    props.setIsTie(false);
    props.setPcWon(false);
    props.setUserWon(false);
    //  document.getElementsByClassName('popup')[0].style.display= "none";
    //     document.getElementsByClassName('popup-container')[0].style.display = "none";
  }
 

    
    
   
  return (
    <div className='popup-container'style={{display:"flex"}}>
      <div className='popup'style={{ backgroundColor: "#192A32", position: "absolute", display:"flex",flexDirection:"column", justifyContent: "center", alignItems:"center",height: "18rem",width:"29rem", zIndex:"revert"}}>
        <div className='yw'>{props.userWon?"You Won":props.pcWon?"PC Won":"Tie" }</div>
        <div className='tr'>
          <span className='span' style={{
            backgroundImage: `url(${props.tie?"":props.winSymbol})`,
            backgroundPosition: "center",
            backgroundRepeat: "none",
            backgroundSize: "contain",
            marginRight:`${props.tie?"0rem":"0.8rem"}`,
            height: "3rem",
            width:`${props.tie?"0rem":"3rem"}`
          }}>
            
        </span>
          
          {props.tie?"Please Try Again":"Takes The Round" }</div>
          <div className='decesion'>
          <Link className='quit-btn' to='/' onClick={()=>{handler()}}>QUIT</Link>
              <button className='next-round' onClick={()=>{nextRound()}}>NEXT ROUND</button>
              </div>
      </div>
      </div>
  )
}

export default Modal
