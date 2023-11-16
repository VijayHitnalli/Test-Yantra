import React from 'react'
import BACKG from "./bottom_wave_02_gray.png"
import PFLOAT from "./floating_image_04 (1).png"
import SKILLRARY from "./skillrary.jpg"
import MTEST from "./mainimg.png"
import PFLOAT2 from "./floating_image_11.png"
import BABOUT from "./background_about_01.png"

const Prdocs = () => {
  return (
    <section className='psection'>
        <div className='pdiv1'>
        <img src={BACKG} alt={BACKG} />
        </div>
        <div className='pfloat'>
          <img src={PFLOAT} alt="" />
        </div>
        <div className='pdiv2'>
          <h1>SkillRary</h1>
          <p>One stop solution for online learning and assessment, tailored to suit every individual’s needs.</p>
        </div>
        <div className='pdiv3_main'>
        <div className='pdiv3'>
              <div><iframe width="560" height="315" src="https://www.youtube.com/embed/3aEWGhR79OM?si=Ok1KF_z_oFIyPHq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
              <div>
                <img src={SKILLRARY} alt={SKILLRARY} />
                <p>Whether you are a passionate professional with a keen understanding of a particular skill that you want to teach the world or a company owner looking at polishing the skills of your employees, Skillrary is the platform that you are looking for. An online learning and assessment platform tailored to suit every individual’s needs, Skillrary provides computer-based training and e-learning in a range of subjects. It also makes curating and launching a course a quick and easy affair. </p>
              <p>With courses on varied subjects like design, marketing, business and AI, learners can opt for anything that excites them or suits their business requirements. Skillrary’s courses also involve a variety of multimedia elements, including graphics, audios, videos and web links. Be it self-paced or real-time, each course caters to an individual’s needs.</p>
              <p>The platform is also coupled with assessments for you to rate the skills of your learners or employees. So far, the trainers of Skillrary have conducted over 87,000 lectures; created more than 99,000 videos and trained over 354,000 students in over 14,000 courses.</p>
              <p>Join the community of Skillrary to sharpen your skills and make learning a fun and wholesome experience.</p>
              
              </div>
        </div>
        </div>
        <div className='pdiv4'>
                <button>SkillRary - Know more <i class="fa-solid fa-circle-chevron-right"></i></button>
        </div>

        <div className='pdiv5'>
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

       <div className='pfloat2'>
        <img src={PFLOAT2} alt={PFLOAT2} />
       </div>
     
    </section>
  )
}

export default Prdocs