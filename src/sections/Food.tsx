import React from "react";

const Food: React.FC = () => {
    return (
        <>
            <div className="section relative pt-10 px-16 md:px-32 lg:px-64 min-h-screen flex flex-col items-center justify-center gap-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 to-white z-0"></div>
                <div className="z-10 flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-center">
                        Food & Dining
                    </h1>
                    <p className="text-lg text-center">
                        Discover the best places to eat in the city.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Food;