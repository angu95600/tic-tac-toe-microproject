import React, {useState } from 'react'
import '../newgame.css';
import '../button.css'
import bgimg from './Vector.png'
import bgimg2 from './Vector1.png';
import {check, compTurn, getImg} from '../Logic/Logic';
import Modal from './Modal';
import {allFilled }from '../Logic/Logic';
import Quit from './Quit';

const Newgame = () => {
    const [userWon, setUserWon] = useState(false);
    const [pcWon, setPcWon] = useState(false);
    const [isTie, setIsTie] = useState(false);
    const [tieCount, setTieCount] = useState(localStorage.getItem("tie"));
    const [userCount,setUserCount]=useState(localStorage.getItem("user"))
    const [pcCount, setPcCount] = useState(localStorage.getItem("pc"));
    const [popup, setPopup] = useState(false);
    const [img, setImg] = useState(localStorage.getItem("sign1") == "y" ? bgimg2 : bgimg);
    const [winSymbol, setWinSymbol] = useState();
    
   
    
    function userHandler(x) {
        
        let sign1 = localStorage.getItem("sign1");
        let sign2 = localStorage.getItem("sign2");
        let ans1=false; let ans2=false;
        let imAns = getImg(x, sign1, sign2);
        if (imAns == "already occupied") {
            return;
        }
           if (sign1 == "y") {
                setImg(bgimg);
            } else {
                setImg(bgimg2);
        }
        
        setTimeout(() => {
            
            compTurn(sign1, sign2);
        ans1 = check("x");
        ans2 = check("o");
        console.log(ans1);
            console.log(ans2);
            if (ans1) {
                //  if (typeof(document.getElementsByClassName('popup-container')[0] )!= "undefined") {
                //     console.log(typeof(document.getElementsByClassName('popup-container')[0].style.display="flex"))
                //     console.log(typeof(document.getElementsByClassName('popup')[0].style.display="flex"))
                // }
               
                setUserWon(ans1);
                setPcWon(false);
                if (sign1 == "y") {
                setWinSymbol(bgimg2);
            } else {
                setWinSymbol(bgimg);
        }
                let count = Number(localStorage.getItem("user"));
                count += 1;
                setUserCount(count);
                localStorage.setItem("user", String(count));
            }
            else if (ans2) {
                //  if (typeof(document.getElementsByClassName('popup-container')[0] )!= "undefined") {
                //     console.log(typeof(document.getElementsByClassName('popup-container')[0].style.display="flex"))
                //     console.log(typeof(document.getElementsByClassName('popup')[0].style.display="flex"))
                // }
                if (sign1 == "y") {
                setWinSymbol(bgimg);
            } else {
                setWinSymbol(bgimg2);
        }
                setPcWon(ans2);
                setUserWon(false);
                 let count = Number(localStorage.getItem("pc"));
                count += 1;
                setPcCount(count);
                localStorage.setItem("pc", String(count));
            }
            else if (ans1 === false && ans2 === false && allFilled()) {
                
                setPcWon(false);
                setUserWon(false);
                console.log("i m entered");
                // if (typeof(document.getElementsByClassName('popup-container')[0] )!= "undefined") {
                //     console.log(typeof(document.getElementsByClassName('popup-container')[0].style.display="flex"))
                //     console.log(typeof(document.getElementsByClassName('popup')[0].style.display="flex"))
                // }
                setIsTie(true);
                console.log(isTie);
                let count = Number(localStorage.getItem("tie"));
                count += 1;
                setTieCount(count);
                localStorage.setItem("tie", String(count));
            }
         if (sign1 == "y") {
                setImg(bgimg2);
            } else {
                setImg(bgimg);
        }
        }, 1000);
         
    }
    const showPopup=()=> {
        setPopup(true);
    }
    

   
   
     
  return (
      <div className='new-game'style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          {userWon || pcWon || isTie ? <Modal tie={isTie} userWon={userWon} pcWon={pcWon} setPcWon={setPcWon} setUserWon={setUserWon} setIsTie={setIsTie} winSymbol={ winSymbol} />:""}
          {popup && <Quit setPopup={setPopup} />}
          <div className='signs'>
              <div className='item1'>
                  <div className='circle'></div>
                  <div className='cross'></div>
              </div>
              <div className='item2'>
                  <div className='cross1' style={{ backgroundImage:`url(${img})`}}></div>
                  <div className='content'>TURN</div>
              </div>
              {/* <Link to='/newgame/popup' className='item3' onClick={()=>{showPopup()}}></Link> */}
              <button className='item3' onClick={showPopup}></button>
          </div>
          <div className='grid'>
              {/* {
                  arr.map((el) => (
                      <Button id1={ nanoid()} />
                ))
           } */}
              <button className="buttons" id='00' onClick={()=>{userHandler("00")}}></button>
              <button className="buttons"id='01'onClick={()=>{userHandler("01")}}></button>
              <button className="buttons"id='02'onClick={()=>{userHandler("02")}}></button>
              <button className="buttons"id='10'onClick={()=>{userHandler("10")}}></button>
              <button className="buttons"id='11'onClick={()=>{userHandler("11")}}></button>
              <button className="buttons"id='12'onClick={()=>{userHandler("12")}}></button>
              <button className="buttons"id='20'onClick={()=>{userHandler("20")}}></button>
              <button className="buttons"id='21'onClick={()=>{userHandler("21")}}></button>
              <button className="buttons" id='22' onClick={() =>{ userHandler("22") }}></button>
              <div className="gameinfo" style={{ backgroundColor: "#31C4BE" }}>
                  <div>YOU(Won)</div>
                  <div>{userCount}</div>
              </div>
              <div className="gameinfo" style={{ backgroundColor: "#A8BEC9" }}>
                     <div>TIE</div>
                  <div>{tieCount}</div>
              </div>
              <div className="gameinfo" style={{ backgroundColor: "#F2B237" }}>
                     <div>CPU(Won)</div>
                  <div>{pcCount}</div>
              </div>
          </div>
          {/* <Outlet/> */}
    </div>
  )
}

export default Newgame
