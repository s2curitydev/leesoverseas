import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="container">
      <form
        target="_blank"
        action="https://formsubmit.co/s2curity1004@gmail.com"
        method="POST">
        <div className="form-group form-manual-size">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group form-manual-size">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-dark btn-block formButton">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
