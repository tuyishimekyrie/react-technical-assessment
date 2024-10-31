import classNames from "classnames";
import { AiOutlineMessage } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import { todo } from "../types/todo";
import ProfileImage from "./ProfileImage";

interface TodoProp {
  color: "red" | "blue" | "green" | "yellow";
  todo: todo;
}

const Todo = ({  todo }: TodoProp) => {
  const allImages = [p1, p2, p3, p4];

  const imageCount = Math.floor(Math.random() * 3) + 2;
  const selectedImages = allImages.slice(0, imageCount);

  // console.log(todo);

  return (
    <div className="">
      <div className="flex flex-col gap-4 w-64 h-60  justify-between p-4 rounded-2xl bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
        <p
          className={classNames("px-2 rounded-md", {
            "text-green-500 bg-green-50": todo.completed,
            "text-red-500 bg-red-50": !todo.completed,
          })}
        >
            {todo.completed ? "completed"  : "In Progress"}
          </p>
          <PiDotsThreeVerticalBold className="dark:text-white" />
        </div>
        <div>
          <p className="dark:text-white">{todo.todo}</p>
          {/* <span className="text-sm text-gray-400">Landing Page UI</span> */}
        </div>
        <div className="flex items-center justify-between border-t-2 border-slate-50 py-4">
          <div className="flex -space-x-2">
            {selectedImages.map((src, index) => (
              <ProfileImage key={index} src={src} />
            ))}
          </div>
          <div className="flex items-center gap-2 text-slate-400 justify-between">
            <AiOutlineMessage className="w-6 h-6" />
            <p className="text-xl">{imageCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
