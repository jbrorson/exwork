import React from 'react'
import Title from '../Components/Title';

function About() {
  return (
    <>
      <Title title={"About me & skills"} span="About Me" />
      <main className="About">
        <h1 className="heading">Summury</h1>
        <section className="summury-wrapper">
          <section className="image">image</section>
          <section className="summury-text-holder">Hi, nice that you steped by. My name is Josefine and Im 28 years old. I am a frontend/web delevoper based in Stockholm.
            <ul className="summury-list">
              <li className="summury-list-item">Frontend developer</li>
              <li className="summury-list-item">Based in Stockholm, Sweden</li>
              <li className="summury-list-item">Grew up in southern part of Swe (sorry for funny accent)</li>
              <li className="summury-list-item">I love animals - especially my dog Oscar, who is a black lab</li>
              <li className="summury-list-item">Soccer player,- were I also am the team Captain</li>
              <li className="summury-list-item">Programmed for about two years</li>
              Want to know more about me? Don't hasitate to contact me.
            </ul>
            <button className="btn-download">Download cv</button>
          </section>
        </section>
      </main>
    </>
  )
}

export default About;
