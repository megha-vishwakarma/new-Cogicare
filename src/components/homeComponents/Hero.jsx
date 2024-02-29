import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import hero data
import { heroData } from "../../data";

// import components

const Hero = () => {
    const navigate = useNavigate()
   
    // destructure hero
    const { title, subtitle, btnText, image } = heroData;
    return (
        <section className="lg:h-[100vh] w-[100vw]">
            {/* <input type="file" accept="image/*" onChange={fetchData} /> */}

            
            {/* <Header /> */}
            <div className="w-[80%] mx-auto h-full relative">
                <div className="flex flex-col xl:flex-row items-center h-full ">
                    {/* text */}
                    <div className="text-center xl:text-left xl:absolute">
                        {/* title */}
                        <h1
                            className="h1 xl:max-w-[400px] mb-6 xl:mb-12 text-5xl"
                            data-aos="fade-down"
                            data-aos-delay="400"
                        >
                            {title}
                        </h1>
                        {/* subtitle */}
                        <p
                            className="lead xl:max-w-[380px] mb-6 lg:mb-12"
                            data-aos="fade-down"
                            data-aos-delay="500"
                        >
                            {subtitle}
                        </p>
                        <a href="#Features">
                            <button
                                onClick={() => {
                                    navigate("/face-verification");
                                }}
                                className="btn btn-primary mb-8 xl:mb-0"
                                data-aos="fade-down"
                                data-aos-delay="600"
                            >
                                {btnText}
                            </button>
                        </a>
                    </div>
                    {/* image */}
                    <div
                        className="xl:absolute lg:-right-12 lg:bottom-30"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
