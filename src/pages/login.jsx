import { Link } from "react-router-dom";
import "./login.css";

const login = () =>{
    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Login here</h3>
              <span className="loginDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="loginRight">
              <form className="loginBox">
                <input
                  placeholder="Email"
                  type="email"
                  required
                  className="loginInput"
                  
                />
                <input
                  placeholder="Password"
                  type="password"
                  required
                  minLength="6"
                  className="loginInput"
                  
                />
                <Link to="/dashboard" className="linkTag">
                    <button className="loginButton" type="submit" >
                    {"Login in"}
                    </button>
                
                </Link>
                
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">
                  {"Create a new account"}
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default login;

