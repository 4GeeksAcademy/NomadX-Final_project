import React from "react";
import { Link } from "react-router-dom";
import MyMap from "../component/leaflet";
import "../../styles/profileUserMap.css";

export const ProfileUserMap = () => {

    return (

        <div>
            <MyMap />
        <div className="profileUserMapDiv">
            <h1>This is the Profile User Map View</h1>
        </div>
        </div>
    );
};