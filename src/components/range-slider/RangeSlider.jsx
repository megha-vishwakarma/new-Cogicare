import React, { useEffect } from "react";

function RangeSlider() {
    useEffect(() => {
        function sliderFun(eles) {
            eles.forEach((element) => {
                const values = element.value;
                const dataValue = element.getAttribute("max");
                const fullValue = Math.round((values * 100) / dataValue);
                element.nextSibling.parentNode.querySelector(
                    ".active-line"
                ).style.width = fullValue + "%";
                if (
                    element.nextSibling.parentNode.querySelector(".active-dot")
                ) {
                    element.nextSibling.parentNode.querySelector(
                        ".active-dot"
                    ).style.left = fullValue + "%";
                }

                const vals = values / 3;
                const ulList =
                    element.parentNode.parentElement.querySelectorAll("ul li");
                ulList.forEach((li, index) => {
                    if (index < vals || index === vals) {
                        li.classList.add("active");
                    } else {
                        li.classList.remove("active");
                    }
                });
            });
        }

        const inputs = document.querySelectorAll(".range-input input");
        sliderFun(inputs);

        inputs.forEach((input) => {
            input.addEventListener("input", function () {
                sliderFun([this]);
            });
        });

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("input", function () {
                    sliderFun([this]);
                });
            });
        };
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8 col-sm-10 col-12">
                    <div className="range-item">
                        <p className="text-light-black">
                            Custom Input Range Slide
                        </p>
                        <div className="range-input relative">
                            <input
                                type="range"
                                min="0"
                                max="18"
                                className="form-range"
                                name="dataShared"
                                value="12"
                            />
                            <div className="range-line absolute top-1/2 transform -translate-y-1/2 w-full bg-gray-300 rounded-full">
                                <span className="active-line absolute top-0 left-0 bg-green-500 h-full"></span>
                            </div>
                            <div className="dot-line absolute top-1/2 transform -translate-y-1/2 w-full">
                                <span className="active-dot absolute top-1/2 transform -translate-y-1/2 bg-gray-300 w-6 h-6 rounded-full border-4 border-green-500"></span>
                            </div>
                        </div>
                        <ul className="list-inline list-unstyled flex justify-between">
                            <li className="list-inline-item">
                                <span>0</span>
                            </li>
                            <li className="list-inline-item">
                                <span>1</span>
                            </li>
                            <li className="list-inline-item">
                                <span>2</span>
                            </li>
                            <li className="list-inline-item">
                                <span>3</span>
                            </li>
                            <li className="list-inline-item">
                                <span>4</span>
                            </li>
                            <li className="list-inline-item">
                                <span>5</span>
                            </li>
                            <li className="list-inline-item">
                                <span>6</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RangeSlider;
