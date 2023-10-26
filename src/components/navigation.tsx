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
                <li className="nav-item active">
                  <a className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About Us</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">What we do?</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">Testimonials</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">Contacts</a>
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
