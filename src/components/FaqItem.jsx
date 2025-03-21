import React from "react";
import clsx from "clsx";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = React.useState(null);
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      {/* Clickable header */}
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7 z-10"
        onClick={() => {
          console.log("Clicked item:", item.id, "Current activeId:", activeId); // Debug log
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1",
            )}
          >
            {item.question}
          </div>
        </div>
        <div
          className={clsx(
            "relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500",
            "before:absolute before:h-0.5 before:w-3 before:content-['']",
            "after:absolute after:h-0.5 after:w-3 after:transition-all after:duration-500 after:content-['']",
            active
              ? "before:bg-p1 after:bg-p1 after:rotate-0"
              : "before:bg-p3 after:bg-p3 after:rotate-90",
          )}
        >
          <div className="g-4 size-11/12 rounded-full shadow-300 pointer-events-none"></div>
        </div>
      </div>

      <SlideDown className="px-7">
        {active && <div className="body-3 py-3.5 px-7 ">{item.answer}</div>}
      </SlideDown>

      <div
        className={clsx(
          "absolute -top-7 -bottom-7 left-0 right-0 -z-1 rounded-3xl transition-opacity duration-500 pointer-events-none",
          active ? "opacity-100 g5" : "opacity-0 bg-transparent",
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};

export default FaqItem;
