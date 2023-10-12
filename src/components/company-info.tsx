export const CompanyInfo = () => (
  <div className="bg-white">
    <div className="container">
      <div className="logo-area">
        <div className="row align-items-center">
          <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
            <a className="d-block" href="index.html">
              {/* <img loading="lazy" src="images/logo.png" alt="Constra" /> */}
            </a>
          </div>

          <div className="col-lg-9 header-right">
            <ul className="top-info-box">
              <li>
                <div className="info-box">
                  <div className="info-box-content">
                    <p className="info-box-title">Call Us</p>
                    <p className="info-box-subtitle">(+9) 847-291-4353</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="info-box">
                  <div className="info-box-content">
                    <p className="info-box-title">Email Us</p>
                    <p className="info-box-subtitle">office@Constra.com</p>
                  </div>
                </div>
              </li>
              <li className="last">
                <div className="info-box last">
                  <div className="info-box-content">
                    <p className="info-box-title">Global Certificate</p>
                    <p className="info-box-subtitle">ISO 9001:2017</p>
                  </div>
                </div>
              </li>
              <li className="header-get-a-quote">
                <a className="btn btn-primary" href="contact.html">
                  Get A Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
