import Image from "next/image";
import s from "./team.module.scss";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

type Props = {
  bgChange?: boolean;
};

const Team: React.FC<Props> = ({ bgChange = false }) => {
  const [activeCard, setActiveCard] = useState<number>(2);

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

  return (
    <>
      <section data-bg={bgChange} className={s.main}>
        <div className={s.container}>
          <h5>the roo SEARCH team</h5>
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
                transform: `translateX(calc( -280px * ${activeCard}))`,
              }}
              className={s.grid}
            >
              {[...Array(6)].map((e, i) => {
                return (
                  <div
                    onClick={() => setActiveCard(i)}
                    data-active={i === activeCard}
                    data-position={i % 2 === 0}
                    key={i}
                    className={s.card}
                  >
                    <div data-active={i === activeCard} className={s.card_img}>
                      <Image
                        src={`/team/partner-${0}.png`}
                        alt="partner"
                        fill
                      />
                    </div>
                    <div
                      data-active={i === activeCard}
                      className={s.card_content}
                    >
                      <h2>Nate DaPore</h2>
                      <h3>CEO</h3>
                      <div>
                        <HiOutlineMail />
                        <Link href="#">nate.dapore@gmail.com</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
