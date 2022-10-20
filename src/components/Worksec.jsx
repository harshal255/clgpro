import React from 'react'

const Worksec = () => {
    return (
        <div className="work padding-top padding-bottom bg_img">
            <div className="container">
                <div className="section__header text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>How Does it Work​</h2>
                </div>
                <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                    <div className="d-xl-flex align-items-start work__area">
                        <div className="nav flex-xl-column nav-pills me-xl-4 work__tablist" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <button className="nav-link" id="work__tab1-tab" data-bs-toggle="pill" data-bs-target="#work__tab1"
                                type="button" role="tab" aria-controls="work__tab1" aria-selected="true"><img
                                    src="assets/images/work/01.png" alt="dating thumb" className="me-3"/><span>Search Your
                                        Partner</span></button>
                            <button className="nav-link active" id="work__tab2-tab" data-bs-toggle="pill"
                                data-bs-target="#work__tab2" type="button" role="tab" aria-controls="work__tab2"
                                aria-selected="false"><img src="assets/images/work/02.png" alt="dating thumb"
                                    className="me-3"/><span>100% Match People</span></button>
                            <button className="nav-link" id="work__tab3-tab" data-bs-toggle="pill" data-bs-target="#work__tab3"
                                type="button" role="tab" aria-controls="work__tab3" aria-selected="false"><img
                                    src="assets/images/work/03.png" alt="dating thumb" className="me-3"/><span>Find Out
                                        Partner</span></button>
                            <button className="nav-link" id="work__tab4-tab" data-bs-toggle="pill" data-bs-target="#work__tab4"
                                type="button" role="tab" aria-controls="work__tab4" aria-selected="false"><img
                                    src="assets/images/work/04.png" alt="dating thumb" className="me-3"/><span>Live The
                                        Story</span></button>
                        </div>
                        <div className="tab-content work__tabcontent" id="v-pills-tabContent">
                            <div className="tab-pane fade" id="work__tab1" role="tabpanel" aria-labelledby="work__tab1-tab">
                                <div className="work__item">
                                    <div className="work__inner">
                                        <div className="work__thumb">
                                            <img src="assets/images/work/05.png" alt="dating thumb" />
                                        </div>
                                        <div className="work__content">
                                            <h3>Search Your Partner</h3>
                                            <p>The simple steps to follow to have great experience using ollya. all you have
                                                to do is follows your gut and awesome your heart!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="work__tab2" role="tabpanel"
                                aria-labelledby="work__tab2-tab">
                                <div className="work__item">
                                    <div className="work__inner">
                                        <div className="work__thumb">
                                            <img src="assets/images/work/06.png" alt="dating thumb" />
                                        </div>
                                        <div className="work__content">
                                            <h3>100% Match People</h3>
                                            <p>The simple steps to follow to have great experience using ollya. all you have
                                                to do is follows your gut and awesome your heart!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="work__tab3" role="tabpanel" aria-labelledby="work__tab3-tab">
                                <div className="work__item">
                                    <div className="work__inner">
                                        <div className="work__thumb">
                                            <img src="assets/images/work/07.png" alt="dating thumb"/>
                                        </div>
                                        <div className="work__content">
                                            <h3>Find Out Partner</h3>
                                            <p>The simple steps to follow to have great experience using ollya. all you have
                                                to do is follows your gut and awesome your heart!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="work__tab4" role="tabpanel" aria-labelledby="work__tab4-tab">
                                <div className="work__item">
                                    <div className="work__inner">
                                        <div className="work__thumb">
                                            <img src="assets/images/work/08.png" alt="dating thumb"/>
                                        </div>
                                        <div className="work__content">
                                            <h3>Live The Story</h3>
                                            <p>The simple steps to follow to have great experience using ollya. all you have
                                                to do is follows your gut and awesome your heart!</p>
                                        </div>
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

export default Worksec