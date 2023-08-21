import React, { useState } from "react";
import { contactUs } from "./API";


const Contactus = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // console.log({fullName,email,message});
    contactUs({fullName,email,message})
    .then(data => {
      setFullName('')
      setEmail('')
      setMessage('')
      alert(data.message)
    })
    .catch(error => alert(error))
  };

  return (
    <section className="contact">
      <div className="content">
        <h1>Contact Us</h1>
        <p>
          A Teacher who is attempting to teach without inspiring
           the puple with a desire to learn is hammering on cold iron.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                39/2, Puthur School Street, <br />
                Krishnapuram, Kadayanallur, <br />
                Tamil Nadu 627751
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>507-485-6094</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>kite@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;