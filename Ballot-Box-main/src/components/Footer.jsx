import React from "react";
import { Link, withRouter } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer>
        <div style={{display: 'flex', flex: 3, flexDirection: 'row', justifyContent:'space-between'}}>
              <div style={{border: 'solid black', padding:'100px', textAlign: 'center', width: '33%', borderRadius:'5%', backgroundColor: 'rgba(220, 4, 44)'}}>
                <Link style={{color: 'White', border: '16px', textAlign: 'center'}} to="/polls">
                  Polls
                </Link>
                <p style={{textAlign: 'center'}}>
                Add more information here
                </p>
              </div>
              <div style={{border: 'solid black', padding:'100px', textAlign: 'center', width: '33%', borderRadius:'5%', backgroundColor: 'rgba(220, 4, 44)'}}>
                <Link style={{color: 'White', border: '16px', textAlign: 'center'}} to="/Discussions">
                Discussions
                </Link>
                <p style={{textAlign: 'center'}}>
                  We are excited to announce this page will be live Fall 2021!
                </p>
              </div>
              <div style={{border: 'solid black', padding:'100px', textAlign: 'center', width: '33%', borderRadius:'5%', backgroundColor: 'rgba(220, 4, 44)'}}>
                <Link style={{color: 'White', border: '16px', textAlign: 'center'}} to="/Surveys">
                Surveys
                </Link>
                <p style={{textAlign: 'center'}}>
                  Add more information here
                </p>
              </div>
      </div>
    </footer>
    <p style={{backgroundColor: 'black', color: 'white'}}>
          Copyright &copy; 2021, Improving your college experience- Ballot Box. 
    </p>
  </div>
  );
}

export default Footer;