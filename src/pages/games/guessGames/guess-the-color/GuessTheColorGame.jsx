import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css"; // Import the Tailwind CSS styles

const questions = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
];

const getRandomColor = () => {
    const colors = [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
};

const GuessTheColorGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);

    const handleOptionClick = (selectedColor) => {
        if (selectedColor === currentQuestion) {
            // Correct guess
            setScore(score + 1);
        }
        // Load a new question for the next round
        loadNewQuestion();
    };

    const loadNewQuestion = () => {
        const newQuestion = getRandomColor();
        const newOptions = shuffleArray([
            newQuestion,
            getRandomColor(),
            getRandomColor(),
        ]);

        setCurrentQuestion(newQuestion);
        setOptions(newOptions);
    };

    useEffect(() => {
        // Initial load
        loadNewQuestion();
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">
                    Guess the Color Game
                </h1>
                <div className="mb-4">
                    <p className="text-4xl font-semibold">
                        Guess the color: {currentQuestion}
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-8 px-16 rounded-full shadow-md transition duration-300"
                            style={{ backgroundColor: option.toLowerCase() }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="mt-4">
                    <p className="text-2xl font-semibold">Score: {score}</p>
                </div>
            </div>
        </div>
    );
};

export default GuessTheColorGame;
