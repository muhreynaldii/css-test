import React from "react";
import { AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <main className="bg-white w-screen">
      <div className="bg-[#2A2E43] h-[1481px] w-[360px] mx-auto px-4">
        <h1 className="text-[40px] text-white mb-[37px]">City News</h1>
        <div
          className="w-full rounded-xl h-[160px] relative"
          style={{
            backgroundImage: `url("https://source.unsplash.com/300x300?computer")`,
          }}
        >
          <div className="bg-white w-[312px] h-[146px] rounded-xl px-6 pb-3 pt-5 absolute top-[60%] left-2">
            <div className="flex items-center">
              <div
                className="h-[36px] w-[36px] rounded-xl"
                style={{
                  backgroundImage: `url("https://source.unsplash.com/36x36?nature")`,
                }}
              ></div>
              <div className="pl-[6px]">
                <h6 className="text-[#454F63] text-base">
                  Andrée-Ann Labranche
                </h6>
                <p className="text-[#454F63] text-xs">18 Nov</p>
              </div>
            </div>
            <p className="text-sm text-[#78849E] w-[264px] leading-[22px]">
              We must believe that we are gifted for something, and that this
              thing, at
            </p>
            <div className="flex mt-2">
              <div className="w-[60%]">
                <AiOutlineShareAlt className="text-lg text-[#78849E]" />
              </div>
              <div className="w-[20%] flex items-center">
                <span className="text-[12px] text-[#78849E] pr-[6px]">256</span>
                <BsChatText className="text-lg text-[#78849E]" />
              </div>
              <div className="w-[20%] flex items-center">
                <span className="text-[12px] text-[#78849E] pr-[6px]">4 K</span>
                <AiFillHeart className="text-lg text-[#78849E]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[280px] h-[144px] bg-white rounded-xl pt-5 pr-[14px] pb-4 mt-24 flex justify-self-end relative left-10 mb-4">
          <div className="flex absolute left-24">
            <div className="pr-[29px]">
              <p className="text-xs text-[#454F63]">17 Nov</p>
              <h6 className="text-base text-[#454F63] ">Adrien Stone</h6>
            </div>
            <div
              className="w-[36px] h-[36px] rounded-xl"
              style={{
                backgroundImage: `url("https://source.unsplash.com/36x36?nature")`,
              }}
            ></div>
          </div>
          <p className="text-xs leading-5 text-[#78849E] absolute left-24 top-16">
            If you’re offered a seat on a rocket ship, don’t ask what seat! Just
            get on.
          </p>
          <div
            className="w-[120px] h-[120px] rounded-xl absolute -left-10 bottom-2"
            style={{
              backgroundImage: `url("https://source.unsplash.com/300x300?car")`,
            }}
          ></div>
        </div>
        <div className="w-[280px] h-[144px] bg-white rounded-xl pt-5 pr-[14px] pb-4 flex justify-self-end relative left-0 pl-6 mb-4">
          <div className="flex">
            <div className="pr-[29px]">
              <p className="text-xs text-[#454F63]">16 Nov</p>
              <h6 className="text-base text-[#454F63] ">Bernard Nolan</h6>
            </div>
            <div
              className="w-[36px] h-[36px] rounded-xl"
              style={{
                backgroundImage: `url("https://source.unsplash.com/36x36?nature")`,
              }}
            ></div>
          </div>
          <p className="text-xs leading-5 text-[#78849E] absolute left-0 top-16 pl-6 w-[186px]">
            You can’t fall if you don’t climb. But there’s no joy in living your
            whole life on the ground.
          </p>
          <div
            className="w-[120px] h-[120px] rounded-xl absolute -right-10 bottom-2"
            style={{
              backgroundImage: `url("https://source.unsplash.com/300x300?film")`,
            }}
          ></div>
        </div>
        <div className="w-[280px] h-[144px] bg-white rounded-xl pt-5 pr-[14px] pb-4 flex justify-self-end relative left-10 mb-4">
          <div className="flex absolute left-24">
            <div className="pr-[29px]">
              <p className="text-xs text-[#454F63]">17 Nov</p>
              <h6 className="text-base text-[#454F63] ">Adrien Stone</h6>
            </div>
            <div
              className="w-[36px] h-[36px] rounded-xl"
              style={{
                backgroundImage: `url("https://source.unsplash.com/36x36?nature")`,
              }}
            ></div>
          </div>
          <p className="text-xs leading-5 text-[#78849E] absolute left-24 top-16">
            If you’re offered a seat on a rocket ship, don’t ask what seat! Just
            get on.
          </p>
          <div
            className="w-[120px] h-[120px] rounded-xl absolute -left-10 bottom-2"
            style={{
              backgroundImage: `url("https://source.unsplash.com/300x300?fashion")`,
            }}
          ></div>
        </div>
        <div className="w-[280px] h-[144px] bg-white rounded-xl pt-5 pr-[14px] pb-4 flex justify-self-end relative left-0 pl-6">
          <div className="flex">
            <div className="pr-[29px]">
              <p className="text-xs text-[#454F63]">16 Nov</p>
              <h6 className="text-base text-[#454F63] ">Bernard Nolan</h6>
            </div>
            <div
              className="w-[36px] h-[36px] rounded-xl"
              style={{
                backgroundImage: `url("https://source.unsplash.com/36x36?nature")`,
              }}
            ></div>
          </div>
          <p className="text-xs leading-5 text-[#78849E] absolute left-0 top-16 pl-6 w-[186px]">
            You can’t fall if you don’t climb. But there’s no joy in living your
            whole life on the ground.
          </p>
          <div
            className="w-[120px] h-[120px] rounded-xl absolute -right-10 bottom-2"
            style={{
              backgroundImage: `url("https://source.unsplash.com/300x300?food")`,
            }}
          ></div>
        </div>
        <div className="w-[280px] h-[144px] bg-white rounded-xl pt-5 pr-[14px] pb-4 flex justify-self-end relative left-10 mt-4 mb-4">
          <div className="flex absolute left-24">
            <div className="pr-[29px]">
              <p className="text-xs text-[#454F63]">17 Nov</p>
              <h6 className="text-base text-[#454F63] ">Adrien Stone</h6>
            </div>
            <div
              className="w-[36px] h-[36px] rounded-xl"
              style={{
                backgroundImage: `url("https://source.unsplash.com/36x36?nature")`,
              }}
            ></div>
          </div>
          <p className="text-xs leading-5 text-[#78849E] absolute left-24 top-16">
            If you’re offered a seat on a rocket ship, don’t ask what seat! Just
            get on.
          </p>
          <div
            className="w-[120px] h-[120px] rounded-xl absolute -left-10 bottom-2"
            style={{
              backgroundImage: `url("https://source.unsplash.com/300x300?computer")`,
            }}
          ></div>
        </div>
        <div className="w-[280px] h-[144px] bg-white rounded-xl pt-5 pr-[14px] pb-4 flex justify-self-end relative left-0 pl-6">
          <div className="flex">
            <div className="pr-[29px]">
              <p className="text-xs text-[#454F63]">16 Nov</p>
              <h6 className="text-base text-[#454F63] ">Bernard Nolan</h6>
            </div>
            <div
              className="w-[36px] h-[36px] rounded-xl"
              style={{
                backgroundImage: `url("https://source.unsplash.com/36x36?nature")`,
              }}
            ></div>
          </div>
          <p className="text-xs leading-5 text-[#78849E] absolute left-0 top-16 pl-6 w-[186px]">
            You can’t fall if you don’t climb. But there’s no joy in living your
            whole life on the ground.
          </p>
          <div
            className="w-[120px] h-[120px] rounded-xl absolute -right-10 bottom-2"
            style={{
              backgroundImage: `url("https://source.unsplash.com/300x300?health")`,
            }}
          ></div>
        </div>
        <Link to="/">
          <button className="px-3 py-4 text-white bg-red-500 rounded-md mt-2">
            Logout
          </button>
        </Link>
      </div>
    </main>
  );
};

export default News;
