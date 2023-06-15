import Image from "next/image";
import s from "./about.module.scss";
import { circleData, contentData } from "./data";
import Footer from "../Footer/Footer";

const SearchAbout = () => {
  return (
    <>
      <section className={s.main}>
        <div className={s.container}>
          <div className={s.hero}>
            <h5>WHO WE ARE</h5>
            <h1>Growth. The cornerstone of Roo Search.</h1>
            <div className={s.hero_box}>
              <p>
                At Roo Search, we are incredibly proud to be involved with
                high-growth, innovative companies that touch the lives of
                millions of people. As former operators we have a deep
                understanding of the unique challenges and opportunities that
                your organization faces.
              </p>
              <p>
                The core of our philosophy is cultivating deep relationships.
                Specializing in Digital Health, Healthcare and Technology, our
                team has built extensive networks and experience recruiting for
                a variety of C-Suite positions, including CEO, COO, CFO, CIO,
                CMO, and CTO.
              </p>
            </div>
          </div>
          <div className={s.mainGrid}>
            <div className={s.cirlceGrid}>
              {circleData.map(({ title, color }, i) => {
                return (
                  <div key={i} className={s.circle}>
                    <div />
                    <h2 style={{ color }}>{i + 1}</h2>
                    <h3>{title}</h3>
                  </div>
                );
              })}
            </div>
            <div className={s.contentGrid}>
              <div className={s.headContent}>
                <h2>Experience the Roo Difference</h2>
                <p>
                  Our unique process is designed for efficiency and proven to
                  deliver results within a compressed time frame.
                </p>
              </div>
              {contentData.map(({ paraOne, paraTwo }, i) => {
                return (
                  <div key={i} className={s.content}>
                    <p>{paraOne}</p>
                    <p>{paraTwo}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.bottom_box}>
            <div className={s.bottom_content}>
              <h5>CASE STUDY</h5>
              <div>
                <h4>ALLYALIGN HEALTH </h4>
                <h1>The Science of Matching People to Jobs</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <button>Read More</button>
            </div>
            <div className={s.bottom_img}>
              <div>
                <Image src="/health-logo.png" fill alt="health-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer isCapital={false} />
    </>
  );
};

export default SearchAbout;
