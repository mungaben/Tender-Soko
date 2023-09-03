import React from "react";
import TendersDescription from "./TendersDescription";

const TendersMain = () => {
  return (
    <div>
      <div className=" flex overflow-hidden md:max-w-[80dvw] w-full ">
        <h1 className=" h-4 w-full fixed  mb-10  mx-4">
          Latest Government Tenders
        </h1>
        <div className=" mt-10 mx-4 ">
          <TendersDescription />
        </div>
      </div>
    </div>
  );
};

export default TendersMain;
