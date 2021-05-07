import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
  <div style={{paddingBottom: '12px', backgroundColor:'black'}}>
    <nav>
      <div style={{display: 'flex', flex: 2, flexDirection: 'row', justifyContent:'space-between'}}>
        <div style={{flex:1}}>
          <img style={{height: '60px', paddingLeft: '16px'}} src="/images/BallotBoxLogo.png" alt="background"/>
        </div> 
        <div style={{alignSelf: 'center', paddingRight: '20px'}}>
          <Link style={{color: 'white', fontSize: "110%", paddingRight: '10px'}} to="/">
              Home
          </Link>
          <Link style={{color: 'white', fontSize: "110%", paddingRight: '10px' }} to="/about">
              About
          </Link>
          <Link style={{color: 'white', fontSize: "110%", }} to="/contact">
              Contact
          </Link>
        </div>
      </div>
    </nav> 
  </div>
  );
}

export default withRouter(Navigation);