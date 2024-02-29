import React from "react";
import logo from "../../assets/img/logo.gif";
import useStore from "../../store/store";
import { auth } from "../../firebase/firebase";
import { navigationData } from "../../data";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { getTodos } from "../../firebase/firebaseUtils";
import TodoModal from "./TodoModal";


const Nav = ({ user }) => {
    // const uid = useStore((state) => state.userUid);
    const [open, setOpen] = React.useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const setUserUid = useStore((state) => state.setUserUid);
    
    const provider = new GoogleAuthProvider();
    const [todos, setTodo] = React.useState([])
    const [uid, setUid] = React.useState(0)
    const navigate = useNavigate();
    const [isMenuHidden, setMenuHidden] = React.useState(true);

    const toggleMenu = () => {
        console.log(isMenuHidden);
        setMenuHidden(!isMenuHidden);
    };

    React.useEffect(() => {
        setUid(localStorage.getItem("uid"))
        // console.log("nav" + uid)
        const fetchTodos = async () => {
            
            const todos = await getTodos(uid);
            setTodo(todos);
            console.log(todos);

            // setLoading(false);
        };

        try {
            fetchTodos();
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const uid = result.user.uid; // Get UID from login result
            if (result) {
                setUserUid(uid); // Update Zustand store with UID
                navigate("/admin-dashboard");
            }
        } catch (error) {
            console.error("An error occured", error);
        }
    };

    const parentPortalHandler = () => {
        if (user) {
            navigate("/parent-dashboard");
        } else {
            signInWithGoogle();
        }

        // onOpenModal();
    };

    const onCLickHandler = (path) => {
        setMenuHidden(true);
        navigate("/");
    };

    return (
        <nav className=" flex flex-wrap items-center justify-between w-full py-2 md:py-4 px-4 text-lg text-gray-700 bg-white shadow-md ">
            
            <TodoModal todos={todos} open={open} onClose={() => setOpen(false)} />
      
            <img
                onClick={() => {
                    onCLickHandler("/");
                }}
                className=" cursor-pointer w-60"
                src={logo}
                alt="logo"
            />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleMenu}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>

            <div
                className={`w-full  md:flex md:items-center md:w-auto ${
                    isMenuHidden ? "hidden" : ""
                }`}
                id="menu"
            >
                <ul className="flex gap-x-4">
                    <h2
                        className="cursor-pointer text-black font-semibold"
                        onClick={() => {
                            navigate("/game-menu");
                        }}
                    >
                        Games
                    </h2>
                    
                    <h2
                        className="cursor-pointer text-black font-semibold"
                        onClick={() => {
                            parentPortalHandler();
                        }}
                    >
                        Parent portal
                    </h2>

                    <h2
                        className="cursor-pointer text-black font-semibold"
                        onClick={onOpenModal}
                    >
                        Todo
                    </h2>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
