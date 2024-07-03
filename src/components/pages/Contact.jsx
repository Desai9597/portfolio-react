import React from 'react'
import emailjs from "@emailjs/browser";
import { Heading } from '../common/Heading'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Contact = () => { 

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, message} = e.target.elements;    

    const templateParams = {
      username: username.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        "service_weyxm56",
        "template_gf1u572",
        templateParams,
        "w9osKHLU_9936LX2J"
      )
      .then(
        (response) => {
      
        toast.success("Message Sent Successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
        
          toast.error("Error occured!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("FAILED...", err);
        }
      );
    }
    return (
        <>
            <Heading title="Contact"></Heading>
            <ul className="contact">
                <li className="box" data-aos="flip-left">
                    <form onSubmit={handleSubmit} data-aos="flip-left">

                        <div className="contact-items">
                            <p className="contact-label">Name</p>
                            <input type="text" 
                                id="username"
                                className="input-text input-height" required />

                        </div>
                        <div className="contact-items">
                            <p className='contact-label'>Email</p>
                            <input type="email" 
                                id="email" className="input-text input-height" required />
                        </div>
                     { /*  <div className="contact-items">
                            <p className='contact-label'>Subject</p>
                            <input type="text" 
                                id="subject" className="input-text input-height" required />
    </div> */}
                        <div className="contact-items">
                            <p className='contact-label'>Message</p>
                            <textarea name=""  cols="10" rows="5" 
                                id="message" className="input-text" required>
                            </textarea>
                        </div>
                        <button type="submit" className="project-button">Send Message</button>
                    </form>
                </li>
                <li className="box" data-aos="flip-right">
                    <div className="contact-items">
                        <p className="contact-label">Address :</p>
                        <div className="leftSide">
                            <div >
                                <div className="contact-text">142 Countrybrook Loop,</div>
                                <div className="contact-text">San Ramon, CA - 94583 </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-items">
                        <p className="contact-label">Email :</p>
                        <div className="contact-text">viral9597@gmail.com</div>
                    </div>
                    <div className="contact-items">
                        <p className="contact-label">Mobile :
                        </p>
                        <div className="contact-text">+1 9253644399</div>
                    </div>
                    <div className="contact-items">
                        <p className="contact-label">Social :</p>
                       
                            <div className="leftSide">
                                <div className="contact-text icon-text" title="Github" 
                                    onClick={() => window.open("https://github.com/Desai9597","_blank")}>
                                       <GitHubIcon />
                                </div>
                                <div className="contact-text icon-text" title="LinkedIn"
                                    onClick={() => window.open("https://www.linkedin.com/in/viral-sheth-3798ba266/")}>
                                        <LinkedInIcon />
                                    </div>
                            </div>    

                    </div>
                </li>
            </ul>
            <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        </>

    )
}
