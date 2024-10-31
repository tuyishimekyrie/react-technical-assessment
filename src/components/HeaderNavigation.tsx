import { BsHddStackFill } from "react-icons/bs";
import { HiOutlineLockOpen } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import { RiArrowDropDownLine, RiLinkM } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

import ProfileImage from "./ProfileImage";

const HeaderNavigation = () => {
  return (
    <div className="dark:bg-gray-900">
      {" "}
      <div className="text-white    py-4 px-10">
        <div className="flex justify-between">
          <p className="text-gray-400">
            Workspace Creative <span>Creative Website</span>
          </p>
          <p className="text-black dark:text-white">From 23 April</p>
        </div>
        <div className="flex items-center justify-between py-4">
          <p className="text-black dark:text-white text-4xl">Website Design</p>
          <p className="text-gray-500 flex items-center gap-2 ">
            {/* <Bubble colorName="green" /> */}
            <div className="w-3 h-3 rounded-full bg-green-400 "></div>
            <span>Updated 12 min ago</span>
          </p>
        </div>
        <div className="pt-4 flex gap-2 justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <HiOutlineLockOpen className="text-gray-500 w-6 h-6 " />
              <p className="text-black dark:text-white">Limited Access</p>
              <RiArrowDropDownLine className="text-gray-500 w-6 h-6 " />
              <PiLineVerticalThin className="text-gray-500 w-6 h-6 " />
            </div>
            <div className="flex gap-4 ">
              <div className="flex -space-x-2">
                <ProfileImage src={p1} />
                <ProfileImage src={p2} />
                <ProfileImage src={p3} />
                <ProfileImage src={p4} />
                <div className="w-8 h-8 rounded-full bg-gray-400 text-center p-1">
                  +2
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-violet-600 text-center p-1">
                <IoAdd className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="flex">
            <RiLinkM className="text-violet-800 w-6 h-6" />
            <PiLineVerticalThin className="text-gray-500 w-6 h-6 " />
            <div className="flex gap-2">
              <BsHddStackFill className="bg-violet-800 p-2 text-white w-6 h-6 rounded-md" />
              <RxDashboard className="text-gray-400 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
