import React from 'react'

const Membersec = () => {
    return (
        <div className="member padding-top padding-bottom overflow-hidden">
		<div className="container">
			<div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
				<h2>Most Popular Members</h2>
				<p>Learn from them and try to make it to this board. This will for sure boost you visibility and
					increase your chances to find you loved one.</p>
			</div>
			<div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
				<ul className="member__buttongroup filters-button-group w-100 d-flex flex-wrap justify-content-center">
					<li className="button is-checked filter-btn" data-filter="*"><span className="member__radio"></span> View
						All <span className="banner__inputlist--icon"><i className="fa-solid fa-venus-mars"></i></span></li>
					<li className="button filter-btn" data-filter=".male"><span className="member__radio"></span> Male <span
							className="banner__inputlist--icon"><i className="fa-solid fa-mars"></i></span></li>
					<li className="button filter-btn" data-filter=".female"><span className="member__radio"></span> Female <span
							className="banner__inputlist--icon"><i className="fa-solid fa-venus"></i></span></li>
				</ul>

				<div className="member__grid mx-12-none">
					<div className="member__item male">
						<div className="member__inner">
							<div className="member__thumb">
								<img src="assets/images/member/male/01.jpg" alt="member-img"/>
								<span className="member__activity">Online</span>
							</div>
							<div className="member__content">
								<a href="member-single.html">
									<h5>Smith Jhonson</h5>
								</a>
								<p>32 Years old <i className="fa-solid fa-mars"></i></p>
							</div>
						</div>
					</div>
					<div className="member__item female">
						<div className="member__inner">
							<div className="member__thumb">
								<img src="assets/images/member/female/01.jpg" alt="member-img"/>
								<span className="member__activity member__activity--ofline">2 days ago</span>
							</div>
							<div className="member__content">
								<a href="member-single.html">
									<h5>Arika Q Smith</h5>
								</a>
								<p>22 Years old <i className="fa-solid fa-venus"></i></p>
							</div>
						</div>
					</div>
					<div className="member__item male">
						<div className="member__inner">
							<div className="member__thumb">
								<img src="assets/images/member/male/02.jpg" alt="member-img"/>
								<span className="member__activity">Online</span>
							</div>
							<div className="member__content">
								<a href="member-single.html">
									<h5>William R Show</h5>
								</a>
								<p>32 Years old <i className="fa-solid fa-mars"></i></p>
							</div>
						</div>
					</div>
					<div className="member__item female">
						<div className="member__inner">
							<div className="member__thumb">
								<img src="assets/images/member/female/02.jpg" alt="member-img"/>
								<span className="member__activity member__activity--ofline">10 Minites ago</span>
							</div>
							<div className="member__content">
								<a href="member-single.html">
									<h5>Karolin Kuhn</h5>
								</a>
								<p>22 Years old <i className="fa-solid fa-venus"></i></p>
							</div>
						</div>
					</div>
					<div className="member__item male">
						<div className="member__inner">
							<div className="member__thumb">
								<img src="assets/images/member/male/03.jpg" alt="member-img"/>
								<span className="member__activity">Online</span>
							</div>
							<div className="member__content">
								<a href="member-single.html">
									<h5>Dieter Hoover</h5>
								</a>
								<p>32 Years old <i className="fa-solid fa-mars"></i></p>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-4">
					<a href="members.html" className="default-btn"><span>See More Popular</span></a>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Membersec