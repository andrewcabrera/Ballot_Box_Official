import React from "react";

function About() {
  return (
    <div style={{backgroundColor: 'black'}}>
      <img src="/images/student.jpg" alt="background"/>
      <div class='background'>
      </div>
        <div style={{color: 'rgba(220, 4, 44)'}}>
          <h1 style={{paddingTop:'16px', paddingLeft:'10px', fontSize: "150%"}}>About</h1>
        </div>
         <h3 style={{paddingTop:'10px', paddingLeft:'10px'}}>What to know more about us?</h3>
          <p style={{paddingTop:'10px', paddingLeft:'10px', paddingBottom: "10px"}}>
            Add more information here
          </p>
    </div>
  );
}

export default About;