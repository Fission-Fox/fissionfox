"use client";

import Head from "next/head";

// import img from '../../assets/images/blog/article-2.jpg'
import "../styles/globals.css";
export default function HomePage() {
  return (
    <div className="custom-cursor !w-full">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="../assets/vendors/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/bootstrap-select/bootstrap-select.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/animate/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/fontawesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/digihub-icons/style.css"
        />
        <link rel="stylesheet" href="../assets/vendors/jarallax/jarallax.css" />
        <link
          rel="stylesheet"
          href="../assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/nouislider/nouislider.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/nouislider/nouislider.pips.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/tiny-slider/tiny-slider.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/owl-carousel/css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/owl-carousel/css/owl.theme.default.min.css"
        />

        <link rel="stylesheet" href="../assets/css/digihub.css" />
      </Head>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <div className="page-wrapper">
        <header className="main-header">
          <nav className="main-menu-one main-menu">
            <div className="container">
              <div className="main-menu-one__left">
                <div className="main-menu-one__logo">
                  <a href="index.html" className="main-menu-one__logo-box">
                    <img
                      src="../assets/images/logo-dark.png"
                      width="157"
                      alt="logo-dark"
                    />
                  </a>
                </div>
                <ul className="main-menu__list">
                  <li className="dropdown">
                    <a href="index.html">
                      Home <i className="fas fa-angle-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="index.html">Home One</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Two</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Services <i className="fas fa-angle-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="service.html">Services</a>
                      </li>
                      <li>
                        <a href="web-genius.html">Web Genius</a>
                      </li>
                      <li>
                        <a href="social-boost.html">Social Boost</a>
                      </li>
                      <li>
                        <a href="data-sprint.html">Data Sprint</a>
                      </li>
                      <li>
                        <a href="creative-agency.html">Creative Agency</a>
                      </li>
                      <li>
                        <a href="brand-max.html">Brand Max</a>
                      </li>
                      <li>
                        <a href="tech-secure.html">Tech Secure</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Projects <i className="fas fa-angle-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="projects.html">Projects</a>
                      </li>
                      <li>
                        <a href="projects-carousel.html">Projects Carousel</a>
                      </li>
                      <li>
                        <a href="projects-details.html">Projects Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Blog <i className="fas fa-angle-down"></i>
                    </a>
                    <ul>
                      <li className="dropdown">
                        <a href="#">Blog List</a>
                        <ul>
                          <li>
                            <a href="blog.html">No Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-grid-left.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-grid-right.html">Right Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-carousel.html">Blog Carousel 01</a>
                      </li>
                      <li>
                        <a href="blog-carousel-2.html">Blog Carousel 02</a>
                      </li>
                      <li>
                        <a href="blog-carousel-3.html">Blog Carousel 03</a>
                      </li>
                      <li>
                        <a href="blog-carousel-4.html">Blog Carousel 04</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog Details</a>
                        <ul>
                          <li>
                            <a href="blog-details.html">No Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details-left.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details-right.html">Right Sidebar</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Pages <i className="fas fa-angle-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="portfolio-carousel.html">
                          Portfolio Carousel 01
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-carousel-2.html">
                          Portfolio Carousel 02
                        </a>
                      </li>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="team-carousel.html">Team Carousel 01</a>
                      </li>
                      <li>
                        <a href="team-carousel-2.html">Team Carousel 02</a>
                      </li>
                      <li>
                        <a href="team-single.html">Team Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="main-menu-one__right">
                <button
                  type="button"
                  className="main-menu-one__bar mobile-nav__toggler"
                >
                  <span className="mobile-nav__toggler-bars"></span>
                  <span className="mobile-nav__toggler-bars"></span>
                  <span className="mobile-nav__toggler-bars"></span>
                </button>
                <a href="#" className="main-menu-one__search search-toggler">
                  <i className="fa fa-search"></i>
                </a>
                <a
                  href="contact.html"
                  className="main-menu-one__btn digihub-btn digihub-btn--secondary"
                >
                  Get In Touch <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </nav>
        </header>

        <div className="stricky-header stricky-header-one stricked-menu main-menu">
          <div className="sticky-header__content"></div>
        </div>
        <section className="main-slider">
          <div className="container">
            <div className="main-slider__row row">
              <div
                className="col-lg-7 wow animated fadeInLeft"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
              >
                <div className="main-slider__left">
                  <h1 className="main-slider__heading">
                    Where creativity <br /> meets technology
                  </h1>
                </div>
              </div>
              <div
                className="col-lg-5  wow animated fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="1500ms"
              >
                <div className="main-slider__right">
                  <p
                    className="main-slider__desc wow animated fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                  >
                    Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                    lacus. Etiam molestie justo neque, in convallis
                  </p>
                  <div
                    className="main-slider__btn-group wow animated fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-duration="1500ms"
                  >
                    <a
                      href="about.html"
                      className="digihub-btn digihub-btn--primary"
                    >
                      Learn More <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                      className="main-slider__border-btn digihub-btn digihub-btn--border-two video-popup"
                    >
                      Watch Our Vedio <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="main-slider__carousel digihub-owl__carousel owl-carousel owl-theme"
            data-owl-options='{
    "items": 1,
    "margin": 0,
    "loop": true,
    "smartSpeed": 700,
    "animateOut": "fadeOut",
    "autoplayTimeout": 5000, 
    "nav": false,
    "dots": false,
    "autoplay": true
    }'
          >
            <div className="item">
              <div
                className="main-slider__image"
                style={{
                  backgroundImage:
                    "url(../assets/images/slider/slider-1-1.jpg)",
                }}
              ></div>
            </div>
            <div className="item">
              <div
                className="main-slider__image"
                style={{
                  backgroundImage:
                    "url(../assets/images/slider/slider-1-1.jpg)",
                }}
              ></div>
            </div>
            <div className="item">
              <div
                className="main-slider__image"
                style={{
                  backgroundImage:
                    "url(../assets/images/slider/slider-1-1.jpg)",
                }}
              ></div>
            </div>
          </div>
          <div className="main-slider__shape-box">
            <img
              src="../assets/images/shapes/slider-shape-1-1.png"
              alt="slider-shape"
              className="main-slider__shape-one"
            />
            <img
              src="../assets/images/shapes/slider-shape-1-2.png"
              alt="slider-shape"
              className="main-slider__shape-two"
            />
          </div>
        </section>

        <section className="service-one @@extraClassName">
          <div className="container">
            <div
              className="service-one__sec-title sec-title wow animated fadeIn"
              data-wow-delay="0.1s"
              data-wow-duration="1500ms"
            >
              <p className="sec-title__top">lATEST SERVICE</p>
              <h2 className="service-one__heading sec-title__heading">
                Transforming ideas into digital masterpieces
              </h2>
            </div>
            <div className="service-one__item hover-item container-fluid">
              <div className="row">
                <div
                  className="col-lg-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__img-box">
                    <span className="service-one__icon icon-connection"></span>
                    <h3 className="service-one__title">Website Design</h3>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-5 wow animated fadeInUp"
                  data-wow-delay="0.3s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__text-box">
                    <p className="service-one__text">
                      Purus velit aenean quis habitant eros bibendum aenean quis
                      habit aeros bibendum bibendum aenean{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-3 wow animated fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__btn-box">
                    <a
                      href="web-genius.html"
                      className="digihub-btn digihub-btn--border-one"
                    >
                      READ MORE <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="hover-item__box">
                  <img
                    src="../assets/images/service/service-1-1.png"
                    alt="team-item-hover"
                    className=" hover-item__box-img"
                  />
                </div>
              </div>
            </div>
            <div className="service-one__item hover-item container-fluid">
              <div className="row">
                <div
                  className="col-lg-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__img-box">
                    <span className="service-one__icon icon-search"></span>
                    <h3 className="service-one__title">Brand Identity</h3>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-5 wow animated fadeInUp"
                  data-wow-delay="0.3s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__text-box">
                    <p className="service-one__text">
                      Purus velit aenean quis habitant eros bibendum aenean quis
                      habit aeros bibendum bibendum aenean{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-3 wow animated fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__btn-box">
                    <a
                      href="brand-max.html"
                      className="digihub-btn digihub-btn--border-one"
                    >
                      READ MORE <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="hover-item__box">
                  <img
                    src="../assets/images/service/service-1-2.png"
                    alt="team-item-hover"
                    className=" hover-item__box-img"
                  />
                </div>
              </div>
            </div>
            <div className="service-one__item hover-item container-fluid">
              <div className="row">
                <div
                  className="col-lg-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__img-box">
                    <span className="service-one__icon icon-marketing"></span>
                    <h3 className="service-one__title">Marketing Camp</h3>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-5 wow animated fadeInUp"
                  data-wow-delay="0.3s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__text-box">
                    <p className="service-one__text">
                      Purus velit aenean quis habitant eros bibendum aenean quis
                      habit aeros bibendum bibendum aenean{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-3 wow animated fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="1500ms"
                >
                  <div className="service-one__btn-box">
                    <a
                      href="social-boost.html"
                      className="digihub-btn digihub-btn--border-one"
                    >
                      READ MORE <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="hover-item__box">
                  <img
                    src="../assets/images/service/service-1-3.png"
                    alt="team-item-hover"
                    className=" hover-item__box-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-one">
          <div className="container">
            <div className="about-one__row row">
              <div
                className="about-one__col-img col-xl-6 col-lg-9 wow animated fadeInLeft"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
              >
                <div className="about-one__img-box">
                  <div
                    className="about-one__img-box-one digihub-tilt"
                    data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 4, "speed": 700, "scale": 1 }'
                  >
                    <img
                      src="../assets/images/about/about-1-1.jpg"
                      alt="about image"
                      className="about-one__img-one img"
                    />
                  </div>
                  <div
                    className="about-one__img-box-two digihub-tilt"
                    data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 5, "speed": 700, "scale": 1 }'
                  >
                    <img
                      src="../assets/images/about/about-1-2.jpg"
                      alt="about image"
                      className="about-one__img-two"
                    />
                  </div>
                  <div className="about-one__shape-box">
                    <img
                      src="../assets/images/shapes/about-shape-1-1.png"
                      alt="about shape"
                      className="about-one__shape-one"
                    />
                  </div>
                </div>
              </div>
              <div className="about-one__col-content col-xl-6 col-lg-9">
                <div className="about-one__content sec-title">
                  <div
                    className="about-one__content-top wow animated fadeIn"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                  >
                    <p className="sec-title__top">Know About Us</p>
                    <h2 className="about-one__heading sec-title__heading">
                      Unlocking the power of digital imagination
                    </h2>
                    <p className="about-one__desc">
                      Et purus duis sollicitudin dignissim habitant. Egestas
                      nulla quis venenatis cras sed eu massa eu faucibus. Urna
                      fusce aenean tortor pretium
                    </p>
                  </div>
                  <div className="about-one__inner container-fluid">
                    <div className="row">
                      <div
                        className="col-xl-12 wow animated fadeInRight"
                        data-wow-delay="0.1s"
                        data-wow-duration="1500ms"
                      >
                        <div className="about-one__inner-box">
                          <div className="about-one__inner-icon-box">
                            <span className="about-one__inner-icon icon-search"></span>
                          </div>
                          <div className="about-one__inner-content">
                            <h4 className="about-one__inner-title">
                              Creative Flow
                            </h4>
                            <p className="about-one__inner-desc">
                              Et purus duis sollicitudin dignissim habitant.
                              Egestas nulla quis venenatis cras sed Et purus
                              duis sollicitudin Et purus duis sollicitudin
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xl-12 wow animated fadeInRight"
                        data-wow-delay="0.2s"
                        data-wow-duration="1500ms"
                      >
                        <div className="about-one__inner-box">
                          <div className="about-one__inner-icon-box">
                            <span className="about-one__inner-icon icon-user-account"></span>
                          </div>
                          <div className="about-one__inner-content">
                            <h4 className="about-one__inner-title">
                              Tech Secure
                            </h4>
                            <p className="about-one__inner-desc">
                              Et purus duis sollicitudin dignissim habitant.
                              Egestas nulla quis venenatis cras sed Et purus
                              duis sollicitudin Et purus duis sollicitudin
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="subscribe-one">
          <h2 className="subscribe-one__inner-heading">newsletter</h2>
          <div className="container">
            <div
              className="subscribe-one__sec-title sec-title wow animated fadeIn"
              data-wow-delay="0.1s"
              data-wow-duration="1500ms"
            >
              <h2 className="subscribe-one__heading sec-title__heading">
                subscribe to stay connected
              </h2>
            </div>
            <form
              action="#"
              data-url="MAILCHIMP_FORM_URL"
              className="subscribe-one__form mc-form"
            >
              <input
                type="email"
                name="EMAIL"
                id="subscribe-one-input"
                placeholder="Email Address Here"
                className="subscribe-one__input"
              />
              <button type="submit" className="subscribe-one__btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div className="mc-form__response"></div>
            <div className="counter-one container-fluid">
              <div className="row">
                <div
                  className="col-lg-3 col-sm-6 wow animated fadeIn"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <div className="counter-one__count-box counter-one__count-box-one">
                    <div className="counter-one__count-box-inner sec-title count-box">
                      <h3
                        className="sec-title__heading count-text"
                        data-stop="2000"
                        data-speed="1500"
                      >
                        00
                      </h3>
                      <h3 className="sec-title__heading">+</h3>
                    </div>
                    <p className="counter-one__count-title">
                      Team <br /> member
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow animated fadeIn"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <div className="counter-one__count-box counter-one__count-box-two">
                    <div className="counter-one__count-box-inner sec-title count-box">
                      <h3
                        className="sec-title__heading count-text"
                        data-stop="20"
                        data-speed="1500"
                      >
                        00
                      </h3>
                      <h3 className="sec-title__heading">+</h3>
                    </div>
                    <p className="counter-one__count-title">
                      Winning <br /> award
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow animated fadeIn"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <div className="counter-one__count-box counter-one__count-box-three">
                    <div className="counter-one__count-box-inner sec-title count-box">
                      <h3
                        className="sec-title__heading count-text"
                        data-stop="10"
                        data-speed="1500"
                      >
                        00
                      </h3>
                      <h3 className="sec-title__heading">k</h3>
                    </div>
                    <p className="counter-one__count-title">
                      Complete <br /> project
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow animated fadeIn"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <div className="counter-one__count-box counter-one__count-box-four">
                    <div className="counter-one__count-box-inner sec-title count-box">
                      <h3
                        className="sec-title__heading count-text"
                        data-stop="900"
                        data-speed="1500"
                      >
                        00
                      </h3>
                      <h3 className="sec-title__heading">+</h3>
                    </div>
                    <p className="counter-one__count-title">
                      Client <br /> review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="portfolio-one__content sec-title wow animated fadeIn"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <p className="sec-title__top">lATEST Portfolio</p>
                  <h2 className="portfolio-one__heading sec-title__heading">
                    Your partner in <br /> digital storytelling
                  </h2>
                  <ul className="portfolio-one__btn-group post-filter">
                    <li
                      data-filter=".filter-item"
                      className="portfolio-one__btn active"
                    >
                      All Project <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                    <li
                      data-filter=".architecher"
                      className="portfolio-one__btn"
                    >
                      Architecher <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                    <li data-filter=".large" className="portfolio-one__btn">
                      Large <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                    <li data-filter=".interiour" className="portfolio-one__btn">
                      Interiour <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                    <li data-filter=".house" className="portfolio-one__btn">
                      House <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className="col-12">
                  <div className="portfolio-one__inner-container container-fluid">
                    <div className="filter-layout row">
                      <div className="col-xl-12 col-lg-6 architecher interiour filter-item">
                        <div className="portfolio-one__item">
                          <img
                            src="../assets/images/portfolio/portfolio-1-1.jpg"
                            alt="portfolio"
                            className="portfolio-one__item-img"
                          />
                          <div className="portfolio-one__item-content">
                            <h3 className="portfolio-one__item-title">
                              <a href="projects-details.html">
                                Innovation at Finest It
                              </a>
                            </h3>
                            <p className="portfolio-one__item-text">
                              VIP Services
                            </p>
                          </div>
                          <div className="portfolio-one__item-overlay">
                            <a
                              href="../assets/images/portfolio/portfolio-1-1.jpg"
                              className="portfolio-one__item-plus img-popup"
                            >
                              <span className="portfolio-one__item-plus-icon icon-plus"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-6 large house filter-item">
                        <div className="portfolio-one__item">
                          <img
                            src="../assets/images/portfolio/portfolio-1-2.jpg"
                            alt="portfolio"
                            className="portfolio-one__item-img"
                          />
                          <div className="portfolio-one__item-content">
                            <h3 className="portfolio-one__item-title">
                              <a href="projects-details.html">
                                Innovation at Finest It
                              </a>
                            </h3>
                            <p className="portfolio-one__item-text">
                              VIP Services
                            </p>
                          </div>
                          <div className="portfolio-one__item-overlay">
                            <a
                              href="../assets/images/portfolio/portfolio-1-2.jpg"
                              className="portfolio-one__item-plus img-popup"
                            >
                              <span className="portfolio-one__item-plus-icon icon-plus"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 architecher interiour filter-item">
                        <div className="portfolio-one__item">
                          <img
                            src="../assets/images/portfolio/portfolio-1-3.jpg"
                            alt="portfolio"
                            className="portfolio-one__item-img"
                          />
                          <div className="portfolio-one__item-content">
                            <h3 className="portfolio-one__item-title">
                              <a href="projects-details.html">
                                Innovation at Finest It
                              </a>
                            </h3>
                            <p className="portfolio-one__item-text">
                              VIP Services
                            </p>
                          </div>
                          <div className="portfolio-one__item-overlay">
                            <a
                              href="../assets/images/portfolio/portfolio-1-3.jpg"
                              className="portfolio-one__item-plus img-popup"
                            >
                              <span className="portfolio-one__item-plus-icon icon-plus"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="portfolio-one__inner-container container-fluid">
                  <div className="filter-layout row">
                    <div className="col-xl-12 col-lg-6 architecher interiour filter-item">
                      <div className="portfolio-one__item">
                        <img
                          src="../assets/images/portfolio/portfolio-1-1.jpg"
                          alt="portfolio"
                          className="portfolio-one__item-img"
                        />
                        <div className="portfolio-one__item-content">
                          <h3 className="portfolio-one__item-title">
                            <a href="projects-details.html">
                              Innovation at Finest It
                            </a>
                          </h3>
                          <p className="portfolio-one__item-text">
                            VIP Services
                          </p>
                        </div>
                        <div className="portfolio-one__item-overlay">
                          <a
                            href="../assets/images/portfolio/portfolio-1-1.jpg"
                            className="portfolio-one__item-plus img-popup"
                          >
                            <span className="portfolio-one__item-plus-icon icon-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-6 large house filter-item">
                      <div className="portfolio-one__item">
                        <img
                          src="../assets/images/portfolio/portfolio-1-2.jpg"
                          alt="portfolio"
                          className="portfolio-one__item-img"
                        />
                        <div className="portfolio-one__item-content">
                          <h3 className="portfolio-one__item-title">
                            <a href="projects-details.html">
                              Innovation at Finest It
                            </a>
                          </h3>
                          <p className="portfolio-one__item-text">
                            VIP Services
                          </p>
                        </div>
                        <div className="portfolio-one__item-overlay">
                          <a
                            href="../assets/images/portfolio/portfolio-1-2.jpg"
                            className="portfolio-one__item-plus img-popup"
                          >
                            <span className="portfolio-one__item-plus-icon icon-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-6 architecher interiour filter-item">
                      <div className="portfolio-one__item">
                        <img
                          src="../assets/images/portfolio/portfolio-1-3.jpg"
                          alt="portfolio"
                          className="portfolio-one__item-img"
                        />
                        <div className="portfolio-one__item-content">
                          <h3 className="portfolio-one__item-title">
                            <a href="projects-details.html">
                              Innovation at Finest It
                            </a>
                          </h3>
                          <p className="portfolio-one__item-text">
                            VIP Services
                          </p>
                        </div>
                        <div className="portfolio-one__item-overlay">
                          <a
                            href="../assets/images/portfolio/portfolio-1-3.jpg"
                            className="portfolio-one__item-plus img-popup"
                          >
                            <span className="portfolio-one__item-plus-icon icon-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-6 large house filter-item">
                      <div className="portfolio-one__item">
                        <img
                          src="../assets/images/portfolio/portfolio-1-4.jpg"
                          alt="portfolio"
                          className="portfolio-one__item-img"
                        />
                        <div className="portfolio-one__item-content">
                          <h3 className="portfolio-one__item-title">
                            <a href="projects-details.html">
                              Innovation at Finest It
                            </a>
                          </h3>
                          <p className="portfolio-one__item-text">
                            VIP Services
                          </p>
                        </div>
                        <div className="portfolio-one__item-overlay">
                          <a
                            href="../assets/images/portfolio/portfolio-1-4.jpg"
                            className="portfolio-one__item-plus img-popup"
                          >
                            <span className="portfolio-one__item-plus-icon icon-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-one">
          <div className="container">
            <div
              className="team-one__sec-title sec-title wow animated fadeIn"
              data-wow-delay="0.1s"
              data-wow-duration="1500ms"
            >
              <p className="sec-title__top">our team member</p>
              <h2 className="team-one__heading sec-title__heading">
                Designing the future pixel by pixel
              </h2>
            </div>
          </div>
          <div className="team-one__container container">
            <div
              className="team-one__carousel digihub-owl__carousel owl-theme owl-carousel"
              data-owl-options='{
            "items": 5,
            "margin": 0,
            "smartSpeed": 1500,
            "loop":true,
            "autoplay": 6000,
            "nav":false,
            "dots":true,
            "navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
            "responsive":{
                "0":{
                    "items": 1
                },
                "576":{
                    "items": 2
                },
                "992":{
                    "items": 3
                },
                "1200":{
                    "items": 4
                }
            }
            }'
            >
              <div className="team-one__carousel-item item">
                <div className="team-single">
                  <div className="team-single__img-box">
                    <img
                      src="../assets/images/team/team-1-1.jpg"
                      alt="team"
                      className="team-single__img"
                    />
                  </div>
                  <div className="team-single__overlay">
                    <div className="team-single__info">
                      <h4 className="team-single__name">
                        <a href="team-single.html">Alma R. Valdivia</a>
                      </h4>
                      <p className="team-single__title">Ui\Ux Designer</p>
                      <ul className="team-single__social">
                        <li className="team-single__social-item">
                          <a
                            href="https://www.facebook.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="team-single__social-item">
                          <a
                            href="https://twitter.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="team-single__social-item">
                          <a
                            href="https://www.instagram.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-one__carousel-item item">
                <div className="team-single">
                  <div className="team-single__img-box">
                    <img
                      src="../assets/images/team/team-1-2.jpg"
                      alt="team"
                      className="team-single__img"
                    />
                  </div>
                  <div className="team-single__overlay">
                    <div className="team-single__info">
                      <h4 className="team-single__name">
                        <a href="team-single.html">Mindi E. Smithers</a>
                      </h4>
                      <p className="team-single__title">Web Developer</p>
                      <ul className="team-single__social">
                        <li className="team-single__social-item">
                          <a
                            href="https://www.facebook.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="team-single__social-item">
                          <a
                            href="https://twitter.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="team-single__social-item">
                          <a
                            href="https://www.instagram.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-one__carousel-item item">
                <div className="team-single">
                  <div className="team-single__img-box">
                    <img
                      src="../assets/images/team/team-1-3.jpg"
                      alt="team"
                      className="team-single__img"
                    />
                  </div>
                  <div className="team-single__overlay">
                    <div className="team-single__info">
                      <h4 className="team-single__name">
                        <a href="team-single.html">Cherie S. Cullen</a>
                      </h4>
                      <p className="team-single__title">SEO Expert</p>
                      <ul className="team-single__social">
                        <li className="team-single__social-item">
                          <a
                            href="https://www.facebook.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="team-single__social-item">
                          <a
                            href="https://twitter.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="team-single__social-item">
                          <a
                            href="https://www.instagram.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-one__carousel-item item">
                <div className="team-single">
                  <div className="team-single__img-box">
                    <img
                      src="../assets/images/team/team-1-4.jpg"
                      alt="team"
                      className="team-single__img"
                    />
                  </div>
                  <div className="team-single__overlay">
                    <div className="team-single__info">
                      <h4 className="team-single__name">
                        <a href="team-single.html">Thomas D. Burnett</a>
                      </h4>
                      <p className="team-single__title">Graphics Designer</p>
                      <ul className="team-single__social">
                        <li className="team-single__social-item">
                          <a
                            href="https://www.facebook.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="team-single__social-item">
                          <a
                            href="https://twitter.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="team-single__social-item">
                          <a
                            href="https://www.instagram.com/"
                            className="team-single__social-link"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clients-logo-one @@extraClassName">
          <div className="clients-logo-one__container container">
            <div
              className="clients-logo-one__carousel digihub-owl__carousel owl-theme owl-carousel"
              data-owl-options='{
            "items": 5,
            "margin": 95,
            "smartSpeed": 700,
            "loop": true,
            "autoplay": 6000,
            "nav": false,
            "dots": true,
            "navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
            "responsive":{
                "0":{
                    "items": 1,
                    "margin": 0
                },
                "360":{
                    "items": 2,
                    "margin": 50
                },
                "576":{
                    "items": 3,
                    "margin": 50
                },
                "768":{
                    "items": 3,
                    "margin": 60
                },
                "992":{
                    "items": 4,
                    "margin": 60
                },
                "1200":{
                    "items": 4,
                    "margin": 70
                },
                "1400":{
                    "items": 5,
                    "loop": false,
                    "dots": false,
                    "margin": 95
                }
            }
            }'
            >
              <div className="clients-logo-one__item item">
                <img
                  src="../assets/images/clients-logo/clients-logo-1-1.png"
                  alt="clients-logo"
                  className="clients-logo-one__logo"
                />
              </div>
              <div className="clients-logo-one__item item">
                <img
                  src="../assets/images/clients-logo/clients-logo-1-2.png"
                  alt="clients-logo"
                  className="clients-logo-one__logo"
                />
              </div>
              <div className="clients-logo-one__item item">
                <img
                  src="../assets/images/clients-logo/clients-logo-1-3.png"
                  alt="clients-logo"
                  className="clients-logo-one__logo"
                />
              </div>
              <div className="clients-logo-one__item item">
                <img
                  src="../assets/images/clients-logo/clients-logo-1-4.png"
                  alt="clients-logo"
                  className="clients-logo-one__logo"
                />
              </div>
              <div className="clients-logo-one__item item">
                <img
                  src="../assets/images/clients-logo/clients-logo-1-5.png"
                  alt="clients-logo"
                  className="clients-logo-one__logo"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="blog-one">
          <div className="container">
            <div
              className="blog-one__sec-title sec-title wow animated fadeIn"
              data-wow-delay="0.1s"
              data-wow-duration="1500ms"
            >
              <p className="sec-title__top">Our latest Blogs</p>
              <h2 className="blog-one__heading sec-title__heading">
                Empowering brands with digital brilliance
              </h2>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-md-6 wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__card">
                  <a
                    href="blog-details.html"
                    data-hover-image="../assets/images/shapes/hover-one.jpg"
                    className="blog-one__img-box digihub-image-hover"
                  >
                    <img
                      src="../assets/images/blog/blog-1-1.jpg"
                      alt="blog"
                      className="blog-one__img"
                    />
                    <img
                      src="../assets/images/blog/blog-1-1.jpg"
                      alt="blog"
                      className="blog-one__img"
                    />
                    <div className="blog-one__date-box">
                      <h3 className="blog-one__date">22</h3>
                      <h3 className="blog-one__date">Feb</h3>
                    </div>
                  </a>
                  <div className="blog-one__info-box">
                    <ul className="blog-one__comment-box">
                      <li>
                        <i className="far fa-user"></i>
                        <span>By admin</span>
                      </li>
                      <li>
                        <i className="far fa-comments"></i>
                        <span>Comments (05)</span>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        Innovate Create Inspire your brand to life in
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="blog-one__btn digihub-btn digihub-btn--border-one"
                    >
                      READ MORE
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow animated fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__card">
                  <a
                    href="blog-details.html"
                    data-hover-image="../assets/images/shapes/hover-two.jpg"
                    className="blog-one__img-box digihub-image-hover"
                  >
                    <img
                      src="../assets/images/blog/blog-1-2.jpg"
                      alt="blog"
                      className="blog-one__img"
                    />
                    <img
                      src="../assets/images/blog/blog-1-2.jpg"
                      alt="blog"
                      className="blog-one__img"
                    />
                    <div className="blog-one__date-box">
                      <h3 className="blog-one__date">24</h3>
                      <h3 className="blog-one__date">Feb</h3>
                    </div>
                  </a>
                  <div className="blog-one__info-box">
                    <ul className="blog-one__comment-box">
                      <li>
                        <i className="far fa-user"></i>
                        <span>By admin</span>
                      </li>
                      <li>
                        <i className="far fa-comments"></i>
                        <span>Comments (09)</span>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        Inspire meets brands with digital technology
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="blog-one__btn digihub-btn digihub-btn--border-one"
                    >
                      READ MORE
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow animated fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__card">
                  <a
                    href="blog-details.html"
                    data-hover-image="../assets/images/shapes/hover-three.jpg"
                    className="blog-one__img-box digihub-image-hover"
                  >
                    <img
                      src="../assets/images/blog/blog-1-3.jpg"
                      alt="blog"
                      className="blog-one__img"
                    />
                    <img
                      src="../assets/images/blog/blog-1-3.jpg"
                      alt="blog"
                      className="blog-one__img"
                    />
                    <div className="blog-one__date-box">
                      <h3 className="blog-one__date">28</h3>
                      <h3 className="blog-one__date">Feb</h3>
                    </div>
                  </a>
                  <div className="blog-one__info-box">
                    <ul className="blog-one__comment-box">
                      <li>
                        <i className="far fa-user"></i>
                        <span>By admin</span>
                      </li>
                      <li>
                        <i className="far fa-comments"></i>
                        <span>Comments (10)</span>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        Digital experiences that the future pixel
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="blog-one__btn digihub-btn digihub-btn--border-one"
                    >
                      READ MORE
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-one">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-md-5 wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
              >
                <div className="footer-one__about-box">
                  <div className="footer-one__logo-box">
                    <a href="index.html">
                      <img
                        src="../assets/images/footer-logo-dark.png"
                        alt="logo-dark"
                        className="footer-one__logo"
                      />
                    </a>
                  </div>
                  <p className="footer-one__about-text">
                    Yes, there are many not ma corporate businesses Informati
                    worldwide
                  </p>
                  <ul className="footer-one__social">
                    <li className="footer-one__social-item">
                      <a
                        href="https://www.facebook.com/"
                        className="footer-one__social-link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="footer-one__social-item">
                      <a
                        href="https://www.instagram.com/"
                        className="footer-one__social-link"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="footer-one__social-item">
                      <a
                        href="https://twitter.com/"
                        className="footer-one__social-link"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="footer-one__social-item">
                      <a
                        href="https://www.linkedin.com/?original_referer="
                        className="footer-one__social-link"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-3 col-sm-6 wow animated fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="1500ms"
              >
                <div className="footer-one__link-box footer-one__link-box-one">
                  <h3 className="footer-one__title">About</h3>
                  <ul className="footer-one__link-list">
                    <li className="footer-one__link-item">
                      <a href="about.html" className="footer-one__link">
                        About Us
                      </a>
                    </li>
                    <li className="footer-one__link-item">
                      <a href="contact.html" className="footer-one__link">
                        Plan & Pricing
                      </a>
                    </li>
                    <li className="footer-one__link-item">
                      <a href="service.html" className="footer-one__link">
                        Services
                      </a>
                    </li>
                    <li className="footer-one__link-item">
                      <a href="about.html" className="footer-one__link">
                        Information
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-4 col-sm-6 wow animated fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="1500ms"
              >
                <div className="footer-one__link-box footer-one__link-box-two">
                  <h3 className="footer-one__title">Resources</h3>
                  <ul className="footer-one__link-list">
                    <li className="footer-one__link-item">
                      <a href="contact.html" className="footer-one__link">
                        Support Center
                      </a>
                    </li>
                    <li className="footer-one__link-item">
                      <a href="service.html" className="footer-one__link">
                        Documentation
                      </a>
                    </li>
                    <li className="footer-one__link-item">
                      <a
                        href="blog-grid-right.html"
                        className="footer-one__link"
                      >
                        Changelog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-7 wow animated fadeInUp"
                data-wow-delay="0.7s"
                data-wow-duration="1500ms"
              >
                <div className="footer-one__newsletter-box">
                  <h3 className="footer-one__title">Newsletter</h3>
                  <form
                    action="#"
                    data-url="MAILCHIMP_FORM_URL"
                    className="footer-one__newsletter-form-box mc-form"
                  >
                    <div className="footer-one__newsletter-form">
                      <input
                        type="email"
                        name="EMAIL"
                        id="footer-one-newsletter"
                        placeholder="Your Email"
                        className="footer-one__newsletter-input"
                      />
                      <button
                        type="submit"
                        className="footer-one__newsletter-btn digihub-btn"
                      >
                        Subscribe <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                    <div className="footer-one__checkbox">
                      <input
                        type="checkbox"
                        id="footer-one-newsletter-check"
                        className="footer-one__checkbox-input"
                      />
                      <label
                        htmlFor="footer-one-newsletter-check"
                        className="footer-one__checkbox-text"
                      >
                        I agree to my email being stored
                      </label>
                    </div>
                  </form>
                  <div className="mc-form__response"></div>
                </div>
              </div>
            </div>
            <div className="footer-one__bottom container-fluid @@extraClassName">
              <div className="row">
                <div className="footer-one__bottom-col-one col-lg-5">
                  <div className="footer-one__copyright">
                    <p className="footer-one__copyright-text">
                      &copy; Yoursitename 2023 | All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="footer-one__bottom-col-two col-lg-7">
                  <div className="footer-one__bottom-link-box">
                    <a href="team.html" className="footer-one__bottom-link">
                      Trams & Condition
                    </a>
                    <a href="about.html" className="footer-one__bottom-link">
                      Privacy Policy
                    </a>
                    <a href="contact.html" className="footer-one__bottom-link">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>

        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img
                src="../assets/images/logo-dark.png"
                width="155"
                alt="digihub"
              />
            </a>
          </div>

          <div className="mobile-nav__container"></div>

          <ul className="mobile-nav__contact">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:digihub@envato.com">digihub@envato.com</a>
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <a href="tel:8085550111">(808) 555-0111</a>
            </li>
          </ul>
          <ul className="mobile-nav__social">
            <li>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/?original_referer=">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form
            role="search"
            method="get"
            className="search-popup__form"
            action="#"
          >
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="search-popup__form__btn"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fas fa-long-arrow-alt-up"></i>
      </a>

      <script src="../assets/vendors/jquery/jquery-3.7.0.min.js"></script>
      <script src="../assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../assets/vendors/bootstrap-select/bootstrap-select.min.js"></script>
      <script src="../assets/vendors/jarallax/jarallax.min.js"></script>
      <script src="../assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></script>
      <script src="../assets/vendors/jquery-appear/jquery.appear.min.js"></script>
      <script src="../assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>
      <script src="../assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>
      <script src="../assets/vendors/jquery-validate/jquery.validate.min.js"></script>
      <script src="../assets/vendors/nouislider/nouislider.min.js"></script>
      <script src="../assets/vendors/tiny-slider/tiny-slider.js"></script>
      <script src="../assets/vendors/wnumb/wNumb.min.js"></script>
      <script src="../assets/vendors/owl-carousel/js/owl.carousel.min.js"></script>
      <script src="../assets/vendors/wow/wow.js"></script>
      <script src="../assets/vendors/tilt/tilt.jquery.js"></script>
      <script src="../assets/vendors/isotope/isotope.js"></script>
      <script src="../assets/vendors/gsap/gsap.min.js"></script>
      <script src="../assets/vendors/gsap/three.min.js"></script>
      <script src="../assets/vendors/gsap/hover.js"></script>
      <script src="../assets/vendors/countdown/countdown.min.js"></script>

      <script src="assets/js/digihub.js"></script>
    </div>
  );
}
