import React from "react";

// import cta data
import { ctaData } from "../../data";
import { footerData } from "../../data";

// import icons
import { BsArrowRight } from "react-icons/bs";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

const CtaSection = () => {
    // destructure cta data
    const { title, subtitle, btnText1 } = ctaData;
    const { logo, socialList } = footerData;
    return (
        <section id="CtaSection">
            <div className="container mx-auto">
                <div className="flex flex-col  items-center">
                    {/* text */}
                    <div className="py-8  text-center ">
                        <h2 className="h2 mb-5">{title}</h2>
                        <p className="lead">{subtitle}</p>
                    </div>
                    {/* buttons */}
                    <div className="flex flex-col items-center gap-5  ">
                        <a href="mailto:projectu0001@gmail.com">
                            <button className="btn btn-secondary ">
                                {btnText1}
                            </button>
                        </a>
                        <ul className="flex gap-y-4 gap-x-4 justify-center">
                            {socialList.map((item, index) => {
                                return (
                                    <li
                                        className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all"
                                        key={index}
                                    >
                                        <a
                                            className="text-white text-xl hover:text-white"
                                            href={item.href}
                                        >
                                            {item.icon}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="mx-auto flex items-center justify-center">
                            <Link to="/" className="md:block w-[70%] ">
                                <img className="" src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </section>
    );
};

export default CtaSection;
