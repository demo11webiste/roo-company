import Link from "next/link";
import s from "./spotlight.module.scss";
import Image from "next/image";
import Footer from "../Footer/Footer";
import BackIcon from "../BackIcon/BackIcon";

type Props = {
  bgChange: boolean;
};

const Spotlight: React.FC<Props> = ({ bgChange }) => {
  return (
    <>
      <div data-bg={bgChange} className={s.bg}>
        <section className={s.main}>
          <div className={s.header}>
            <h4>our portfolio</h4>
            <Link
              href={
                bgChange ? "/roo-capital-portfolio" : "/roo-search-industries"
              }
            >
              BACK TO LIST
              <BackIcon />
            </Link>
          </div>
          <div className={s.container}>
            <div className={s.outer}>
              <div className={s.outer_img}>
                <Image src="/health-logo.png" fill alt="health-logo" />
              </div>
              <div className={s.outer_content}>
                <h1>
                  “Abore et im laboris nisi ut aliquip ex ea abore et commodo
                  laboris ore et im laboris nisi ut quip exea ab. Loral min
                  abore et laboris nisi ut aliquip ex ea abor”
                </h1>
                <p>– FIRSTNAME LASTNAME, COMPANY</p>
              </div>
            </div>
            <div className={s.inner}>
              <h5>digital health</h5>
              <div className={s.inner_detail}>
                <p>
                  Digital health refers to the use of digital technologies such
                  as mobile apps, wearables, telemedicine, and electronic health
                  records (EHRs) to improve healthcare delivery, patient
                  outcomes, and population health. Executives in this field are
                  responsible for driving innovation, developing and
                  implementing strategies, managing teams, and overseeing
                  day-to-day operations.
                </p>
                <p>
                  Roo Search’s process of Digital Health Executive Search
                  involves identifying the specific skills and experience
                  required for the executive position, conducting a search for
                  potential candidates, assessing their qualifications, and
                  selecting the most suitable candidate for the role. The demand
                  for Digital Health executives is growing rapidly as the
                  healthcare industry increasingly relies on digital
                  technologies to improve efficiency, reduce costs, and enhance
                  patient outcomes. Roo Search specializes in Digital Health and
                  we help organizations identify and recruit the top talent in
                  this field to stay ahead of the curve and drive innovation in
                  healthcare.
                </p>
              </div>
              <div className={s.inner_content}>
                <h4>Case Study</h4>
                <h3>ALLYALIGN HEALTH</h3>

                <h2>The Science of Matching People to Jobs</h2>

                <p>
                  Florence raises $35m (£28.5m) series B funding to
                  revolutionise social care Florence, the UK-based tech
                  innovator for social care, announced it has raised $35 million
                  (£28.5m) through a Series B funding round.
                </p>

                <h3>CAPITAL</h3>
                <p>
                  Florence will use the investment for product expansion to
                  support care in the UK and multiple international markets, and
                  to expand its services beyond elderly care.
                </p>
                <h3>GROWTH</h3>
                <p>
                  Florence raises $35m (£28.5m) series B funding to
                  revolutionise social care Florence, the UK-based tech
                  innovator for social care, announced it has raised $35 million
                  (£28.5m) through a Series B funding round. Florence will use
                  the investment for product expansion to support care in the UK
                  and multiple international markets, and to expand its services
                  beyond elderly care.
                </p>
                <h3>TALENT</h3>
                <p>
                  Florence raises $35m (£28.5m) series B funding to
                  revolutionise social care Florence, the UK-based tech
                  innovator for social care, announced it has raised $35 million
                  (£28.5m) through a Series B funding round. Florence will use
                  the investment for product expansion to support care in the UK
                  and multiple international markets, and to expand its services
                  beyond elderly care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer isCapital={bgChange} />
    </>
  );
};

export default Spotlight;
