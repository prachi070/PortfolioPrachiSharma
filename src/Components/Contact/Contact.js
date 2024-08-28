import React,{useEffect} from 'react'
import './Contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import bubble from "../../OtherPages/bluebubble.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b73356e1-35da-4230-8fd6-ae616f91d312");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Mail sent successfully")
    } else {
      console.log("Error", data);
      setResult(data.message);
    }}


  return (
    <>
    <div id='contact' className='contact'>
        <div className='contact-title' data-aos="fade-up">
            <h1>Get in touch</h1>
            {/* <img src={bubble} alt='image'/> */}
        </div>
      <div className='contact-section'>
        <div className='contact-left'>
            <h1 data-aos="fade-up">Let's talk</h1>
            <p data-aos="fade-up">I'm currently available to take on new projects, so feel free to contact me about anything that you want me to work on. You can contact anytime.</p>
        <div className='contact-details'data-aos="fade-up">
            <div className='contact-detail'>
                <IoIosMail/><p>prachisharmakv@gmail.com</p>
            </div>
            <div className='contact-detail'>
            <IoCall /><p>+91 8101156125</p>

            </div>
            <div className='contact-detail'>
            <FaLocationDot /><p>Golbazar kharagpur, India</p>

            </div>
        </div>
        </div>

   <form onSubmit={onSubmit} className='contact-right' data-aos="fade-right">
    <label htmlFor=''>Your Name</label>
    <input type='text' placeholder='Enter your name' name='name' />
    <label htmlFor=''>Your Email</label>
    <input type='email' placeholder='Enter your email' name='email' />
    <label htmlFor=''>Write your message</label>
    <textarea name='message' rows="8" placeholder='Enter your message' ></textarea>
   <button type='submit' className='contact-submit'data-aos="fade-right"> Submit </button>
   </form>
      </div>

    </div>



      
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
</>
  );
}


export default Contact;
