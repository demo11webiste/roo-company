import Image from "next/image";
import s from "./carousel.module.scss";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import TeamCard from "../TeamCard/TeamCard";
import BrandCard from "../BrandCard/BrandCard";

const brandLogo = [
  "/fetcher-logo.png",
  "/tempmee-logo.png",
  "/florence-logo.png",
  "/tempmee-logo.png",
  "/firebolt-logo.png",
  "/onchain-logo.png",
];

type Props = {
  bgChange?: boolean;
  cardType: "team" | "brand" | "industry";
};

const Team: React.FC<Props> = ({ bgChange = false, cardType }) => {
  const [activeCard, setActiveCard] = useState<number>(2);
  const [screenWidth, setScreenWidth] = useState<number>(700);

  const { push } = useRouter();

  const handleNext = () => {
    if (activeCard < 5) {
      setActiveCard((prev) => prev + 1);
    } else {
      setActiveCard(0);
    }
  };

  const handlePrev = () => {
    if (activeCard > 0) {
      setActiveCard((prev) => prev - 1);
    } else {
      setActiveCard(5);
    }
  };

  useEffect(() => {
    const getInnerWidth = () => {
      setScreenWidth(innerWidth);
    };
    getInnerWidth();
    window.addEventListener("resize", getInnerWidth);
    return () => window.removeEventListener("resize", getInnerWidth);
  }, []);

  const handleClick = (id: number) => {
    setActiveCard(id);

    if (activeCard === id || screenWidth <= 600) {
      if (cardType === "team") {
        push(`/roo-capital-team/${id}`);
      } else if (cardType === "brand") {
        push(`/roo-capital-portfolio/${id}`);
      } else {
        push(`/roo-search-industries/${id}`);
      }
    }
  };

  return (
    <>
      <section data-bg={bgChange} className={s.main}>
        <div className={s.container}>
          <h5>
            {cardType === "team"
              ? "the roo SEARCH team"
              : cardType === "brand"
              ? "our portfolio"
              : "industry expertise"}
          </h5>
          <div className={s.gridControl}>
            <button onClick={handlePrev} data-left className={s.controlBtn}>
              <IoIosArrowBack />
            </button>
            <button onClick={handleNext} className={s.controlBtn}>
              <IoIosArrowForward />
            </button>

            <div className={s.bullets}>
              {[...Array(6)].map((e, i) => {
                return (
                  <div
                    data-active={i === activeCard}
                    className={s.bullet}
                    key={i}
                    onClick={() => setActiveCard(i)}
                  />
                );
              })}
            </div>

            <div
              style={{
                transform: `translateX(calc( -280px * ${
                  screenWidth <= 600 ? 0 : activeCard
                }))`,
              }}
              className={s.grid}
            >
              {cardType === "team"
                ? [...Array(6)].map((e, i) => {
                    return (
                      <TeamCard
                        activeCard={activeCard}
                        handleClick={handleClick}
                        id={i}
                        key={i}
                      />
                    );
                  })
                : cardType === "brand"
                ? brandLogo.map((e, i) => {
                    return (
                      <BrandCard
                        contentChange={false}
                        activeCard={activeCard}
                        handleClick={handleClick}
                        id={i}
                        img={e}
                        key={i}
                      />
                    );
                  })
                : [...Array(6)].map((e, i) => {
                    return (
                      <BrandCard
                        contentChange
                        activeCard={activeCard}
                        handleClick={handleClick}
                        id={i}
                        key={i}
                      />
                    );
                  })}
            </div>
          </div>
        </div>
      </section>
      {/* <Footer isCapital={bgChange} /> */}
    </>
  );
};

export default Team;
