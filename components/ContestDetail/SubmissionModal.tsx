import Image from "next/image";
import React, { MouseEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";

interface Props {
  show: boolean;
  id?: number;
  onClose: () => void;
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
function SubmissionModal({ show, id, onClose }: Props) {
  const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (event.target.classList.contains("modal-backdrop")) {
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
        <div className="relative w-screen h-screen max-w-2xl md:h-auto">
          <div
            ref={ref}
            className={`relative bg-white rounded-lg shadow dark:bg-gray-700 w-[700px] h-[617px] ${
              show && "slide-in"
            }`}
          >
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
                <div>
                  <Image
                    src={
                      "https://i.picsum.photos/id/10/400/400.jpg?hmac=PIwVt0zDIDLjFhsKCUPaltt0400fYkh4vldbdFvqEz4"
                    }
                    alt=""
                    width={705}
                    height={363}
                    className="w-[705px] h-[363px] rounded-t-md"
                  />
                </div>
                <div>
                  <Image
                    src={
                      "https://i.picsum.photos/id/10/400/400.jpg?hmac=PIwVt0zDIDLjFhsKCUPaltt0400fYkh4vldbdFvqEz4"
                    }
                    alt=""
                    width={705}
                    height={363}
                    className="w-[705px] h-[363px] rounded-t-md"
                  />
                </div>
              </Slider>
            </div>
            <div className="rounded-b px-9 py-3 ">
              <h1 className="text-3xl text-light-green font-bold mb-3">
                By John Doe
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nec volutpat massa, ut tempor massa. Maecenas eu
                efficitur elit, ac ornare mi. Cras nulla purus, consequat at
                aliquam nec, vehicula id eros. Maecenas in dapibus arcu, a
                dignissim enim. Suspendisse potenti. Curabitur feugiat tincidunt
                mollis. Quisque vel rutrum elit. Vestibulum sed ipsum
                scelerisque, ornare quam pretium, tristique arcu. Aenean
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionModal;
