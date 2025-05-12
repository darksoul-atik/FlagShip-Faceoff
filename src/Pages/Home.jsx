import React, { useState } from "react";
import Hero from "../Components/Hero";
import { useLoaderData } from "react-router";
import PhoneContainer from "../Components/PhoneContainer";

const Home = () => {
  const data = useLoaderData();
  const [Phone, setPhone] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();

    if (!text || text === " ") {
      return setPhone(data);
    }

    const searchedPhones = data.filter(
      (phone) =>
        phone?.name?.toLowerCase().includes(text.toLowerCase()) ||
        phone?.brand?.toLowerCase().includes(text.toLowerCase())
    );

    setPhone(searchedPhones);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <PhoneContainer Phone={Phone}></PhoneContainer>
    </div>
  );
};

export default Home;
