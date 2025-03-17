import React, { useState, useEffect } from "react";

export const PostModal = ({ postId }) => {
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        // Fetch post data when component mounts
        const fetchPost = async () => {
            try {
                const response = await fetch(`${process.env.BACKEND_URL}/api/post/${postId}`, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };
        
        fetchPost();
    }, [postId]);
    
    if (!post) return <div>Loading...</div>;
    
    // Display the location (city and country)
    const locationDisplay = post.city_name && post.country 
        ? `${post.city_name}, ${post.country}` 
        : post.city_name || post.country || "Unknown location";
    
    return (
        <div className="postDetail">
            <h2>{post.title}</h2>
            <div className="location">{locationDisplay}</div>
            {/* Rest of your post details */}
            <img src={post.image_url} alt={post.title} />
            <p>{post.comment}</p>
            <div className="rating">Rating: {post.rating}</div>
        </div>
    );
};