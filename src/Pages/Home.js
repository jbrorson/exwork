import React from 'react';

function Home() {
  return (
    <div className="Home">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am Josefine Brorson
          {/* <span> Brorson</span> */}
        </h1>
        <h2 className="sub-text">
          Frontend Developer
        </h2>
        <div className="btn-wrapper">
          <button className="home-btn">My projects</button>
        </div>
      </header>
    </div>
  )
}

export default Home;
