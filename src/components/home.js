import { render } from "@testing-library/react";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="main-banner" id="home">
        <header className="header">
          <div className="container-fluid px-lg-5">
            <nav className="py-4">
              <div id="logo">
                <h1>
                  {" "}
                  <a href="index.html">
                    <span className="fa fa-bold" aria-hidden="true"></span>ootie
                  </a>
                </h1>
              </div>

              <label for="drop" class="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu mt-2">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <label for="drop-2" className="toggle">
                    Drop Down{" "}
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>{" "}
                  </label>
                  <a href="#">
                    Drop Down{" "}
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>
                  </a>
                  <input type="checkbox" id="drop-2" />
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="/shop">Shop Now</a>
                    </li>
                    <li>
                      <a href="shop-single.html">Single Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="banner-info">
          <p>Trending of the week</p>
          <h3 className="mb-4">Casual Shoes for Men</h3>
          <div className="ban-buttons">
            <a href="/shop" className="btn">
              Shop Now
            </a>
            <a href="single.html" class="btn active">
              Read More
            </a>
          </div>
        </div>
      </div>
      <section className="about py-md-5 py-5">
        <div className="container-fluid">
          <div className="feature-grids row px-3">
            <div className="col-lg-3 gd-bottom">
              <div className="bottom-gd row">
                <div className="icon-gd col-md-3 text-center">
                  <span className="fa fa-truck" aria-hidden="true"></span>
                </div>
                <div className="icon-gd-info col-md-9">
                  <h3 className="mb-2">FREE SHIPPING</h3>
                  <p>On all order over $2000</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 gd-bottom">
              <div className="bottom-gd row bottom-gd2-active">
                <div className="icon-gd col-md-3 text-center">
                  <span className="fa fa-bullhorn" aria-hidden="true"></span>
                </div>
                <div className="icon-gd-info col-md-9">
                  <h3 className="mb-2">FREE RETURN</h3>
                  <p>On 1st exchange in 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 gd-bottom">
              <div className="bottom-gd row">
                <div className="icon-gd col-md-3 text-center">
                  {" "}
                  <span className="fa fa-gift" aria-hidden="true"></span>
                </div>

                <div className="icon-gd-info col-md-9">
                  <h3 className="mb-2">MEMBER DISCOUNT</h3>
                  <p>Register & save up to $29%</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 gd-bottom">
              <div className="bottom-gd row">
                <div className="icon-gd col-md-3 text-center">
                  {" "}
                  <span className="fa fa-usd" aria-hidden="true"></span>
                </div>
                <div className="icon-gd-info col-md-9">
                  <h3 className="mb-2">PREMIUM SUPPORT</h3>
                  <p>Support 24 hours per day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about py-5">
        <div className="container pb-lg-3">
          <h3 className="tittle text-center">New Arrivals</h3>
          <div className="row">
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img
                    src={"../assets/images/s1.jpg"}
                    className="img-fluid"
                    alt=""
                  />
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Bella Toes </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$675.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s2.jpg" class="img-fluid" alt="" />
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Chikku Loafers </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$475.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s3.jpg" class="img-fluid" alt="" />
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">(SRV) Sneakers </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$575.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men my-lg-4">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s4.jpg" class="img-fluid" alt="" />
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Shuberry Heels</a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$575.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men my-lg-4">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s5.jpg" class="img-fluid" alt="" />
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Red Bellies </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$575.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men my-lg-4">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s6.jpg" className="img-fluid" alt="" />
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Catwalk Flats </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$575.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s7.jpg" className="img-fluid" alt="" />
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Running Shoes </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$675.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s8.jpg" className="img-fluid" alt="" />
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Sukun Casuals </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price ">
                      <span className="money ">$775.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s9.jpg" className="img-fluid" alt="" />
                  <span class="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Bank Sneakers</a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$875.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials py-5">
        <div className="container">
          <div className="test-info text-center">
            <h3 className="my-md-2 my-3">Jenifer Burns</h3>

            <ul className="list-unstyled w3layouts-icons clients">
              <li>
                <a href="#">
                  <span class="fa fa-star"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fa fa-star"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fa fa-star"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fa fa-star-half-o"></span>
                </a>
              </li>
            </ul>
            <p>
              <span class="fa fa-quote-left"></span> Lorem Ipsum has been the
              industry's standard since the 1500s. Praesent ullamcorper dui
              turpis.Nulla pellentesque mi non laoreet eleifend. Integer
              porttitor mollisar lorem, at molestie arcu pulvinar ut.{" "}
              <span class="fa fa-quote-right"></span>
            </p>
          </div>
        </div>
      </section>
      <section className="about py-5">
        <div className="container pb-lg-3">
          <h3 className="tittle text-center">Popular Products</h3>
          <div className="row">
            <div className="col-md-6 latest-left">
              <div className="product-shoe-info shoe text-center">
                <img src="images/img1.jpg" className="img-fluid" alt="" />
                <div className="shop-now">
                  <a href="/shop" className="btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 latest-right">
              <div className="row latest-grids">
                <div className="latest-grid1 product-men col-12">
                  <div className="product-shoe-info shoe text-center">
                    <div className="men-thumb-item">
                      <img src="images/img2.jpg" className="img-fluid" alt="" />
                      <div className="shop-now">
                        <a href="/shop" className="btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="latest-grid2 product-men col-12 mt-lg-4">
                  <div className="product-shoe-info shoe text-center">
                    <div className="men-thumb-item">
                      <img src="images/img3.jpg" className="img-fluid" alt="" />
                      <div className="shop-now">
                        <a href="/shop" className="btn">
                          Shop Now
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
      <section className="brands py-5" id="brands">
        <div className="container py-lg-0">
          <div className="row text-center brand-items">
            <div className="col-sm-2 col-3">
              <a href="#">
                <span
                  className="fa fa-connectdevelop"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
            <div className="col-sm-2 col-3">
              <a href="#">
                <span className="fa fa-empire" aria-hidden="true"></span>
              </a>
            </div>
            <div className="col-sm-2 col-3">
              <a href="#">
                <span className="fa fa-ioxhost" aria-hidden="true"></span>
              </a>
            </div>
            <div className="col-sm-2 col-3">
              <a href="#">
                <span className="fa fa-first-order" aria-hidden="true"></span>
              </a>
            </div>
            <div className="col-sm-2 col-3 mt-sm-0 mt-4">
              <a href="#">
                <span className="fa fa-joomla" aria-hidden="true"></span>
              </a>
            </div>
            <div className="col-sm-2 col-3 mt-sm-0 mt-4">
              <a href="#">
                <span className="fa fa-dropbox" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row footer-top">
            <div className="col-lg-4 footer-grid_section_w3layouts">
              <h2 className="logo-2 mb-lg-4 mb-3">
                <a href="index.html">
                  <span className="fa fa-bold" aria-hidden="true"></span>ootie
                </a>
              </h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h4 className="sub-con-fo ad-info my-4">Catch on Social</h4>
              <ul className="w3layouts_social_list list-unstyled">
                <li>
                  <a href="#" className="w3pvt_facebook">
                    <span className="fa fa-facebook-f"></span>
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="w3pvt_twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="w3pvt_dribble">
                    <span className="fa fa-dribbble"></span>
                  </a>
                </li>
                <li className="ml-2">
                  <a href="#" className="w3pvt_google">
                    <span className="fa fa-google-plus"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 footer-right">
              <div className="w3layouts-news-letter">
                <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                  Newsletter
                </h3>

                <p>
                  By subscribing to our mailing list you will always get latest
                  news and updates from us.
                </p>
                <form action="#" method="post" class="w3layouts-newsletter">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email..."
                    required=""
                  />
                  <button className="btn1">
                    <span
                      className="fa fa-paper-plane-o"
                      aria-hidden="true"
                    ></span>
                  </button>
                </form>
              </div>
              <div className="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
                <div className="col-md-4 footer-grid_section_w3layouts">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    Information
                  </h3>
                  <ul className="list-unstyled w3layouts-icons">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="mt-3">
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">Gallery</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">Services</a>
                    </li>
                    <li className="mt-3">
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 footer-grid_section_w3layouts">
                  <div className="agileinfo_social_icons">
                    <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                      Customer Service
                    </h3>
                    <ul className="list-unstyled w3layouts-icons">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Delivery & Returns</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Waranty</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Terms & Condition</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Privacy Plolicy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    Contact Info
                  </h3>
                  <div className="contact-info">
                    <div className="footer-address-inf">
                      <h4 className="ad-info mb-2">Phone</h4>
                      <p>+121 098 8907 9987</p>
                    </div>
                    <div className="footer-address-inf my-4">
                      <h4 className="ad-info mb-2">Email </h4>
                      <p>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </p>
                    </div>
                    <div className="footer-address-inf">
                      <h4 className="ad-info mb-2">Location</h4>
                      <p>Honey Avenue, New York City</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cpy-right text-left row">
                <p className="col-md-10">
                  ?? 2019 Bootie. All rights reserved | Design by
                  <a href="http://w3layouts.com"> W3layouts.</a>
                </p>
                <a href="#home" className="move-top text-right col-md-2">
                  <span
                    className="fa fa-long-arrow-up"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
