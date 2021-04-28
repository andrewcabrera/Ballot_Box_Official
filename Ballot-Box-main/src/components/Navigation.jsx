import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav>
        <div>
          <Link to="/">
            BallotBox
          </Link>

          <div>
            <ul>
              <li>
                <Link to="/">
                  Home
                  <span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/polls">
                  Polls
                </Link>
              </li>
              <li>
                <Link to="/Discussion">
                Discussions
                </Link>
              </li>
              <li>
                <Link to="/Surveys">
                Surveys
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);