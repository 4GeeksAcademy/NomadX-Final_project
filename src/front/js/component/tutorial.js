import React, { useState, useEffect } from 'react';
import "../../styles/tutorial.css";


export const Tutorial = () => {
    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const steps = [
        {
            title: "Welcome to NomadX 🌍",
            content: "Get started your way! Create an account to unlock all features, or explore NomadX anonymously. Your privacy is always protected.",
        },
        {
            title: "2: Browse Content by Country",
            content: "Explore travel stories by location! Discover posts from your current country on the homepage, or use the search bar to find content from anywhere in the world. Simply click to view the feed.",
        },
        {
            title: "3. Like, Comment & Mark Posts as Favorites",
            content: "Engage with content anonymously! Like, comment, or save your favorite posts without revealing your identity.",
        },
        {
            title: "4. Profile Section",
            content: "Your profile is your personal travel journal! View your posts organized by country and access your saved favorites.",
        },
        {
            title: "5. Profile User Map",
            content: "Visualize your travels! Explore your personalized map and see all the places you've visited.",
        },
        {
            title: "6. Create a Post",
            content: "Share your travel stories. Choose a topic and write about your experience. Don't forget to rate the location!",
        },
        {
            title: "Still have questions?",
            content: "Find answers on our FAQ page.",
        },
    ];    

    useEffect(() => {
        const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
        if (hasSeenTutorial !== 'true') {
            setShowModal(true);
            localStorage.setItem('hasSeenTutorial', 'true');
            console.log(hasSeenTutorial);
        }
    }, []);
    
    

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            setShowModal(false);
        }
    };

    const handlePrevious = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleExit = () => {
        setShowModal(false);
    }

    if (!showModal) return null;  // this makes it so that modal isn't shown if it's closed. 

    return (
        <div className="tutorial-modal-overlay">
            <div className="tutorial-modal">
                <button className='btnToClose' onClick={handleExit}> &#x2715; </button>
                <h5>{steps[step].title}</h5>
                <p>{steps[step].content}</p>
                <div className="tutorial-buttons">
                    {step > 0 && (
                        <button className='btn' onClick={handlePrevious}>Previous</button>
                    )}
                    <button className='btn' onClick={handleNext}>{step === steps.length - 1 ? 'Finish' : 'Next'}</button>
                </div>
            </div>
        </div>
    );
};
