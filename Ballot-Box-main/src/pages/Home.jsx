import React from "react";

function Home() {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div>
      </div>
      <img src="/images/student.jpg" alt="background"/>
        <div style={{color: 'rgba(220, 4, 44)'}}>
          <h1 style={{paddingTop:'16px', paddingLeft:'10px', fontSize: "150%"}}>Home</h1>
      </div>
        <h3 style={{paddingTop:'10px', paddingLeft:'10px'}}> Welcome to ballot box!</h3>
        <p style={{paddingTop:'5px', paddingLeft:'10px', paddingBottom: "10px"}}> Add more information here.</p>
    </div>
  );
}

export default Home;