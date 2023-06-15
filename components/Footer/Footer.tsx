import Image from "next/image";
import s from "./footer.module.scss";
import { IoLogoLinkedin } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

type Props = {
  isCapital: boolean;
};

const Footer: React.FC<Props> = ({ isCapital }) => {
  return (
    <footer className={s.main}>
      <div className={s.container}>
        <div className={s.upper}>
          <div className={s.side1}>
            <div className={s.side1_img}>
              {isCapital ? (
                <Link href="/roo-capital">
                  <Image src="/roo-capital-logo.png" alt="logo" fill />
                </Link>
              ) : (
                <Link href="/roo-search">
                  <Image src="/roo-search-logo.png" alt="logo" fill />
                </Link>
              )}
            </div>
            <p>3250 Mary Street</p>
            <p>Suite 500A</p>
            <p>Coconut Grove, FL 33133</p>
            <p>+1 786-322-4859</p>
          </div>
          <div className={s.side2}>
            <h5>executive search</h5>
            <Link href="/roo-search-about">About Roo Search</Link>
            <Link href="/roo-search-industries">Industries We Serve</Link>
            <Link href="/roo-capital-team">Meet Our Team</Link>
            <Link href="/roo-capital-contact">Contact Us</Link>
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
            <Link href="/">www.roopartners.com</Link>
          </div>
        </div>
        <div className={s.lower}>
          <p>
            &copy; 2023 Roo Partners, Inc. – ALL RIGHTS RESERVED{" "}
            <Link href="#">Privacy Policy</Link> designed by moire marketing
            partners
          </p>
          <IoLogoLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
