import Image from "next/image";
import { circleData, contentData } from "./data";
import s from "./search.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef } from "react";
import { store } from "@/store";
import Footer from "../Footer/Footer";
import useGsapContext from "@/hooks/useGsapContext";
import useLayout from "@/hooks/useLayout";
import { animation } from "./animation";
import SplitType from "split-type";
import SvgGradient from "../SvgGradient/SvgGradient";
import RollOverButton from "../RollOverButton/RollOverButton";

const RooSearch = () => {
  //references
  const root = useRef<HTMLElement>(null);

  const ctx = useGsapContext(root);

  useLayout(() => {
    const mainHeading = SplitType.create("#main-heading");
    const contentHeading = SplitType.create("#content-head-heading");

    const heading = { mainHeading, contentHeading };

    ctx.add(() => animation(heading));

    return () => ctx.revert();
  });

  useEffect(() => {
    store.NavbarLogoSwitch = "search";
  }, []);
  return (
    <>
      <section ref={root} className={s.main}>
        <div className={s.container}>
          <div className={s.hero}>
            <h1 id="main-heading">
              We help businesses thrive at every stage of growth by finding
              great leaders.
            </h1>
            <IoIosArrowDown className="icon" />
          </div>

          <div className={`${s.grid} feature`}>
            <div className={s.contentGrid}>
              <div className={`${s.head} content-head`}>
                <h2 id="content-head-heading">
                  The right talent will keep your organization moving forward
                  and running at peak performance.
                </h2>
                <p className="content-head-para">
                  Our insight and operator experience builds businesses by
                  industry expertise, and talent management.
                </p>
                <div className="content-head-button">
                  <RollOverButton>Read More</RollOverButton>
                </div>
              </div>
              {contentData.map(({ desc, title }, i) => {
                return (
                  <div key={i} className={`${s.content} content-box-${i}`}>
                    <h3 className={`content-box-heading-${i}`}>{title}</h3>
                    <p className={`content-box-para-${i}`}>{desc}</p>
                  </div>
                );
              })}
            </div>
            <div className={s.circleGrid}>
              {circleData.map(({ desc, title }, i) => {
                return (
                  <div key={i} className={`${s.circle} circle-${i}`}>
                    <svg>
                      <SvgGradient />
                      <circle className={`border-${i}`} />
                    </svg>
                    <h1 className={`circle-content-${i}`}>{title}</h1>
                    <p className={`circle-content-${i}`}>{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.bottom_box}>
            <h5>INDUSTRy expertise</h5>
            <h1>Better talent. Better relationships.</h1>
            <div className={s.bottomGrid}>
              <div data-close className={s.cover}>
                <div className={s.box}>
                  <div className={s.box_img}>
                    <Image src="/florence-logo.png" fill alt="logo" />
                  </div>
                  <h5>florence</h5>
                </div>
                <div data-change className={s.box}>
                  <div className={s.box_img}>
                    <Image src="/fetcher-logo.png" fill alt="logo" />
                  </div>
                  <h5>fetcher</h5>
                </div>
              </div>
              <div data-active className={s.box}>
                <div data-active className={s.box_img}>
                  <Image src="/health-logo.png" fill alt="logo" />
                </div>
                <h5>digital health</h5>
                <h4>
                  “Abore et im laboris nisi ut aliquip ex ea abore et commodo
                  laboris ore et im laboris nisi ut quip exea ab. Loral min
                  abore et laboris nisi ut aliquip ex ea abor”
                </h4>
                <p>– FIRSTNAME LASTNAME, COMPANY</p>
                <button>Read More</button>
              </div>

              <div className={s.cover}>
                <div className={s.box}>
                  <div className={s.box_img}>
                    <Image src="/tempmee-logo.png" fill alt="logo" />
                  </div>
                  <h5>tempmee</h5>
                </div>

                <div data-change className={s.box}>
                  <div className={s.box_img}>
                    <Image src="/firebolt-logo.png" fill alt="logo" />
                  </div>
                  <h5>firebolt</h5>
                </div>

                <div data-close className={s.box}>
                  <div data-close className={s.box_img}>
                    <Image src="/onchain-logo.png" fill alt="logo" />
                  </div>
                  <h5>onchain</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer isCapital={false} />
    </>
  );
};

export default RooSearch;
