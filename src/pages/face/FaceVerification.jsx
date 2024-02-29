import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import faceImg from "../../assets/img/face.png";
import Loader from "../../components/loader/Loader";
import useStore from "../../store/store";
const FaceVerification = () => {
    const navigation = useNavigate();
    const [personAge, setPersonAge] = React.useState([]);
    const [camera, setCamera] = React.useState(false);
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [img, setImg] = React.useState(faceImg);
    const [emotion, setEmotion] = React.useState("Scan your face");
    const [loading, setLoading] = React.useState(false);
    const setEmotionToStore = useStore((state) => state.setEmotion);
    const setUpperAgeLimit = useStore((state) => state.setUpperAgeLimit);
    const setLowerAgeLimit = useStore((state) => state.setLowerAgeLimit);

    const activtyHandler = () => {
        navigate("/common-game");
    };

    // function to get emotions from photu
    const fetchData = async () => {
        setLoading(true);
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Draw the current frame from the video onto the canvas
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // Convert the canvas content to a Blob object
        canvas.toBlob(async (blob) => {
            try {
                if (!blob) {
                    throw new Error("Canvas blob is empty");
                }

                // Create FormData object and append the Blob
                const formData = new FormData();
                formData.append("image", blob, "image.jpg");
                console.log(blob);
                console.log("API call started");

                const options = {
                    method: "POST",
                    url: "https://faceanalyzer-ai.p.rapidapi.com/faceanalysis",
                    headers: {
                        "X-RapidAPI-Key":
                            "cb8547e891msh826532480e712f9p1375fbjsnb1e98f6cac7a",
                        "X-RapidAPI-Host": "faceanalyzer-ai.p.rapidapi.com",
                    },
                    data: formData,
                };

                const response = await axios.request(options);
                console.log("Response data:", response.data);

                const emotions =
                    response?.data?.body.faces[0]?.facialFeatures?.Emotions;
                const low2 =
                    response?.data?.body.faces[0]?.facialFeatures?.AgeRange
                        ?.Low;
                const high2 =
                    response?.data?.body.faces[0]?.facialFeatures?.AgeRange
                        ?.High;

                if (emotions) {
                    setEmotionToStore(emotions);
                    console.log(low2, high2);
                    setLoading(false);
                    setEmotion(emotions);
                    console.log("Emotions:", emotions);
                } else {
                    setLoading(false);
                    console.log("Emotions not found in response");
                }
            } catch (error) {
                setLoading(false);

                console.error("Error fetching emotions:", error);
            }
        }, "image/jpeg");
    };

    const startCamera = async () => {
        try {
            setCamera(true);
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    const stopCamera = () => {
        setCamera(false);
        const stream = videoRef.current.srcObject;
        const tracks = stream?.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
    };

    return (
        <div className="flex px-20 py-10 h-screen  ">
            <div className=" flex gap-7 flex-col items-center justify-center flex-1 h-full">
                <h1 className=" text-4xl font-bold text-red-800 text-center w-full">
                    Verfiy Your Face
                </h1>
                <button
                    className=" py-3 px-4 text-2xl bg-gray-900 text-white"
                    onClick={startCamera}
                >
                    Start Camera
                </button>
                <button
                    className=" py-3 px-4 text-2xl bg-gray-900 text-white"
                    onClick={stopCamera}
                >
                    Stop Camera
                </button>
                <button
                    className=" py-3 px-4 text-2xl bg-green-900 text-white"
                    onClick={fetchData}
                >
                    Capture and Analyze
                </button>
                {!(emotion === "Scan your face") && (
                    <button
                        className=" py-3 px-4 text-2xl bg-green-900 text-white"
                        onClick={() => {
                            activtyHandler();
                        }}
                    >
                        Play Activity
                    </button>
                )}
                <h2 className="text-2xl font-bold text-gray-800">{emotion}</h2>
            </div>
            <div className=" flex flex-col items-center justify-center flex-1  h-full">
                {!camera && (
                    <img className=" w-[70%] h-[70%]" src={img} alt="" />
                )}

                {loading ? (
                    <Loader />
                ) : (
                    camera && (
                        <div>
                            <div>
                                <video
                                    ref={videoRef}
                                    width="400"
                                    height="300"
                                    autoPlay
                                ></video>
                            </div>
                            <div>
                                <canvas
                                    ref={canvasRef}
                                    width="400"
                                    height="300"
                                    style={{ display: "none" }}
                                ></canvas>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default FaceVerification;
