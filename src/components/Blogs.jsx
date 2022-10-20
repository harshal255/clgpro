import React from 'react'
import PageBlog from './Blogs/PageBlog'
import PageHeader from './Blogs/PageHeader'
import Footer from './Footer'

const Blogs = () => {
  return (
    <div>
        <PageHeader></PageHeader>
        <PageBlog></PageBlog>
        <Footer></Footer>
    </div>
  )
}

export default Blogs