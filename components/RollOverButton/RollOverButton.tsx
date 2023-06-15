import { useRouter } from "next/router";
import s from "./rollover.module.scss";

type Props = {
  children: string;
  href?: string;
};

const RollOverButton: React.FC<Props> = ({ children, href }) => {
  const { push } = useRouter();

  const handleClick = () => {
    if (href) push(href);
    console.log("working");
  };

  return (
    <button onClick={handleClick} className={s.main}>
      <svg className={s.outline}>
        <rect x="1" y="1" rx="5" ry="5"></rect>
        <rect x="1" y="1" rx="5" ry="5"></rect>
      </svg>

      {children}
    </button>
  );
};

export default RollOverButton;
