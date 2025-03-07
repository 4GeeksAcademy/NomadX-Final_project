import React from "react";
import { Link } from "react-router-dom";
import "../../styles/faq.css";
import "../../styles/index.css";

export const Faq = () => {

    return (
        <div className="container-fluid faq-for-users">
            <div className="questionsAndAnswers">
                <br></br>
                <br></br>
                <h1 className="text-center faq"><b>Frequently Asked Questions</b></h1>
                <h4>1. Can I use NomadX without an account?</h4>
                <p>Absolutely! You're welcome to browse NomadX and discover travel content without signing up.
                    However, an account unlocks some awesome features:
                    <ul>
                        <li>Save your favorite posts for later.</li>
                        <li>Join the conversation by commenting on posts.</li>
                        <li>Share your own travel stories and connect with other nomads.</li>
                    </ul>
                </p>
                <h4>2. How does NomadX protect my anonymity?</h4>
                <p>NomadX is designed with anonymity in mind. If your journey, your story, your way. Here's how it works:
                    <ul>
                        <li>
                            <b>No personal identifers required: </b> 
                            You don't have to use your real name or upload a 
                            profile picture. Choose an avatar.
                        </li>
                        <li>
                            <b>Content focused: </b> Share photos 
                            and stores that capture your experiences 
                            without revealing your identity.
                            Think breathtaking views, delicious food, or 
                            culture encounters -all without showing your face. 
                        </li>
                        <li>
                            <b>You're in control: </b> You decide how much or 
                            how little you want to reveal. Share anonymously 
                            or connect with others more openly-it's up to you!
                        </li>
                    </ul>
                </p>
                <h4>3. Can I delete my posts or account?</h4>
                <p>We're a new platform and still working on adding the ability 
                    to delete individual posts and accounts directly.
                    We understand this is important, and it's high on 
                    our priority list!

                    For now, our awesome support team is ready to assist you. 
                    If you need to make changes to your account or delete it,
                    just drop us a line at NomadX2025@gmail.com
                </p>
                <h4>4. What kind of content can I share on NomadX?</h4>
                <p>Unleash your inner storyteller! Share your experiences, tips, and adventures. Inspire others with your:
                    <ul>
                        <li>Breathtaking nature photos 🏞️</li>
                        <li>Cultural discoveries 💃🎶</li>
                        <li>Must-see attractions 🗽🎢</li>
                        <li>Cozy accommodation finds 🛌💤</li>
                        <li>Delicious food experiences 🍽️😋</li>
                        <li>...and anything else that captures your travel journey!</li>
                    </ul>
                </p>
                <h4>5. Can I choose who can view my posts?</h4>
                <p>To maintain anonymity for everyone, all posts on NomadX are currently public. 
                    This means anyone on the platform can see your posts, but they won't be able to
                    identify you. We believe this fosters a sense of community and encourages
                    open sharing of travel experiences. 
                </p>
                <h4>6. What new features and updated can we expect?</h4>
                <p>We're constantly working to improve NomadX and add features that enhance your travel experience.
                    Here's a sneak peek at what's coming soon:
                    <ul>
                        <li>
                            <b>Community Groups:</b>
                            Find your tribe! Join groups based on your interests, destinations or travel styles.
                        </li>
                        <li>
                            <b>Blog & Newsletter: </b>
                            Get insider tips, inspiring stories, and the latest NomadX news delivered
                            right to your inbox.
                        </li>
                        <li>
                            <b>Enhanced Security:</b>
                            We're committed to providing a safe and secure platform for anonymous sharing.
                            Expect to see new security features rolled out soon.
                        </li>
                        <li>
                            <b>More Interactive Experiences: </b>
                            We're exploring new ways for users to connect and engage with each other
                            while maintaining anonymity.
                        </li>
                    </ul>
                </p>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};