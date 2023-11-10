import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { setUser, user } = useStateContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  // Function for login through google 
  const googleAuth = () => {
    window.open(`https://google-auth-nl-api.vercel.app/auth/google/callback`, "_self");
  };

  // Function for manual login 
  const loginUser = () => {
    // If email or password is not filled
	if(!email || !password){
		toast.error("Please fill all inputs 😢")
		return;
	}
  // start the loading
    setLoading(true);
    axios
      .post("https://google-auth-nl-api.vercel.app/auth/signin", { email, password })
      .then((res) => {
        setLoading(false);  // stop the loading
        setUser(res.data?.content?.data);  // setting up user in context
        localStorage.setItem("access_token", res.data?.meta?.access_token)  // setting up token in local storage
        navigate("/"); // Navigating to home page 
      })
      .catch((err) => {
        setLoading(false);  // stop the loading
		  toast.error(`${err?.response?.data?.error}`)
      });
  };
  return (
	<>
	<ToastContainer />
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/login.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Members Log in</h2>
          <input
            type="text"
            className={styles.input}
            value={email}
            placeholder="Email"
			required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className={styles.input}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.btn} onClick={loginUser}>
            {loading? 'Loging in...' : 'Log In'}
          </button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sing in with Google</span>
          </button>
          <p className={styles.text}>
            New Here ? <Link to="/signup">Sing Up</Link>
          </p>
        </div>
      </div>
    </div>
	</>
  );
}

export default Login;
