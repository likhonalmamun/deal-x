import React from "react";
import Advertise from "./Advertise";
import Banner from "./Banner";
import Categories from "./Categories";
import Notified from "./Notified";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Advertise></Advertise>
      <Notified></Notified>
    </div>
  );
};

export default Home;
