import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import logo from "../../img/logo.jpeg";
import "../../styles/navbar.css";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Navbar = ({ setMapCenter, setMapZoom }) => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]); 
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [user, setUser] = useState(null);
    console.log(user);
    const [isLoading, setIsLoading] = useState(false);
	const { store, actions } = useContext(Context);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        console.log("useEffect running, token:", token);
        if (token) {
            setIsLoading(true);
            fetch(`${process.env.BACKEND_URL}/api/profile`, {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("User Data:", data);
                    if (data && data.id) {
                        setUser(data);
                    } else {
                        setUser(null);
                    }
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching profile:", error);
                    setUser(null);
                    setIsLoading(false);
                });
        } else {
            setUser(null);
        }
    }, [store.token]);

    const logout = () => {
        localStorage.removeItem("access_token");
        setUser(null);
        navigate("/login");
		alert("Logged out! Time to go live your best life (offline).")
    };

    const handleSelectCountry = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setMapCenter([selectedOption.value.lat, selectedOption.value.lon]);
        setMapZoom(5);
    };

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const countryList = data
                    .map((country) => ({
                        label: country.name.common,
                        value: { lat: country.latlng[0], lon: country.latlng[1] },
                    }))
                    .sort((a, b) => a.label.localeCompare(b.label));
                setCountries(countryList);
            })
            .catch((error) => console.error("Error fetching countries:", error));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/">
                    <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
                </Link>
                <span className="brandName">NomadX</span>

                {countries && (
                    <Select
                        options={countries}
                        value={selectedCountry}
                        onChange={handleSelectCountry}
                        placeholder="Search Posts by Country Here"
                        isSearchable={true}
                        isClearable={true}
                        classNamePrefix="select"
                        className="form-control me-2 search-bar"
                    />
                )}
                
                {isLoading ? (
                    <span>Loading...</span>
                ) : user ? (
                    <>
                        <h6 className="mx-2">Hi Nomad!</h6> {/* Add Hi Nomad when logged in */}
                        <Link to="/create-post">
                            <button type="button" className="metallic-button">Post</button> {/* Add Post button when logged in */}
                        </Link>
                        <button className="metallic-button mx-2" onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">
                        <button type="button" className="metallic-button">Login!</button> {/* Remove Login when logged in */}
                    </Link>
                )}

                {/* Dropdown */}
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <Link to="/" className="dropdown-item">Home</Link>
                        {user && ( //  Conditionally render profile and user map
                            <>
                                <Link to="/profile-feed" className="dropdown-item">Profile</Link>
                                <Link to="/profile-user-map" className="dropdown-item">User Map</Link>
                            </>
                        )}
                        <Link to="/instructions" className="dropdown-item">User Guide</Link>
                        {user && (
                            <Link to="/" className="dropdown-item" onClick={logout}>Logout</Link>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};