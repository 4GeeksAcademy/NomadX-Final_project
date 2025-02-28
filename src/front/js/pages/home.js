import React from "react";
import  world_map3 from "../../img/world_map3.jpeg";
import "../../styles/home.css";
import { Modal } from "../component/modal";
import MyMap from "../component/leaflet";


export const Home = () => {
	//const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Modal/>
			<MyMap/>
		</div>
	);
};