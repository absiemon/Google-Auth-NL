import { useEffect } from "react";
import styles from "./styles.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		// If there is a token in locastorage then remove it
		localStorage.getItem("access_token") && localStorage.removeItem("access_token")
		window.open(`https://google-auth-nl-api.vercel.app/auth/logout`, "_self");  // Logging out the user
	};

	useEffect(()=>{
		toast.success("Welcome!!")
	},[])
	return (
		<>
		<ToastContainer/>
		<div className={styles.container}>
			<h1 className={styles.heading}>Home</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/profile.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Profile</h2>
					<img
						src={user?.picture}
						alt="profile"
						className={styles.profile_img}
					/>
					<input
						type="text"
						defaultValue={user.name}
						className={styles.input}
						placeholder="UserName"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className={styles.input}
						placeholder="Email"
					/>
					<button className={styles.btn} onClick={logout}>
						Log Out
					</button>
				</div>
			</div>
		</div>
		</>
	);
}

export default Home;
