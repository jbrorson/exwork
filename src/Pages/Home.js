import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="Home">
      <header className="hero">
        <h1 className="hero-text">
          Hello, I am Josefine
          {/* <span> Brorson</span> */}
        </h1>
        <p className="sub-text">
          Hej alla jag är Josefine, en frontend utvecklare baserad i vackra stockholm, sverige.
          Hej alla jag är Josefine, en frontend utvecklare baserad i vackra stockholm, sverige.
          Hej alla jag är Josefine, en frontend utvecklare baserad i vackra stockholm, sverige.
          Hej alla jag är Josefine, en frontend utvecklare baserad i vackra stockholm, sverige.
        </p>
        {/* <button>Download cv</button> */}
        <div className="icons">
          <FontAwesomeIcon icon={faGithub} className="github" />
          <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
        </div>
      </header>
    </div>
  )
}

export default Home;
