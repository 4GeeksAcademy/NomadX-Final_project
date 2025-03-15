import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profileFeed.css"
import { PostModal } from "../component/postModal"; // does this need to be here?


export const ProfileFeed = ({ onFavoriteChange }) => {
    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState([]);
    const [postsByCountry, setPostsByCountry] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(postsByCountry);
    

    const fetchFavorites = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("User not authenticated");
            }

            const response = await fetch(`${process.env.BACKEND_URL}/api/fav/list`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            setFavorites(data.favorites);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchFavorites();
    }, []);

    // code for fetching posts by COUNTRY --- code below needs to be changed to country and not city once model is changed. 
   
    useEffect(() => {
        if (store.userPosts.length > 0) {
            // Organize posts by country (using city_name for now)
            const organizedPosts = store.userPosts.reduce((acc, post) => {
                if (!acc[post.city_name]) {
                    acc[post.city_name] = [];
                }
                acc[post.city_name].push(post);
                return acc;
            }, {});

            setPostsByCountry(organizedPosts);
            setLoading(false);
        } else if (store.userPosts.length === 0 && loading === true) {
            actions.fetchUserPosts();
        }
    }, [store.userPosts]);

        if (loading) return <p>Loading posts...</p>;
        if (error) return <p>Error: {error}</p>;

    return (
        <div className="profileFeed">
            <div className="content">
                <div className="favorites-scroll">
                    <div className="favorites-title">
                        <h2>My Favorites</h2>
                    </div>
                    {favorites && favorites.map((fav) => (
                        <div key={fav.post_id}>
                            {fav.post && (
                                <>
                                    <div>
                                        <img src={fav.post.image_url} />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="postsByCity">
                    <h2>Posts by Country</h2>
                    {Object.entries(postsByCountry).map(([country, posts]) => (
                        <div className="city" key={country}>
                            <h3>{country || "Post"}</h3>
                            <div className="row">
                                {posts.map((post) => (
                                    <div className="col-md-4 mb-4">
                                        <div className="cardByCity">
                                            <img src={post.image_url} alt={post.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{post.title}</h5>
                                                <p className="card-text">{post.comment}</p>
                                                <p>Rating: ★★★★★ </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};



// ESTA FUNCION ES PARA AÑADIRLA A UN BOTON PARA ELIMINAR EL FAV
// function deleteFavorite(postId) {
//     fetch(`/fav/${postId}`, {
//         method: 'DELETE',
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.msg);
//         location.reload(); // Recargar la página para actualizar la lista de favoritos
//     })
//     .catch(error => console.error('Error:', error));
// }

