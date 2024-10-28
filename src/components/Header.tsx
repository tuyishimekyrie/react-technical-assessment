import { CiSearch } from "react-icons/ci";
import { HiOutlineBell } from "react-icons/hi";
import { MdOutlineNightlight } from "react-icons/md";


const Header = () => {
  return (
    <div className="bg-white min-w-full h-20 flex items-center px-10 justify-between">
      <div className="flex justify-between w-[40vw] bg-gray-50 px-2 py-2 rounded-md items-center">
        <p className="text-sm text-gray-400">Search</p>
        <CiSearch  className=" p-1 w-8 h-8 rounded-md text-gray-400"/>
      </div>
      <div className="flex gap-2 items-center">
        <MdOutlineNightlight className="bg-gray-100 p-1 w-8 h-8 rounded-md text-gray-400" />
        <div className="relative">
          <HiOutlineBell className="bg-gray-100 p-1 w-8 h-8 rounded-md text-gray-400" />
          {/* <Bubble colorName={"green"}  /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
