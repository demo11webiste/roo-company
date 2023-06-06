import Image from "next/image";
import s from "./about.module.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { useRef } from "react";
import useGsapContext from "@/hooks/useGsapContext";
import useLayout from "@/hooks/useLayout";
import { animation } from "./animation";
import SplitType from "split-type";

const CapitalAbout = () => {
  //references

  const root = useRef<HTMLElement>(null);

  const ctx = useGsapContext(root);

  useLayout(() => {
    const mainHeading = SplitType.create("#main-heading");
    const stageHeading = SplitType.create("#stage-heading");

    const heading = { mainHeading, stageHeading };

    ctx.add(() => animation(heading));
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={s.bg}>
        <section ref={root} className={s.main}>
          <div className={s.box}>
            <h4 className="main-small">WHO WE ARE</h4>
            <h1 id="main-heading">
              We strive to support the bold in building legendary companies.
            </h1>
            <p className="main-para-1">
              As operators, we respect founder partnerships and value a
              company’s unique culture, firmly believe it is the ultimate
              differentiator. We invest in teams who challenge the status quo,
              disrupting their fields and transforming their industries.
            </p>
            <p className="main-para-2">
              Roo Capital is actively pursuing investment opportunities in
              early-stage tech and software companies where our formula of
              Capital + Talent + Growth can be implemented in partnership with
              founders.
            </p>
          </div>
          <div className={`${s.stage} stage`}>
            <h4 className="stage-small">EARLY STAGE</h4>
            <h1 id="stage-heading">
              Providing support for key initiatives through Pre-Seed, Seed,
              Series A and Series B.
            </h1>
            <div className={`${s.stage_grid} stage-grid`}>
              {[...Array(2)].map((e, i) => {
                return (
                  <div key={i} className={s.stage_card}>
                    <h2 className="stage-card-heading">Joey</h2>
                    <h3 className="stage-card-price">$100,000 - $1M</h3>
                    <p className="stage-card-para">
                      Pre-Seed and Seed, SAFE Notes or Priced Rounds working
                      towards product market fit, planning go to market
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${s.sayGrid} say`}>
            <h4 className="say-small">WHAT THEY’RE SAYING</h4>
            {[...Array(6)].map((e, i) => {
              return (
                <div
                  key={i}
                  data-flex={i % 2 == 0 ? false : true}
                  className={`${s.sayCard} say-card-${i}`}
                >
                  <div className={`${s.sayCard_box} say-card-content-${i}`}>
                    <h4>
                      “Abore et im laboris nisi ut aliquip ex ea abore et
                      commodo m laboris ore et im laboris nisi ut aliquip exea
                      ab. Loral min abore et im laboris nisi ut aliquip ex ea
                      abor”
                    </h4>
                    <p>– FIRSTNAME LASTNAME, COMPANY</p>
                  </div>
                  <div className={`say-card-border-${i} ${s.sayCard_img}`}>
                    <div className={`say-card-image-${i}`}>
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
