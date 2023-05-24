import s from "./button.module.scss";

const Button = ({
  children,
  className,
  handleClick,
}: {
  children: string;
  className?: string;
  handleClick?: () => void;
}) => {
  return (
    <button onClick={handleClick} className={`${s.main} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
