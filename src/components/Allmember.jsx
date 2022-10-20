import React from 'react'
import PageAbout from './Allmembers/PageAbout'
import PageFooter from './Allmembers/PageFooter'
import PageHeader from './Allmembers/PageHeader'
import PageMember from './Allmembers/PageMember'
import PageModal from './Allmembers/PageModal'
import Footer from './Footer'



const Allmember = () => {
    return (
        <div>
           <PageHeader></PageHeader>
           <PageAbout></PageAbout>
           <PageMember></PageMember>
           <PageModal></PageModal>
          <Footer></Footer>
        </div>
    )
}

export default Allmember