import "./Login.scss";
import Button from "../../components/button/Button"

const Login = () => {
  return (
    <div className="main">
      <div className="login">
          <div className="top">
            <span className="title">Admin Login</span>
          </div>
          <div className="center">
            <input type="text" id="username" className="inputbox" />
            <input type="text" id="password" className="inputbox"/>
          </div>
          <div className="bottom">
            <Button title="Login" className="loginbtn"/>
          </div>
      </div>
    </div>
  );
};

export default Login;
