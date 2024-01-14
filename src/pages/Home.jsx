import React from "react"
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Featured from "./Featured";
import Categories from "./Categories"
import OffersSection from "./OffersSection";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import TrendingProducts from "./TrendingProducts";
import NewlyLaunchedProducts from "./NewlyLaunchedProducts";

function Home() {

  return (
    <>
      <Topbar />
      <Navbar />
      <Featured />
      <Categories />
      <OffersSection />
      <TrendingProducts />
      <Subscribe />
      <NewlyLaunchedProducts />
      <Footer />
    </>
  )
};

export default Home;
