export interface ButtonProps {
  onClick?: () => void;
  children: string;
}

export const Button = (props: ButtonProps) => {

  const {
    onClick,
    children
  } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primary px-11 py-4 rounded-md font-bold text-sm"
    >
      {children}
    </button>
  );
};
