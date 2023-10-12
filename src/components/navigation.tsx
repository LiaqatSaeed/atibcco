export const SiteNavigation = () => (
  <div className="site-navigation">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              aria-controls="navbar-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbar-collapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav mr-auto">
                <li className="nav-item dropdown active">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Home <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="active">
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Two</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Company <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="team.html">Our People</a>
                    </li>
                    <li>
                      <a href="testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Projects <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="projects.html">Projects All</a>
                    </li>
                    <li>
                      <a href="projects-single.html">Projects Single</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Services <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="services.html">Services All</a>
                    </li>
                    <li>
                      <a href="service-single.html">Services Single</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Features <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        href="#!"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Parent Menu
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#!">Child Menu 1</a>
                        </li>
                        <li>
                          <a href="#!">Child Menu 2</a>
                        </li>
                        <li>
                          <a href="#!">Child Menu 3</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    News <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="news-left-sidebar.html">News Left Sidebar</a>
                    </li>
                    <li>
                      <a href="news-right-sidebar.html">News Right Sidebar</a>
                    </li>
                    <li>
                      <a href="news-single.html">News Single</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="nav-search">
        <span id="search">
          <i className="fa fa-search"></i>
        </span>
      </div>

      <div className="search-block" style={{ display: "none" }}>
        <label htmlFor="search-field" className="w-100 mb-0">
          <input
            type="text"
            className="form-control"
            id="search-field"
            placeholder="Type what you want and enter"
          />
        </label>
        <span className="search-close">&times;</span>
      </div>
    </div>
  </div>
);
