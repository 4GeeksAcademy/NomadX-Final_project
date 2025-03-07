import React from "react";
import { Link } from "react-router-dom";
import "../../styles/howToUse.css";

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
                                Feel free to create an account or browse without one.
                                Don't worry, you'll always remain anonymous.
                            </p>
                            <Link to="/sign_up">
                                <button type="button" className="btn">Create Account😊</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">2. Browse Content by City</h5>
                            <br></br>
                            <p className="card-text">On the homepage, you'll be able to discover posts in the city you're currently at or use the search bar to search by city. Just press click and you'll be able to see a feed from that city/area.</p>
                            <Link to="/">
                                <button type="button" className="btn">Go Home🏠</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">3. Like, Comment, Mark as Favorite</h5>
                            <br></br>
                            <p className="card-text">No matter if you like, comment, or mark a post as a favorite, it'll always be anonymously.</p>
                            <Link to="/">
                                <button type="button" className="btn">Discover Travelers Near You🌍</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">4. Profile Section</h5>
                            <br></br>
                            <p className="card-text">In your profile, you'll be able to see your own posts categorized by city, along with the posts you've marked as favorites.</p>
                            <Link to="/profile-feed">
                                <button type="button" className="btn">Go to Profile👤</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">5. Profile User Map</h5>
                            <br></br>
                            <p className="card-text">In this section, you'll be able to interact with you're individualized map and see everywhere you've been in the world! </p>
                            <Link to="/profile-user-map">
                                <button type="button" className="btn">Go to Your Map🗺️</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">6. Create a Post</h5>
                            <br></br>
                            <p className="card-text">Use one of our writing topics, give your trip a name, and write whatever you want about it! Also, don't forget to rate the city/place.</p>
                            <Link to="/create-post">
                                <button type="button" className="btn">Post📝</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">7. Anymore Questions?</h5>
                            <br></br>
                            <p className="card-text">If you have any other questions, feel free to check out our FAQ page.</p>
                            <Link to="/faq">
                                <button type="button" className="btn">FAQ ℹ️</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// steps 2 and 3 could be separated. 