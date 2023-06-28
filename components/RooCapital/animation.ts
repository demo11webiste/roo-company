import { Circ, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

type AnimationType = {
  mainHeading: SplitType;
  featureHeading: SplitType;
  contentHeading: SplitType;
};

export const animation = (heading: AnimationType) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(heading.mainHeading.lines, { clipPath: "inset(0 0 0 0)" });

  //icon

  gsap.to(".icon", {
    y: -30,
    color: "rgb(247, 146, 40)",
    border: "1px solid rgb(247, 146, 40)",
    repeat: -1,
    yoyo: true,
    duration: 0.6,
    delay: 2,
  });

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

  // hero animation

  gsap.timeline().from(heading.mainHeading.lines, {
    y: 150,
    stagger: 0.2,
    delay: 0.5,
    ease: Circ.easeOut,
    clipPath: "inset(0 0 100% 0)",
    duration: 1,
  });

  //feature animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".feature",
        start: "top 80%",
        markers: false,
      },
    })

    .from(heading.featureHeading.lines, {
      y: 150,
      stagger: 0.2,
      delay: 0.5,
      ease: Circ.easeOut,
      clipPath: "inset(0 0 100% 0)",
      duration: 1,
    })
    .from(".feature-box", { opacity: 0, duration: 0.6 }, "<0.5")
    .from(".feature-heading", {
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
    })
    .from(".feature-text", { opacity: 0, stagger: 0.2, duration: 0.6 }, "<0.2");

  //border & content animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".content-box",
        markers: false,
        start: "top+=200 80%",
      },
    })
    .to(".border-0", {
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
    .from(".content-box-para", { opacity: 0 }, "<0.4")
    .from(".content-box-button", { opacity: 0 }, "<");

  // responsive gsap animation

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".card-box-2",
        markers: false,
        start: "top center",
      },
    })
    .from(".card-heading-2", { opacity: 0 }, "<0.4")
    .from(".card-para-2", { opacity: 0 }, "<0.3");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".card-box-3",
        markers: false,
        start: "top bottom",
      },
    })
    .from(".card-heading-3", { opacity: 0 }, "<0.4")
    .from(".card-para-3", { opacity: 0 }, "<0.3");

  if (innerWidth >= 600) {
    //desktop

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".card-box-0",
          markers: false,
          start: "top 80%",
        },
        defaults: {
          duration: 2,
        },
      })
      .to(".border-1", {
        strokeDashoffset: 0,
        duration: 1,
      })
      .from(".circle-content-1", { opacity: 0 }, "<0.2")
      .from(".card-heading-0", { opacity: 0 }, "<0.4")
      .from(".card-para-0", { opacity: 0 }, "<0.3");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".card-box-1",
          markers: false,
          start: "top center",
        },
      })
      .to(".border-2", {
        strokeDashoffset: 0,
        duration: 1,
      })
      .from(".circle-content-2", { opacity: 0 }, "<0.2")
      .from(".card-heading-1", { opacity: 0 }, "<0.4")
      .from(".card-para-1", { opacity: 0 }, "<0.3");
  } else {
    //mobile

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".border-1",
          start: "top center",
          markers: false,
        },
      })
      .to(".border-1", {
        strokeDashoffset: 0,
        duration: 1,
      })
      .from(".circle-content-1", { opacity: 0 }, "<0.2");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".border-2",
          start: "top center",
          markers: false,
        },
      })
      .to(".border-2", {
        strokeDashoffset: 0,
        duration: 1,
      })
      .from(".circle-content-2", { opacity: 0 }, "<0.2");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".card-box-1",
          markers: false,
          start: "top center",
        },
      })
      .from(".card-heading-1", { opacity: 0 })
      .from(".card-para-1", { opacity: 0 }, "<0.3");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".card-box-0",
          markers: false,
          start: "top center",
        },
      })
      .from(".card-heading-0", { opacity: 0 })
      .from(".card-para-0", { opacity: 0 }, "<0.3");
  }

  //spotlight animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".spotlight",
        markers: false,
        start: "top center",
      },
    })
    .to(".spotlight-border", { strokeDashoffset: 0 });
};
