import React from "react";
import logo from "../assets/react.svg";
import { GoHome } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiFolderMinus } from "react-icons/fi";
import { BiChart } from "react-icons/bi";
import { CiSettings, CiUser } from "react-icons/ci";
import ProfileImage from "./ProfileImage";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import { IoAddOutline } from "react-icons/io5";
import Bubble from "./Bubble";
const Sidebar = () => {
  return (
    <div className="h-screen bg-white w-20 flex flex-col  overflow-hidden py-6 border-r-2 border-gray-100">
      <div className="p-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="space-y-6 py-6 flex flex-col justify-between">
        <div className="space-y-6 py-4 ">
          <div className="py-2 px-6">
            <GoHome className="w-6 h-6 text-gray-500 " />
          </div>
          <div className="py-2 px-6">
            <MdOutlineMailOutline className="w-6 h-6 text-gray-500" />
          </div>
          <div className="py-2 px-6">
            <HiOutlineDocumentText className="w-6 h-6 text-gray-500" />
          </div>
          <div className=" bg-gray-200 py-2 px-6 border-4 border-l-violet-600">
            <FiFolderMinus className=" w-6 h-6 text-gray-500" />
          </div>
          <div className="py-2 px-6">
            <BiChart className="w-6 h-6 text-gray-500" />
          </div>
        </div>
        <div className="flex flex-col gap-14 px-4 border-y-2 border-slate-100 py-6">
          <div>
            <Bubble colorName={"green"} />
            <ProfileImage src={p2} />
          </div>
          <ProfileImage src={p3} />
          <ProfileImage src={p4} />
          <div className="px-1.5 py-2 border-2 border-dotted  rounded-full w-10 h-10 border-gray-200">
            <IoAddOutline className="w-6 h-6"/>
          </div>
        </div>
        <div className="absolute bottom-0 pb-4">
          <div className="py-2 px-6">
            <CiSettings className="w-6 h-6 text-gray-500" />
          </div>
          <div className="py-2 px-6">
            <CiUser className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
