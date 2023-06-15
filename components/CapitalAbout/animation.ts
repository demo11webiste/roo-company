import { Circ, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type SplitType from "split-type";

type Heading = {
  mainHeading: SplitType;
  stageHeading: SplitType;
};

export const animation = (heading: Heading) => {
  gsap.registerPlugin(ScrollTrigger);

  //hero

  gsap
    .timeline()
    .from(heading.mainHeading.lines, {
      y: 150,
      stagger: 0.2,
      delay: 0.5,
      ease: Circ.easeOut,
      clipPath: "inset(0 0 100% 0)",
      duration: 1,
    })
    .from(".main-small", { opacity: 0 })
    .from(".main-para-1", { opacity: 0 }, "<0.2")
    .from(".main-para-2", { opacity: 0 }, "<0.2");

  //stage

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".stage",
        markers: false,
      },
    })
    .from(heading.stageHeading.lines, {
      y: 150,
      stagger: 0.2,
      delay: 0.5,
      ease: Circ.easeOut,
      clipPath: "inset(0 0 100% 0)",
    })
    .from(".stage-small", { opacity: 0 })
    .from(".stage-grid", { opacity: 0 })
    .from(".stage-card-heading", { opacity: 0 }, "<0.2")
    .from(".stage-card-price", { opacity: 0 }, "<0.2")
    .from(".stage-card-para", { opacity: 0 }, "<0.2");

  // say

  gsap.from(".say-small", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".say",
      start: "top 80%",
    },
  });

  for (let i = 0; i < 6; i++) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.say-card-${i}`,
          start: "top 80%",
          markers: false,
        },
      })
      .to(`.border-${i}`, {
        strokeDashoffset: 0,
        duration: 1,
      })
      .from(`.say-card-image-${i}`, { opacity: 0 }, "<0.4")
      .from(`.say-card-content-${i}`, { opacity: 0 }, "<0.2");
  }
};
