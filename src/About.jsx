import React from 'react'
import CREATE from "./creative-process-development-ideas-diagram.jpg"
import B3 from "./bottom_wave_02 (3).png"
import SC4 from "./Screenshot (4).png"
import MTEST from "./mainimg.png"

const About = () => {
  return (
    <section className='asection'>
      <div className='adiv1'>
          <img src={B3} alt={B3} />
      </div>
      <div className='adiv2'>
            <h1>LIFE @ TY</h1>
            <p>We thrive when we make our clients climb the ladder of success</p>
      </div>

      <div className='adiv3'>
          <div className='adiv3_1'><img src={SC4} alt={SC4} /></div>
          <div className='adiv3_2'>
            <p>
The team at Test Yantra Global is brimming with ideas and most importantly, life! We have people of all age groups working in harmony to make this world a better place to live in. </p>
            <p>Life at Test Yantra Global is truly creative, fun and enlightening with our priorities being team work and of course, our clients. Our employees come from varied backgrounds to make the organization thrive and we all learn from each other every passing day to help ourselves and the organization grow. At Test Yantra Global, the skills of each employee are recognized and given a chance to flourish. This is because we know that there is more to a person than meets the eye. </p>
            <p>When it comes to our clients, we have an enviable track record that consists of successful businesses from all over the world. We thrive when we make our clients climb the ladder of success. </p>
            <p>We are also a team of global and responsible citizens who have a created a nurturing environment at our workplace that makes every individual want to explore and pitch in his or her unique ideas. We are also ethical in our actions and believe in unity and integrity. </p>
            <p>There is so much to do and learn at Test Yantra Global. It’s undoubtedly one of the best places to work at.</p>
          </div>
      </div>
      <div className='adiv4'>
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

export default About