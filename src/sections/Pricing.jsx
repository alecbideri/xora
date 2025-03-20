import React from "react";
import { Element } from "react-scroll";
import clsx from "clsx";
import { plans } from "../constants/index.js";

const Pricing = () => {
  const [monthlyData, setMonthlyData] = React.useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          {/*Title and background of the pricing section*/}

          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r  border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthlyData && "text-p4")}
                onClick={() => setMonthlyData(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthlyData && "text-p4")}
                onClick={() => setMonthlyData(false)}
              >
                Annually
              </button>
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-all duration-500",
                  !monthlyData && "translate-x-full",
                )}
              />
            </div>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {/*  Pricing section*/}
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl-" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Pricing;
