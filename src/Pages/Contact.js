import React from 'react'
import Title from '../Components/Title';

function Contact() {
  return (
    <div className="Contact">
      <Title title={"Contact"} span="Contact" />
      <form className="form">
        {/* <h1>Get in touch with me</h1> */}
        <div>
          <p>Email</p>
          <input type="email" name="text"></input>
        </div>
      </form>
    </div>
  )
}

export default Contact;
