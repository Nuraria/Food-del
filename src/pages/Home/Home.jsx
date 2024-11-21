import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDispaly from "../../components/FoodDisplay/FoodDispaly";

const Home = () => {
  const [category, setCategory] = React.useState(0);

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDispaly category={category} />
    </div>
  );
};

export default Home;
