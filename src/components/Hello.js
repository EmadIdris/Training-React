import React from "react";

const Hello =() => {
    //with JSX
    // return(
    //     <>
    //     <h3>Hello Emad</h3>
    //     </>
    // )
    // write without JSX
    return React.createElement(   // (// , // , // )
    'div', // <div>
    null,  // add class or id  {id:'hello' , class :'helloClass' }
    React.createElement(
        'h1' //<h1>
    ,
    "Hello Emad" 
    ))
}
export default Hello;