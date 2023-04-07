// import React, { Fragment,useState, useEffect } from 'react'
// import Slider from '../../Components/Slider/Slider'
// import InternalNav from '../InternalNav/InternalNav'
// import ProjectNav from '../Nav/ProjectNav'

// function Header() {
//   const [show, setShow] = useState(true);
// 	// const [cart , setCart] = useState([]);
// 	let [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []   // local storge to get cart 
//   );



// 	useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));    // local storge to save cart in it

//     console.log(`Saved ${cart.length} items to localstorage`);
//   }, [cart]); 
//   return (  <Fragment>
//     <ProjectNav />
//     <InternalNav size={cart.length} setShow={setShow}/>
//     <Slider />
//     </Fragment>
//   )   
// }

// export default Header