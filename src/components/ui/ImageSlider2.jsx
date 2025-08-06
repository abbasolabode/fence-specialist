/* eslint-disable react/prop-types */
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import SpinnerMini from "./SpinnerMini";
import { useSliderImage2 } from "../hooks/useSliderImage2";

export default function ImageSliders2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const {data: slides2 = [], isLoading} = useSliderImage2();
    console.log(slides2)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides2.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (isLoading) return <SpinnerMini />;

    return (
        <div className="w-full max-w-xl relative mt-[1rem]">
            <div className="max-w-xl mx-auto flex flex-col justify-center">
                {/* Arrow Left */}
                <button 
                    onClick={goToPrevious}
                    className="absolute left-10 top-[2rem] transform -translate-y-1/2 bg-black/30 text-white p-1 rounded-full"
                >
                    <MdOutlineKeyboardArrowLeft size={24} />
                </button>
                
                {/* Slider image */}
                <div className="max-w-72 mx-auto">
                    {slides2.length > 0 && (
                        <img 
                            className="object-cover rounded-md w-full" 
                            src={slides2[currentIndex]?.url} 
                            alt={`slides2 ${currentIndex}`} 
                        />
                    )}
                </div>
                
                {/* Arrow Right */}
                <button 
                    onClick={goToNext}
                    className="absolute right-10 top-[2rem] transform -translate-y-1/2 bg-black/30 text-white p-1 rounded-full"
                >
                    <MdOutlineKeyboardArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}