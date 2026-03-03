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

  const formData = new FormData(form.current);
  const name = formData.get("user_name")?.trim();
  const email = formData.get("user_email")?.trim();
  const message = formData.get("message")?.trim();

  // 🚨 Validation
  if (!name || !email || !message) {
    toast.error("Please fill all the fields!", {
      className: "glass-error-toast",
      position: "top-right",
      autoClose: 3000,
    });
    return; // ⛔ stop execution
  }

  emailjs
    .sendForm(
      "service_4in0hxo",
      "template_xx2i5hn",
      form.current,
      "3XfI1TIY1R9WCNooo"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");

        toast.success("Message sent successfully!", {
          className: "glass-success-toast",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        e.target.reset(); // optional: clears form
      },
      (error) => {
        console.log(error.text);

        toast("Failed to send message!", 
          // {
          // position: "top-right",
          // autoClose: 4000,
          // theme: "colored",
        // }
      );
      }
    );
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
            <input type="submit" id="button"  value="Send" />
          </form>
          
        </div>
      </div>
          <ToastContainer />
    </div>
  );
};


