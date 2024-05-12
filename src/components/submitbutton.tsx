

interface Props {
    children: string;
    onClick: () => void;
  }
  
  export const SubmitButton = ({ children, onClick }: Props) => {
    return (
          <button className="btn btn-outline-secondary" type="submit" value="Submit" onClick={onClick}>
            {children}
          </button>
    );
  };