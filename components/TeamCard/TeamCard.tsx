import Image from "next/image";
import s from "./card.module.scss";
import { HiOutlineMail } from "react-icons/hi";

type Props = {
  handleClick: (id: number) => void;
  id: number;
  activeCard: number;
};

const TeamCard: React.FC<Props> = ({ handleClick, id, activeCard }) => {
  return (
    <div
      onClick={() => handleClick(id)}
      data-active={id === activeCard}
      data-position={id % 2 === 0}
      className={s.card}
    >
      <div data-active={id === activeCard} className={s.card_img}>
        <Image src={`/team/${id}.jpg`} alt="partner" fill />
      </div>
      <div data-active={id === activeCard} className={s.card_content}>
        <h2>Nate DaPore</h2>
        <h3>CEO</h3>
        <div>
          <HiOutlineMail />
          <p>nate.dapore@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
