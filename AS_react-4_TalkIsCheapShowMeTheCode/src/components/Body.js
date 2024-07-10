import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Super Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList); // state variable by React, [] inside useState is default value;

  /* let listOfRestaurants = [];
  function abc() {
    // alert("Hi!");
    listOfRestaurants = resList.filter(function (item) {
      return item.info.avgRating > 4;
    });
  } */

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = resList.filter((item)=>{
            return item.info.avgRating > 4
          })
          setListOfRestaurant(filteredList);
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* {listOfRestaurants} */}
        {listOfRestaurants.map((restaurant, index) => (
          // Each item should has unique id
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
