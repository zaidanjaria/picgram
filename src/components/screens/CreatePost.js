import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Config from "../../config";
import M from "materialize-css";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [image, setImage] = useState("");
	const [url, setUrl] = useState("");
	const history = useHistory();

    useEffect( () => {
        if(url){
            CreatePostReq();
        }
    },[url]);

	const postDetails = () => {
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "picgram");
		data.append("cloud_name", Config.CloudName);

		fetch(Config.CloudUrl, {
			method: "post",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUrl(data.secure_url);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const CreatePostReq = () => {
		console.log("phto ", url);
		fetch("/posts/create", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("jwt") || "",
			},
			body: JSON.stringify({
				title,
				body,
				photo: url,
			}),
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.error) {
					M.toast({ html: data.error, classes: "#c62828 red darken-3" });
				} else {
					M.toast({
						html: "Post Created !",
						classes: "#43a047 green darken-1",
					});
					history.push("/");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div
			className="card input-filed"
			style={{
				margin: "30px auto",
				maxWidth: "500px",
				padding: "20px",
				textAlign: "center",
			}}
		>
			<div class="input-field">
				<input
					id="firstname"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label for="firstname">Post Title</label>
			</div>
			<div class="input-field">
				<input
					id="body"
					type="text"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<label for="body">Post Body</label>
			</div>

			<div className="file-field input-field">
				<div className="btn-small blue-grey darken-1">
					<span>
						{" "}
						<i class="material-icons left">file_upload</i> Upload Image
					</span>
					<input
						required
						type="file"
						onChange={(e) => {
							setImage(e.target.files[0]);
						}}
					/>
				</div>
				<div className="file-path-wrapper">
					<input className="file-path validate" type="text" />
				</div>
			</div>
			<button
				className="btn waves-effect waves-light blue-grey darken-2"
				onClick={() => {
					postDetails();
				}}
			>
				Submit
				<i class="material-icons right">send</i>
			</button>
		</div>
	);
};

export default CreatePost;
