import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import GameMenu from "./pages/games/gameMenu/GameMenu";
import GuessTheColorGame from "./pages/games/guessGames/guess-the-color/GuessTheColorGame";
import PaintGame from "./pages/games/paintGame/PaintGame";
import ParentDashboard from "./pages/parent/ParentDashboard";
import { auth } from "./firebase/firebase";
import FaceVerification from "./pages/face/FaceVerification.jsx"
import useStore from "./store/store";
import { useSpeechSynthesis } from "react-speech-kit";
import CommonGame from "./pages/games/CommonGame.jsx";
import ChatbotBody from "./components/chatbot/ChatbotBody.jsx";
import ChatbotButton from "./components/chatbot/ChatbotButton.jsx";
export default function App() {

    const setUserUid = useStore((state) => state.setUserUid);
    const [value, setValue] = React.useState(
        "Welcome to cognicare,  I am your AI Companion, Kindly check your HomeWork"
    );
    const [isChatOpen, setIsChatOpen] = React.useState(false);

    

    const { speak } = useSpeechSynthesis();
    const [login, setLogin] = React.useState(false)
    const [displayName, setDisplayName] = React.useState("");
    const [uid, setUid] = React.useState(false);
    const getUid = useStore((state) => state.userUid);
    const [loading, setLoading] = React.useState(true)

    const speakOnMount = () => {
        
        speak({ text: value });
        
    };


    
    React.useEffect(() => {

        // speakOnMount()
        
        
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is logged in
                setUid(user.uid);
                setLogin(true);
                localStorage.setItem("uid", user.uid)
                setUserUid(user.uid);
                setDisplayName(user.displayName || "Anonymous");
                setLoading(false)
                
                // console.log(getUid + "mujeeb")
            } else {
                setLoading(false)
                // User is not logged in
                setUid(null);
                setLogin(false);
                setDisplayName("");
            }
        });
    
        return () => unsubscribe(); // Cleanup function to unsubscribe from the auth state listener
    }, []);
    


    return (
        <Router>
            <Nav user={login} setLogin={setLogin}/>
            <Routes>
                

                <Route exact path="/" element={<HomePage loading={loading} />} />
                <Route
                    exact
                    path="/color-game"
                    element={<GuessTheColorGame />}
                />
                <Route exact path="paint-game" element={<PaintGame />} />
                <Route exact path="/game-menu" element={<GameMenu />} />
                <Route exact path = "/face-verification" element={<FaceVerification/>}/>
                <Route exact path = "/common-game" element={<CommonGame/>}/>
                <Route exact path="/parent-dashboard" element={<ParentDashboard name={displayName} uid={uid}/>}/>
            </Routes>

            <ChatbotButton
                isChatOpen={isChatOpen}
                setIsChatOpen={setIsChatOpen}
            />
            {isChatOpen && <ChatbotBody />}
        </Router>
    );
}
