import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { useSpeechSynthesis } from "react-speech-kit";

const TodoModal = ({ todos, open, onClose }) => {
    const { speak } = useSpeechSynthesis();
    const [currentIndex, setCurrentIndex] = useState(0);

    const speakTodo = (index) => {
        if (index >= 0 && index < todos.length) {
            speak({ text: todos[index].todo });
            setCurrentIndex(index + 1);
        }
    };

    return (
        <Modal open={open} onClose={onClose} center>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Todo List</h2>
                {todos?.map((todo, index) => (
                    <div key={index} className="mb-2">
                        <span
                            className="cursor-pointer text-blue-500"
                            onClick={() => speakTodo(index)}
                        >
                            {todo.todo}
                        </span>
                    </div>
                ))}
            </div>
        </Modal>
    );
};

export default TodoModal;
