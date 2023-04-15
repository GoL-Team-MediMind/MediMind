import React from "react";
import BIT from "../../assets/bit.png"

const LeadersCard = ({ name, position }) => {
  return (
    <div className="w-[45%] md:w-[22%] max-w-[300px] rounded-lg shadow-lg">
      <img
        src={BIT}
        alt="staff_member"
        className="w-full rounded-t-md"
      />

      <div className="bg-white px-2 pb-2 pt-1 sm:pl-4 sm:pb-4">
        <h1 className="text-primary text-lg font-semibold">{name}</h1>
        <p className="leading-5 break-words text-base text-gray-600">
          {position}
        </p>
      </div>
    </div>
  );
};

export default LeadersCard;
