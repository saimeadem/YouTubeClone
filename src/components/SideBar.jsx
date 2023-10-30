import React from "react";
import { useContext } from "react";
import { categories } from "../utils/Constants"
import { YoutubeContext } from "../context/YoutubeContext";

const SideBar = () => {
    const { selectedCategory, setSelectedCategory } =
     useContext(YoutubeContext);
     
    return (
        <nav className="flex flex-col p-1 md:p-4">
            {categories.map((item, i) => (
                <div key={i}>
                    <div
                    onClick={() => setSelectedCategory(item)}
                     className={` ${item.name=== selectedCategory.name && 'bg-[#2b2a2a]'} 
                     flex items-center gap-2 py-4 px-2 md:px-3 text-md md:text-lg cursor-pointer rounded-md `} >
                        {item.icon}
                        <span>{item.name} </span>
                    </div>

                </div>


            ))}

        </nav>
    );
};

export default SideBar