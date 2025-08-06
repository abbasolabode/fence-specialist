import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnchorLink from "./AnchorLink";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { usePastWorkImage } from "../hooks/usePastWorkImage";
import Spinner from "./Spinner";

export default function SliderImages() {
  const navigate = useNavigate();

  // Custom Hook
  const { pastWorkImages = [], isLoading } = usePastWorkImage();
  if (isLoading) return <Spinner />;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1512,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className="w-[24.375rem] min-h-[30rem] pt-[2.5rem] 2xl:w-[89.5rem] 2xl:min-h-[30.75rem] mx-auto 2xl:pt-[10rem] 2xl:mt-[4rem]">
      <div className="min-h-full text-center flex flex-col justify-center items-center w-full 2xl:w-[89.5rem] 2xl:min-h-[30.75rem]">
        <div className="min-h-[30rem] w-[23rem] xl:w-[89.5rem] 2xl:min-h-[30.75rem] 2xl:flex 2xl:flex-col 2xl:items-start 2xl:justify-between">
          <div className="2xl:w-[89.5rem] 2xl:min-h-[6.75rem] 2xl:flex 2xl:justify-between">
            <div className="2xl:w-[24.2rem] 2xl:min-h-[6.75rem]">
              <h3 className="font-lato text-[1.5rem] w-[22rem] min-h-full 2xl:text-left 2xl:font-semibold 2xl:w-full 2xl:text-[2.5rem] leading-[100%] text-[#0A0C0D]">
                Take a look at our <br />
                <span className="text-lato pl-1 text-utiliBlue font-sourceSerif italic">
                  past fencing work
                </span>
              </h3>
            </div>

            {/* button for large screens */}
            <div className="hidden 2xl:block 2xl:flex 2xl:items-center">
              <AnchorLink takeALook="/ourwork" gallery="flex items-center justify-center w-[8rem] 2xl:w-[6.8125rem] 2xl:min-h-[2.6875rem] 2xl:rounded-[0.5rem]">
                See gallery
              </AnchorLink>
            </div>
          </div>


          <div className="min-h-[15rem] w-[23rem] flex items-center relative 2xl:w-[94.5rem]">
            <span className="w-[2rem] flex justify-center z-30 ml-3 items-center absolute left-[-0.5rem] py-2 rounded-full px-2 bg-spanYellow">
              <MdKeyboardArrowLeft />
            </span>
            <Slider
              {...settings}
              className="w-full max-w-full 2xl:w-[89.5rem] 2xl:min-h-[30.75rem] 2xl:pt-[5rem]"
            >
              {pastWorkImages.map((pastWorkImage) => (
                <div key={pastWorkImage?.id} className="px-0.5">  {/* Reduced from px-2 to px-1 */}
                  <img
                    className="w-full max-w-[18rem] h-[10rem] object-cover rounded-[1rem] sm:max-w-[20rem] sm:h-[12rem] 2xl:w-[21.5rem] 2xl:h-[20rem]"
                    src={pastWorkImage?.image}
                    alt={pastWorkImage?.image}
                  />
                </div>
              ))}
            </Slider>
            <span className="w-[2rem] flex justify-center  items-center z-0 absolute right-[-0.5rem] py-2 rounded-full px-2 bg-spanYellow 2xl:right-[8rem]">
              <MdKeyboardArrowRight />
            </span>
          </div>

          {/* Mobile button */}
          <div className="flex justify-center 2xl:hidden">
            <AnchorLink
              gallery="flex items-center min-h-[2rem] w-[6rem] py-1 px-1 text-[0.8rem] justify-center"
              onClickGallery={() => navigate("/")}
            >
              See gallery
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
}