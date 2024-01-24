interface Props {
  buttonText: string;
}

const Button = ({ buttonText }: Props) => {
  return (
    <>
      <button type="button" className="btn btn-primary ">
        {buttonText}
      </button>
    </>
  );
};

export default Button;
