import React from "react";
// import "/home/i-exceed.com/lokesh.ak/Desktop/React/testing/src/components/nature.jpg"
const user = {
    name: 'Hedy Lamarr',
    imageSize: 190,
    imageUrl:"https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg"
  };
function Welcome(){
    return(
    <>
        <h1>Welcome to i-exceed</h1>
        <img src={user.imageUrl} alt="forest" style={{width:user.imageSize,height:user.imageSize}} />
    </>
    )
}
export default Welcome
