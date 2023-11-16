import React from 'react'
import "./Global.css"
import BANNER from "./Consulting_banner.jpg"
import BBACK from "./bottom_wave_02.png"
import MTEST from "./mainimg.png"

const Services = () => {
  return (
    <section className='smain'>
      <div className='sdiv'>
       
        <img src={BBACK} alt={BBACK} />
        </div>
        <div className='sdiv2'>
          <h1>IT CONSULTING & MANAGED SERVICES</h1>
          <p>Our team of IT consultants and managed services experts provide timely consulting, software configuration, deployment, and support for an array of cloud and premise based applications.</p>
        </div>
        <div className='scontainer'>
            <div><h1>An overview</h1><p>It’s extremely crucial for organizations to choose the right IT solutions for the growth of their company and brand. But with galloping technological advancements, it may be challenging for companies to keep up with the fast-changing times. This is where our team of consulting experts step in.</p></div>
            <div><h1>Why Test Yantra Global?</h1><p>Test Yantra Global clients have leveraged our IT Consulting & Managed Services to create a competitive edge. With 15+ years of experience, 12,000+ engineers, 3,000+ customers, and 180+ enterprise deployments, our experts IT Consulting and Managed Services team can successfuly guide your business digital transformation.</p><p>From consulting and planning for the most appropriate technology strategy and software stack, to deployment, maintenance, and support of applications, we have the resources, skills, and expertise to help elevate your business.</p><p>Get in touch with our team of experts to discuss how we can help guide your successful digital transformation journey.</p></div>
        </div>

       

        <div className='sdiv3'>
        <div className='one_grey'>
                <div className='line_grey'><h1>Subscribe to our Newsletter</h1></div>
                <div className='input'><input type="text" placeholder='Your email' /><button>Subscribe</button></div>
               </div>
        <section className='last_section'>
                 <div><img src={MTEST} alt={MTEST} /></div>

                  <div className='two_div'>
                        <div>
                          <h1>Home</h1>
                          <li>About Us</li>
                          <li>Work With Us</li>
                          <li>Contact</li>
                          <li>Case Studies</li>
                        </div>
                        <div>
                          <h1>Services</h1>
                          <li>Software Development</li>
                          <li>Elevate - IT training services</li>
                          <li>IT consulting</li>
                        </div>
                  </div>

                 <div className='third_section'>
                  <h1>Industries</h1>
                 <li>Banking & Finance</li>
                 <li>Insurance</li>
                 <li>Healthcare</li>
                 <li>Retail & e-commerce</li>
                 <li>Technology and Communications</li>
                 <li>Education</li>
                 <li>Travel</li>
                 <li>Media and Entertainment</li>
                 </div>

                 <div className='connect'>
                  <h1>Connect</h1>
                  <div className='f'><i class="fa-brands fa-facebook-f"></i></div>
                  <div className='t'><i class="fa-brands fa-twitter"></i></div>
                  <div className='i'><i class="fa-brands fa-instagram"></i></div>
                  <div className='l'><i class="fa-brands fa-linkedin-in"></i></div>
                  <li><i class="fa-solid fa-headphones"></i>Ph: +1 888 980 7010</li>
                  <li><i class="fa-solid fa-envelope"></i>hello@testyantraglobal.com</li>
                
                  </div>
               </section>
               </div>
               <footer>
          <div><h1>©2022 Test Yantra Global. All rights reserved</h1></div>
          <div className='a'>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
          </div>
          
       </footer>


       

    </section>
  )
}

export default Services
