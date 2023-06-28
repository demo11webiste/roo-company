import { Circ, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type SplitType from "split-type";

export const animation = (heading: SplitType) => {
  gsap.registerPlugin(ScrollTrigger);

  //hero

  gsap
    .timeline()
    .from(heading.lines, {
      y: 150,
      stagger: 0.2,
      ease: Circ.easeOut,
      clipPath: "inset(0 0 100% 0)",
      duration: 0.8,
    })
    .from(".main-small", { opacity: 0 })
    .from(".main-para-1", { opacity: 0 }, "<0.2")
    .from(".main-para-2", { opacity: 0 }, "<0.2");

  // contentGrid

  gsap
    .timeline({
      scrollTrigger: {
        trigger: `.contentGrid`,
        start: "top 80%",
        markers: false,
      },
    })
    .from(".contentGrid-head", { opacity: 0 })
    .from(".contentGrid-para", { opacity: 0 }, "<0.2");

  //card

  for (let i = 0; i < 3; i++) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.circle-${i}`,
          start: "top 80%",
          markers: false,
        },
      })
      .to(`.border-${i}`, {
        strokeDashoffset: 0,
        duration: 1,
      })
      .from(`.border-head-${i}`, { opacity: 0 }, "<0.2")
      .from(`.border-para-${i}`, { opacity: 0 }, "<0.2")
      .from(`.para-one-${i}`, { opacity: 0 }, "<0.4")
      .from(`.para-two-${i}`, { opacity: 0 }, "<0.2");
  }
};
