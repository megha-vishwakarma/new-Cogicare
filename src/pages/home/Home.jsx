import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "../../components/homeComponents/Hero";
import About from "../../components/homeComponents/About";
import Features from "../../components/homeComponents/Features";
import CtaSection from "../../components/homeComponents/CtaSection";
import { useSpeechSynthesis } from "react-speech-kit";
import useStore from "../../store/store";
import Loader from "../../components/loader/Loader";

export default function Home({ loading }) {
    const [open, setOpen] = React.useState(false);

    const uid = useStore((state) => state.userUid);

    Aos.init({
        duration: 1800,
        offset: 0,
    });
    return (
        <div className="overflow-hidden flex justify-center items-center">
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Hero />
                    <About />
                    <Features />
                    <CtaSection />
                </div>
            )}
        </div>
    );
}
