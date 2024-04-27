"use client";

import React, { useRef } from "react";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import Navbar from "../Components/Section/Navbar/Navbar";
const Contact = () => {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");

  const [isContentVisible, setIsContentVisible] = useState(false);
  const form = useRef();
  const handleToggle = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_6gfazn1";
    const templateId = "template_dovyfwr";
    const publicKey = "SvzjE8cl0x69WTzFm";

    const formData = {
      from_email: email,
      from_name: Name,
      phone_number: phone,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully !", response);
        setName("");
        setemail("");
        setmessage("");
        setphone("");
      })
      .catch((error) => {
        console.log("Errror sending email", error);
      });
  };

  return (
    <section>
      <div className="contact-main">
        <Navbar />

        <form onSubmit={handleSubmit} className="form">
          <div className="form-main">
            <div className="form-main2">
              <div>
                <label for="first-name">First name</label>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="custom-input"
                />
              </div>

              <div>
                <label for="email">Email</label>

                <input
                  type="text"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="custom-input"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number">Phone number</label>
              <div>
                <input
                  type="text"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  className="custom-input"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message">Message</label>
              <div class="mt-2.5">
                <input
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  className="custom-input"
                />
              </div>
            </div>
            <div className="button">
              <button type="submit" className="custom-button">
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
