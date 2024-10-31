import { CiSearch } from "react-icons/ci";
import { HiOutlineBell } from "react-icons/hi";
import { MdOutlineNightlight } from "react-icons/md";
import useThemeStore from "../store/themeStore";
import { WiDaySunny } from "react-icons/wi";
// import Bubble from "./Bubble";

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  console.log(isDarkMode);
  return (
    <div className="bg-white dark:bg-gray-900 min-w-full h-20 flex items-center px-10 justify-between">
      <div className="flex justify-between w-[40vw] dark:bg-gray-800 bg-gray-50 px-2 py-2 rounded-md items-center">
        <p className="text-sm text-gray-400">Search</p>
        <CiSearch className=" p-1 w-8 h-8 rounded-md text-gray-400 dark:text-white" />
      </div>
      <div className="flex gap-2 items-center">
        {!isDarkMode ? (
          <MdOutlineNightlight
            className="bg-gray-100 dark:bg-gray-800  p-1 w-8 h-8 rounded-md text-gray-400 dark:text-white hover:cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <WiDaySunny
            className="bg-gray-100 dark:bg-gray-800  p-1 w-8 h-8 rounded-md text-gray-400 dark:text-white hover:cursor-pointer"
            onClick={toggleTheme}
          />
        )}
        <div className="">
          <div className="w-3 h-3 rounded-full bg-red-400 absolute right-10 "></div>
          <HiOutlineBell className="bg-gray-100 dark:bg-gray-800  p-1 w-8 h-8 rounded-md text-gray-400" />
          {/* <Bubble colorName="green"  /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
