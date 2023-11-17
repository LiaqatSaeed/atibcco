import Testimonal1 from "@/app/assets/images/clients/testimonial1.png"
import Testimonal2 from "@/app/assets/images/clients/testimonial2.png"
import Testimonal3 from "@/app/assets/images/clients/testimonial3.png"

import Client1 from "@/app/assets/images/clients/client1.png";
import Client2 from "@/app/assets/images/clients/client2.png";
import Client3 from "@/app/assets/images/clients/client3.png";
import Client4 from "@/app/assets/images/clients/client4.png";
import Client5 from "@/app/assets/images/clients/client5.png";
import Client6 from "@/app/assets/images/clients/client6.png";
import { Section } from "@/components";

export const Testimonals = () => (
  <Section className="content">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="column-title">Testimonials</h3>

          <div id="testimonial-slide" className="testimonial-slide">
            <div className="item">
              <div className="quote-item">
                <span className="quote-text">
                  Question ran over her cheek When she reached the first hills
                  of the Italic Mountains, she had a last view back on the
                  skyline of her hometown Bookmarksgrove, the headline of
                  Alphabet Village and the subline of her own road.
                </span>

                <div className="quote-item-footer">
                  <img
                    loading="lazy"
                    className="testimonial-thumb"
                    src={Testimonal1.src}
                    alt="testimonial"
                  />
                  <div className="quote-item-info">
                    <h3 className="quote-author">Gabriel Denis</h3>
                    <span className="quote-subtext">Chairman, OKT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="quote-item">
                <span className="quote-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor inci done idunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion
                  ullamco laboris nisi aliquip consequat.
                </span>

                <div className="quote-item-footer">
                  <img
                    loading="lazy"
                    className="testimonial-thumb"
                    src={Testimonal2.src}
                    alt="testimonial"
                  />
                  <div className="quote-item-info">
                    <h3 className="quote-author">Weldon Cash</h3>
                    <span className="quote-subtext">CFO, First Choice</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="quote-item">
                <span className="quote-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor inci done idunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion
                  ullamco laboris nisi ut commodo consequat.
                </span>

                <div className="quote-item-footer">
                  <img
                    loading="lazy"
                    className="testimonial-thumb"
                    src={Testimonal3.src}
                    alt="testimonial"
                  />
                  <div className="quote-item-info">
                    <h3 className="quote-author">Minter Puchan</h3>
                    <span className="quote-subtext">Director, AKT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0">
          <h3 className="column-title">Happy Clients</h3>

          <div className="row all-clients">
            <div className="col-sm-4 col-6">
              <figure className="clients-logo">
                <a href="#!">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src={Client1.src}
                    alt="clients-logo"
                  />
                </a>
              </figure>
            </div>

            <div className="col-sm-4 col-6">
              <figure className="clients-logo">
                <a href="#!">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src={Client2.src}
                    alt="clients-logo"
                  />
                </a>
              </figure>
            </div>

            <div className="col-sm-4 col-6">
              <figure className="clients-logo">
                <a href="#!">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src={Client3.src}
                    alt="clients-logo"
                  />
                </a>
              </figure>
            </div>

            <div className="col-sm-4 col-6">
              <figure className="clients-logo">
                <a href="#!">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src={Client4.src}
                    alt="clients-logo"
                  />
                </a>
              </figure>
            </div>

            <div className="col-sm-4 col-6">
              <figure className="clients-logo">
                <a href="#!">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src={Client5.src}
                    alt="clients-logo"
                  />
                </a>
              </figure>
            </div>

            <div className="col-sm-4 col-6">
              <figure className="clients-logo">
                <a href="#!">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src={Client6.src}
                    alt="clients-logo"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
