import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Worksec from '../components/Worksec'
import Membersec from '../components/Membersec'
import Storysec from '../components/Storysec'
import Meetsec from '../components/Meetsec'
import Worksec2 from '../components/Worksec2'
import Appsec from '../components/Appsec'
import Footer from '../components/Footer'



const Hero = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Worksec/>
      <Membersec />
      <Storysec />
      <Meetsec />
      <Worksec2 />
      <Appsec />
      <Footer />


    </div>
  )
}

export default Hero