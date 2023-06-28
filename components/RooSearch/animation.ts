import { Circ, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type SplitType from "split-type";

type Heading = {
  mainHeading: SplitType;
  contentHeading: SplitType;
};

export const animation = (heading: Heading) => {
  gsap.registerPlugin(ScrollTrigger);

  //icon

  gsap.to(".icon", { y: -30, repeat: -1, yoyo: true, duration: 0.6 });

  gsap.to(".icon", {
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: ".feature",
      start: "top 80%",
      markers: false,
      toggleActions: "play none none reverse",
    },
  });

  //main

  gsap.from(heading.mainHeading.lines, {
    y: 150,
    stagger: 0.2,
    delay: 0.5,
    ease: Circ.easeOut,
    clipPath: "inset(0 0 100% 0)",
    duration: 1,
  });

  //responsive animation

  if (innerWidth >= 600) {
    //desktop

    //content head
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".content-head",
          markers: false,
          start: "top-=80% center",
        },
        defaults: {
          duration: 2,
        },
      })
      .to(`.border-0`, {
        strokeDashoffset: 0,
        duration: 1,
      })
      .from(
        heading.contentHeading.lines,
        {
          y: 150,
          stagger: 0.2,
          delay: 0.5,
          ease: Circ.easeOut,
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
        },
        "<0.2"
      )
      .from(".circle-content-0", { opacity: 0 }, "<0.3")
      .from(".content-head-para", { opacity: 0 }, "<0.4")
      .from(".content-head-button", { opacity: 0 }, "<0.2");

    //content

    for (let i = 0; i < 2; i++) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.content-box-${i}`,
            markers: false,
            start: "top-=80% center",
          },
          defaults: {
            duration: 2,
          },
        })
        .to(`.border-${i + 1}`, {
          strokeDashoffset: 0,
          duration: 1,
        })
        .from(`.circle-content-${i + 1}`, { opacity: 0 }, "<0.3")
        .from(`.content-box-heading-${i}`, { opacity: 0 }, "<0.4")
        .from(`.content-box-para-${i}`, { opacity: 0 }, "<0.2");
    }

    for (let i = 0; i < 2; i++) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.content-box-${i + 2}`,
            markers: false,
            start: "top-=80% center",
          },
          defaults: {
            duration: 2,
          },
        })
        .from(`.content-box-heading-${i + 2}`, { opacity: 0 })
        .from(`.content-box-para-${i + 2}`, { opacity: 0 }, "<0.3");
    }
  } else {
    //mobile

    //content head
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".content-head",
          markers: false,
          start: "top center",
        },
        defaults: {
          duration: 2,
        },
      })
      .from(
        heading.contentHeading.lines,
        {
          y: 150,
          stagger: 0.2,
          delay: 0.5,
          ease: Circ.easeOut,
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
        },
        "<0.2"
      )
      .from(".content-head-para", { opacity: 0 }, "<0.4")
      .from(".content-head-button", { opacity: 0 }, "<0.2");

    //content

    for (let i = 0; i < 4; i++) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.content-box-${i}`,
            markers: false,
            start: "top center",
          },
          defaults: {
            duration: 2,
          },
        })
        .from(`.content-box-heading-${i}`, { opacity: 0 })
        .from(`.content-box-para-${i}`, { opacity: 0 }, "<0.3");
    }

    for (let i = 0; i < 3; i++) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.circle-${i}`,
            markers: false,
            start: "top center",
          },
          defaults: {
            duration: 2,
          },
        })
        .to(`.border-${i + 1}`, {
          strokeDashoffset: 0,
          duration: 1,
        })
        .from(`.circle-content-${i}`, { opacity: 0 }, "<0.3");
    }
  }
};
