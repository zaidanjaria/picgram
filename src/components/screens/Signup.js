import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signup = () => {
	const history = useHistory();
	const [name, setName] = useState("");
	const [password, setPasword] = useState("");
	const [email, setEmail] = useState("");
	const [image, setImage] = useState("");
	const [url, setUrl] = useState(undefined);
	useEffect(() => {
		if (url) {
			uploadFields();
		}
	}, [url]);
	const uploadPic = () => {
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "new-insta");
		data.append("cloud_name", "cnq");
		fetch("https://api.cloudinary.com/v1_1/cnq/image/upload", {
			method: "post",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => {
				setUrl(data.url);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const uploadFields = () => {
		if (
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			)
		) {
			M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
			return;
		}
		fetch("/signup", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				password,
				email,
				//pic:url
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.error) {
					M.toast({ html: data.error, classes: "#c62828 red darken-3" });
				} else {
					M.toast({
						html: "Sign up successfully "+data.name,
						classes: "#43a047 green darken-1",
					});
					history.push("/signin");
				}
			})
			.catch((err) => {
				console.log('error',err);
			});
	};
	const SignUp = () => {
		if (image) {
			uploadPic();
		} else {
			uploadFields();
		}
	};

	return (
		<div className="mycard">
			<div className="card auth-card input-field">
				<h2>SignUp </h2>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPasword(e.target.value)}
				/>
				<button
					className="btn waves-effect waves-light  blue-grey darken-2"
					onClick={() => SignUp()}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Signup;
