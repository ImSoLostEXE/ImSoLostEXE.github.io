import { Fragment } from "react/jsx-runtime";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

export const Button = ({ children, color, onClick }: Props) => {
  return (
    <Fragment>
      <div>
        <button
          className={"btn btn-outline-" + color + " btn-lg"}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </Fragment>
  );
};
