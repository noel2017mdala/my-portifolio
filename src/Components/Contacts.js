import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Contact as ContactReducer } from "../Redux/Actions/Nav_Action";
import { Container } from "../styles/About";
import github from "../images/socials/github.jpg";
import linkedIn from "../images/socials/linkedin.png";
import instagram from "../images/socials/instagram.jpg";
import facebook from "../images/socials/facebook.jpg";
import gmail from "../images/socials/gmail.png";
const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

const Contact = () => {
  const { REACT_APP_SERVICE_KEY, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
    process.env;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactReducer());
  }, [dispatch]);

  const notify = () =>
    toast.success("Email Sent Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const tostErr = () =>
    toast.error("Failed to send email Please try again later ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //this function send an email;

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        REACT_APP_SERVICE_KEY,
        REACT_APP_TEMPLATE_ID,
        e.target,
        REACT_APP_USER_ID
      )
      .then(
        (result) => {
          notify();
          //   console.log(result.text);
        },
        (error) => {
          tostErr();
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container>
      <div className="contact">
        <h3>Get In Touch</h3>
        {/* <p>Feal Free to reach out</p> */}
        <form onSubmit={sendMail}>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            required="required"
          />
          <label>Email</label>
          <input type="Email" name="email" placeholder="Your Email" required />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required="required"
          />
          <label>Message</label>
          <textarea
            id="w3review"
            name="message"
            rows="4"
            cols="50"
            required
          ></textarea>
          <input type="submit" value="Submit" required="required" />
        </form>
      </div>

      <div className="socialMedia">
        <h3>Please feel free to reach out on the following platforms</h3>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/abel-mdala-b5a0771a8/"
            target="_blank"
          >
            <img src={linkedIn} height="20px" width="20px" />
          </a>

          <a href="https://github.com/noel2017mdala" target="_blank">
            <img src={github} height="20px" width="20px" />
          </a>

          <a href="https://www.instagram.com/abelgmdala/" target="_blank">
            <img src={instagram} height="20px" width="20px" />
          </a>

          <a href="https://www.facebook.com/AbelGMdala/" target="_blank">
            <img src={facebook} height="20px" width="20px" />
          </a>
          <a href="mailto:noelmdala2017@gmail.com" target="_blank">
            <img src={gmail} height="20px" width="20px" />
          </a>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default Contact;
