import React from 'react';

function Footer(props) {
    return (
      <footer>
        <div className="footer-left">
          <nav>
            <ul>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">How Search works</a></li>
            </ul>
          </nav>
          <p>&copy; {new Date().getFullYear()} Google LLC</p>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href="#"><i className="fa fa-globe"></i> English</a></li>
            <li><a href="#"><i className="fa fa-info-circle"></i> Help</a></li>
            <li><a href="#"><i className="fa fa-share"></i> Share</a></li>
            <li><a href="#"><i className="fa fa-comment"></i> Send Feedback</a></li>
          </ul>
        </div>
      </footer>
    );
  }

  export default Footer
  