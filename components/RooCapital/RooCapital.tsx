import Image from "next/image";
import { cardData, circleData, goalsData } from "./data";
import s from "./roo.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef } from "react";
import { store } from "@/store";
import Footer from "../Footer/Footer";
import useGsapContext from "@/hooks/useGsapContext";
import useLayout from "@/hooks/useLayout";
import SplitType from "split-type";
import { animation } from "./animation";
import RollOverButton from "../RollOverButton/RollOverButton";
import SvgGradient from "../SvgGradient/SvgGradient";
import Link from "next/link";

const RooCapital = () => {
  useEffect(() => {
    store.NavbarLogoSwitch = "capital";
  }, []);

  const root = useRef<HTMLElement>(null);

  const ctx = useGsapContext(root);

  useLayout(() => {
    const mainHeading = SplitType.create("#main-heading");
    const featureHeading = SplitType.create("#feature-heading");
    const contentHeading = SplitType.create("#content-box-heading");

    const heading = { mainHeading, featureHeading, contentHeading };

    ctx.add(() => animation(heading));
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={root} className={s.main}>
        <div className={s.heading}>
          <h1 id="main-heading">
            We grow businesses by providing capital, talent and industry
            expertise.
          </h1>
          <div className={`icon ${s.icon}`}>
            <IoIosArrowDown />
          </div>
        </div>
        <div className={`${s.gridContent} feature`}>
          <h3 id="feature-heading">
            Whether it is the leadership we place or the capital we provide, our
            goal is to keep your organization moving forward.
          </h3>
          <div className={`${s.grid}`}>
            {goalsData.map(({ color, desc, heading }, i) => {
              return (
                <div
                  key={i}
                  className={`${s.grid_box} feature-box`}
                  style={{ backgroundColor: color }}
                >
                  <h2 className="feature-heading">{heading}</h2>
                  <p className="feature-text">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div data-mobile className={`${s.box} content-box`}>
          <h1 id="content-box-heading">
            More than capital, we invest resources and expertise.
          </h1>
          <p className="content-box-para">
            What makes Roo Capital unique is our breadth of operator expertise
            and our ability to swiftly and strategically provide the optimal
            resources to transformative companies. Everything we do is oriented
            toward making your firm run at peak performance.
          </p>
          <button className={`${s.btn} content-box-button`}>Learn More</button>
        </div>
        <div className={s.gridControl}>
          <div className={`${s.gridCircle} circle`}>
            {circleData.map(({ desc, heading }, i) => {
              return (
                <div key={i} className={s.circleRadius}>
                  <svg>
                    <SvgGradient />
                    <circle className={`border-${i}`} />
                  </svg>
                  <div className={`${s.circle} circle-content-${i} `}>
                    <h1 dangerouslySetInnerHTML={{ __html: heading }} />
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={s.content}>
            <div data-desktop className={`${s.box} content-box`}>
              <h1 id="content-box-heading">
                More than capital, we invest resources and expertise.
              </h1>
              <p className="content-box-para">
                What makes Roo Capital unique is our breadth of operator
                expertise and our ability to swiftly and strategically provide
                the optimal resources to transformative companies. Everything we
                do is oriented toward making your firm run at peak performance.
              </p>
              <div className="content-box-button">
                <RollOverButton>Learn More</RollOverButton>
              </div>
              {/* <button className={`${s.btn} content-box-button`}>
                Learn More
              </button> */}
            </div>
            {cardData.map(({ desc, heading }, i) => {
              return (
                <div key={i} className={`${s.card} card-box-${i}`}>
                  <h3 className={`card-heading-${i}`}>{heading}</h3>
                  <p className={`card-para-${i}`}>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${s.spotlight} spotlight`}>
          <Link href="/roo-capital-portfolio">
            <h2>PORTFOLIO SPOTLIGHT</h2>
          </Link>
          <div className={s.spotlightControl}>
            <div className={s.spotlight_circle}>
              <svg>
                <circle className="spotlight-border" />
              </svg>
              <div className={s.spotlight_circle_logo}>
                <Image fill src="/florence-logo.png" alt="logo" />
              </div>
            </div>
            <div className={s.spotlightContent}>
              <h3>
                Florence raises $35m (£28.5m) series B funding to revolutionise
                social care
              </h3>
              <p>
                Florence is a leading tech-enabled healthcare staffing platform
                in the UK that specializes in addressing the growing need to
                staff, manage, and train post-acute and long-term care temporary
                healthcare workers.
              </p>
              <div>
                <RollOverButton>Read More</RollOverButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RooCapital;
