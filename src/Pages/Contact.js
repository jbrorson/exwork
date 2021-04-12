import React from 'react'
import Title from '../Components/Title';
// import avatar from '../images/avatar.jpg';

function Contact() {
  return (
    <main className="Contact App">
      <Title title={"Contact"} span="Contact" />
      <div className="form-wrapper">
        <div className="form-img">

        </div>

        <form className="form">
          <div className="form-grid">
            <h2>Reach out to me by filling out this form</h2>
            <p>
              <label>Name</label>
              <input
                type="text"
                name="text"
                placeholder="Your name">
              </input>
            </p>
            <p>
              <label>Email</label>
              <input
                type="email"
                name="text"
                placeholder="Your email">
              </input>
            </p>
            <p>
              <label>Message</label>
              <textarea
                className="textarea"
                type="text"
                placeholder="Your message here">
              </textarea>
            </p>
          </div>
          <div className="btn-holder">
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Contact;
