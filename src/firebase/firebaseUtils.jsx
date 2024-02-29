import { set, push, ref, get } from "firebase/database";
import { db } from "./firebase";

const getTodos = async (uid) => {
    try {
        const todoRef = ref(db, `todos/${uid}`);

        // Fetch data once
        const snapshot = await get(todoRef);

        if (snapshot.exists()) {
            // Convert the snapshot to an array of objects
            const todoData = snapshot.val();
            if (todoData) {
                // Convert the object of todos into an array
                const todoDatas = Object.keys(todoData).map((key) => ({
                    id: key, // Use the key as the todo ID
                    ...todoData[key], // Spread the todo data
                }));
                // console.log(`${uid }` + todoData)
                return todoDatas;
            } else {
                console.log("No fav colors found");
                return [];
            }
        }
    } catch (error) {
        console.error("Error reading fav colors:", error);
        return [];
    }
};

export { getTodos };
