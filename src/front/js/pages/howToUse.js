import React from "react";
import { Link } from "react-router-dom";
import "../../styles/howToUse.css";
import "../../styles/index.css";


export const HowToUse = () => {

    return (
        <div className="container_howToUse">
            <h1 className="text-center">Welcome to NomadX</h1>
            <p className="text-center"><i>An anonymous social media platform!</i></p>
            <div className="row same-height-cards">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">1. Sign up, Sign in, or Not!</h5>
                            <br></br>
                            <p className="card-text">
                                Get started your way! Create an account to unlock all features, or explore
                                NomadX anonymously. Your privacy is always protected.
                            </p>
                            <Link to="/sign_up">
                                <button type="button" className="metallic-button">Sign up✍️</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">2. Browse Content by Country</h5>
                            <br></br>
                            <p className="card-text">
                                Explore travel stories by location! Discover posts from your current
                                country on the homepage, or use the search bar to find content
                                from anywhere in the world. Simply click to view the feed.
                            </p>
                            <Link to="/">
                                <button type="button" className="metallic-button">Go Home🏠</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">3. Mark Posts as Favorites</h5>
                            <br></br>
                            <p className="card-text">
                            Privately mark posts as favorites to save them for later. Your selections are kept anonymous.
                            </p>
                            <Link to="/">
                                <button type="button" className="metallic-button">Explore Nearby🧭</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">4. Profile Section</h5>
                            <br></br>
                            <p className="card-text">
                                Your profile is your personal travel journal! View your posts
                                organized by country and access your saved favorites.
                            </p>
                            <Link to="/profile-feed">
                                <button type="button" className="metallic-button">View My Profile👤</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">5. Profile User Map</h5>
                            <br></br>
                            <p className="card-text">
                                Visualize your travels! Explore your personalized map
                                and see all the places you've visited.
                            </p>
                            <Link to="/profile-user-map">
                                <button type="button" className="metallic-button">See My Map🗺️</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">6. Create a Post</h5>
                            <br></br>
                            <p className="card-text">
                                Share your travel stories. Choose a topic and write about
                                your experience. Don't forget to rate the location!
                            </p>
                            <Link to="/create-post">
                                <button type="button" className="metallic-button">Create Post📝</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">7. Still have questions?</h5>
                            <br></br>
                            <p className="card-text">Find answers on our FAQ page.</p>
                            <Link to="/faq">
                                <button type="button" className="metallic-button">View FAQs ℹ️</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="button-wrapper">
                    <Link to="/">
                        <button className="metallic-button" type="button">Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
