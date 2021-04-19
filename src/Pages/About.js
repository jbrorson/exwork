import React from 'react'
import Title from '../Components/Title';
import ProgressBar from '../Components/ProgressBar';

function About() {

  return (
    <>
      <Title title={"About me"} span="About Me" />
      <main className="About">
        <h1 className="heading">Get to know me a little more</h1>
        <section className="about-section">
          <section className="image">image</section>
          <section className="about-text-holder">Hi, nice that you steped by. My name is Josefine and Im 28 years old. I am a frontend/web delevoper based in Stockholm.
            <ul className="about-list">
              <li className="about-list-item">Frontend developer</li>
              <li className="about-list-item">Based in Stockholm, Sweden</li>
              <li className="about-list-item">Grew up in southern part of Swe (sorry for funny accent)</li>
              <li className="about-list-item">I love animals - especially my dog Oscar, who is a black lab</li>
              <li className="about-list-item">Soccer player,- were I also am the team Captain</li>
              <li className="about-list-item">Programmed for about two years</li>
              Want to know more about me? Don't hasitate to contact me.
            </ul>
            <button className="btn-download">Download cv</button>
          </section>
        </section>
        <div className="skills-title">
          <Title title={"My skills"} />
        </div>
        <section className="skills-section">
          <ProgressBar done={44} name={"JavaScript"} content={"Jag kan lite js"} />
          <ProgressBar done={70} name={"HTML5"} content={"Jag är praktiskt taget html.."} />
          <ProgressBar done={60} name={"CSS3"} content={"Css är lätt som en plätt!"} />
          <ProgressBar done={25} name={"React"} content={"React och jag, vi är goda vänner!"} />
          <ProgressBar done={100} name={"Node"} content={"Node, node, node<3"} />
        </section>
      </main>
    </>
  )
}

export default About;
