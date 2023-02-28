import "./Button.css";

function Button(props) {
  const clickHandler = () => {
    props.whenPressed(true);
  };

  return (
    <button className="button" type="submit" onClick={clickHandler}>
      {props.name}
    </button>
  );
}

export default Button;
