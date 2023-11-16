import React from 'react'
import BBACK from "./bottom_wave_02.png"
import IBANNER from "./Screenshot (1).png"
import MTEST from "./mainimg.png"

const Industries = () => {
  return (
    <section className='isection'>
      <div className='idiv'>
      <img src={BBACK} alt={BBACK} />
      </div>
      <div className='idiv2'>
        <h1>INSURANCE</h1>
        <p>We combine analytics, design and development to assist our insurance clients</p>
      </div>
      <div className='idiv3'>
        <div className='idiv3_1'>
          <img src={IBANNER} alt={IBANNER} />
        </div>
        <div className='idiv3_2'>
          <p>
The global insurance industry witnessed a moderate growth of 4.9 percent in 2019 over 2018, a slightly higher level than its CAGR from 2010 to 2018 of 3 percent with total premiums reaching 5 trillion euros (Exhibit 1). The following years, the pandemic dealt a big blow to the industry with the repeated lockdowns resulting in a mighty slowdown. But now, with the world recovering post Covid, insurers are hoping for a bright future for the industry.  </p>
          <p>With digital being the buzzword in the world of insurance, most insurance companies are using cutting-edge technologies to transform themselves. Yes, gone are the days when insurance agents went from door to door selling policies. Today, more and more insurance companies are turning to technology to make the entire process easier for policyholders. Not only does technology help insurance companies maintain a flexible work schedule but it also leaves the customers satisfied. This is one of the main reasons why ‘Insurtech’ sure is the way to go.</p>
          <p>At Test Yantra Global, the skilled team combines analytics, design and development and assists its insurance clients to seamlessly blend into the digital world. Our solutions consist of a wide range of advanced analytics that keep us ahead of our contemporaries. Adept at building risk strategies for our clients in their security and regulatory requirements, Test Yantra Global’s strategies lead to more profit and better business outcomes.</p>
        </div>
      </div>
      <div className='idiv4'>
        <p>Test Yantra Global uses easy-to-understand business models and operational excellence to educate clients on the importance of being tech-savvy.</p>
        <p>We also impart knowledge on how to make customer experience interesting and easier so that it benefits both the company as well as policy holders.</p>
      </div>
      <div className='idiv5'>
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

export default Industries