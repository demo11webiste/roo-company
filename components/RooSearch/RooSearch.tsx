import Image from "next/image";
import { circleData, contentData } from "./data";
import s from "./search.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";
import { store } from "@/store";
import Footer from "../Footer/Footer";

const RooSearch = () => {
  useEffect(() => {
    store.NavbarLogoSwitch = "search";
  }, []);
  return (
    <>
      <section className={s.main}>
        <div className={s.container}>
          <div className={s.hero}>
            <h1>
              We help businesses thrive at every stage of growth by finding
              great leaders.
            </h1>
            <IoIosArrowDown />
          </div>

          <div className={s.grid}>
            <div className={s.contentGrid}>
              <div className={s.head}>
                <h2>
                  The right talent will keep your organization moving forward
                  and running at peak performance.
                </h2>
                <p>
                  Our insight and operator experience builds businesses by
                  industry expertise, and talent management.
                </p>
                <button>Read More</button>
              </div>
              {contentData.map(({ desc, title }, i) => {
                return (
                  <div key={i} className={s.content}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                );
              })}
            </div>
            <div className={s.circleGrid}>
              {circleData.map(({ desc, title }, i) => {
                return (
                  <div key={i} className={s.circle}>
                    <div />
                    <h1>{title}</h1>
                    <p>{desc}</p>
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
      <Footer />
    </>
  );
};

export default RooSearch;
