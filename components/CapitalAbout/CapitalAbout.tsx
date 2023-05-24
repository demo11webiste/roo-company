import Image from "next/image";
import s from "./about.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../Footer/Footer";

const CapitalAbout = () => {
  return (
    <>
      <div className={s.bg}>
        <section className={s.main}>
          <div className={s.box}>
            <h4>WHO WE ARE</h4>
            <h1>
              We strive to support the bold in building legendary companies.
            </h1>
            <p>
              As operators, we respect founder partnerships and value a
              company’s unique culture, firmly believe it is the ultimate
              differentiator. We invest in teams who challenge the status quo,
              disrupting their fields and transforming their industries.
            </p>
            <p>
              Roo Capital is actively pursuing investment opportunities in
              early-stage tech and software companies where our formula of
              Capital + Talent + Growth can be implemented in partnership with
              founders.
            </p>
          </div>
          <div className={s.stage}>
            <h4>EARLY STAGE</h4>
            <h1>
              Providing support for key initiatives through Pre-Seed, Seed,
              Series A and Series B.
            </h1>
            <div className={s.stage_grid}>
              {[...Array(2)].map((e, i) => {
                return (
                  <div key={i} className={s.stage_card}>
                    <h2>Joey</h2>
                    <h3>$100,000 - $1M</h3>
                    <p>
                      Pre-Seed and Seed, SAFE Notes or Priced Rounds working
                      towards product market fit, planning go to market
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={s.sayGrid}>
            <h4>WHAT THEY’RE SAYING</h4>
            {[...Array(6)].map((e, i) => {
              return (
                <div
                  key={i}
                  data-flex={i % 2 == 0 ? false : true}
                  className={s.sayCard}
                >
                  <div className={s.sayCard_box}>
                    <h4>
                      “Abore et im laboris nisi ut aliquip ex ea abore et
                      commodo m laboris ore et im laboris nisi ut aliquip exea
                      ab. Loral min abore et im laboris nisi ut aliquip ex ea
                      abor”
                    </h4>
                    <p>– FIRSTNAME LASTNAME, COMPANY</p>
                  </div>
                  <div className={s.sayCard_img}>
                    <div>
                      <Image
                        src="/florence-logo.png"
                        fill
                        alt="florence-logo"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className={s.member}>
          <div className={s.member_box}>
            <div className={s.member_img}>
              <Image src="/partner.png" fill alt="partner" />
            </div>
            <div className={s.member_content}>
              <h1>Capital + Growth + Talent</h1>
              <h5>
                “I’m excited to introduce to you Roo Capital, a global advisory
                and investment firm – with industry insights and an experienced
                team that are second to none. Lorem iut labore et dolore magna
                aliqua. Ut enim ad min abore et im laboris nisi ut aliquip ex ea
                abore et commodo”
              </h5>
              <p>– NATE DAPORE, CEO</p>
              <button>
                MEET THE TEAM <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CapitalAbout;
