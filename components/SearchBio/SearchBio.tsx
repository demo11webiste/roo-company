import s from "./bio.module.scss";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Image from "next/image";
import Footer from "../Footer/Footer";

type Props = {
  bgChange: boolean;
};

const SearchBio: React.FC<Props> = ({ bgChange }) => {
  return (
    <>
      <section data-bg={bgChange} className={s.main}>
        <div className={s.container}>
          <div className={s.head}>
            <h5>the roo SEARCH team</h5>
            <button>BACK TO LIST</button>
          </div>
          <div className={s.grid}>
            <div className={s.img}>
              <Image src="/team/partner.png" fill alt="team-member" />
            </div>
            <div className={s.detail}>
              <div className={s.detail_head}>
                <h1>First Name</h1>
                <h2>Title</h2>
              </div>
              <div className={s.detail_contact}>
                <div>
                  <HiOutlineMail />
                  <p>nate.dapore@roopartners.com</p>
                </div>
                <div>
                  <FaPhoneSquareAlt />
                  <p>843-607-8601</p>
                </div>
                <div>
                  <FaLinkedinIn />
                  <p>linkedin.com/in/natedapore</p>
                </div>
              </div>
              <div className={s.detail_content}>
                <p>
                  Nate leads executive searches for boards of directors, CEOs,
                  C-suite leaders, and their direct reports in the technology,
                  health care, and private equity markets. He brings over 20
                  years of experience as a private equity investor and operating
                  partner, a software expert, and entrepreneur, having founded
                  two successful startups.
                </p>
                <p>
                  Most recently, Nate was a managing director of Battery Park,
                  where he advised middle market health care and technology
                  companies and was deployed as an operating partner focused on
                  executive recruitment and operational improvements for private
                  equity firms.
                </p>
                <p>
                  Nate spent the preceding seven years as founder and CEO of
                  venture-backed workforce management SaaS company PeopleMatter,
                  serving global brands such as McDonald’s, Texas Roadhouse, BP,
                  and Shell. Earlier in his career, Nate was part of the
                  executive team as vice president of enterprise sales at
                  Benefitfocus (NASDAQ: BNFT) from its rise as a startup to
                  becoming the largest benefits-enrollment software provider in
                  the U.S.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchBio;
