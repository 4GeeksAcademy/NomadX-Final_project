import React from "react";
import logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export const Navbar = ({setMapCenter, setMapZoom}) => {

	const navigate = useNavigate()
	const [countries, setCountries] = React.useState([]);
	const [selectedCountry, setSelectedCountry] = React.useState(null);



	const logout = () => {
		localStorage.removeItem("access_token");

		navigate("/login");
	}
	const handleSelectCountry = (selectedOption) => {
		setSelectedCountry(selectedOption);
		setMapCenter([selectedOption.value.lat, selectedOption.value.lon]);
		setMapZoom(5);
	};
	React.useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then(response => response.json())
			.then(data => {
				console.log("data", data)
				const countryList = data.map(country => ({
					label: country.name.common,
					value: { lat: country.latlng[0], lon: country.latlng[1] },
				})).sort((a, b) => a.label.localeCompare(b.label));
				console.log("countries", countryList)
				setCountries(countryList);
			})
			.catch(error => console.error("Error fetching countries:", error));
	}, []);
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="#">
						<img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
					</a>
				</Link>
				<span className="brandName">NomadX</span>
				{countries && <Select
					options={countries}
					value={selectedCountry}
					onChange={handleSelectCountry}
					placeholder="Search Posts by City Here"
					isSearchable={true}
					isClearable={true}
					classNamePrefix="select"
					className="form-control me-2 search-bar"
				/>}
				<Link to="/login">
					<button type="button" className="btn btn-secondary m-2">Login!</button>
				</Link>
				<Link to="/create-post">
					<button type="button" className="btn btn-nav">Post</button>
				</Link>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fa-solid fa-ellipsis-vertical"></i>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<Link to="/">
							<li><a className="dropdown-item" href="#">Home</a></li>
						</Link>
						<Link to="/profile-feed">
							<li><a className="dropdown-item" href="#">Profile</a></li>
						</Link>
						<Link to="/instructions">
							<li><a className="dropdown-item" href="#">User Guide</a></li>
						</Link>
						<Link to="/">
							<li><a className="dropdown-item" onClick={logout} href="#">Logout</a></li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
