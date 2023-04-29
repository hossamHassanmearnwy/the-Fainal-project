import React from "react";
import { Navigate } from "react-router-dom";
const Protected =({children})=>{
    const token =localStorage.getItem("token")
    if(!token){
            return   <Navigate to="/login" replace  />
    }

    return children
       
};
export default Protected;
// import { Navigate, Redirect, Route } from "react-router-dom";

// function Protected({ component: Component, ...rest }) {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

  

//   return (
//     <Route {...rest} render={(props) => <Component {...props} />} />
//   );
// }

// export default Protected;