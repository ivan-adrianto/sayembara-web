import Image from "next/image";
import React, { MouseEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { Submission } from "../../redux/actionTypes/contestActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";
import Spinner from "../common/Spinner";

interface Props {
  show: boolean;
  onClose: () => void;
}
interface State {
  loadingGetSubmission: boolean;
  dataGetSubmission: Submission;
}
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function SubmissionModal({ show, onClose }: Props) {
  const { loadingGetSubmission: loading, dataGetSubmission: data }: State =
    useSelector((state: RootState) => state.submission);
  const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (
        event.target.classList.contains("modal-backdrop") ||
        event.target.classList.contains("backdrop-mobile")
      ) {
        onClose();
      }
    }
  };

  return (
    <div
      className={`h-screen w-screen justify-center items-center ${
        !show && "hidden"
      }`}
      onClick={handleClickOutside}
    >
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black-1 bg-opacity-10 flex justify-center items-center modal-backdrop`}
      >
        <div className="relative w-screen h-screen max-w-2xl md:h-auto px-4 lg:px-0 pt-8 lg:pt-0 backdrop-mobile">
          <div
            ref={ref}
            className={`relative bg-white rounded-lg shadow dark:bg-gray-700 lg:w-[700px] lg:h-[617px] ${
              show && "slide-in"
            }`}
          >
            {loading && (
              <div className="w-full h-[100vw] lg:h-full flex justify-center items-center">
                <Spinner widthClass="w-7" />
              </div>
            )}
            {!loading && data && (
              <div>
                <button
                  type="button"
                  className="text-white bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white absolute z-10 right-0"
                  data-modal-toggle="defaultModal"
                  onClick={onClose}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div>
                  <Slider {...settings}>
                    {data.images?.map((item, index) => (
                      <Image
                        src={item.image}
                        loader={() => item.image}
                        alt=""
                        width={705}
                        height={363}
                        className="w-[705px] h-[363px] rounded-t-md object-cover"
                        key={index}
                      />
                    ))}
                  </Slider>
                </div>
                <div className="rounded-b px-9 py-3 ">
                  <h1 className="text-3xl text-light-green font-bold mb-3">
                    By {data.participant?.fullname}
                  </h1>
                  <p>{data.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionModal;
