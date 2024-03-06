import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light py-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>
                Copyright &copy; 2024 Your Company Name. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6">
              {/* <ul className="list-unstyled d-flex justify-content-lg-end">
              <li className="mx-2">
                <a href="#" className="text-light">
                  Home
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-light">
                  About Us
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-light">
                  Products
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-light">
                  Contact Us
                </a>
              </li>
            </ul> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
