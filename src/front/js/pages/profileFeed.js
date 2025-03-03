import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/profileFeed.css"
import Boston from "../../img/Boston.jpg"
import Madrid from "../../img/Madrid.jpg"
import madrid2 from "../../img/madrid2.jpg"
import madrid3 from "../../img/madrid3.jpg"
import Kyoto from "../../img/Kyoto.jpg"
import Krakow from "../../img/Krakow.jpg"
import Oświęcim from "../../img/Oświęcim.jpg"
import Tangier from "../../img/Tangier.jpg"
import ChefChaouen from "../../img/ChefChaouen.jpg"
import NYC from "../../img/NYC.jpg"

export const ProfileFeed = () => {
    const [favorites, setFavorites] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    /*
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
    */

    return (
        <div className="profileFeed">
            <div className="content">
                <div className="favorites-scroll">
                    <div className="favorites-title">
                        <h1>My Favorites</h1>
                        <span className="scroll"></span>
                    </div>
                    <div className="favorites-items">
                        <div className="p-1"><img
                            src="https://www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm-1024x634.jpg" />
                        </div>
                        <div className="p-1"><img
                            src="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2024/09/10/92179ccffd614ab692e7513cec63d0c8_iStock-534799507_HeroImage.jpg" />
                        </div>
                        <div className="p-1"><img
                            src="https://shinkyosei.edu.vn/uploads/images/images/thanh-pho-seoul-han-quoc-1.jpg" />
                        </div>
                        <div className="p-1"><img
                            src="https://www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm-1024x634.jpg" />
                        </div>
                        <div className="p-1"><img
                            src="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2024/09/10/92179ccffd614ab692e7513cec63d0c8_iStock-534799507_HeroImage.jpg" />
                        </div>
                        <div className="p-1"><img
                            src="https://shinkyosei.edu.vn/uploads/images/images/thanh-pho-seoul-han-quoc-1.jpg" />
                        </div>
                        <div className="p-1"><img
                            src="https://www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm-1024x634.jpg" />
                        </div>
                        <div className="p-1"><img
                            src="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2024/09/10/92179ccffd614ab692e7513cec63d0c8_iStock-534799507_HeroImage.jpg" />
                        </div>
                        <div className="p-1"><img
                            src="https://shinkyosei.edu.vn/uploads/images/images/thanh-pho-seoul-han-quoc-1.jpg" />
                        </div>
                    </div>
                </div>

                <div className="postsByCity">
                    <h1>Posts by City</h1>
                    <div className="city">
                        <h3>Madrid</h3>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={Madrid} alt="madrid sunset" />
                                    <div className="card-body">
                                        <h5 className="card-title">Nature 🏞️🌳🌊</h5>
                                        <p className="card-text">If you want to see the sunset,
                                            make sure to head over to El Templo de Debod. It never fails!
                                            There's always a good crowd there to meet people and to
                                            listen to live music.</p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={madrid2} alt="paella" />
                                    <div className="card-body">
                                        <h5 className="card-title">Food 🍽️🥘😋</h5>
                                        <p className="card-text">Since I call Madrid home,
                                            I've tried a lot of paella.
                                            This is by far the best I've had in Madrid, hehe 😋 </p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={madrid3} alt="Chamberi station" />
                                    <div className="card-body">
                                        <h5 className="card-title">Attractions 🗽🏰🎢</h5>
                                        <p className="card-text">The Chamberi metro station has been closed since 1966,
                                            but you can still visit it and see how the Metro of Madrid used
                                            to look like. Entrance is free, just make sure to reserve your tickets online.</p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="city">
                        <h3>Kyoto</h3>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={Kyoto} alt="kyoto culture" />
                                    <div className="card-body">
                                        <h5 className="card-title">Bucket List ✅✅✅</h5>
                                        <p className="card-text">Dressed up as a Maiko today.
                                            Super affordable activity to do in Kyoto. Reserve your
                                            spot at Kimono Tea Ceremony Kyoto Maikoya at Nishiki. </p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="city">
                        <h3>Krakow</h3>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={Krakow} alt="christmastime in krakow" />
                                    <div className="card-body">
                                        <h5 className="card-title">The Holidays Abroad 🎄🔔🧣</h5>
                                        <p className="card-text">It's absolutely freezing in Krakow,
                                            but the Christmas lights make it all worth the while.
                                            After spending all day walking around the city,
                                            I stopped here to drink a mulled wine and a kürtőskalács
                                            (chimney cake).</p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={Oświęcim} alt="Auschwitz Concentration Camp" />
                                    <div className="card-body">
                                        <h5 className="card-title">History 🕰️🏛️📜</h5>
                                        <p className="card-text">If you're a history nerd like me and you're in Krakow,
                                            don't forget to visit Auschwitz in Oświęcim. It's located 1 hour from Krakow
                                            and can be booked almost anywhere in the city with a tour guide.
                                            Highly recommend. </p>
                                        <p>Rating: ★★★★★ </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="city">
                        <h3>Tangier</h3>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={Tangier} alt="shopping in Tangier" />
                                    <div className="card-body">
                                        <h5 className="card-title">Goods & Services 🛒🛍️💇</h5>
                                        <p className="card-text">Shopping in Tangier is so colorful. At the market
                                            I bought some spices, body creams & oils, and a Aker Fassi, which is a
                                            Moroccan lipstain.</p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={ChefChaouen} alt="Chechaouen- the blue city" />
                                    <div className="card-body">
                                        <h5 className="card-title">Solo-Female Friendly 👑🛡️✅</h5>
                                        <p className="card-text"> Spent a long weekend in Morocco.
                                            Last minute I decided to go alone. I felt so safe traveling by myself and
                                            the Moroccans' are so hospitable. It's recommended if you visit
                                            Chefchaouen that you wear white or yellow. You'll stand out against
                                            the blue!</p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="city">
                        <h3>New York City</h3>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={NYC} alt="restaurant Panna II" />
                                    <div className="card-body">
                                        <h5 className="card-title">Food 🍽️🥘😋</h5>
                                        <p className="card-text">While the food was good, the ambiance was
                                            even better. You dine with lights all over the ceiling and walls.
                                            Many celebrities have dined here, most recently, Chrissy Teigan
                                            and John Legend!</p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="cardByCity">
                                    <img src={Boston} alt="ramen in Boston" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hidden Gem 💎💎💎</h5>
                                        <p className="card-text">This hole in the wall restaurant is a hidden gem...
                                            some of the best ramen I've had. It's a 20 minute car ride from Downtown
                                            NYC. Ganko Ittetsu Ramen's the name, don't forget it.</p>
                                        <p>Rating: ★★★★★ </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


/*
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
*/