import React from "react";

function Contact() {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div>
      </div>
        <img src="/images/student.jpg" alt="background"/>
        <div style={{color: 'rgba(220, 4, 44)'}}>
          <h1 style={{paddingTop:'16px', paddingLeft:'10px', fontSize: "150%"}}>Contact</h1>
        </div>
          <h3 style={{paddingTop:'10px', paddingLeft:'10px'}}>Call or Email us, we would be glad to hear from you!</h3>
          <p style={{paddingTop:'5px', paddingLeft:'10px'}}>
            Union College Student Life
          </p>
          <p style={{paddingTop:'5px', paddingLeft:'10px'}}>
            Phone: 403.555.6905
          </p>
          <p style={{paddingTop:'5px', paddingLeft:'10px', paddingBottom: "10px"}}>
            Email: student.life@ucollege.edu
          </p>
    </div>
  );
}

export default Contact;