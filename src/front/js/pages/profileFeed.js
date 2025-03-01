import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/profileFeed.css"

export const ProfileFeed = () => {
    const [favorites, setFavorites] = useState([]); 
    const [userPosts, setUserPosts] = useState([]); 

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await fetch('https://reimagined-space-halibut-wrvrrwvj7659f59gw-3001.app.github.dev/profile-feed');
                const data = await response.json();
                setFavorites(data);
            } catch (error) {
                console.error('Error fetching favorites', error);
            }
        };
        fetchFavorites();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://reimagined-space-halibut-wrvrrwvj7659f59gw-3001.app.github.dev/profile-feed');
                const data = await response.json();
                setUserPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="profileFeed">
            <div className="content">
                <div className="favorites-scroll">
                    <div className="favorites-title">
                        Favorites <span className="scroll">scroll</span>
                    </div>
                    <div className="favorites-items">
                        {favorites && favorites.map((favorite) => ( 
                            <div key={favorite.id} className="favorite-item">
                                {favorite.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="postsByCity">
                    {userPosts && userPosts.map((post) => ( 
                        <div key={post.id} className="post">
                            {post.city}: {post.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};