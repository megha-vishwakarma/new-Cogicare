import React from "react";

// import footer data
import { footerData } from "../../data";

// import components
import Copyright from "../homeComponents/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
    // destructure footer data
    const { logo, address, email, phone, list1, list2, socialList } =
        footerData;
    return (
        <footer data-aos="fade-up">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-10">
                    {/* info */}
                    <div className=" lg:w-[45%] mx-auto flex flex-col  items-center xl:items-start">
                        {/* logo */}

                        <Link
                            to="/"
                            className="md:block flex justify-center items-center"
                        >
                            <img
                                className="mb-[20px] lg:mb-[65px] max-w-[70%]"
                                src={logo}
                                alt=""
                            />
                        </Link>
                        {/* address */}
                        <div className="max-w-[260px] mb-5 text-primary font-bold">
                            {address}
                        </div>
                        {/* email */}
                        <div className="font-light italic">{email}</div>
                        {/* phone */}
                        <div className="font-light italic">{phone}</div>
                    </div>
                    {/* lists */}
                    <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
                        {/* list 1 */}
                        <div>
                            <div className="font-extrabold text-primary mb-2">
                                About
                            </div>
                            <ul className="flex flex-col gap-y-4">
                                {list1.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a
                                                className="text-primary"
                                                href={item.href}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* list 2 */}
                        <div>
                            <div className="font-extrabold text-primary mb-2">
                                Help
                            </div>
                            <ul className="flex flex-col gap-y-4">
                                {list2.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a
                                                className="text-primary"
                                                href={item.href}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* social list */}
                        <div>
                            <div className="font-extrabold text-primary mb-4">
                                Social Media
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
