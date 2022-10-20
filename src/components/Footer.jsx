import React from 'react'


const Footer = () => {
  return (
    <footer className="footer overflow-hidden">
    <div className="footer__top bg_img">
        <div className="footer__newsletter wow fadeInUp" data-wow-duration="1.5s">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="footer__newsletter--area">
                            <div className="footer__newsletter--title">
                                <h4>Newsletter Sign up</h4>
                            </div>
                            <div className="footer__newsletter--form">
                                <form action="/">
                                    <input type="email" placeholder="Your email address"/>
                                    <button type="submit" className="default-btn"><span>Subscribe</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="footer__newsletter--area justify-content-xxl-end">
                            <div className="footer__newsletter--title me-xl-4">
                                <h4>Join Community</h4>
                            </div>
                            <div className="footer__newsletter--social">
                                <ul>
                                    <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fa-brands fa-twitch"></i></a></li>
                                    <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="/"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="/"><i className="fa-brands fa-facebook-messenger"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__toparea padding-top padding-bottom wow fadeInUp" data-wow-duration="1.5s">
            <div className="container">
                <div className="row g-5 g-lg-0">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="footer__item">
                            <div className="footer__inner">
                                <div className="footer__content">
                                    <div className="footer__content--title">
                                        <h4>Our Information</h4>
                                    </div>
                                    <div className="footer__content--desc">
                                        <ul>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> About Us</a>
                                            </li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Contact Us</a>
                                            </li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Customer
                                                    Reviews</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Success
                                                    Stories</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Business
                                                    License</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="footer__item">
                            <div className="footer__inner">
                                <div className="footer__content">
                                    <div className="footer__content--title">
                                        <h4>My Account</h4>
                                    </div>
                                    <div className="footer__content--desc">
                                        <ul>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Manage
                                                    Account</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Safety Tips</a>
                                            </li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Account
                                                    Varification</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Safety and
                                                    Security</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Membership
                                                    Level</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="footer__item">
                            <div className="footer__inner">
                                <div className="footer__content">
                                    <div className="footer__content--title">
                                        <h4>Help Center</h4>
                                    </div>
                                    <div className="footer__content--desc">
                                        <ul>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Help center</a>
                                            </li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> FAQ</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Quick Start
                                                    Guide</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Tutorials</a>
                                            </li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Associate
                                                    Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="footer__item">
                            <div className="footer__inner">
                                <div className="footer__content">
                                    <div className="footer__content--title">
                                        <h4>Community</h4>
                                    </div>
                                    <div className="footer__content--desc">
                                        <ul>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Privacy
                                                    policy</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> End User
                                                    Agreements</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Refund
                                                    Policy</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Cookie
                                                    policy</a></li>
                                            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Report abuse</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="footer__bottom wow fadeInUp" data-wow-duration="1.5s">
        <div className="container">
            <div className="footer__content text-center">
                <p className="mb-0">All Rights Reserved &copy; <a href="index.html">Ollya</a> || Design By: CodexCoder
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer