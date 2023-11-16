import React from 'react'
import "./Test.css"
import Layout from './Layout'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import Services from './Services'

import Prdocs from "./Prdocs"
import Industries from "./Industries"
import Articles from "./Articles"
import About from "./About"
import Search from "./Search"



const App = () => {

  return (
    <section>
         
        <article>
                <Router>
                 
                    <Layout/>
                    
                    <Routes>
                    <Route exact path='/' element={<Home/>}/>
                      <Route  exact path='/Services' element={<Services/>}/>
                      <Route  exact path='/Industries' element={<Industries/>}/>
                      <Route  exact path='/Articles' element={<Articles/>}/>
                      <Route  exact path='/About' element={<About/>}/>
                      <Route  exact path='/Prdocs' element={<Prdocs/>}/>
                      <Route  exact path='Search' element={<Search/>}/>
                      
            
                    </Routes>
                </Router>
                
        </article>
    </section>
  )
}

export default App

