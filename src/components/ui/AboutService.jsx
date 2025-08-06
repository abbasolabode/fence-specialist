/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnchorLink from "./AnchorLink";
import Spinner from "../ui/Spinner";
import { useServices } from "../hooks/useServices";
import { useVarieties } from "../hooks/useVarieties";

export default function AboutService() {
  //useNavigate for navigating to the different page 
  const navigate = useNavigate();
  const { services, isLoading } = useServices();
  const { varieties, isLoadingVarieties } = useVarieties();

  if (isLoadingVarieties) return <Spinner />;
  if (!varieties || varieties.length === 0)
    return (
      <div className="text-2xl md:text-3xl font-bold text-center text-red-500 py-8">
        No varieties available!
      </div>
    );

  if (isLoading) return <Spinner />;
  if (!services || services.length === 0)
    return (
      <div className="text-2xl md:text-3xl font-bold text-center text-red-500 py-8">
        No services available!
      </div>
    );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // Small laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1280, // Desktops
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className=" bg-black w-full px-4 sm:px-6 lg:px-8 py-8 mt-[6rem]">
      {/* Services Header */}
      <div className="flex flex-col justify-center items-center py-3 mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
          Your <span className="italic text-spanYellow">Fencing</span> services
        </h2>
        <p className="text-sm md:text-base text-gray-300 mt-2">
          Here you can find the different services we offer
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="w-full h-48 md:h-56 lg:h-64">
              <img
                className="w-full h-full object-cover"
                src={service?.image}
                alt={service?.title || "fence service"}
              />
            </div>

            <div className="p-4 flex-grow">
              <h2 className="text-xl font-medium text-white mb-2">
                {service?.title}
              </h2>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service?.content}
              </p>
              <AnchorLink
                learnMore="text-spanYellow hover:underline font-semibold"
                learnMorePath={() => navigate("/services")}
              >
                Learn more
              </AnchorLink>
            </div>
          </div>
        ))}
      </div>

      {/* Varieties Section */}
      <div className="text-white w-full mb-16">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Select from a{" "}
            <span className="text-spanYellow italic">variety of fence styles</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="w-full px-2">
          <Slider {...settings}>
            {varieties.map((variety, index) => (
              <div key={variety?.id || index} className="px-2">
                <div className="relative group">
                  <div className="h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={variety?.image}
                      alt={variety?.title || "Fence Style"}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {variety?.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {variety?.content}
                    </p>
                    <AnchorLink
                      learnMore="text-spanYellow hover:underline font-semibold mt-2 inline-block"
                      learnMorePath={() => navigate("/varieties")}
                    >
                      Learn more
                    </AnchorLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}