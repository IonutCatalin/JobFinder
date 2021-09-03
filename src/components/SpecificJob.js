import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const SpecificJob = () => {
	return (
		<>
			<Header />
			<section
				className="position-relative bg-white rounded-xxl-4 zindex-5"
				style={{ marginTop: "70px" }}
			>
				<div className="container pt-4 pb-5 mb-md-4">
					<nav className="pb-4 my-2" aria-label="Breadcrumb">
						<ol className="breadcrumb m-0">
							<li className="breadcrumb-item">
								<a href="job-board-home-v1.html">Home</a>
							</li>
							<li className="breadcrumb-item">
								<a href="job-board-catalog.html">Find jobs</a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Partnership Manager
							</li>
						</ol>
					</nav>
					<div className="row">
						<div
							className="col-lg-7 position-relative pe-lg-5 mb-5 mb-lg-0"
							style={{ zIndex: "1025" }}
						>
							<div className="d-flex justify-content-between mb-2">
								<h2 className="h3 mb-0">Partnership Manager</h2>
								<div className="text-end">
									<span className="badge bg-faded-accent rounded-pill fs-sm mb-2">
										Featured
									</span>
									<div className="fs-sm text-muted">2 hours ago</div>
								</div>
							</div>
							<ul className="list-unstyled fs-sm mb-4">
								<li className="mb-2">
									<a
										className="d-flex align-items-center text-decoration-none"
										href="job-board-employer-single.html"
									>
										<i className="fi-external-link me-2"></i>
										<span className="text-decoration-underline">
											Zalo Tech Company
										</span>
									</a>
								</li>
								<li className="d-flex align-items-center mb-2">
									<i className="fi-map-pin text-muted me-2"></i>
									<span>New York</span>
								</li>
								<li className="d-flex align-items-center mb-2">
									<i className="fi-cash fs-base text-muted me-2"></i>
									<span>$10,000</span>
								</li>
								<li className="d-flex align-items-center mb-2">
									<i className="fi-phone text-muted me-2"></i>
									<span className="me-2">Bessie Cooper, HR Manager</span>
									<a href="#">Show phone</a>
								</li>
								<li className="d-flex align-items-center mb-2">
									<i className="fi-clock text-muted me-2"></i>
									<span className="me-2">Full-time</span>
								</li>
							</ul>
							<hr className="mb-4" />
							<h3 className="h6">Description:</h3>
							<p>
								Sit sit viverra aenean nunc. Vestibulum nulla tellus, praesent
								mi. Eget eu sapien posuere varius nisl. Arcu scelerisque ut
								venenatis, nec. Sed id etiam nisl nisl, elementum ac odio morbi
								dolor. Sem mauris turpis ultrices sed porttitor orci, erat.
								Ultrices ut a mi sem mauris, vitae egestas. Eget suscipit a,
								consectetur quam sed morbi. Metus, tortor egestas phasellus
								urna. Lorem eu dictum egestas vitae faucibus congue urna. Sed
								dolor sed risus duis volutpat ullamcorper.
							</p>
							<h3 className="h6 pt-2">Requirements:</h3>
							<ul className="list-unstyled">
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Placerat id
									mauris, ac ipsum nulla mi netus vestibulum fringilla.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Turpis
									venenatis sapien etiam in orci, euismod.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Elit tempor,
									integer augue aliquam justo.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Ultricies
									accumsan, malesuada pellentesque malesuada massa sed viverra
									eget.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Varius
									mauris netus placerat neque, orci amet odio orci.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Fermentum ut
									mi sit vel sit dictum mollis turpis.
								</li>
							</ul>
							<h3 className="h6 pt-2">Company offers:</h3>
							<ul className="list-unstyled">
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Et mattis
									sit imperdiet risus, fermentum ultrices non.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Sed
									phasellus consequat nunc enim interdum tristique ultrices
									egestas.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Molestie mus
									ultrices tellus enim.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Vitae
									pulvinar massa id lorem aliquam fermentum egestas.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Dictumst
									blandit sit mauris in consectetur.
								</li>
								<li className="d-flex">
									<span className="text-primary fs-lg me-2">•</span>Sem purus
									lorem odio donec faucibus ipsum ultricies.
								</li>
							</ul>
							<p className="pt-2 mb-1">
								Please, send your CV marked “Partnership Manager” in the subject
								via e-mail:
							</p>
							<a
								className="nav-link-muted fw-bold"
								href="mailto:contact@example.com"
							>
								contact@example.com
							</a>
							<hr className="my-4" />
							<div className="btn-group btn-group-lg">
								<button
									className="btn btn-primary rounded-pill rounded-end-0 ps-4 pe-3"
									type="button"
								>
									Apply for this position
								</button>
								<button
									className="btn btn-primary border-end-0 border-top-0 border-bottom-0 border-light rounded-pill rounded-start-0 px-3"
									type="button"
								>
									<i className="fi-heart me-1"></i>
								</button>
							</div>
						</div>
						<aside className="col-lg-5" style={{ marginTop: "-6rem" }}>
							<div className="sticky-top" style={{ paddingTop: "6rem" }}>
								<div className="card shadow-sm mb-3 mb-lg-0">
									<div className="card-body">
										<h2 className="h3">Subscribe to our newsletter</h2>
										<p>
											Don’t miss any job updates and relevant vacancies info!
										</p>
										<form className="form-group rounded-pill mb-3">
											<div className="input-group">
												<span className="input-group-text text-muted">
													<i className="fi-mail text-muted"></i>
												</span>
												<input
													className="form-control"
													type="text"
													placeholder="Your email"
												/>
											</div>
											<button
												className="btn btn-primary rounded-pill"
												type="button"
											>
												Subscribe
											</button>
										</form>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="agree"
											/>
											<label className="form-check-label" htmlFor="agree">
												I agree to receive communications from Finder.
											</label>
										</div>
										<hr className="my-4" />
										<div className="d-flex align-items-end">
											<div className="fs-lg fw-bold me-3">
												Like our jobs?
												<br />
												Receive vacancies in Telegram
											</div>
											<a
												className="btn btn-icon btn-translucent-primary btn-xs rounded-circle"
												href="#"
											>
												<i className="fi-telegram"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="pt-4 pt-lg-5 ps-4">
									<h2 className="h3">My last search queries:</h2>
									<ul className="list-unstyled mb-0">
										<li className="mb-0">
											<a
												className="nav-link d-inline-block fw-normal px-0 py-1"
												href="#"
											>
												Accountant
											</a>
										</li>
										<li className="mb-0">
											<a
												className="nav-link d-inline-block fw-normal px-0 py-1"
												href="#"
											>
												Manager
											</a>
										</li>
										<li className="mb-0">
											<a
												className="nav-link d-inline-block fw-normal px-0 py-1"
												href="#"
											>
												Administrator
											</a>
										</li>
										<li className="mb-0">
											<a
												className="nav-link-muted d-inline-block fw-bold py-1"
												href="#"
											>
												Clear all<i className="fi-x fs-xs ms-2"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
			<section className="container pt-md-2 pb-5 mb-md-4">
				<div className="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
					<h2 className="h3 mb-sm-0">You may be interested in</h2>
					<a
						className="btn btn-link fw-normal p-0"
						href="job-board-catalog.html"
					>
						View all<i className="fi-arrow-long-right ms-2"></i>
					</a>
				</div>
				<div className="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside tns-nav-outside-flush">
					<div className="tns-outer" id="tns1-ow">
						<div
							className="tns-controls"
							aria-label="Carousel Navigation"
							tabIndex="0"
						>
							<button
								type="button"
								data-controls="prev"
								tabIndex="-1"
								aria-controls="tns1"
							>
								<i className="fi-chevron-left"></i>
							</button>
							<button
								type="button"
								data-controls="next"
								tabIndex="-1"
								aria-controls="tns1"
							>
								<i className="fi-chevron-right"></i>
							</button>
						</div>
						<div
							className="tns-liveregion tns-visually-hidden"
							aria-live="polite"
							aria-atomic="true"
						>
							slide <span className="current">7 to 9</span> of 4
						</div>
						<div id="tns1-mw" className="tns-ovh">
							<div className="tns-inner" id="tns1-iw">
								<div
									className="tns-carousel-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
									data-carousel-options='{"responsive": {"0":{"items":1, "gutter": 16},"600":{"items":2, "gutter": 16},"768":{"items":2, "gutter": 24},"992":{"items":3, "gutter": 24}}}'
									id="tns1"
									style={{
										transitionDuration: "0s",
										transform: "translate3d(-37.5%, 0px, 0px)",
									}}
								>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xampp.png"
														width="24"
														alt="XAMPP Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														XAMPP Company
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Auctor elit in aenean sodales mattis. Ultricies nec eu
													augue sit. Ornare pulvinar enim fames orci enim in
													libero. Eu, lorem leo netus velit egestas risus...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>New
														Jersey
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$6,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/zapier.png"
														width="24"
														alt="Zapier Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Zapier
													</span>
													<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
														New
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Onboarding Specialist
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Houston
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/it-pro.png"
														width="24"
														alt="IT Pro Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														IT Pro TV
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													{" "}
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Chicago
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$7,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xbox.png"
														width="24"
														alt="Xbox Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Xbox Company
													</span>
													<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
														Featured
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Full-Stack Developer
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Euismod nec sagittis sit arcu libero, metus. Aliquam
													nisl rhoncus porttitor volutpat, ante cras tincidunt.
													Nec sit nunc, ornare tincidunt enim, neque...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Washington
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$13,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xampp.png"
														width="24"
														alt="XAMPP Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														XAMPP Company
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Auctor elit in aenean sodales mattis. Ultricies nec eu
													augue sit. Ornare pulvinar enim fames orci enim in
													libero. Eu, lorem leo netus velit egestas risus...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>New
														Jersey
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$6,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/zapier.png"
														width="24"
														alt="Zapier Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Zapier
													</span>
													<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
														New
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Onboarding Specialist
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Houston
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-active"
										id="tns1-item0"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/it-pro.png"
														width="24"
														alt="IT Pro Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														IT Pro TV
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													{" "}
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Chicago
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$7,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-active"
										id="tns1-item1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xbox.png"
														width="24"
														alt="Xbox Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Xbox Company
													</span>
													<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
														Featured
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Full-Stack Developer
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Euismod nec sagittis sit arcu libero, metus. Aliquam
													nisl rhoncus porttitor volutpat, ante cras tincidunt.
													Nec sit nunc, ornare tincidunt enim, neque...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Washington
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$13,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-active"
										id="tns1-item2"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xampp.png"
														width="24"
														alt="XAMPP Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														XAMPP Company
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Auctor elit in aenean sodales mattis. Ultricies nec eu
													augue sit. Ornare pulvinar enim fames orci enim in
													libero. Eu, lorem leo netus velit egestas risus...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>New
														Jersey
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$6,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item"
										id="tns1-item3"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/zapier.png"
														width="24"
														alt="Zapier Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Zapier
													</span>
													<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
														New
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Onboarding Specialist
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Houston
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/it-pro.png"
														width="24"
														alt="IT Pro Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														IT Pro TV
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													{" "}
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Chicago
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$7,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xbox.png"
														width="24"
														alt="Xbox Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Xbox Company
													</span>
													<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
														Featured
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Full-Stack Developer
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Euismod nec sagittis sit arcu libero, metus. Aliquam
													nisl rhoncus porttitor volutpat, ante cras tincidunt.
													Nec sit nunc, ornare tincidunt enim, neque...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Washington
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$13,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xampp.png"
														width="24"
														alt="XAMPP Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														XAMPP Company
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Auctor elit in aenean sodales mattis. Ultricies nec eu
													augue sit. Ornare pulvinar enim fames orci enim in
													libero. Eu, lorem leo netus velit egestas risus...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>New
														Jersey
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$6,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/zapier.png"
														width="24"
														alt="Zapier Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Zapier
													</span>
													<span className="badge bg-faded-info rounded-pill fs-sm ms-auto">
														New
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Onboarding Specialist
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Houston
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$4,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/it-pro.png"
														width="24"
														alt="IT Pro Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														IT Pro TV
													</span>
													<span className="badge bg-faded-danger rounded-pill fs-sm ms-auto">
														Hot
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Business Analyst
													</a>
												</h3>
												<p className="fs-sm mb-0">
													{" "}
													Blandit a tincidunt arcu nulla. Sem neque, rhoncus non
													odio nulla maecenas elit praesent. Orci tristique
													velit mauris cursus nibh. Hendrerit et dictum sed...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Chicago
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$7,500
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
									<div
										className="pb-4 tns-item tns-slide-cloned"
										aria-hidden="true"
										tabIndex="-1"
									>
										<div className="card bg-secondary card-hover h-100">
											<div className="card-body pb-3">
												<div className="d-flex align-items-center mb-2">
													<img
														className="me-2"
														src="img/job-board/company/xbox.png"
														width="24"
														alt="Xbox Logo"
													/>
													<span className="fs-sm text-dark opacity-80 px-1">
														Xbox Company
													</span>
													<span className="badge bg-faded-accent rounded-pill fs-sm ms-auto">
														Featured
													</span>
												</div>
												<h3 className="h6 card-title pt-1 mb-2">
													<a
														className="text-nav stretched-link text-decoration-none"
														href="#"
													>
														Full-Stack Developer
													</a>
												</h3>
												<p className="fs-sm mb-0">
													Euismod nec sagittis sit arcu libero, metus. Aliquam
													nisl rhoncus porttitor volutpat, ante cras tincidunt.
													Nec sit nunc, ornare tincidunt enim, neque...
												</p>
											</div>
											<div className="card-footer d-flex align-items-center justify-content-between border-0 pt-0">
												<div className="fs-sm">
													<span className="text-nowrap me-3">
														<i className="fi-map-pin text-muted me-1"> </i>
														Washington
													</span>
													<span className="text-nowrap me-3">
														<i className="fi-cash fs-base text-muted me-1"></i>
														$13,000
													</span>
												</div>
												<button
													className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle content-overlay"
													type="button"
													data-bs-toggle="tooltip"
													title=""
													data-bs-original-title="Add to saved jobs"
													aria-label="Add to saved jobs"
												>
													<i className="fi-heart"></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tns-nav" aria-label="Carousel Pagination">
							<button
								type="button"
								data-nav="0"
								aria-controls="tns1"
								aria-label="Carousel Page 1 (Current Slide)"
								className="tns-nav-active"
							></button>
							<button
								type="button"
								data-nav="1"
								tabIndex="-1"
								aria-controls="tns1"
								aria-label="Carousel Page 2"
							></button>
							<button
								type="button"
								data-nav="2"
								tabIndex="-1"
								aria-controls="tns1"
								style={{ display: "none" }}
								aria-label="Carousel Page 3"
							></button>
							<button
								type="button"
								data-nav="3"
								tabIndex="-1"
								aria-controls="tns1"
								style={{ display: "none" }}
								aria-label="Carousel Page 4"
							></button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default SpecificJob;
