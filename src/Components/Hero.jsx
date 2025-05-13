import React, { useState } from "react";
import bannerImg from "../assets/images/banner.png";
import Button from "./UI/Button";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="py-12">
      <img
        src={bannerImg}
        className="w-full md:max-w-md lg:max-w-lg mx-auto"
        alt=""
      />

      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl text-gray-900">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best place to browse, search, view details and purchase of top
          flagship phones of the current time - FlagshipFaceOff
        </p>

        <form
          onSubmit={(e) => {
            const safeText = searchText.length === 0 ? " " : searchText;
            handleSearch(e, safeText);
            setSearchText("");
          }}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Phone By Name"
            className="bg-white border border-gray-300 w-2/3 h-12 px-4 mb-3 rounded shadow-md focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />

          <Button type='submit' label="Search"></Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
