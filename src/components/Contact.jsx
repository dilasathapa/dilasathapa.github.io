import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import icona from "./../images/mailgif/icon-animation.gif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// npm i @emailjs/browser

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3i7uz1a",
        "template_xx2i5hn",
        form.current,
        "3XfI1TIY1R9WCNooo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          // alert("message sent")
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const showToastMessage = () => {
    toast('message sent!', {
        position: toast.POSITION.TOP_RIGHT
    });
};


  return (
    <div id="form">
      <h1>Lets's Connect</h1>

      <div id="c-parent">
        <div>
          <img id="icona" src={icona} alt="email box image" />
        </div>
        <div id="child">
          <form ref={form} onSubmit={sendEmail} id="form-send">
            <p>Name</p>
            <input type="text" name="user_name" />
            <p>Enter Email</p>
            <input type="email" name="user_email" />
            <p>Message</p>
            <textarea name="message" /> <br />
            <input type="submit" id="button" onClick={showToastMessage} value="Send" />
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};


