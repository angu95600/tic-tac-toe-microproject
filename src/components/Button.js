import React, { useState } from 'react';
import '../button.css';
import { nanoid } from 'nanoid';
import bgimg from './Vector.png'
import bgimg2 from './Vector1.png';
import Logic from '../Logic/Logic'
import pushInToMap from '../Logic/Logic';

const Button = ({ id1 }) => {
  const [image, setImage] = useState();
  const ids = nanoid();
  pushInToMap(ids);
  function getImg(ids1) {
    setImage(bgimg);  
  }

  return (
    <div> 
      <button className='btn' key={id1}
  id={`${ids}`} style={{
  height: "6rem",
  width: "6rem",
 borderRadius: "4px",
 backgroundColor:" #1f3540",
  border: "0px",
  backgroundImage: `url(${image})`,
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
 backgroundSize: "auto"

        }}
              onClick={()=>getImg(ids)}
          ></button>
    </div>
  )
}

export default Button
