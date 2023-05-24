import Image from "next/image";
import Button from "../Button/Button";
import { cardData, circleData, goalsData } from "./data";
import s from "./roo.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";
import { store } from "@/store";
import Footer from "../Footer/Footer";

const RooCapital = () => {
  useEffect(() => {
    store.NavbarLogoSwitch = "capital";
  }, []);
  return (
    <>
      <section className={s.main}>
        <div className={s.heading}>
          <h1>
            We grow businesses by providing capital, talent and industry
            expertise.
          </h1>
          <div className={s.icon}>
            <IoIosArrowDown />
          </div>
        </div>
        <div className={s.gridContent}>
          <h3>
            Whether it is the leadership we place or the capital we provide, our
            goal is to keep your organization moving forward.
          </h3>
          <div className={s.grid}>
            {goalsData.map(({ color, desc, heading }, i) => {
              return (
                <div
                  key={i}
                  className={s.grid_box}
                  style={{ backgroundColor: color }}
                >
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div data-mobile className={s.box}>
          <h1>More than capital, we invest resources and expertise.</h1>
          <p>
            What makes Roo Capital unique is our breadth of operator expertise
            and our ability to swiftly and strategically provide the optimal
            resources to transformative companies. Everything we do is oriented
            toward making your firm run at peak performance.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className={s.gridControl}>
          <div className={s.gridCircle}>
            {circleData.map(({ desc, heading }, i) => {
              return (
                <div key={i} className={s.circleRadius}>
                  <div className={s.circle}>
                    <h1 dangerouslySetInnerHTML={{ __html: heading }} />
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={s.content}>
            <div data-desktop className={s.box}>
              <h1>More than capital, we invest resources and expertise.</h1>
              <p>
                What makes Roo Capital unique is our breadth of operator
                expertise and our ability to swiftly and strategically provide
                the optimal resources to transformative companies. Everything we
                do is oriented toward making your firm run at peak performance.
              </p>
              <Button>Learn More</Button>
            </div>
            {cardData.map(({ desc, heading }, i) => {
              return (
                <div key={i} className={s.card}>
                  <h3>{heading}</h3>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.spotlight}>
          <h2>PORTFOLIO SPOTLIGHT</h2>
          <div className={s.spotlightControl}>
            <div className={s.spotlight_circle}>
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
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RooCapital;
