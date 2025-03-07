import React from "react";
import world_map3 from "../../img/world_map3.jpeg";
import "../../styles/home.css";
import { Modal } from "../component/modal";
import MyMap from "../component/leaflet";
import { Tutorial } from "../component/tutorial.js";


export const Home = () => {
	//const { store, actions } = useContext(Context);

	return (
		<div>
			<MyMap />
		<div className="text-center homePage">
			<div className="divForModals">
				<Modal/>
				<MyMap/>
				<Tutorial/>
			</div>
		</div>


	);
};