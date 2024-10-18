import Logo from "@/assets/logoIcon.svg";
import Arrows from "@/assets/arrowsIcon.svg";
import Add from "@/assets/addIcon.svg";
import ThreeDots from "@/assets/threeDotsIcon.svg";
import LampOn from "@/assets/lampOnIcon.svg";
import { MenuList, subMenuList } from "@/arrays/Sidebar";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-[16rem] h-auto sticky top-0 border-r border-[#DBDBDB] duration-700">
      <div className="flex items-center justify-between border-b border-[#DBDBDB] px-2 py-4">
        <div className="flex items-center gap-4">
          <Logo className="mdIcon" />
          <p className="text-xl font-semibold text-black duration-700">
            Project M.
          </p>
        </div>

        <Arrows className="lgIcon" />
      </div>
      <div className="p-2">
        <ul className="px-2 py-2 border-b border-line">
          {MenuList.map((data, index) => (
            <li
              className="flex items-center gap-4 py-4 text-secondary capitalize cursor-pointer"
              key={index}
            >
              {data.icon}
              <p>{data.name}</p>
            </li>
          ))}
        </ul>
        <div className="p-2 duration-700">
          <div className="flex items-center justify-between text-secondary pt-6 px-3">
            <p className="uppercase font-medium text-sm">my project</p>
            <Add className="w-5 h-5" />
          </div>
          <ul className="py-4">
            {subMenuList.map((data, index) => (
              <li
                className="flex items-center justify-between py-2 px-3 capitalize cursor-pointer group/item hover:bg-[#5030E5]/10 duration-200 rounded-[.4rem]"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: `${data.color}` }}
                  ></div>
                  <p className="">{data.name}</p>
                </div>
                <ThreeDots className="mdIcon invisible group-hover/item:visible" />
              </li>
            ))}
          </ul>
        </div>
        <div className="p-2 mt-[2rem] duration-700">
          <div className="rounded-[1rem] bg-[#F5F5F5] text-center p-4 space-y-4 relative">
            <div className="absolute flex items-center justify-center bottom-[85%] h-16 w-16 left-[50%] -ml-[2rem] rounded-full bg-[#fdf6dd]">
              <LampOn className={"w-8 h-8"} />
            </div>
            <h3 className="font-semibold capitalize">Thoughts time</h3>
            <p className="text-[#787486] text-[.8rem]">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <div className="bg-white py-2 px-6 font-semibold text-sm rounded">
              Write a message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
