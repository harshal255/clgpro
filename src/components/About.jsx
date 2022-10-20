import React from 'react'

const About = () => {
  return (
    <div className="about padding-top padding-bottom">
    <div className="container">
        <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
            <h2>Ollya Super Powers</h2>
            <p>Our dating platform is like a breath of fresh air. Clean and trendy design with ready to use features
                we are sure you will love.</p>
        </div>
        <div className="section__wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                <div className="col wow fadeInUp" data-wow-duration="1.5s">
                    <div className="about__item text-center">
                        <div className="about__inner">
                            <div className="about__thumb">
                                <img src="assets/images/about/01.jpg" alt="dating thumb"/>
                            </div>
                            <div className="about__content">
                                <h4>Simple To Use</h4>
                                <p>Simple steps to follow to have a matching connection.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-duration="1.5s">
                    <div className="about__item text-center">
                        <div className="about__inner">
                            <div className="about__thumb">
                                <img src="assets/images/about/02.jpg" alt="dating thumb"/>
                            </div>
                            <div className="about__content">
                                <h4>Smart Matching</h4>
                                <p>Create connections with users that are like you.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-duration="1.5s">
                    <div className="about__item text-center">
                        <div className="about__inner">
                            <div className="about__thumb">
                                <img src="assets/images/about/03.jpg" alt="dating thumb"/>
                            </div>
                            <div className="about__content">
                                <h4>Filter Very Fast</h4>
                                <p>Don’t waste your time! Find only what you are interested</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col wow fadeInUp" data-wow-duration="1.5.5s">
                    <div className="about__item text-center">
                        <div className="about__inner">
                            <div className="about__thumb">
                                <img src="assets/images/about/04.jpg" alt="dating thumb"/>
                            </div>
                            <div className="about__content">
                                <h4>Cool Community</h4>
                                <p>BuddyPress network is full of cool members.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About