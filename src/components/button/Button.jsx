import "./Button.scss";
const Button = (props) => {
  return (
    <div className="btn">
      <a href="/">{props.title}</a>
    </div>
  );
};

export default Button;
