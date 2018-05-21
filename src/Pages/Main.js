import React, { Component } from 'react'
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import Contest from '../Components/Contest';
import Liquors from '../Components/Liquors/Liquors';

export default class Main extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Hero/>
          <Contest/>
          <Liquors/>
          <div className="about-content text-left">
              <div className="row">
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-dining-table"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Clean Tables</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-spoon-and-fork"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Clean Dish</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-tea"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Present Food</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-sushi"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Communication</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-beer"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Special Service</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-pizza"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Unique Food</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-noodles"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Fast Food</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-french-fries"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Friendly Environment</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                      <div className="about">
                          <div className="float-left">
                              <div className="icon"><span><i className="icofont icofont-fresh-juice"></i></span></div>
                          </div>
                          <div className="about-info">
                              <h3>Short Order Cook</h3>
                              <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="gb-cta section-padding section-before gb-parallax">
              <div className="container text-center">
                  <div className="cta-info">
                      <h1 className="font-pacifico">A warm welcome to Jalebi Restuarent !</h1>
                      <h2>We serve a variety of snacks and meals. Ready to book your table?</h2>
                      <a href="#" className="btn btn-primary">Book Your Table Now</a>
                  </div>
              </div>
          </div>



          <div className="gb-convenience section-before section-padding gb-parallax">
              <div className="container text-center">
                  <div className="row">
                      <div className="col-sm-4">
                          <div className="convenience">
                              <span className="icon"><i className="icofont icofont-kids-scooter"></i></span>
                              <h1>Kids Zone</h1>
                          </div>
                      </div>
                      <div className="col-sm-4">
                          <div className="convenience">
                              <span className="icon"><i className="icofont icofont-wifi-router"></i></span>
                              <h1>Free WiFi</h1>
                          </div>
                      </div>
                      <div className="col-sm-4">
                          <div className="convenience">
                              <span className="icon"><i className="icofont icofont-direction-sign"></i></span>
                              <h1>Parking Place</h1>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div id="reservation" className="section-padding">
              <div className="container text-center">
                  <div className="section-title">
                      <h1 className="font-pacifico">Ready to get your table</h1>
                      <h2>Reservation</h2>
                      <span><i className="fa fa-empire" aria-hidden="true"></i></span>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p>
                  </div>
                  <form className="gb-form" name="contact-form" method="post" action="#">
                      <div className="row">
                          <div className="col-sm-4">
                              <div className="form-group">
                                  <input type="text" className="form-control" required="required" placeholder="Your Name" />
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="form-group">
                                  <input type="email" className="form-control" required="required" placeholder="Your Email" />
                            </div>
                        </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <input type="text" className="form-control" required="required" placeholder="Contact Number" />
                                  </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <select className="form-control">
                                          <option value="#">Persons</option>
                                          <option value="#">1 Persons</option>
                                          <option value="#">2 Persons</option>
                                          <option value="#">3 Persons</option>
                                          <option value="#">4 Persons</option>
                                          <option value="#">5 Persons</option>
                                          <option value="#">6 Persons</option>
                                          <option value="#">7 Persons</option>
                                          <option value="#">8 Persons</option>
                                          <option value="#">9 Persons</option>
                                          <option value="#">10 Persons</option>
                                          <option value="#">11 Persons</option>
                                          <option value="#">12 Persons</option>
                                          <option value="#">13 Persons</option>
                                          <option value="#">14 Persons</option>
                                          <option value="#">15 Persons</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <input type="date" className="form-control" value="2017-11-10" />
                                  </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <select className="form-control">
                                          <option value="#">Time</option>
                                          <option value="#">Time 8:00am</option>
                                          <option value="#">Time 8:30am</option>
                                          <option value="#">Time 9:00am</option>
                                          <option value="#">Time 9:30am</option>
                                          <option value="#">Time 10:00am</option>
                                          <option value="#">Time 10:30am</option>
                                          <option value="#">Time 11:00am</option>
                                          <option value="#">Time 11:30am</option>
                                          <option value="#">Time 12:00pm</option>
                                          <option value="#">Time 12:30pm</option>
                                          <option value="#">Time 1:00pm</option>
                                          <option value="#">Time 1:30pm</option>
                                          <option value="#">Time 2:00pm</option>
                                          <option value="#">Time 2:30pm</option>
                                          <option value="#">Time 3:00pm</option>
                                          <option value="#">Time 3:30pm</option>
                                          <option value="#">Time 4:00pm</option>
                                          <option value="#">Time 4:30pm</option>
                                          <option value="#">Time 5:00pm</option>
                                          <option value="#">Time 5:30pm</option>
                                          <option value="#">Time 6:00pm</option>
                                          <option value="#">Time 6:30pm</option>
                                          <option value="#">Time 7:00pm</option>
                                          <option value="#">Time 7:30pm</option>
                                          <option value="#">Time 8:00pm</option>
                                          <option value="#">Time 8:30pm</option>
                                          <option value="#">Time 9:00pm</option>
                                          <option value="#">Time 9:30pm</option>
                                          <option value="#">Time 10:00pm</option>
                                          <option value="#">Time 10:30pm</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="form-group">
                                      <textarea name="message" className="form-control" required="required" rows="5" placeholder="Enter Your Requirements..."></textarea>
                                  </div>
                                  <input type="submit" className="btn btn-primary text-center" value="Reservation Request" />
                              </div>
                          </div>
                </form>  
            </div>
              </div>

              <div id="gallery" className="gb-gallery">
                  <div className="container-fluid text-center">
                      <div className="gallery-content">
                          <div className="gallery">
                              <div className="gallery-image">
                                  <img src="images/gallery/1.jpg" alt="Image" className="img-fluid" />
                                  <div className="gb-overlay">
                                      <div className="overlay-content">
                                          <a href="images/gallery/1.jpg" className="image-link"><i className="icofont icofont-open-eye"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gallery">
                              <div className="gallery-image">
                                  <img src="images/gallery/2.jpg" alt="Image" className="img-fluid" />
                                  <div className="gb-overlay">
                                      <div className="overlay-content">
                                          <a href="images/gallery/2.jpg" className="image-link"><i className="icofont icofont-open-eye"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gallery">
                              <div className="gallery-image">
                                  <img src="images/gallery/3.jpg" alt="Image" className="img-fluid" />
                                  <div className="gb-overlay">
                                      <div className="overlay-content">
                                          <a href="images/gallery/3.jpg" className="image-link"><i className="icofont icofont-open-eye"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gallery">
                              <div className="gallery-image">
                                  <img src="images/gallery/4.jpg" alt="Image" className="img-fluid" />
                                  <div className="gb-overlay">
                                      <div className="overlay-content">
                                          <a href="images/gallery/4.jpg" className="image-link"><i className="icofont icofont-open-eye"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gallery">
                              <div className="gallery-image">
                                  <img src="images/gallery/5.jpg" alt="Image" className="img-fluid" />
                                  <div className="gb-overlay">
                                      <div className="overlay-content">
                                          <a href="images/gallery/5.jpg" className="image-link"><i className="icofont icofont-open-eye"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gallery">
                              <div className="gallery-image">
                                  <img src="images/gallery/6.jpg" alt="Image" className="img-fluid" />
                                  <div className="gb-overlay">
                                      <div className="overlay-content">
                                          <a href="images/gallery/6.jpg" className="image-link"><i className="icofont icofont-open-eye"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div id="blog" className="gb-blog section-padding">
                  <div className="container text-center">
                      <div className="section-title">
                          <h1 className="font-pacifico">Stay update with us</h1>
                          <h2>Our Blog</h2>
                          <span><i className="fa fa-empire" aria-hidden="true"></i></span>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p>
                      </div>
                      <div className="blog-content text-left">
                          <div className="row">
                              <div className="col-lg-4">
                                  <div className="gb-post">
                                      <div className="entry-header">
                                          <div className="entry-thumbnail">
                                              <a href="blog-details.html"><img src="images/blog/1.jpg" alt="Image" className="img-fluid" /></a>
                                          </div>
                                      </div>
                                      <div className="entry-content">
                                          <h2 className="entry-title"><a href="blog-details.html">Consectetuer adipiscing elit, sed diam nonummy nibh euismod.</a></h2>
                                          <div className="clearfix">
                                              <div className="post-time">
                                                  <span>02<span>Nov</span></span>
                                              </div>
                                              <div className="entry-meta">
                                                  <ul className="global-list list-inline">
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-user-o" aria-hidden="true"></i>By: Simon</a></li>
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i>17 Comments</a></li>
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-folder-open-o" aria-hidden="true"></i>Web Design</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4">
                                  <div className="gb-post">
                                      <div className="entry-header">
                                          <div className="entry-thumbnail">
                                              <a href="blog-details.html"><img src="images/blog/2.jpg" alt="Image" className="img-fluid" /></a>
                                          </div>
                                      </div>
                                      <div className="entry-content">
                                          <h2 className="entry-title"><a href="blog-details.html">Consectetuer adipiscing elit, sed diam nonummy nibh euismod.</a></h2>
                                          <div className="clearfix">
                                              <div className="post-time">
                                                  <span>05<span>Nov</span></span>
                                              </div>
                                              <div className="entry-meta">
                                                  <ul className="global-list list-inline">
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-user-o" aria-hidden="true"></i>By: Simon</a></li>
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i>17 Comments</a></li>
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-folder-open-o" aria-hidden="true"></i>Web Design</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4">
                                  <div className="gb-post">
                                      <div className="entry-header">
                                          <div className="entry-thumbnail">
                                              <a href="blog-details.html"><img src="images/blog/3.jpg" alt="Image" className="img-fluid" /></a>
                                          </div>
                                      </div>
                                      <div className="entry-content">
                                          <h2 className="entry-title"><a href="blog-details.html">Consectetuer adipiscing elit, sed diam nonummy nibh euismod.</a></h2>
                                          <div className="clearfix">
                                              <div className="post-time">
                                                  <span>07<span>Nov</span></span>
                                              </div>
                                              <div className="entry-meta">
                                                  <ul className="global-list list-inline">
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-user-o" aria-hidden="true"></i>By: Simon</a></li>
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i>17 Comments</a></li>
                                                      <li className="list-inline-item"><a href="#"><i className="fa fa-folder-open-o" aria-hidden="true"></i>Web Design</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-sm-12 text-center">
                                  <a href="#" className="btn btn-primary">See All News &amp; Blog</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="gb-testimonial section-before section-padding gb-parallax">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="testimonial-content">
                                  <h1 className="font-pacifico">People What Saying About Jalebi !!</h1>
                                  <div className="testimonial-slider">
                                      <div className="testimonial">
                                          <div className="pull-left">
                                              <i className="fa fa-quote-left" aria-hidden="true"></i>
                                          </div>
                                          <div className="media-body">
                                              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat .</p>
                                              <div className="testimonial-title">
                                                  <h2>Tony Broden, <span>Food Minister</span></h2>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="testimonial">
                                          <div className="pull-left">
                                              <i className="fa fa-quote-left" aria-hidden="true"></i>
                                          </div>
                                          <div className="media-body">
                                              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat .</p>
                                              <div className="testimonial-title">
                                                  <h2>Tony Broden, <span>Food Minister</span></h2>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="testimonial">
                                          <div className="pull-left">
                                              <i className="fa fa-quote-left" aria-hidden="true"></i>
                                          </div>
                                          <div className="media-body">
                                              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat .</p>
                                              <div className="testimonial-title">
                                                  <h2>Tony Broden, <span>Food Minister</span></h2>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-6 testimonial-image text-center">
                              <img src="images/testimonial-image.png" alt="Image" className="img-fluid" />
                          </div>
                      </div>
                  </div>
              </div>

              <div className="gb-barnds section-padding">
                  <div className="container text-center">
                      <div className="section-title">
                          <h1 className="font-pacifico">We have created value</h1>
                          <h2>Our Brand</h2>
                          <span><i className="fa fa-empire" aria-hidden="true"></i></span>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p>
                      </div>
                      <div className="barnd-slider">
                          <div className="barnd">
                              <img src="images/Brand/1.png" alt="Image" className="img-fluid" />
                          </div>
                          <div className="barnd">
                              <img src="images/Brand/2.png" alt="Image" className="img-fluid" />
                          </div>
                          <div className="barnd">
                              <img src="images/Brand/3.png" alt="Image" className="img-fluid" />
                          </div>
                          <div className="barnd">
                              <img src="images/Brand/4.png" alt="Image" className="img-fluid" />
                          </div>
                          <div className="barnd">
                              <img src="images/Brand/3.png" alt="Image" className="img-fluid" />
                          </div>
                      </div>
                  </div>
              </div>

              <div className="gb-map">
                  <div id="gmap"></div>
              </div>

              <div id="contact" className="section-padding">
                  <div className="container text-center">
                      <div className="section-title">
                          <h1 className="font-pacifico">Drop a line</h1>
                          <h2>Contact Form</h2>
                          <span><i className="fa fa-empire" aria-hidden="true"></i></span>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p>
                      </div>
                      <form className="gb-form" name="contact-form" method="post" action="#">
                          <div className="row">
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <input type="text" className="form-control" required="required" placeholder="Your Name" />
                                  </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <input type="email" className="form-control" required="required" placeholder="Your Email" />
                                  </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <input type="text" className="form-control" required="required" placeholder="Contact Number" />
                                  </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="form-group">
                                      <textarea name="message" className="form-control" required="required" rows="5" placeholder="Enter Your Requirements..."></textarea>
                                  </div>
                                  <input type="submit" className="btn btn-primary text-center" value="Submit" />
                              </div>
                          </div>
                      </form>
                  </div>
              </div>

              <div className="gb-footer">
                  <div className="footer-top section-padding section-before gb-parallax">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-3 col-md-6">
                                  <div className="footer-widget opening-hour">
                                      <h3>Opening Hour</h3>
                                      <ul className="global-list">
                                          <li> Sunday <span className="time">09:00 - 23:00</span></li>
                                          <li> Monday <span className="time">09:00 - 23:00</span></li>
                                          <li> Tuesday <span className="time">09:00 - 23:00</span></li>
                                          <li> Wednesday <span className="time">09:00 - 23:00</span></li>
                                          <li> Thursday <span className="time">09:00 - 23:00</span></li>
                                          <li> Friday <span className="star">*</span> <span className="time">09:00 - 23:00</span></li>
                                      </ul>
                                      <span className="weekly-closed">Saturday Weekly Closed</span>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                  <div className="footer-widget locations">
                                      <h3>Our Locations</h3>
                                      <span>Jalebi  One</span>
                                      <address>124 Park Ave, Brooklyn, New York 7250 Tel :  0123 -456789</address>
                                      <span>Jalebi  Two</span>
                                      <address>141 Park Ave, Brooklyn, New York 7250 Tel :  0123 -456789</address>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                  <div className="footer-widget contact">
                                      <h3>Contact Us</h3>
                                      <ul className="global-list">
                                          <li><span className="mr-1">Tel No :</span> <div className="media-body">012 - 3456789 012 - 3456789</div></li>
                                          <li><span className="mr-1">Email :</span> <div className="media-body"><a href="#">tea@jalebi.com</a></div></li>
                                          <li><span className="mr-1">Website:</span><div className="media-body"><a href="#">www. jalebi-food.com</a></div></li>
                                          <li><span>Social :</span>
                                              <div className="">
                                                  <ul className="global-list footer-social">
                                                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                      <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                  </ul>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                  <div className="footer-widget newsletter">
                                      <h3>Newsletter</h3>
                                      <p>Spam free, tasty  event food news in your inbox.</p>
                                      <form method="post" action="#">
                                          <div className="form-group">
                                              <input type="email" className="form-control" required="required" placeholder="Email" />
                                          </div>
                                          <div className="form-group">
                                              <input type="submit" className="btn btn-primary"/>
                                    </div>
                                </form>                            
                            </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="footer-bottom text-center">
                          <div className="container">
                              <span>&copy; Copyright 2017 <a href="#">jalebi.</a>  All Rights Reserved.</span>
                          </div>
                      </div>
                  </div>

      </div>
      
    )
  }
}
