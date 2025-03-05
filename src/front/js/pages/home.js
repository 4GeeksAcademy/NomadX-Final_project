import React from "react";
import "../../styles/home.css";
import { Modal } from "../component/modal";
import MyMap from "../component/leaflet";
import { Tutorial } from "../component/tutorial.js";


export const Home = () => {
	//const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Modal/>
			<MyMap/>
			<Tutorial/>
		</div>
	);
};