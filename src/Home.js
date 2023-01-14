import React from 'react';
import p7 from "../src/p7.jpeg";

function Home() {

  return (

    <div >
      <h1 className='text-dark'>
        Welcome to student learning system
      </h1>
      <div className="col-lg-12 " style={{ height: "100%" }}>
        <img
          src={p7}
          className="bg-image justify-content-center align-items-center"
          alt="bg"
          width="100%"
        />

      </div>
    </div>


  );
}



export default Home;
