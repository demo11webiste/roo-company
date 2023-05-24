import Image from "next/image";
import s from "./footer.module.scss";
import { IoLogoLinkedin } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={s.main}>
      <div className={s.container}>
        <div className={s.upper}>
          <div className={s.side1}>
            <div className={s.side1_img}>
              <Image src="/roo-search-logo.png" alt="logo" fill />
            </div>
            <p>3250 Mary Street</p>
            <p>Suite 500A</p>
            <p>Coconut Grove, FL 33133</p>
            <p>+1 786-322-4859</p>
          </div>
          <div className={s.side2}>
            <h5>executive search</h5>
            <p> About Roo Search</p>
            <p>Industries We Serve</p>
            <p>Meet Our Team</p>
            <p>Contact Us</p>
          </div>
          <div className={s.side3}>
            <h5>Subscribe</h5>
            <p>Stay in-touch with Roo</p>
            <div className={s.side3_input}>
              <input placeholder="Email" type="text" />
              <button>
                <RiArrowRightSLine />
              </button>
            </div>
            <p> Roo Search is a division of Roo Partners</p>
            <p>www.roopartners.com</p>
          </div>
        </div>
        <div className={s.lower}>
          <p>© 2023 Roo Partners, Inc. – ALL RIGHTS RESERVED Privacy Policy</p>
          <IoLogoLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
