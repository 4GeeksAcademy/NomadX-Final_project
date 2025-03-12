import React from "react";
import "../../styles/home.css";
import { Modal } from "../component/modal";
import MyMap from "../component/leaflet";
import { Tutorial } from "../component/tutorial.js";


export const Home = () => {
	//const { store, actions } = useContext(Context);

	return (

		<div className="text-center_homePage">

		<div>
		<div className="text-center homePage">

			<div className="divForModals">
				<MyMap/>
				<Tutorial/>
			</div>
		</div>
		</div>

	);
};