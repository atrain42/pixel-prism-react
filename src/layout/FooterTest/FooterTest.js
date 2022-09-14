import "./FooterTest.css";

import design from "../../img/topography.svg";

const FooterTest = () => {
  return (
    <footer className="footer-test">
      <div className="footer-test__content">
        <div>
          <div className="footer-subbox" id="first-subbox">
            <h1>Phone:</h1>
            <h2>(810) - 588 - 3136</h2>
          </div>
          <div className="footer-subbox">
            <h1>Enquiries:</h1>
            <h2>maxheimer4211@gmail.com</h2>
          </div>
        </div>
        <div className="footer-company">
          <span>
            <h1>Pixel Prism</h1>
            <p>
              Let's bridge the gap between art and technology, and take your
              business to the next level. At Pixel Prism, we are here for all
              your website needs.
            </p>
          </span>
          <a href="mailto:pixelprism42@gmail.com">contact</a>
        </div>
      </div>
      <h3 id="copyright">&#xA9; Pixel Invite, 2022. All rights reserved.</h3>
    </footer>
  );
};

export default FooterTest;
