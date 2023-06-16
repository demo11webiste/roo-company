import Image from "next/image";
import s from "./card.module.scss";
import RollOverButton from "../RollOverButton/RollOverButton";

type Props = {
  handleClick: (id: number) => void;
  id: number;
  activeCard: number;
  img: string;
};

const BrandCard: React.FC<Props> = ({ img, activeCard, handleClick, id }) => {
  return (
    <div
      data-active={id === activeCard}
      data-position={id % 2 === 0}
      onClick={() => handleClick(id)}
      className={s.main}
    >
      <div className={s.tag}>
        <p>Florence</p>
      </div>
      <div className={s.main_logo}>
        <Image src={img} alt="brand-logo" fill />
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
    </div>
  );
};

export default BrandCard;
