import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [file, setFile] = useState("");
	const [fileUrl, setFileUrl] = useState("");

	const handleImgChange = (e) => {
		if (e.target.files.length) {
			setFile(e.target.files[0])
		}
	};

	const sendFile = async () => {
		if (!file) {
			alert("image field is required");
			return false;
		}
		try {
			const form = new FormData()
			form.append("img",file)

			const response = await fetch(`${process.env.BACKEND_URL}/api/img`,{
				method:"POST",
				body: form
			})
			console.log(response);
			
			const data = await response.json()
			setFileUrl(data.img);
		} catch (error) {}
	};

	return (
		<div className="row m5 bg-secondary bg-opacity-10 p-2">
			<div className="col-10 mb-3">
				<h3 className="m-2">
					Cloudinary Logic Example</h3>
				<input 
					type="file"
					className="form-control mb-2"
					accept=".jpg, .jpeg, .png, .mp4"
					onChange={handleImgChange}
				/>
				<button className="btn btn-primary" onClick={sendFile}>
					Send
				</button>
			</div>
				{fileUrl !== "" ? (
				<div className="col-4">
					<img src={fileUrl} className="w-100 h-100"></img>
				</div>
				) : null}
		</div>
		);
	};