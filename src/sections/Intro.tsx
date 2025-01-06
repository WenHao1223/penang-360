import React from "react";

const Intro: React.FC = () => {
    return (
        <section
            className="video section bg-white pt-14 px-16 md:px-48 lg:px-64 text-gray-800 h-screen"
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
                    <p className="text-gray-500 text-sm mt-2">
                        Many attractions are conveniently located within walking
                        distance of one another, making the streets of George
                        Town a delightful visual and cultural experience to
                        explore on foot. Alternatively, hop onto one of the
                        cheerfully decorated trishaws found at nearly every
                        corner and enjoy a charming tour of this unique city.
                    </p>
                    <button className="btn mt-4 rounded-none text-white px-8">
                        Read More
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold centa-one">
                        George Town: Weaving Heritage and History
                    </h2>
                    <p className="text-gray-500 text-sm mt-4">
                        Penang's vibrant capital city, George Town, was
                        designated a UNESCO World Heritage Site in 2008.
                        Brimming with character, this captivating city is home
                        to an array of heritage buildings, historical landmarks,
                        and a lively blend of diverse cultures.
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
