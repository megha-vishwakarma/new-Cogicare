import React from "react";
import ColorGame from "../color/ColorGame";
import { Navigate, useNavigate } from "react-router-dom";
import GuessTheColorGame from "../guessGames/guess-the-color/GuessTheColorGame.jsx";
import img from "../../../assets/img/abstract/i6.png";
import paintImg from "../../../assets/img/paint.png";
import useStore from "../../../store/store.js";
import { useSpeechSynthesis } from "react-speech-kit";

const routesConfig = [
    {
        id: "unit",
        label: "Color Game",
        path: "/color-game",
        url: img,
    },
    {
        id: "paint",
        label: "Paint Game",
        path: "/paint-game",
        url: paintImg,
    },
    {
        id: "grid",
        label: "Guess the Word",
        path: "",
        load: "https://games.ekaypd.com/plankman/",
        url: "https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/f3/30/a9/f330a9f6-a473-7686-ff24-0cb4c4eef352/source/512x512bb.jpg",
    },
    {
        id: "puzzel",
        label: "Puzzel Game",
        path: "",
        load: "https://happy-glacier-084dd3b10.4.azurestaticapps.net/",
        url: "https://www.clipartmax.com/png/middle/35-357722_kostenlose-puzzel-puzzle-png.png",
    },
    {
        id: "guessing-game",
        label: "Guessing Game",
        path: "",
        load: "https://8ctopotamus.github.io/word-guess-lunchnlearn/",
        url: "https://play-lh.googleusercontent.com/XOvH8XNuTflDrIjn4FqMifuGBE7WeADxd3cGpuBHIjBax9lchywY5v_kDqi-nmxjHFA=w240-h480-rw"
    },
    {
        id:"tik-tak-toe",
        label: "Tik Tac Toe",
        path: "",
        load: "https://icy-tree-0efd0bc10.4.azurestaticapps.net/",
        url: "https://play-lh.googleusercontent.com/CzBAsK5ZqY2HTwsJrU0pHsiB2rdgEiM9r8Wq1DmtSQvqRBAERYznw09hQqVWg2ALXZM=w526-h296-rw"
    }
];


const GameMenu = () => {

    const [value, setValue] = React.useState("Play, Learn and Grow by plying games that are especially designed for you")

    const { speak } = useSpeechSynthesis();

   

    const setGame = useStore((state) => state.setGame)
    const navigate = useNavigate();
    const navigationHandler = (route) => {
        if (route.path.length > 0) {
            navigate(route.path);
        } else {
            setGame(route.load)
            navigate("/common-game");
        }
    };

    React.useEffect (()=> {
        speakOnMount()
    }, [])

    const speakOnMount = () => {
        
        speak({ text: value });
        setValue("")
    };
    return (
        <div className=" p-20">
            <div className=" flex flex-wrap gap-20 justify-center items-center">
                {routesConfig.map((route) => {
                    return (
                        <div
                            key={route.id}
                            className="w-full max-w-xs bg-white border hover:scale-95 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            onClick={() => {
                                navigationHandler(route);
                            }}
                        >
                            <img
                                className="p-5 rounded-t-3xl w-80 h-80 "
                                src={route.url}
                                alt="product"
                            />

                            <div className="px-5 pb-5">
                                <h5 className="text-2xl mb-3 text-center font-roboto tracking-tight text-gray-900 dark:text-white">
                                    {route.label}
                                </h5>

                                <div className="flex justify-center">
                                    <p className="text-white bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-600 hover:scale-95 dark:focus:ring-blue-800">
                                        Play Now
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GameMenu;
