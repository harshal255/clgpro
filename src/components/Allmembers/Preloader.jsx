import React from 'react'

const Preloader = () => {
  return (
    <div>
     {/* preloader start here  */}
    <div className="preloader">
        <div className="preloader-inner">
            <div className="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
	 {/* preloader ending here  */}

	 {/* scrollToTop start here  */}
    <a href="/" className="scrollToTop"><i className="fa-solid fa-angle-up"></i></a>
    {/* scrollToTop ending here */}
    </div>
  )
}

export default Preloader