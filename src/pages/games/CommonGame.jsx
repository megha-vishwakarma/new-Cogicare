import React from "react";
import ReactPlayer from "react-player";
import useStore from "../../store/store";
import { happy, sad, clam } from "../../recommendation/Recommendation";

const CommonGame = () => {
    const [videoUrl, setVideoUrl] = React.useState("");
    const emotion = useStore((state) => state.emotion);
    const game = useStore((state) => state.game);

    React.useEffect(() => {
        setVideoUrl(getRandomVideoURL(emotion));
    }, [emotion]);

    const getRandomVideoURL = (mood) => {
        let videos;

        switch (mood) {
            case "HAPPY":
                videos = happy;
                break;
            case "SAD":
                videos = sad;
                break;
            case "CLAM":
                videos = clam;
                break;
            default:
                videos = clam;
                console.log("Invalid mood.");
        }

        const randomIndex = Math.floor(Math.random() * videos.length);
        return videos[randomIndex];
    };

    return (
        <div className="px-20 py-10 h-screen">
            {emotion ? (
                <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="100%"
                    playing // Autoplay the video
                />
            ) : (
                <iframe
                    height={"100%"}
                    width={"100%"}
                    src= {game}
                    frameBorder="0"
                ></iframe>
            )}
        </div>
    );
};

export default CommonGame;
