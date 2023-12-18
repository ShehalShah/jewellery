import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Sample quotes for the carousel
    const quotes = [
        "Discover the beauty of our exquisite jewelry.",
        "Elegance that speaks volumes.",
        "Crafting memories, one piece at a time.",
        "Indulge in luxury, adorn yourself with elegance.",
    ];
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
    };

    return (
        <nav>
            {/* Teal Section */}
            <div className="bg-teal-300 p-2 text-center">
                {/* Carousel of Quotes */}
                <Slider {...settings} className="mx-auto max-w-lg">
                    {quotes.map((quote, index) => (
                        <div key={index} className="text-black">
                            <p>{quote}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* White Section */}
            <div className="bg-white p-4">
                <div className="lg:hidden">
                    <button onClick={toggleNavbar} className="text-black focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="py-2 pl-8 pr-2 text-gray-600 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 w-64 font-medium hidden lg:block"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="w-4 absolute left-2 top-[55%] transform -translate-y-1/2 text-black lg:block"
                        />
                    </div>
                    <div className="text-black font-bold text-xl absolute inset-x-0 mx-auto text-center">
                        Jewellery Store
                    </div>
                    <div className="flex gap-4">
                        {/* Icons will be visible for lg screens and larger */}
                        <FontAwesomeIcon icon={faShoppingCart} className="text-black mr-4" />
                        <FontAwesomeIcon icon={faUser} className="text-black mr-4" />
                    </div>
                </div>
                <div className={`lg:flex mt-4 px-20 items-center justify-center gap-10 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Rings
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Earrings
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Bangles
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black">
                        Solitaires
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                        Mangalsutras
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black">
                        Necklaces
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black">
                        More
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black">
                        Gifting
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
