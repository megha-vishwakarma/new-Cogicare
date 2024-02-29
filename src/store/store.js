import { create } from "zustand";

const useStore = create((set) => ({
    userUid: null,
    emotion: null, // Default emotion
    lower_age_limit: 0,
    upper_age_limit: 100,
    game: null,
    setEmotion: (newEmotion) => set({ emotion: newEmotion }),
    setUserUid: (uid) => set({ userUid: uid }), 
    setGame: (game) => set({ game: game }), 
    setUperAgeLimit: (age) => set({ upper_age_limit: age }), 
    setLowerAgeLimit: (age) => set({ lower_age_limit: age }), 
}));

export default useStore;
