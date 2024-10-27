import React, { useState } from "react";
import Modal from "./Modal";

const AuthModals = () => {
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [isRegisterOpen, setIsRegisterOpen] = useState(false);

	// Login form state
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	// Register form state
	const [registerName, setRegisterName] = useState("");
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
		console.log("Logging in with:", { loginEmail, loginPassword });
		setIsLoginOpen(false); // Close modal after login
	};

	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		// Handle registration logic here
		if (registerPassword !== registerConfirmPassword) {
			alert("Passwords do not match");
			return;
		}
		console.log("Registering user:", {
			registerName,
			registerEmail,
			registerPassword,
		});
		setIsRegisterOpen(false); // Close modal after registration
	};

	return (
		<div className="auth-modals">
			<button
				className="btn btn-primary"
				onClick={() => setIsLoginOpen(true)}
			>
				Login
			</button>
			<button
				className="btn btn-success"
				onClick={() => setIsRegisterOpen(true)}
			>
				Register
			</button>

			{/* Login Modal */}
			<Modal
				isOpen={isLoginOpen}
				onClose={() => setIsLoginOpen(false)}
				title="Login"
			>
				<form onSubmit={handleLoginSubmit}>
					<div className="form-group">
						<label>Email:</label>
						<input
							type="email"
							value={loginEmail}
							onChange={(e) => setLoginEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input
							type="password"
							value={loginPassword}
							onChange={(e) => setLoginPassword(e.target.value)}
							required
						/>
					</div>
					<button className=" modal-btn btn btn-primary" type="submit">
						Login
					</button>
				</form>
			</Modal>

			{/* Register Modal */}
			<Modal
				isOpen={isRegisterOpen}
				onClose={() => setIsRegisterOpen(false)}
				title="Register"
			>
				<form onSubmit={handleRegisterSubmit}>
					<div className="form-group">
						<label>Name:</label>
						<input
							type="text"
							value={registerName}
							onChange={(e) => setRegisterName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input
							type="email"
							value={registerEmail}
							onChange={(e) => setRegisterEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input
							type="password"
							value={registerPassword}
							onChange={(e) => setRegisterPassword(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Confirm Password:</label>
						<input
							type="password"
							value={registerConfirmPassword}
							onChange={(e) => setRegisterConfirmPassword(e.target.value)}
							required
						/>
					</div>
					<button className="btn modal-btn btn-primary" type="submit">
						Register
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default AuthModals;
