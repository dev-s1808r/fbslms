import React from "react";

function LoginGoogle() {
	const handleLoginWithGoogle = () => {
		window.open("http://localhost:8000/api/v1/auth/google", "_self");
	};

	return (
		<div className="Login">
			<h1>Wait!</h1>
			<button onClick={handleLoginWithGoogle}>Sign in with Google</button>
		</div>
	);
}

export default LoginGoogle;
