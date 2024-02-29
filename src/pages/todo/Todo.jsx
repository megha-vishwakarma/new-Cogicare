import "./Todo.css";
import EditTodo from "./EditTodo.jsx";
import React from "react";
import { push, set, ref, serverTimestamp, remove } from "firebase/database";
import { db, auth } from "../../firebase/firebase.js";
import { getTodos } from "../../firebase/firebaseUtils.jsx";
import Loader from "../../components/loader/Loader.jsx";
import useStore from "../../store/store.js";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Todo = () => {
    const [open, setOpen] = React.useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const uid = useStore((state) => state.userUid);
    const [createTodo, setCreateTodo] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [todos, setTodo] = React.useState([]);

    React.useEffect(() => {
        const fetchTodos = async () => {
            console.log(uid);
            const todos = await getTodos(uid);
            setTodo(todos);
            console.log(todos);

            setLoading(false);
        };

        try {
            fetchTodos();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const deleteTodo = async (id) => {
        try {
            window.confirm("Are you sure you want to delete this Todo?");
            const documentRef = ref(db, `todos/${uid}`, id);
            await remove(documentRef);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    //Add Todo Handler
    const submitTodo = async () => {
        

        const todo = {
            todo: createTodo,
            isChecked: false,
            timestamp: serverTimestamp(),
        };

        try {
            const todoRef = ref(db, `todos/${uid}`);
            const newTodoRef = push(todoRef); // Generate unique key for new todo
            await set(newTodoRef, todo);
            setCreateTodo("");
            console.log("Todo added successfully!");
        } catch (error) {
            console.error("Error adding todo: ", error);
        }

        onCloseModal()
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-white">
                            <div className="card-body">
                                <button
                                    onClick={onOpenModal}
                                    data-bs-toggle="modal"
                                    data-bs-target="#addModal"
                                    type="button"
                                    className="btn btn-info"
                                >
                                    Add
                                </button>

                                {loading ? (
                                    <Loader />
                                ) : (
                                    todos?.map(({ todo, id }) => (
                                        <div className="todo-list" key={id}>
                                            <div className="todo-item">
                                                <hr />
                                                <span>
                                                    <div className="checker">
                                                        <span className="">
                                                            <input type="checkbox" />
                                                        </span>
                                                    </div>
                                                    &nbsp;{todo}
                                                    <br />
                                                    <i>10/11/2022</i>
                                                </span>

                                                <button
                                                    type="button"
                                                    className="btn btn-danger float-end text-black"
                                                    onClick={() => {
                                                        deleteTodo(id);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}

            <Modal open={open} onClose={onCloseModal} center>
                <div className="flex">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addModalLabel">
                                Add Todo
                            </h5>
                            
                        </div>
                        <div className="modal-body">
                            <input
                                onChange={(e) => setCreateTodo(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Add a Todo"
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={submitTodo}
                            >
                                Create Todo
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default Todo;
