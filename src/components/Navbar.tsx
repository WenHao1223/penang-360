import React from "react";

import LogoTrimmed from "@assets/logo/logo-trimmed.png";

const Navbar: React.FC = () => {
    const toggleMenu = () => {
        const sideBar = document.querySelector(".sideBar");
        sideBar?.classList.toggle("hidden");
    };

    return (
        <header id="navbar" className="inset-x-0 top-0 z-50 sticky h-0">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Penang 360°</span>
                        <img
                            className="h-8 w-auto mix-blend-multiply"
                            src={LogoTrimmed}
                            alt="penang360-logo"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a
                        href="#"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Home
                    </a>
                    <a
                        href="#intro"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        About
                    </a>
                    <a
                        href="#attractions"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Attractions
                    </a>
                    <a
                        href="#food"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Dining
                    </a>
                    <a
                        href="#hotel"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Hotel
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {/* Something at the right */}
                </div>
            </nav>
            {/* Mobile menu, show/hide based on menu open state. */}
            <div className="lg:hidden" role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div className="sideBar hidden fixed inset-y-0 right-0 z-30 w-full h-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Penang 360°</span>
                            <img
                                className="h-8 w-auto object-contain mix-blend-color"
                                src={LogoTrimmed}
                                alt="penang360-logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root sticky top-0">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="#intro"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </a>
                                <a
                                    href="#attractions"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Attractions
                                </a>
                                <a
                                    href="#food"
                                    className="-mx-3 block rounded-lg px-3 p y-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Dining
                                </a>
                                <a
                                    href="#hotel"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Hotel
                                </a>
                            </div>
                            {/* <div className="py-6">
                                Something at the right
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
