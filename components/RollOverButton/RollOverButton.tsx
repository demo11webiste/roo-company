import s from "./rollover.module.scss";

type Props = {
  children: string;
};

const RollOverButton: React.FC<Props> = ({ children }) => {
  return (
    <button className={s.main}>
      <svg className={s.outline}>
        <rect x="1" y="1" rx="5" ry="5"></rect>
        <rect x="1" y="1" rx="5" ry="5"></rect>
      </svg>

      {children}
    </button>
  );
};

export default RollOverButton;
