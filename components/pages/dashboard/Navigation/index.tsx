import { Eye } from "lucide-react";
import React, { useState } from "react";

const Navigation = () => {
  const Menus = [
    { name: "Tasks", icon: "home-outline", dis: "translate-x-0" },
    { name: "Todos", icon: "person-outline", dis: "translate-x-16" },
    { name: "Logs", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Logout", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="h-[90px] overflow-hidden flex justify-center items-end fixed left-0 right-0 bottom-3">
      <div className="bg-slate-100 px-6 rounded-xl">
        <ul className="flex relative">
          <span
            className={`bg-slate-700 duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16 absolute
         -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 w-full flex justify-center items-center z-10 text-slate-600 ${
                    i === active && "-mt-6 !text-white"
                  }`}
                >
                  <Eye />
                </span>
                <span
                  className={` text-sm  text-slate-500 ${
                    active === i
                      ? "translate-y-5 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
