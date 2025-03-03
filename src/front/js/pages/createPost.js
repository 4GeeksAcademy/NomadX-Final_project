import React, { useState, useEffect } from "react";
import "../../styles/createPost.css";

export const CreatePost = () => {
    //const { store, actions } = useContext(Context);
    const [newEntry, setNewEntry] = useState("");
    const [rating, setRating] = useState(0);
    const [tripName, setTripName] = useState("");
    const [file, setFile] = useState("")
    const [topics, setTopics] = useState([
        "Nature 🏞️🌳🌊", "Culture 💃🎶🌎", "Attractions 🗽🏰🎢 ",
        "Accomodation 🏠🛌💤", "Goods & Services 🛒🛍️💇",
        "Weather ☀️☁️🌩️❄️", "Budget Friendly 🤑💰👍",
        "Cost/Affordability 💸 ", "Convenience 👍✅👌",
        "History 🕰️🏛️📜", "Food 🍽️🥘😋", "Safety & Security 🔒👮",
        "Public Transportation 🚊🚕🚌", "Season of the Year 🌸🏖️🍁⛄",
        "Religious Holiday ✝️☪️✡️🕉️☸️ ", "Festival 💃🎉🥳🕺",
        "Travel Companion 🫂❤️🧑‍🤝‍🧑", "Duration of Trip ⏳",
        "Bucket List ✅✅✅", "Exchange Rate 💱💴💶💵💷",
        "Peak Season 🔥📈👫👫👫", "Off Season 🏖️😴📉",
        "How to Book Your Trip 🗓️🗺️🤔", "Hidden Gem 💎💎💎",
        "Adventure & Exploration ⛰️🎒🤩",
        "Environmental & Ethical Considerations ♻️💧☮️",
        "Health & Well-Being 💆🧖💅🧘", "Family Friendly 👨‍👩‍👧‍👦✅",
        "LGBTQIA2S+ Friendly 🏳️‍🌈🏳️‍⚧️👨‍❤️‍👨👩‍❤️‍👩⚧️", "Solo-Female Travel Friendly 👑🛡️✅",
        "The Holidays Abroad 🎄🔔🧣",
    ]);

    useEffect(() => {
        setTopics(shuffledTopics(topics));
    }, []);

    const handleRatingClick = (clickedRating) => {
        setRating(clickedRating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // This will shuffle topics on submit
        setTopics(shuffledTopics(topics));
    }

    const shuffledTopics = (array) => {
        const shuffledTopics = [...array];
        for (let i = shuffledTopics.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTopics[i], shuffledTopics[j]] = [shuffledTopics[j], shuffledTopics[i]];
        }
        return shuffledTopics;
    };

    const handleImgChange = (e) => {
        if (e.target.files.length) {
            setFile(e.target.files[0])
        }
        try {
            const form = new FormData()
            form.append("img", file)

            //  const response = await fetch 
            // need to connect this to the routes in the backend.
        } catch (error) {

        }
    };

    const sendFile = async () => {
        if (!file) {
            alert("image/video field is required");
        }
        return false;
    }

    return (
        <div className="createPostView">
            <h1>Create New Post</h1>
            <div className="container">
                <aside className="writingTopics">
                    <ul>
                        {topics.slice(0, 7).map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                </aside>
                <main className="writingArea">
                    <form onSubmit={handleSubmit}>
                        <div className="nameOfTrip">
                            <label htmlFor="nameOfTrip" />
                            <input type="text" id="nameOfTrip"
                                placeholder="Give your trip a name!"
                                value={tripName}
                                onChange={(e) => setTripName(e.target.value)} />
                        </div>
                        <div className="entry-container">
                            <div className="entry">
                                <label htmlFor="entry" aria-placeholder="What's on your mind today?"></label>
                                <textarea id="entry" placeholder="What's on your mind today?" value={newEntry} onChange={(e) => setNewEntry(e.target.value)}></textarea>
                            </div>
                            {file && (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Image Preview"
                                    className="image-preview"
                                />
                            )}
                        </div>
                        <div className="giveRating">
                            <div className="rating">
                                <label> Rating:</label>
                                <span className="stars">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`star ${star <= rating ? 'active' : ''}`}
                                            onClick={() => handleRatingClick(star)}
                                        >
                                            ☆
                                        </span>
                                    ))}
                                </span>
                            </div>
                            <input type="file"
                                className="form-control mb-2"
                                accept="image/jpeg"
                                onChange={handleImgChange}
                            />
                            <button className="btn-btn primary"
                                onClick={{ sendFile }}>
                                Post
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};