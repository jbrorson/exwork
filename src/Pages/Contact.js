import React, { useState } from 'react'
import { db } from '../Components/firebase/firebase';
import Title from '../Components/Title';
// import avatar from '../images/avatar.jpg';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted :)");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    // Empty input field after submitted...
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Title title={"Contact me"} span="Contact me" />
      <main className="Contact">
        <div className="form-wrapper">
          <div className="form-img"></div>
          <form className="contactForm" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-grid">
              <h2>Reach out to me by filling out this form</h2>
              <p>
                <label>Name</label>
                <input
                  placeholder="Your name"
                  id="name"
                  type="text"
                  name="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                <label>Email</label>
                <input
                  placeholder="Your email"
                  id="email"
                  type="email"
                  name="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <label>Message</label>
                <textarea
                  placeholder="Your message here"
                  id="message"
                  className="textarea"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </p>
            </div>
            <div className="btn-holder">
              <button type="submit" style={{ background: loader ? "#ccc" : "#2f4c6a" }}>Send message</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Contact;
