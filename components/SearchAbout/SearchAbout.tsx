import Image from "next/image";
import s from "./about.module.scss";
import { circleData, contentData } from "./data";
import Footer from "../Footer/Footer";
import Link from "next/link";
import RollOverButton from "../RollOverButton/RollOverButton";
import SvgGradient from "../SvgGradient/SvgGradient";
import { useRef } from "react";
import useGsapContext from "@/hooks/useGsapContext";
import useLayout from "@/hooks/useLayout";
import { animation } from "./animation";
import SplitType from "split-type";

const SearchAbout = () => {
  const root = useRef<HTMLElement>(null);

  const ctx = useGsapContext(root);

  useLayout(() => {
    const mainHeading = SplitType.create("#main-heading");
    ctx.add(() => animation(mainHeading));
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={root} className={s.main}>
        <div className={s.container}>
          <div className={s.hero}>
            <h5 className="main-small">WHO WE ARE</h5>
            <h1 id="main-heading">Growth. The cornerstone of Roo Search.</h1>
            <div className={s.hero_box}>
              <p className="main-para-1">
                At Roo Search, we are incredibly proud to be involved with
                high-growth, innovative companies that touch the lives of
                millions of people. As former operators we have a deep
                understanding of the unique challenges and opportunities that
                your organization faces.
              </p>
              <p className="main-para-2">
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
                  <div key={i} className={`${s.circle} circle-${i}`}>
                    <svg>
                      <SvgGradient />
                      <circle className={`border-${i}`} />
                    </svg>
                    <h2 className={`border-head-${i}`} style={{ color }}>
                      {i + 1}
                    </h2>
                    <h3 className={`border-para-${i}`}>{title}</h3>
                  </div>
                );
              })}
            </div>
            <div className={`${s.contentGrid} contentGrid`}>
              <div className={s.headContent}>
                <h2 className="contentGrid-head">
                  Experience the Roo Difference
                </h2>
                <p className="contentGrid-para">
                  Our unique process is designed for efficiency and proven to
                  deliver results within a compressed time frame.
                </p>
              </div>
              {contentData.map(({ paraOne, paraTwo }, i) => {
                return (
                  <div key={i} className={s.content}>
                    <p className={`para-one-${i}`}>{paraOne}</p>
                    <p className={`para-two-${i}`}>{paraTwo}</p>
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
              <RollOverButton>Read More</RollOverButton>
            </div>
            <div className={s.bottom_img}>
              <div>
                <Link href="/roo-search-industries/health-logo">
                  <Image src="/health-logo.png" fill alt="health-logo" />
                </Link>
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
