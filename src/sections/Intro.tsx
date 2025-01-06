import React from "react";

const Intro: React.FC = () => {
    return (
        <section
            className="video section bg-white py-20 px-16 md:px-48 lg:px-64 text-gray-800 h-screen"
            id="video"
        >
            <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                    <div className="relative h-96 xl:h-[60vh] overflow-hidden mb-6">
                        <img
                            src="https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/840/2021/05/about-us.jpg"
                            alt="Mykonos"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-gray-600 mt-2">
                        We will help you experience Mykonos life in its true
                        sense. From living among the residents to eating
                        authentic delicacies you are sure to walk home with
                        memories and wonderful moments.
                    </p>
                    <button className="btn mt-4">Book Now</button>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mt-4">
                        Experience the Life of Mykonos City
                    </h2>
                    <p className="text-gray-600 mt-2">
                        We will help you experience Mykonos life in its true
                        sense. From living among the residents to eating
                        authentic delicacies you are sure to walk home with
                        memories and wonderful moments.
                    </p>
                    <div className="mt-6 relative h-96 xl:h-[60vh] overflow-hidden">
                        <img
                            src="https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/840/2021/05/about-us-2-1.jpg"
                            alt="Mykonos"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
