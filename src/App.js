
 import { useEffect, useState } from 'react';
 import './base.scss';
 import Home from './Home/Home';
 import LoadUp from "./LoadUp.jsx"
 function App() {
   const [showLoadUp, setShowLoadUp] = useState(true);


   useEffect(()=>{
      document.body.style.transition = "0.3s ease-in-out";
      document.body.style.backgroundColor = "black";
   },[])

   useEffect(() => {
    const timer = setTimeout(() => {
       document.body.style.backgroundColor = "white";
       document.body.style.transition = "0.3s ease-in-out";
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

   useEffect(() => {
     const timer = setTimeout(() => {
       setShowLoadUp(false);
     }, 4000);

     return () => clearTimeout(timer);
   }, []);

   return (
   <>
       {/* The main container wrapper */}
       <div className="main_container_wrapper">
         {/* A container with a maximum width */}
         <div className="max_width">
           {/* Conditionally render the LoadUp component */}
           {showLoadUp && <LoadUp />}
           {/* Render the Home component */}
           {showLoadUp || <Home />}
         </div>
       </div>
     </>
   );
 }

 export default App;
