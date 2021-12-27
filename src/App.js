//USECONTEXT API (TUTORIAL 56)


// import React, { createContext } from "react";
// import ComA from "./ComA";

// const FirstName = createContext();
// const LastName = createContext();

// const App = () => {
//   return (
//     <>
//     <FirstName.Provider value={"Manish"}>
//     <LastName.Provider value={"Goyal"}>
//     <ComA />
//     </LastName.Provider>    
//     </FirstName.Provider> 
//     </>    
//   );
// };

// export default App;
// export {FirstName, LastName} ;








//USEEFFECT API (TUTORIAL 57)

import React, { useEffect } from "react";
import { useState } from "react";

const App = () =>{
  const[num , setNum] = useState(0);
  const[nums, setNums] = useState(0);

  useEffect(()=>{
    // alert("I am Clicked");
    document.title = (" I am Clicked " + num + "times")
  }, [num]);

  const Incr = () =>{
        setNum(num+1);  
  };

  const Incrs =() => {
    setNums(nums+1);
  };

  return(
    <>
    <button onClick={Incr}> Click Me {num} </button>
    <button onClick={Incrs}>Click Me {nums}</button>
    </>
  )
  }

export default App;
