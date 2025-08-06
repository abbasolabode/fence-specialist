/* eslint-disable react/prop-types */
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { getSliderImagesData } from "../services/apiSliderImage";
import { useQuery } from "@tanstack/react-query";
import SpinnerMini from "./SpinnerMini";

export default function ImageSliders() {
    //useState... The state has 0 by default
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
     
    //Use query
    const { data: slides = [], isLoading } = useQuery({
        queryKey: ["sliderimage1"],
        queryFn: getSliderImagesData,
    });

    //The function responsible for previous sliding 
    const goToPrevious = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        //Checking if the value of the currentIndex is === 0
        const isFirstSlide = currentIndex === 0;
        //If the value of the currentIndex is TRUE i.e first slide (which is 0), then move to the last slide otherwise go to previous slide
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        //update the state with the new value
        setCurrentIndex(newIndex);
        setTimeout(() => setIsAnimating(false), 500);
    };

    //The function responsible for moving to the next slide
    const goToNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        //If the value of the currentSlide is === to the last slide move to the first slide 
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setTimeout(() => setIsAnimating(false), 500);
    };




    if (isLoading) return (
        <div className="w-full flex justify-center items-center h-96">
            <SpinnerMini size="lg" />
        </div>
    );

    return (
        <div className="w-full relative group">
            <div className="w-full min-h-[30rem] md:min-h-[40rem] flex flex-col border-4 border-zinc-200 dark:border-zinc-600 rounded-xl shadow-2xl dark:shadow-zinc-800/50 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 p-6 justify-center items-center transition-all duration-300 hover:shadow-xl dark:hover:shadow-zinc-700/50">
                {/* Arrow Left */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 sm:left-6 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 text-white dark:text-zinc-200 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-300 z-10"
                    aria-label="Previous slide"
                >
                    <MdOutlineKeyboardArrowLeft className="text-2xl sm:text-3xl md:text-4xl" />
                </button>

                {/* Slider image container */}
                <div className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg transition-opacity duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
                    {slides.length > 0 ? (
                        <img
                            className="w-full h-auto object-cover aspect-video md:aspect-[16/9] rounded-lg transform transition-transform duration-500 hover:scale-105"
                            src={slides[currentIndex]?.url}
                            alt={`Slide ${currentIndex + 1}`}
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full aspect-video bg-zinc-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center">
                            <p className="text-zinc-500 dark:text-zinc-400">No images available</p>
                        </div>
                    )}
                </div>

                {/* Arrow Right */}
                <button
                    onClick={goToNext}
                    className="absolute right-4 sm:right-6 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 text-white dark:text-zinc-200 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-300 z-10"
                    aria-label="Next slide"
                >
                    <MdOutlineKeyboardArrowRight className="text-2xl sm:text-3xl md:text-4xl" />
                </button>

                {/* Slide indicators */}
                {slides.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-black dark:bg-white w-6' : 'bg-zinc-400 dark:bg-zinc-600'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}