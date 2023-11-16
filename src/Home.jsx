import React from 'react'

import BG from "./background_03.jpg"
import LEFT from "./left.png"
import BOTTOM from "./bottom.png"
import RIGHT from "./right.png"
import "./Test.css"
import ZIG from "./asset 5.png"
import TOP from "./top.png"
import WB from "./white_bottom_wave_01.png"
import CountUp from 'react-countup'
import DOT1 from"./background_dots_01.png"
import IMG1 from "./portfolio_01-1280x960 (1).jpg"
import IMG2 from "./post_07-1280x960.jpg"
import IMG3 from "./training_01-1280x960.jpg"
import IMG4 from "./consulting-1280x960.jpg"
import RUN1 from "./01-160x160.jpg"
import RUN2 from "./02-160x160.jpg"
import RUN3 from "./03-160x160.jpg"
import RUN4 from "./04-160x160.jpg"
import FLOAT from "./floating_image_04.png"
import WEB from "./website-1500X800-1280x800.jpg"
import PURSE from "./test-automation-Fireflink-testyantra-720x800.jpg"
import PHONE from "./Automate-Software-Testing-1280x800.jpg"
import GREY from "./Wave_grey_bottom_left_shape_01 (2).png"
import MTEST from "./mainimg.png"
import { useState } from 'react'

const Home = () => {
  const [isClick, setClick] = useState(false)
  return (
    <section className='main_home_section'>
        <div className='third'>
          <img src={BG} alt={BG} />
          <div className='left'><img src={LEFT} alt={LEFT} /></div>
          <div className='bottom'><img src={BOTTOM} alt={BOTTOM} /></div>
          <div className='right'><img src={RIGHT} alt={RIGHT} /></div>
          <div className='zig'><img src={ZIG} alt={ZIG} /></div>
          <div className='bottom1'><img src={BOTTOM} alt={BOTTOM} /></div>
          <div className='top'><img src={TOP} alt={TOP} /></div>
          <div className='l1'><h1>Enabling the Digital</h1></div>
          <div className='l2'><h1>Transformation</h1></div>
          <div className='p1'><h2>Test Yantra Global provides a range of innovative technology solutions to digitally transform your organization.</h2></div>
          <div className='white'><img src={WB} alt={WB} /></div>
          <div className='dot1'><img src={DOT1} alt={DOT1} /></div>

        <div className='content'>
          <div className='dlist'>
          <h1>Our Services & Industries</h1>
          <p>We provide industry-specific services and solutions expertise to Global brands across a range of verticals.</p>
          <p>Some of the industries that we have worked with are :</p>
          <ul>
            <li><i class="fa-regular fa-circle-check"></i>Banking and Finance</li>
            <li><i class="fa-regular fa-circle-check"></i>Insurance</li>
            <li><i class="fa-regular fa-circle-check"></i>Retail and e-commerce</li>
            <li><i class="fa-regular fa-circle-check"></i>Healthcare</li>
            <li><i class="fa-regular fa-circle-check"></i>Information, Communication, Technology (ICT)</li>
            <li><i class="fa-regular fa-circle-check"></i>Education</li>
            <li><i class="fa-regular fa-circle-check"></i>Travel</li>
            <li><i class="fa-regular fa-circle-check"></i>Media and Entertainment</li>
          </ul>
          </div>
          <div className='cards'>
            <div className='firstline'>
                  <div className='card1'>
                      <div className='cimg1'><img src={IMG1} alt={IMG1} /></div>
                      <div className='c_content1'>
                        <h1>Software Design and Development</h1>
                        <p>We deliver IT solutions in a wide variety of verticals and elevate businesses to the next level.</p>
                        <h2>READ MORE<i class="fa-solid fa-circle-chevron-right"></i></h2>
                      </div>
                  </div>
                  <div className='card2'>
                      <div className='cimg1'><img src={IMG2} alt={IMG2} /></div>
                      <div className='c_content1'>
                        <h1 className='st'>Software Testing</h1>
                        <p>We offer cost-effective, reliable and scalable software testing services.</p>
                        <h2 className='rm2'>READ MORE<i class="fa-solid fa-circle-chevron-right"></i></h2>
                      </div>
                  </div>
                  </div>

                  <div className='secondline'>
                  <div className='card3'>
                      <div className='cimg1'><img src={IMG3} alt={IMG3} /></div>
                      <div className='c_content1'>
                        <h1>Elevate IT - IT Skills Development</h1>
                        <p>Our customized and curated training models help organizations elevate their IT quotient.</p>
                        <h2 className='rm3'>READ MORE<i class="fa-solid fa-circle-chevron-right"></i></h2>
                      </div>
                  </div>
                  <div className='card4'>
                      <div className='cimg1'><img src={IMG4} alt={IMG4} /></div>
                      <div className='c_content1'>
                        <h1>IT Consulting & Managed Services</h1>
                        <p>Our team of experts help you craft a winning IT strategy for your organization</p>
                        <h2>READ MORE<i class="fa-solid fa-circle-chevron-right"></i></h2>
                      </div>
                  </div>
                  </div> 
          </div>
        </div>
        {/* AFTER CAREDS */}

        <div className='last_third'> 
          <div className='iframe'><iframe width="560" height="315" src="https://www.youtube.com/embed/tuwxrL7Kh4E?si=vnS9HkBDSlC03cgy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div className='exp'>
            <h1>At the forefront of innovation</h1>
            <p>Test Yantra Global provides industry leading expertise and advanced technology solution to Digitally Transform leading brands across various industries. Connect with one of our Expert Solutions Specialist to see how Test Yantra can give your organization a leading edge.</p>
          </div>
        </div>
        </div>
        
        <div className='nspeack'>
              <h1>The numbers speak for </h1>
            <h1>themselves</h1>
        </div>

        
        <div className='run'>
          <div className='div_p'><img src={RUN1} alt={RUN1} />
          <h1 className='runtime'>
           <CountUp end={6}  duration={2}/>
          </h1>
          <p>Countries & Growing</p>
          
          </div>

          <div className='div_p'><img src={RUN2} alt={RUN2} />
          <h1 className='runtime'>
           <CountUp end={3000} suffix='+' duration={2}/>
          </h1>
          <p>Clients Across Globe</p>
          </div>

          <div className='div_p'><img src={RUN3} alt={RUN3} />
          <h1 className='runtime'>
           <CountUp end={5000} suffix='+' duration={2}/>
          </h1>
        <p>Team Members</p>
          </div>

          <div className='div_p'><img src={RUN4} alt={RUN4} />
          <h1 className='runtime'>
           <CountUp end={12000} suffix='+' duration={2}/>
          </h1>
         <p>On Demand Engineers</p>
          </div>
        </div>

      {/* side orange float */}
        <div className='float'>
        <img src={FLOAT} alt={FLOAT} />
       </div>

       <div className='single_line'><h1>Articles</h1></div>
       <div className='a_cards'>
        <div className='a_cards1'>
          <img src={WEB} alt={WEB} />
          <h3>May 16, 2023</h3>
          <h1>One stop solution for Scriptless Automated Testing – FireFlink</h1>
          <p>READ MORE<i class="fa-solid fa-circle-chevron-right"></i></p>
        </div>

        <div className='a_cards2'>
        <img src={PURSE} alt={PURSE} />
        <h3>April 19, 2023</h3>
        <h1>Test Automation Suite- Selenium , Oracle or FireFlink</h1>
        <p>READ MORE<i class="fa-solid fa-circle-chevron-right"></i></p>
        </div>

        <div className='a_cards3'>
        <img src={PHONE} alt={PHONE} />
        <h3>March 24, 2023</h3>
        <h1>Automated software testing -101</h1>
        <p>READ MORE<i class="fa-solid fa-circle-chevron-right"></i></p>
        </div>
       </div>

    {/* READ MORE BUTTON */}
    <div className='single_line2'><button>Read more Articles</button></div>

    {/* SINGLE LINE AFTER BUTTON */}
      <div className='single_line3'><h1>We enable you to digitally transform  your business to</h1>
      <h1>help you create the company of your dreams.</h1>
      </div>

       <div className='sec_dot'><img src={GREY} alt={GREY} /></div>

       <div className='grey_last'>
               <div className='one_grey'>
                <div className='line_grey'><h1>Subscribe to our Newsletter</h1></div>
                <div className='input'><input type="text" placeholder='Your email' /><button>Subscribe</button></div>
               </div>

               {/* last Section */}

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

export default Home