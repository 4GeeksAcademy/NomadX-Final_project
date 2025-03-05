import React, { useState, useEffect } from 'react';
import "../../styles/tutorial.css";


export const Tutorial = () => {
    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const steps = [
        {
            title: "Welcome to NomadX 🌍",
            content: "1. Feel free to create an account or browse without one. Dont worry, youll always remain anonymous.",
        },
        {
            title: "2: Browse Content by City",
            content: "In the search bar above, type the name of a city and you'll instantly be able to see posts from that city.",
        },
        {
            title: "3. Like, Comment & Mark Posts as Favorites",
            content: "No matter if you like, comment or mark a post as a favorite, it'll always be done anonymously.",
        },
        {
            title: "4. Profile Section",
            content: "In your profile, you'll be able to see your own posts categorized by city, along with the posts you've marked as favorites.",
        },
        {
            title: "5. Profile User Map",
            content: "In this other section of your profile, you'll be able to interact with you're individualized map and see everywhere you've been in the world!",
        },
        {
            title: "6. Create a Post",
            content: "Use one of our writing topics, search for the city you visited & write whatever you'd like about it!",
        },
        {
            title: "Any questions?",
            content: "If you have any questions, feel free to check out our FAQ page.",
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
