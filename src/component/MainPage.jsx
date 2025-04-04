import React, { useEffect, useRef, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import Font from '../assets/Front-Pic.png';
import image from '../assets/Image.png';
import Rectangle1 from '../assets/Rectangle-29438.png';
import Rectangle2 from '../assets/Rectangle-29439.png';
import Rectangle3 from '../assets/Rectangle-29440.png';
import Rectangle4 from '../assets/Rectangle-29441.png';
import Rectangle5 from '../assets/Rectangle-29442.png';
import Rectangle6 from '../assets/Rectangle-29443.png';
import Rectangle7 from '../assets/Rectangle-29444.png';
import Rectangle8 from '../assets/Rectangle-29445.png';
import Rectangle9 from '../assets/Rectangle-29446.png';
import Rectangle10 from '../assets/Rectangle-29447.png';
import FilterSidebar from './FilterSidebar';

const products = [
  { id: 1, name: "Ppxoc Milkyway Dress", image: Font, isNew: true, outOfStock: false },
  { id: 2, name: "Ppxoc Milkyway Dress", image: image, isNew: false, outOfStock: true },
  { id: 3, name: "Product Name", image: Rectangle1, isNew: false, outOfStock: false },
  { id: 4, name: "Product Name", image: Rectangle2, isNew: false, outOfStock: false },
  { id: 5, name: "Product Name", image: Rectangle3, isNew: false, outOfStock: false },
  { id: 6, name: "Product Name", image: Rectangle4, isNew: false, outOfStock: false },
  { id: 7, name: "Product Name", image: Rectangle5, isNew: false, outOfStock: false },
  { id: 8, name: "Product Name", image: Rectangle6, isNew: false, outOfStock: false },
  { id: 9, name: "Product Name", image: Rectangle7, isNew: false, outOfStock: false },
  { id: 10, name: "Product Name", image: Rectangle8, isNew: false, outOfStock: false },
  { id: 11, name: "Product Name", image: Rectangle9, isNew: false, outOfStock: false },
  { id: 12, name: "Product Name", image: Rectangle10, isNew: false, outOfStock: false }
];

function MainPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});
  const [showSortPopup, setShowSortPopup] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSortPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full px-4 sm:px-10 py-6 sm:py-12">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold">DISCOVER OUR PRODUCTS</h2>
        <p className="mt-4 sm:mt-6 mb-4 sm:mb-8 max-w-2xl mx-auto font-semibold text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br className="hidden sm:block"/>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="flex w-full sm:hidden justify-between text-lg font-semibold">
          <button 
            onClick={() => setShowFilters(!showFilters)} 
            className="w-1/2 text-center border-r"
          >
            FILTER
          </button>
          <button 
            onClick={() => setShowSortPopup(!showSortPopup)} 
            className="w-1/2 text-center flex items-center justify-center"
          >
            RECOMMENDED <IoChevronDown className="ml-1" />
          </button>
        </div>

        <div className="hidden sm:flex justify-between items-center w-full">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-gray-600 hover:underline"
          >
            <HiMiniChevronLeft className="h-5 w-5" />
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>

          <div className='relative' ref={sortRef}>
            <button
              onClick={() => setShowSortPopup(!showSortPopup)}
              className='text-lg font-semibold flex items-center relative'
            >
              RECOMMENDED <IoChevronDown className="h-5 w-5 ml-1" />
            </button>

            {showSortPopup && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-md p-2 z-50">
                {["RECOMMENDED", "NEWEST FIRST", "POPULAR", "PRICE: HIGH TO LOW", "PRICE: LOW TO HIGH"]
                  .map((option, index) => (
                    <button key={index} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      {option}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-8">

        {showFilters && <FilterSidebar className="hidden sm:block w-1/4" />}

        <div className={showFilters ? "w-full sm:w-3/4" : "w-full"}>
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6`}>
            {products.map((product) => (
              <div key={product.id} className="relative border p-4">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">
                    NEW PRODUCT
                  </span>
                )}
                {product.outOfStock && (
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black font-bold px-3 py-1">
                    OUT OF STOCK
                  </span>
                )}

                <img src={product.image} alt={product.name} className="w-full" />
                <h4 className="font-semibold mt-2">{product.name}</h4>
                <div className='flex justify-between items-center'>
                  <p className="text-sm text-gray-500">
                    <a href="#" className="underline">Sign in</a> or Create an account to see pricing
                  </p>
                  <button onClick={() => toggleLike(product.id)}>
                    <CiHeart size={25} color={likedProducts[product.id] ? "red" : "black"} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
