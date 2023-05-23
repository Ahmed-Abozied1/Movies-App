import React from "react";
import Banner from "../components/Home/Banner";
import PopularMovies from "../components/Home/PopularMovies";
import TopRated from "../components/Home/TopRated";
import Promos from "../components/Home/Promos";
import Layout from "../layout/Layout";

const HomeScreen = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
      <Banner/>
      <PopularMovies/>
      <Promos/>
      <TopRated/>
      </div>
    </Layout>
  );
};

export default HomeScreen;
