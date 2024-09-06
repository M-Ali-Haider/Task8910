import React from "react";
import ThemeToggle from "../ThemeToggle";
import { darkmode } from "@/utils/darkmode";
import Article from "./article";

const Main = () => {
  return (
    <div className="text-darkText dark:text-lightText w-full max-w-[600px] min-h-screen">
      <div className="flex items-center justify-between mt-[2rem] mb-[2rem]">
        <div className="text-[2.5rem] tracking-[2px]">Overreacted</div>
        <ThemeToggle />
      </div>
      <div className="flex flex-col py-[80px]">
        {darkmode.map((item, index) => {
          return <Article key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
