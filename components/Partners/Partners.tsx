import Image from "next/image";
import s from "./partners.module.scss";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import useGsapContext from "@/hooks/useGsapContext";
import { Power2, Power4, gsap } from "gsap";
import { useRouter } from "next/router";
import { store } from "@/store";

const Partners = () => {
  const { push } = useRouter();

  const root = useRef<HTMLElement>(null);
  const [tlOne, setTlOne] = useState<GSAPTimeline>();
  const [tlTwo, setTlTwo] = useState<GSAPTimeline>();
  const [tlMobileOne, setTlMobileOne] = useState<GSAPTimeline>();
  const [tlMobileTwo, setTlMobileTwo] = useState<GSAPTimeline>();
  const [leftSideState, setLeftSideState] = useState<boolean>(true);
  const [rightSideState, setRightSideState] = useState<boolean>(true);
  const [mobileLeftSideState, setMobileLeftSideState] = useState<boolean>(true);
  const [mobileRightSideState, setMobileRightSideState] =
    useState<boolean>(true);

  const ctx = useGsapContext(root);

  useEffect(() => {
    ctx.add(() => {
      gsap
        .timeline()
        .from(".logo", { scale: 0 })
        .to(".logo", {
          y: -60,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
        })
        .from(".shadow", { opacity: 0 }, "<")
        .from(".content", { opacity: 0 })
        .from(".heading-1", { opacity: 0 })
        .from(".heading-2", { opacity: 0 }, "<");

      const tl = gsap
        .timeline()
        .set(".pinkSide", { zIndex: 1 })
        .set(".purpleSide", { zIndex: 2 })
        .to(".content", { opacity: 0 })
        .from(
          ".heading-1",
          {
            border: "1px solid #f79228",
            color: "#f79228",
          },
          "<"
        )
        .to(".purpleSide", { width: "70%" }, "<")
        .from(".content-img-1", { opacity: 0 }, "<0.1")
        .from(".para-1", { opacity: 0 }, "<0.2")
        .from(".btn-1", { opacity: 0 }, "<");
      setTlOne(tl);

      const tltwo = gsap
        .timeline()
        .set(".purpleSide", { zIndex: 1 })
        .set(".pinkSide", { zIndex: 2 })
        .to(".content", { opacity: 0 })
        .from(
          ".heading-2",
          {
            border: "1px solid #f79228",
            color: "#f79228",
          },
          "<"
        )
        .to(".pinkSide", { width: "70%" }, "<")
        .from(".content-img-2", { opacity: 0 }, "<0.1")
        .from(".para-2", { opacity: 0 }, "<0.2")
        .from(".btn-2", { opacity: 0 }, "<");
      setTlTwo(tltwo);

      const mobileTlLeft = gsap
        .timeline()
        .set(".purpleSide", { zIndex: 2 })
        .set(".logo", { zIndex: 4 })
        .to(".logo", { xPercent: 10 })
        .from(".content", { opacity: 0 }, "<")
        .to(".mobile-content-2", { opacity: 0 }, "<")
        .set(".mobile-content-2", { zIndex: 2 })
        .from(".mobile-content-1", { left: "25%" }, "<")
        .from(".mobile-heading-1", {
          border: "1px solid #f79228",
          color: "#f79228",
          width: 125,
          height: 125,
          borderRadius: 999,
        })
        .to(".purpleSide", { width: "100%" }, "<")
        .from(".mobile-content-img-1", { opacity: 0 }, "<0.1")
        .from(".mobile-para-1", { opacity: 0 }, "<0.2")
        .from(".mobile-btn-1", { opacity: 0 }, "<");

      setTlMobileOne(mobileTlLeft);

      const mobileTlRight = gsap
        .timeline()
        .set(".pinkSide", { zIndex: 2 })
        .set(".logo", { zIndex: 4 })
        .to(".logo", { left: "-10%" })
        .from(".content", { opacity: 0 }, "<")
        .to(".mobile-content-1", { opacity: 0 }, "<")
        .set(".mobile-content-1", { zIndex: 2 })
        .from(".mobile-content-2", { left: "75%" }, "<")
        .from(".mobile-heading-2", {
          border: "1px solid #f79228",
          color: "#f79228",
          width: 125,
          height: 125,
          borderRadius: 999,
        })
        .to(".pinkSide", { width: "100%" }, "<")
        .from(".mobile-content-img-2", { opacity: 0 }, "<0.1")
        .from(".mobile-para-2", { opacity: 0 }, "<0.2")
        .from(".mobile-btn-2", { opacity: 0 }, "<");

      setTlMobileTwo(mobileTlRight);
    });
    return () => ctx.revert();
  }, [ctx]);

  useEffect(() => {
    tlOne?.reversed(leftSideState);
  }, [tlOne, leftSideState]);

  useEffect(() => {
    tlTwo?.reversed(rightSideState);
  }, [tlTwo, rightSideState]);

  useEffect(() => {
    tlMobileOne?.reversed(mobileLeftSideState);
  }, [tlMobileOne, mobileLeftSideState]);

  useEffect(() => {
    tlMobileTwo?.reversed(mobileRightSideState);
  }, [tlMobileTwo, mobileRightSideState]);

  useEffect(() => {
    store.NavbarLogoSwitch = "partner";
  }, []);

  return (
    <section ref={root} className={s.main}>
      <div className={`${s.purpleSide} purpleSide`} />
      <div className={`${s.pinkSide} pinkSide`} />
      <div
        onClick={() => {
          setMobileLeftSideState(true);
          setMobileRightSideState(true);
        }}
        className={`logo ${s.logo}`}
      />
      <div className={`shadow ${s.shadow}`} />

      <div className={`mobile-content-1 ${s.mobileContent}`}>
        <div className={`${s.content_img} mobile-content-img-1 `}>
          <Image src="/roo-capital-logo.png" fill alt="roo-capital" />
        </div>
        <h6
          onClick={() => setMobileLeftSideState(false)}
          className="mobile-heading-1"
        >
          venture capital
        </h6>
        <p className="mobile-para-1">
          Roo Capital supports key initiatives of early-stage businesses, by
          providing the capital for pre-seed, seed, Series A and Series B stage
          growth.
        </p>
        <Button
          handleClick={() => push("/roo-capital")}
          className="mobile-btn-1"
        >
          www.roocapital.com
        </Button>
      </div>

      <div className={`mobile-content-2 ${s.mobileContent}`}>
        <div className={`${s.content_img} mobile-content-img-2 `}>
          <Image src="/roo-search-logo.png" fill alt="roo-capital" />
        </div>
        <h6
          onClick={() => setMobileRightSideState(false)}
          className="mobile-heading-2"
        >
          executive search
        </h6>
        <p className="mobile-para-2">
          From placing a CEO, CFO, CRO or CIO to building a Board of Directors,
          Roo Search understandsthat the right candidate should not only have
          the right experience, but should fit the firm’s culture and vision.
        </p>
        <Button
          handleClick={() => push("/roo-search")}
          className="mobile-btn-2"
        >
          www.roosearch.com
        </Button>
      </div>

      <div className={`content ${s.centerContent}`}>
        <h1>Capital + Growth + Talent</h1>
        <p>
          The right capital and growth strategy can inspire, accelerate, and
          keep your organization moving forward.
        </p>
      </div>
      <div className={s.container}>
        <div
          onPointerLeave={() => setLeftSideState(true)}
          className={`${s.content} content-1`}
        >
          <div className={`${s.content_img} content-img-1`}>
            <Image src="/roo-capital-logo.png" fill alt="roo-capital" />
          </div>
          <h6
            onPointerEnter={() => setLeftSideState(false)}
            className="heading-1"
          >
            venture capital
          </h6>
          <p className="para-1">
            Roo Capital supports key initiatives of early-stage businesses, by
            providing the capital for pre-seed, seed, Series A and Series B
            stage growth.
          </p>
          <Button handleClick={() => push("/roo-capital")} className="btn-1">
            www.roocapital.com
          </Button>
        </div>
        <div
          onPointerLeave={() => setRightSideState(true)}
          className={`${s.content} content-2`}
        >
          <div className={`${s.content_img} content-img-2`}>
            <Image src="/roo-search-logo.png" fill alt="roo-search" />
          </div>
          <h6
            onPointerEnter={() => setRightSideState(false)}
            className="heading-2"
          >
            executive search
          </h6>
          <p className="para-2">
            From placing a CEO, CFO, CRO or CIO to building a Board of
            Directors, Roo Search understandsthat the right candidate should not
            only have the right experience, but should fit the firm’s culture
            and vision.
          </p>
          <Button handleClick={() => push("/roo-search")} className="btn-2">
            www.roosearch.com
          </Button>
        </div>
      </div>
      <div className={s.footer}>
        <div>
          <p>&copy; 2023 Roo Partners, Inc. – ALL RIGHTS RESERVED</p>
          <p>
            3250 Mary Street | Suite 500A | Coconut Grove, FL 33133 | +1
            786-322-4859
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
