import { BiChart } from "react-icons/bi";
import { CiSettings, CiUser } from "react-icons/ci";
import { FiFolderMinus } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import logo from "../assets/react.svg";
import ProfileImage from "./ProfileImage";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { path: "/dashboard", icon: GoHome, label: "Dashboard" },
    { path: "/mail", icon: MdOutlineMailOutline, label: "Mail" },
    { path: "/documents", icon: HiOutlineDocumentText, label: "Documents" },
    { path: "/", icon: FiFolderMinus, label: "Folders" },
    { path: "/analytics", icon: BiChart, label: "Analytics" },
  ];

  const getItemClasses = (path: string) => {
    const baseClasses = "py-2 px-6 transition-all duration-200 hover:cursor-pointer ";
    const activeClasses = "bg-gray-100 dark:bg-gray-800 border-l-4 rounded-l-md border-l-violet-600";
    const inactiveClasses = "hover:bg-gray-50 dark:hover:bg-gray-800";
    
    return baseClasses + (isActivePath(path) ? activeClasses : inactiveClasses);
  };

  const getIconClasses = (path: string) => {
    const baseClasses = "w-6 h-6 ";
    const activeClasses = "text-violet-700 dark:text-violet-500";
    const inactiveClasses = "text-gray-500";
    
    return baseClasses + (isActivePath(path) ? activeClasses : inactiveClasses);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 w-20 flex flex-col border-r-2 border-gray-100 dark:border-gray-800">
      <div className="p-4">
        <img src={logo} alt="logo" />
      </div>
      
      <div className="space-y-6 py-6 flex flex-col justify-between h-full">
        <div className="space-y-6 py-4">
          {navigationItems.map((item) => (
            <div
              key={item.path}
              className={getItemClasses(item.path)}
              onClick={() => navigate(item.path)}
              role="button"
              aria-label={item.label}
            >
              <item.icon className={getIconClasses(item.path)} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 px-4 border-y-2 border-slate-100 dark:border-slate-800 py-4 pb-10">
          <div>
            <div className="w-3 h-3 rounded-full bg-green-400 absolute right-8"></div>
            <ProfileImage src={p2} />
          </div>
          <div>
            <div className="w-3 h-3 rounded-full bg-green-400 absolute right-8"></div>
            <ProfileImage src={p3} />
          </div>
          <div>
            <div className="w-3 h-3 rounded-full bg-green-400 absolute right-8"></div>
            <ProfileImage src={p4} />
          </div>
          <div className="px-1.5 py-2 border-2 border-dotted rounded-full w-10 h-10 border-gray-200">
            <IoAddOutline className="w-6 h-6 dark:text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <div className={getItemClasses("/settings")} onClick={() => navigate("/settings")}>
            <CiSettings className={getIconClasses("/settings")} />
          </div>
          <div className={getItemClasses("/profile")} onClick={() => navigate("/profile")}>
            <CiUser className={getIconClasses("/profile")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;