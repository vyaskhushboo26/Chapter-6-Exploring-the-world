import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";


/* 
      Hearder
        - Logo or Title
        - NavItems (right side)
        - Carts
      
      Body 
        - Search Bar
        - RestrauntList
            - RestrauntCart
                - Image
                - Name
                - Rating
                - Cusines
                
      Footer
        - Links
        - Copyrights
      
      */

const AppLayout = () =>{
  return(
    <>
      <Header />
      <Body />
      <Footer />
    </>  
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(HeadingComponent()); another way to render component

