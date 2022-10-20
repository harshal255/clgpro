import React from 'react'

const Worksec = () => {
    return (
        <div class="work padding-top padding-bottom bg_img">
            <div class="container">
                <div class="section__header text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>How Does it Work​</h2>
                </div>
                <div class="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                    <div class="d-xl-flex align-items-start work__area">
                        <div class="nav flex-xl-column nav-pills me-xl-4 work__tablist" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <button class="nav-link" id="work__tab1-tab" data-bs-toggle="pill" data-bs-target="#work__tab1"
                                type="button" role="tab" aria-controls="work__tab1" aria-selected="true"><img
                                    src="assets/images/work/01.png" alt="dating thumb" class="me-3"/><span>Search Your
                                        Partner</span></button>
                            <button class="nav-link active" id="work__tab2-tab" data-bs-toggle="pill"
                                data-bs-target="#work__tab2" type="button" role="tab" aria-controls="work__tab2"
                                aria-selected="false"><img src="assets/images/work/02.png" alt="dating thumb"
                                    class="me-3"/><span>100% Match People</span></button>
                            <button class="nav-link" id="work__tab3-tab" data-bs-toggle="pill" data-bs-target="#work__tab3"
                                type="button" role="tab" aria-controls="work__tab3" aria-selected="false"><img
                                    src="assets/images/work/03.png" alt="dating thumb" class="me-3"/><span>Find Out
                                        Partner</span></button>
                            <button class="nav-link" id="work__tab4-tab" data-bs-toggle="pill" data-bs-target="#work__tab4"
                                type="button" role="tab" aria-controls="work__tab4" aria-selected="false"><img
                                    src="assets/images/work/04.png" alt="dating thumb" class="me-3"/><span>Live The
                                        Story</span></button>
                        </div>
                        <div class="tab-content work__tabcontent" id="v-pills-tabContent">
                            <div class="tab-pane fade" id="work__tab1" role="tabpanel" aria-labelledby="work__tab1-tab">
                                <div class="work__item">
                                    <div class="work__inner">
                                        <div class="work__thumb">
                                            <img src="assets/images/work/05.png" alt="dating thumb" />
                                        </div>
                                        <div class="work__content">
                                            <h3>Search Your Partner</h3>
                                            <p>The simple steps to follow to have great experience using ollya. all you have
                                                to do is follows your gut and awesome your heart!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show active" id="work__tab2" role="tabpanel"
                                aria-labelledby="work__tab2-tab">
                                <div class="work__item">
                                    <div class="work__inner">
                                        <div class="work__thumb">
                                            <img src="assets/images/work/06.png" alt="dating thumb" />
                                        </div>
                                        <div class="work__content">
                                            <h3>100% Match People</h3>
                                            <p>The simple steps to follow to have great experience using ollya. all you have
                                                to do is follows your gut and awesome your heart!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="work__tab3" role="tabpanel" aria-labelledby="work__tab3-tab">
                                <div class="work__item">
                                    <div class="work__inner">
                                        <div class="work__thumb">
                                            <img src="assets/images/work/07.png" alt="dating thumb"/>
                                        </div>
                                        <div class="work__content">
                                            <h3>Find Out Partner</h3>
                                            <p>The simple steps to follow to have great experience using ollya. all you have
                                                to do is follows your gut and awesome your heart!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="work__tab4" role="tabpanel" aria-labelledby="work__tab4-tab">
                                <div class="work__item">
                                    <div class="work__inner">
                                        <div class="work__thumb">
                                            <img src="assets/images/work/08.png" alt="dating thumb"/>
                                        </div>
                                        <div class="work__content">
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