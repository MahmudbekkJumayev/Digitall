import React from "react";
import Image from "next/image";

const Consulting = () => {
  return (
    <div id="consulting">
      <div className="container">
        <div className="py-24">
          <h4 className="text-[40px] text-violet-600 font-bold text-start">
            IT Consulting
          </h4>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-10 py-5">
            <div className="w-full md:w-1/2 flex flex-col gap-5">
              <p className="text-[16px] md:text-[20px] text-gray-800 font-medium">
                We can improve the qualifications of your employees thereby
                increasing the efficiency of your company
              </p>
              <div className="grid grid-cols-2 md:grid-3 gap-4">
                <span className="rounded-lg bg-violet-50 p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/icons/consulting1.svg"
                    alt=""
                  />
                  <p className="text-[16px] font-semibold text-gray-800">
                    Frontend
                  </p>
                </span>
                <span className="rounded-lg bg-violet-50 p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                  <Image
                    width={60}
                    height={60}
                    color="vi"
                    src="/assets/icons/consulting2.svg"
                    alt=""
                  />
                  <p className="text-[16px] font-semibold text-gray-800">
                    Backend
                  </p>
                </span>
                <span className="rounded-lg bg-violet-50 p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/icons/optimization1.svg"
                    alt=""
                  />
                  <p className="text-[16px] font-semibold text-gray-800">
                    Architecture
                  </p>
                </span>
                <span className="rounded-lg bg-violet-50 p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/icons/optimization5.svg"
                    alt=""
                  />
                  <p className="text-[16px] font-semibold text-gray-800">
                    DevOps
                  </p>
                </span>
                <span className="rounded-lg bg-violet-50 p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/icons/consulting3.svg"
                    alt=""
                  />
                  <p className="text-[16px] font-semibold text-gray-800">
                    UX/UI
                  </p>
                </span>
                <span className="rounded-lg bg-violet-50 p-5 transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/icons/consulting4.svg"
                    alt=""
                  />
                  <p className="text-[16px] font-semibold text-gray-800">QA</p>
                </span>
              </div>
            </div>
            <div className="w-full bg-cover  h-[380px] lg:h-[400px] relative md:w-1/2 p-10">
              <Image
                layout="fill"
                objectFit="cover"
                src="/assets/icons/consultingImg.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
