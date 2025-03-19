import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { ProfileFeed } from "./pages/profileFeed";
import { ProfileUserMap } from "./pages/profileUserMap";
import { Faq } from "./pages/faq";
import { ContactUs } from "./pages/contactUs";
import { MeetTheTeam } from "./pages/meetTheTeam";
import { CreatePost } from "./pages/createPost"
import { HowToUse } from "./pages/howToUse";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Sign_up } from "./pages/sign_up";
import { Login } from "./pages/login";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    const [mapCenter, setMapCenter] = React.useState([39.8283, -98.5795]);
    const [mapZoom, setMapZoom] = React.useState(4);

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar  setMapCenter={setMapCenter} setMapZoom={setMapZoom} />
                    <Routes>
                        <Route element={<Home mapCenter={mapCenter} mapZoom={mapZoom} />} path="/" />
                        <Route element={<ProfileFeed />} path="/profile-feed" />
                        <Route element={<ProfileUserMap mapCenter={mapCenter} mapZoom={mapZoom} />} path="/profile-user-map" />
                        <Route element={<Faq />} path="/faq" />
                        <Route element={<ContactUs />} path="/contact-us" />
                        <Route element={<MeetTheTeam />} path="/meet-the-team" />
                        <Route element={<CreatePost mapCenter={mapCenter} mapZoom={mapZoom} />} path="/create-post" />
                        <Route element={<HowToUse />} path="/instructions" />
                        <Route element={<Single />} path="/single" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Sign_up />} path="/sign_up" />
                        <Route element={<Login />} path="/login" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);