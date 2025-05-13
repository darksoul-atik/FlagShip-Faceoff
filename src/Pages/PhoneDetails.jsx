import React from "react";
import { useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import Button from "../Components/UI/Button";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { phoneid } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(phoneid));

  console.log(singlePhone);

  const {
    // id,
    brand,
    name,
    // model,
    image,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};

  return (
    <div className="w-full py-12">
      <img
        src={image}
        className="w-full md:max-w-md lg:max-w-lg mx-auto md:w-auto mb-8"
        alt=""
      />
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="space-x-4">
          <Button label={<MdShoppingCartCheckout />}></Button>
          <Button label={<MdBookmarkAdd />}></Button>
        </div>
      </div>
      <div className="max-w-3xl  my-10 p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{brand}</h1>
        <h2 className="text-xl text-gray-700 mb-5">{name}</h2>
        {/* <h3 className="text-lg text-gray-600 mb-4 italic">Model: {model}</h3> */}

        <p className="text-gray-800 mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900">Camera Info:</h4>
          <p className="text-gray-700">{camera_info}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900">Prices:</h4>
          <ul className="list-disc list-inside text-gray-700">
            {price["256GB"] ? (
              <li>256GB: {price["256GB"]}</li>
            ) : (
              <li className="text-red-500">256GB: Not Available</li>
            )}
            {price["512GB"] ? (
              <li>512GB: {price["512GB"]}</li>
            ) : (
              <li className="text-red-500">512GB: Not Available</li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900">
            Storage Options:
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            {storage && storage.length > 0 ? (
              storage.map((variant, index) => <li key={index}>{variant}</li>)
            ) : (
              <li className="text-red-500">No storage information available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
