interface Props {
  children: string;
  onButtonClick: (item: string) => void;
}

function Button({ children, onButtonClick }: Props) {
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={onButtonClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
