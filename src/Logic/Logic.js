 import bgimg2 from '../Vector.jpg'
import bgimg from '../Vector2.png'

    const vect=[["null","null","null"],["null","null","null"],["null","null","null"]]
if (localStorage.getItem("user") == null) {
         localStorage.setItem("user", "0");
}
if (localStorage.getItem("pc") == null) {
         localStorage.setItem("pc", "0");
  
}
if (localStorage.getItem("tie") == null) {
        localStorage.setItem("tie", "0");
}
if (localStorage.getItem("sign1") == null) {
    localStorage.setItem("sign1", "n");
}
if (localStorage.getItem("sign2") == null) {
    localStorage.setItem("sign2", "n");
}
    
    
    export function reset() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            vect[i][j] = "null";
            document.getElementById(String(i) + String(j)).style.backgroundImage = ``;
        }
        }
        
}
    
export  function allFilled() {
     for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (vect[i][j] == "null") {
                return false;
           }
        }
    }
    return true;
}


    export  function check(sign){
        for (let i = 0; i < 3; i++){
            let ans = true;
            for (let k = 0; k < 3; k++){
                if (vect[i][k] !== sign) {
                    ans = false;
                    break;
                }
            }
            if (ans === true) {
                return true;
            }
        }
        for (let i = 0; i < 3; i++){
            let ans = true;
            for (let k = 0; k < 3; k++){
                if (vect[k][i] !== sign) {
                    ans = false;
                    break;
                }
            }
            if (ans === true) {
                return true;
            }
        }
        if (vect[0][0] === sign && vect[1][1] === sign && vect[2][2] === sign) {
            return true;
        }
        if (vect[0][2] === sign && vect[1][1] === sign && vect[2][0] === sign) {
            return true;
        }
        return false;
    }

    export function compTurn(sign1,sign2) {
        // let x = help();
        // if (x == 1) {
        //     for (let i = 0; i < 3; i++){
        //         if (vect[x.row][i] == "null") {
        //             vect[x.row][i] = "o";
        //         }
        //     }
        // } else {
         for (let i = 0; i < 3; i++){
                let count = 0; let idx1=-1; let idx2=-1;
                for (let j = 0; j < 3; j++){
                    if (vect[i][j] == "o") count++;
                    else if (vect[i][j] == "null") {
                        idx1 = i; idx2 = j;
                    }
                }
                if (count == 2&&idx1!=-1&&idx2!=-1) {
                    vect[idx1][idx2] = "o";
                    document.getElementById(String(idx1)+String(idx2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
                    return check("o");
                    break;
                }
        }
         for (let i = 0; i < 3; i++){
                let count = 0; let idx1=-1; let idx2=-1;
                for (let j = 0; j < 3; j++){
                    if (vect[j][i] == "o") count++;
                    else if (vect[j][i] == "null") {
                        idx1 = j; idx2 = i;
                    }
                }
                if (count == 2&&idx1!=-1&&idx2!=-1) {
                    vect[idx1][idx2] = "o";
                     document.getElementById(String(idx1)+String(idx2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
                    return check("o");
                    break;
                    
                }
        }
        //check diagonally
        let i = 0; let j = 0; let idx1=-1; let idx2=-1;
        let count = 0;
        while (i < 3 && j < 3) {
            if (vect[i][j] == "o") {
                count++;
            } else if(vect[i][j]=="null") {
                idx1 = i; idx2 = j;
            }
            i++;
            j++;
            
        }
        if (count == 2&&idx1!=-1&&idx2!=-1) {
            vect[idx1][idx2] = "o";
           document.getElementById(String(idx1)+String(idx2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }
        //check diagonally
        i = 0; j = 2; count = 0; idx1 = -1; idx2 = -1;
        while (i < 3 && j >= 0) {
            // console.log(i);
            // console.log(j);
             if (vect[i][j] == "o") {
                count++;
            } else if(vect[i][j]=="null") {
                idx1 = i; idx2 = j;
            }
            i++;
            j--;
        }
        if (count == 2&&idx1!=-1&&idx2!=-1) {
            vect[idx1][idx2] = "o";
             document.getElementById(String(idx1)+String(idx2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }
        //   for (let i = 0; i < 3; i++){
        //         for (let j = 0; j < 3; j++){
        //             if (vect[i][j] == "null") {
        //                 vect[i][j] = "o";
        //               document.getElementById(String(i)+String(j)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
        //                 return check("o");
        //                 break;
        //           }
        //         }
              
        // }










        if (vect[1][1] == "null") {
            vect[1][1] = "o";
            document.getElementById(String(1)+String(1)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }
        
      

            for (let i = 0; i < 3; i++){
                 count = 0;  idx1=-1;  idx2=-1;
                for (let j = 0; j < 3; j++){
                    if (vect[i][j] == "x") count++;
                    else if (vect[i][j] == "null") {
                        idx1 = i; idx2 = j;
                    }
                }
                if (count == 2&&idx1!=-1&&idx2!=-1) {
                    vect[idx1][idx2] = "o";
                    document.getElementById(String(idx1)+String(idx2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
                    return check("o");
                    break;
                }
        }
         for (let i = 0; i < 3; i++){
                 count = 0;  idx1=-1; idx2=-1;
                for (let j = 0; j < 3; j++){
                    if (vect[j][i] == "x") count++;
                    else if (vect[j][i] == "null") {
                        idx1 = j; idx2 = i;
                    }
                }
                if (count == 2&&idx1!=-1&&idx2!=-1) {
                    vect[idx1][idx2] = "o";
                     document.getElementById(String(idx1)+String(idx2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
                    return check("o");
                    break;
                    
                }
        }
        //check diagonally
         i = 0;  j = 0;  idx1=-1;  idx2=-1;
         count = 0;
        while (i < 3 && j < 3) {
            if (vect[i][j] == "x") {
                count++;
            } else if(vect[i][j]=="null") {
                idx1 = i; idx2 = j;
            }
            i++;
            j++;
            
        }
        if (count == 2&&idx1!=-1&&idx2!=-1) {
            vect[idx1][idx2] = "o";
           document.getElementById(String(idx1)+String(idx2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }
        //check diagonally
        i = 0; j = 2; count = 0; idx1 = -1; idx2 = -1;
        while (i < 3 && j >= 0) {
            // console.log(i);
            // console.log(j);
             if (vect[i][j] == "x") {
                count++;
            } else if(vect[i][j]=="null") {
                idx1 = i; idx2 = j;
            }
            i++;
            j--;
        }
        if (count == 2&&idx1!=-1&&idx2!=-1) {
            vect[idx1][idx2] = "o";
             document.getElementById(String(idx1)+String(idx2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }
        

          if (vect[0][0] == "null") {
             vect[0][0] = "o";
            document.getElementById(String(0)+String(0)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }
        if (vect[0][2] == "null") {
             vect[0][2] = "o";
            document.getElementById(String(0)+String(2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }
        if (vect[2][0] == "null") {
             vect[2][0] = "o";
            document.getElementById(String(2)+String(0)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }
        if (vect[2][2] == "null") {
             vect[2][2] = "o";
            document.getElementById(String(2)+String(2)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
            return check("o");
        }


          for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    if (vect[i][j] == "null") {
                        vect[i][j] = "o";
                      document.getElementById(String(i)+String(j)).style.backgroundImage=`url(${sign1=="y"?bgimg:bgimg2})`
                        return check("o");
                        break;
                  }
                }
              
        }
        // return check("x");
        
        // }
        
        
    }
    
export function getImg(id,sign1,sign2) {
        
    let i = Number(id.substr(0, 1));
    let j = Number(id.substr(1, 1));
    let isEnter = false;
    if (vect[i][j] == "null") {
        vect[i][j] = "x";
        const ans = check("x");
        isEnter = true;
        document.getElementById(id).style.backgroundImage = `url(${sign1=="y"?bgimg2:bgimg})`;
        // setTimeout(() => {
        //     compTurn();
        // },1000)
        
      
        
        // console.log(ans);
       
        return ans;
    }
    if (!isEnter) {
        return "already occupied";
    }
}

export function makeVisible() {
    // let x = document.getElementsByClassName('popup-container');
    // console.log(x);
    // if (x != undefined) {
    //     x[0].style.display = 'flex';
    //     // console.log(document.getElementsByClassName('popup-container')[0])
    //     // document.getElementsByClassName('popup')[0].style.display = "flex";
    // }
}
    
