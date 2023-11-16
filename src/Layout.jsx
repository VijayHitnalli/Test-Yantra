import React from 'react'
import { Link } from 'react-router-dom'
import TEST from "./testyantra.png"

const Layout = () => {
  return (
    <section className='main_section'>
       <div className='small'>
      <div className='line1'><i class="fa-regular fa-envelope"></i>@hello@testyantraglobal.com</div>
      <div className='icons'><i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-linkedin"></i></div> 
      </div>
      
    <div className='linktag'>
      <div className='testyantra'><img src={TEST} alt={TEST} /></div>
      <div className='ul'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
                <Link to="/Prdocs">Products</Link>
            </li>
          <li>
            <Link to="/Industries">Industries</Link>
          </li>
          <li>
            <Link to="/Articles">Articles</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Search"><i class="fa-solid fa-magnifying-glass"></i></Link>
          </li>
         
            
        </ul>
        </div>
    </div>
    </section>
  )
}

export default Layout