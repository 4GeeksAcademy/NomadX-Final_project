import React from "react";
import { Link } from "react-router-dom";
import MyMap from "../component/leaflet";
import "../../styles/profileUserMap.css";

export const ProfileUserMap = ({mapCenter, mapZoom}) => {

    return (

        <div>
            <MyMap mapCenter={mapCenter} mapZoom={mapZoom} />
        </div>
        </div>
    );
};