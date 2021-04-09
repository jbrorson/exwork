import React from 'react'
import Title from '../Components/Title';
import avatar from '../images/avatar.jpg';

function Contact() {
  return (
    <div className="Contact">
      <Title title={"Contact"} span="Contact" />
      <div className="form-wrapper">
        <form className="form">
          <div className="form-grid">
            <p>
              <label>Name</label>
              <input
                type="text"
                name="text"
                placeholder="Name">
              </input>
            </p>
            <p>
              <label>Email</label>
              <input
                type="email"
                name="text"
                placeholder="Email">
              </input>
            </p>
            <p>
              <label>Message</label>
              <textarea
                className="textarea"
                type="text"
                placeholder="Message">
              </textarea>
            </p>
          </div>
          <div className="btn-holder">
            <button type="submit">Send message</button>
          </div>


        </form>
        <div className="form-img"></div>
        {/* <img src={avatar} /> */}
      </div>
    </div>
  )
}

export default Contact;
