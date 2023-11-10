import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const { setUser, user } = useStateContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  // Function for registarion through google 
  const googleAuth = () => {
    window.open(`https://google-auth-nl-api.vercel.app/auth/google/callback`, "_self");
  };

  // Function for manual regsitration
  const registerUser = () => {
    // If name, email or pasword not filled
	if(!name || !email || !password){
		toast.error("Please fill all inputs 😢")
		return;
	}
  // start the loading
    setLoading(true);
    axios
      .post("https://google-auth-nl-api.vercel.app/auth/signup", { name, email, password })
      .then((res) => {
        setLoading(false);  // stop the loading
        setUser(res.data?.content?.data);  // setting up the user in context
        localStorage.setItem("access_token", res.data?.meta?.access_token)  // setting up the token in localstorage
        navigate("/");  // Navigating to the home page
      })
      .catch((err) => {
        setLoading(false);  // stop the loading
		console.log(err.response.data.error)
		toast.error(`${err?.response?.data?.error}. Password sould be 6 char long contains one lowercase, uppercase, number and special cha`)
      });
  };
  return (
	<>
	<ToastContainer />

    <div className={styles.container}>
      <h1 className={styles.heading}>Sign up Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/signup.jpg" alt="signup" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Create Account</h2>
          <input
            type="text"
            className={styles.input}
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className={styles.input}
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={styles.input}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.btn} onClick={registerUser}>
		  {loading? 'Signing in...' : 'Sign In'}
          </button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sing up with Google</span>
          </button>
          <p className={styles.text}>
            Already Have Account ? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
	</>

  );
}

export default Signup;
