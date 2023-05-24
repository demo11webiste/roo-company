type goalsType = {
  heading: string;
  desc: string;
  color: string;
};

type commonType = {
  heading: string;
  desc: string;
};

export const goalsData: goalsType[] = [
  {
    heading: "Capital",
    desc: "Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna sed do.",
    color: "rgba(247, 146, 40, 0.3)",
  },
  {
    heading: "Growth",
    desc: "Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna sed do.",
    color: "rgba(192, 16, 64, 0.3)",
  },
  {
    heading: "Talent",
    desc: "Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna sed do.",
    color: "rgba(150, 55, 143, 0.3)",
  },
];

export const circleData: commonType[] = [
  {
    heading: "60<span>+</span/>",
    desc: "amet, consectetur adipis icing elit, sed do eiusmod tempor",
  },
  {
    heading: "25<span>m</span/>",
    desc: "amet, consectetur adipis icing elit, sed do eiusmod tempor",
  },
  {
    heading: "80<span>%</span/>",
    desc: "amet, consectetur adipis icing elit, sed do eiusmod tempor",
  },
];

export const cardData: commonType[] = [
  {
    heading: "Pre-seed",
    desc: "Pre-seedRoo Capital admires the vision and tenacity of today’s founders. Embarking on the journey during the pre-seed round allows us to partner from the ground up working with potentially disruptive concepts and ideas, propelling them towards milestones such as product-market fit.",
  },
  {
    heading: "Seed",
    desc: "With product-market fit defined, Roo Capital thrives on the opportunity to support Seed stage start-ups in transforming prototypes and MVPs into functioning products all while fleshing out their go to market strategy.    ",
  },
  {
    heading: "Series A",
    desc: "As founders and prior operators ourselves, Roo Capital developed a balanced formula of capital, talent and growth to support startups at a critical inflection point in their trajectory. With the resources to scale, we look to partner with entrepreneurs that are ready to focus on revenue growth through accelerated development, streamlined operational strategies, and compelling branding & marketing plans.    ",
  },
  {
    heading: "Series B",
    desc: "Growth is a cornerstone of Roo Capital’s approach to venture capitalism. We bring to our partnerships dedicated teams aimed at infusing startups with tried-and-true tools to sustain expansion, finesse strategies and identify key talent to fill critical executive roles.",
  },
];
