import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
	// Getting the user state from the context
	const { setUser, user } = useStateContext()
	const getUser = async () => {
		try {
			// Getting the token from the local storage
			const token = localStorage.getItem("access_token")
			const url = `http://localhost:8000/auth/me?token=${token}`;
			const { data } = await axios.get(url, { withCredentials: true });

			setUser(data?.content?.data);  // Setting up the user in context
		} catch (err) {
			// toast.error('Error in finding')
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
			</Routes>
		</div>
	);
}

export default App;
