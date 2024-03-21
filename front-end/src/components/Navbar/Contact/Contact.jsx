import React from 'react';
import './Contact.css'; // Import your CSS file for styling
import locationImg from "../../../assets/location.jpg";
import emailImg from '../../../assets/email.jpg';
import phoneImg from '../../../assets/phone.jpg';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted!');
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src={locationImg} className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src={locationImg} className="icon" alt="" />
              <p>Industrial estate pegamut Way</p>
            </div>
            <div className="information">
              <img src={emailImg} className="icon" alt="" />
              <p>example@gmail.com</p>
            </div>
            <div className="information">
              <img src={phoneImg} className="icon" alt="" />
              <p>081-370-415-26</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
              <FaFacebook />
              </a>
              <a href="#">
              <FaTwitter />
              </a>
              <a href="#">
              <FaInstagram />
              </a>
              <a href="#">
              <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder='Input Your username' />
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder='Email' />
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" placeholder='phone number' />
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Leave a message for Us'></textarea>
              {/* <label htmlFor="">Message</label> */}
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;