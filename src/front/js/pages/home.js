import React from "react";
import  world_map3 from "../../img/world_map3.jpeg";
import "../../styles/home.css";

export const Home = () => {
	//const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>This is the Home Page</h1>
				<p>
					<img src={world_map3} alt="World Map" style={{ width: '100%', height: 'auto' }} />
				</p>
		</div>
	);
};