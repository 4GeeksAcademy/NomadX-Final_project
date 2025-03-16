import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/createPost.css";
import "../../styles/index.css";
import MyMap from "../component/createPostMap";
import Select from "react-select"

export const CreatePost = ({ mapCenter, mapZoom }) => {
    //const { store, actions } = useContext(Context);
    const [newEntry, setNewEntry] = useState("");
    const [rating, setRating] = useState(0);
    const [file, setFile] = useState("")
    const [fileUrl, setFileUrl] = useState("");
    const [title, setTitle] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");

    const [topics, setTopics] = useState([
        "Nature 🏞️", "Culture 💃🎶", "Attractions 🗽🎢 ",
        "Accomodation 🛌💤", "Goods & Services 🛍️💇",
        "Weather ☀️☁️", "Budget Friendly 💰👍",
        "Cost/Affordability 💸👍 ", "Convenience ✅👌",
        "History 🏛️📜", "Food 🍽️😋", "Safety & Security 🔒👮",
        "Public Transportation 🚊🚌", "Season of the Year 🌸🏖️🍁⛄",
        "Religious Holiday ✝️☪️✡️🕉️☸️ ", "Festival 🎉🥳",
        "Travel Companion 🫂❤️", "Duration of Trip ⏳",
        "Bucket List ✅✅", "Exchange Rate 💴💶💵💷",
        "Peak Season 🔥📈", "Off Season 😴📉",
        "How to Book Your Trip 🗓️🤔", "Hidden Gem 💎",
        "Adventure & Exploration ⛰️🎒",
        "Environmental & Ethical Considerations ♻️💧",
        "Health & Well-Being 💆🧘", "Family Friendly 👨‍👩‍👧‍👦✅",
        "LGBTQIA2S+ Friendly 🏳️‍🌈🏳️‍⚧️", "Solo-Female Travel Friendly 🚶‍♀️✅",
        "The Holidays Abroad 🎄🔔",
    ]);

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
 
    const navigate = useNavigate();

    useEffect(() => {
        setTopics(shuffledTopics(topics));
    }, []);

    const handleRatingClick = (clickedRating) => {
        setRating(clickedRating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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

    const handleImgChange = async (e) => {
        console.log(e.target.files);

        if (e.target.files.length) {
            setFile(e.target.files[0])
            try {
                const form = new FormData()
                form.append("img", e.target.files[0])
                const response = await fetch(`${process.env.BACKEND_URL}/api/img`, {
                    method: "POST",
                    body: form
                })
                const data = await response.json()
                setFileUrl(data.img)
                //  const response = await fetch 
                // need to connect this to the routes in the backend.
            } catch (error) {

            }
        }

    };


    const handlePost = async (e) => {
        e.preventDefault()
        if(!newEntry.trim()){
            alert("Comment is required");
            return;
        }
        if(!selectedTopic){
            alert("Please select a topic");
            return;
        }
        if(!city || !country){
            alert("Please select a location on the map");
            return;
        }
        try {

            const response = await fetch(`${process.env.BACKEND_URL}/api/post`, {
                method: "POST",
                body: JSON.stringify({
                    image_url: fileUrl,
                    title: title,
                    comment: newEntry,
                    topic: selectedTopic,
                    rating: rating.toString(), 
                    latitude: latitude.toString(),
                    longitude: longitude.toString(),
                    city_name: city,
                    country: country
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            const data = await response.json()
            console.log(data);

            alert("Post created successfully!"); 
            navigate("/profile-feed"); 

        } catch (error) {
            console.error("Error creating post:", error)
        }
    };

    return (
        <div className="createPostView">
            <h1>Create a New Post</h1>
            <div className="container">
                <aside className="writingTopics">
                    <h5><u>Travel Categories</u></h5>
                    <div className="categoriesAndButtons">
                        {topics.slice(0, 10).map((topic, index) => (
                            <button
                                className={`topic-buttons ${selectedTopic === topic ? 'active' : ''}`}
                                key={index}
                                onClick={() => setSelectedTopic(topic)}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                </aside>
                <main className="writingArea">
                    <div className="tripLocation">
                    </div>
                    <div className="entry-container">
                        <div className="entry">
                            <textarea id="entry" 
                            placeholder="Choose a topic from the column 
                            on the left and jot down your thoughts today 🙂" 
                            value={newEntry} 
                            onChange={(e) => setNewEntry(e.target.value)}></textarea>
                        </div>
                        {file && (
                            <img
                                src={URL.createObjectURL(file)}
                                alt="Image Preview"
                                className="image-preview"
                            />
                        )}
                    </div>
                    <div><MyMap mapCenter={mapCenter} mapZoom={mapZoom} setCountry={setCountry} setCity={setCity} setLatitude={setLatitude} setLongitude={setLongitude} /></div>

                    <div className="ratingFilePostRow">
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
                            className="chooseFile"
                            accept=".jpg, .jpeg, .png, .mp4"
                            onChange={handleImgChange}
                        />
                        <button className="metallic-button"
                            onClick={handlePost}>
                            Post
                        </button>
                    </div>
                </main>
            </div>
            
        </div >
    );
};

