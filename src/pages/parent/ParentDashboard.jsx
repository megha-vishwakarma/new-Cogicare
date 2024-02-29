import React from "react";
import Todo from "../todo/Todo.jsx"
import useStore from "../../store/store.js";

const ParentDashboard = ({name}) => {
    const [value, setValue] = React.useState(2);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };
    const uid = useStore((state) => state.userUid);
    const renderLabels = () => {
        const labels = [];
        for (let i = 0; i <= 6; i++) {
            labels.push(
                <p key={i} className="text-sm text-gray-500">
                    {i} hours
                </p>
            );
        }
        return labels;
    };
    return (
        <div className="px-20 py-10 flex flex-col gap-10">

            <h1 className=" text-2xl font-semibold">Hello, {name}</h1>
            <div className="grid grid-cols-2 gap-10">
                <div className="w-full h-32 rounded-lg flex flex-col gap-3 justify-center items-center  bg-blue-300">
                    <h1 className=" text-white font-bold text-xl top-0 left-0">Total time Spend in Day</h1>
                    <p className="text-white font-semibold">1.5hr</p>
                </div>
                
                <div className="w-full h-32 rounded-lg flex flex-col gap-3 justify-center items-center  bg-green-300">
                    <h1 className=" text-white font-bold text-xl top-0 left-0">Total time Spend in Month</h1>
                    <p className="text-white font-semibold">20hr</p>
                </div>
                <div className="w-full h-32 rounded-lg flex flex-col gap-3 justify-center items-center  bg-purple-300">
                    <h1 className=" text-white font-bold text-xl top-0 left-0">Total time Spend in Day</h1>
                    <p className="text-white font-semibold">1.5hr</p>
                </div>
                <div className="w-full h-32 rounded-lg flex flex-col gap-3 justify-center items-center  bg-sky-300">
                    <h1 className=" text-white font-bold text-xl top-0 left-0">Total time Spend in Day</h1>
                    <p className="text-white font-semibold">1.5hr</p>
                </div>
                
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-8">
                    <h2 className="text-3xl font-semibold text-center">
                        Atmost Child can Spend Time on App
                    </h2>

                    <div className="w-full flex flex-col items-center">
                        <input
                            type="range"
                            value={value}
                            step={1}
                            min={0}
                            max={6}
                            onChange={handleInputChange}
                            className="w-full h-8 bg-gray-200 rounded-full overflow-hidden appearance-none focus:outline-none"
                        />

                        <div className="flex justify-between w-full mt-2">
                            {renderLabels()}
                        </div>
                    </div>

                    <p className="text-lg font-medium">{value} hours</p>
                </div>

                <div>
                    <h1>Add Task for kids</h1>
                </div>

                <Todo uid={uid}/>
        </div>
    );
};

export default ParentDashboard;
