import Image from "next/image";
import s from "./card.module.scss";
import RollOverButton from "../RollOverButton/RollOverButton";

type Props = {
  handleClick: (id: number) => void;
  id: number;
  activeCard: number;
  img?: string;
  contentChange: boolean;
};

const BrandCard: React.FC<Props> = ({
  img,
  activeCard,
  handleClick,
  id,
  contentChange,
}) => {
  return (
    <div
      data-active={id === activeCard}
      data-position={id % 2 === 0}
      data-size={contentChange}
      onClick={() => handleClick(id)}
      className={s.main}
    >
      <div className={s.tag}>
        <p>Florence</p>
      </div>
      {contentChange ? (
        <div className={s.industryCard}>
          <h1>60+</h1>
          <h6 data-active={id === activeCard}>
            amet, consectetur adipisicing elit, sed do eiusmod tempor
          </h6>
          <div data-active={id === activeCard} className={s.industryCard_hide}>
            <p>
              Roo Search’s process of identifying and evaluating highly skilled
              and experienced executives who can lead and manage digital health
              organizations or initiatives to stay ahead of the curve and drive
              innovation in healthcare.
            </p>
            <RollOverButton>Read More</RollOverButton>
          </div>
        </div>
      ) : (
        <>
          <div className={s.main_logo}>
            {img ? <Image src={img} alt="brand-logo" fill /> : <></>}
          </div>
          <div data-active={id === activeCard} className={s.content}>
            <div>
              <h6>STAGE: Venture Capital </h6>
              <h6>LOCATION: London</h6>
              <h6>STATUS: Current</h6>
            </div>
            <p>
              Florence’s free app connects nurses with open shifts, cutting out
              agency middlemen so shifts are filled directly with the right
              temporary staff.
            </p>
            <RollOverButton>Read More</RollOverButton>
          </div>
        </>
      )}
    </div>
  );
};

export default BrandCard;
