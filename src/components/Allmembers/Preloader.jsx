import React from 'react'

const Preloader = () => {
  return (
    <div>
     {/* preloader start here  */}
    <div class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
	 {/* preloader ending here  */}

	 {/* scrollToTop start here  */}
    <a href="#" class="scrollToTop"><i class="fa-solid fa-angle-up"></i></a>
    {/* scrollToTop ending here */}
    </div>
  )
}

export default Preloader