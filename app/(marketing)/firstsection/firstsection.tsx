"use client"

import Lottie from "lottie-react";
import animationData from "@/public/animations/solar.json"

const FirstSection = () => {
    return (
        <div className="bg-gradient-to-l from-purple-50 to-white border-b-2 border-slate-200">
            <div className="container mx-auto lg:flex flex-row justify-between items-center gap-x-40 lg:py-12 py-14  ">
                <div className="max-w-xl">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-5 max-w-xs lg:max-w-xl">Lost In Space? We ve Got The Map!</h1>
                        <p className="text-base lg:text-xl font-normal text-gray-600">Learn with interactive lessons, fun challenges, and fellow explorers as you unlock the universe’s mysteries!</p>
                    </div>
                    <div className="">
                        <Lottie animationData={animationData} loop={true}/>
                    </div>     
            </div>
            
        </div>
    );
};

export default FirstSection;