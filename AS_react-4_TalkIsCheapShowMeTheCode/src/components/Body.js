import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  // Super Variable - super powerful variable
  let [listOfRestaurants, setListOfRestaurant] = useState([]); // state variable by React, [] inside useState is default value;

  // useEfefct = simply a normal Javascript Function, has 2 arguments (callback function, dependency array)
  // When will this useEffect callback function will be called? => after component renders. If you want to do something after component render, use useEffect.
  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  // console.log("Body Component Rendered");

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    console.log(json);

    setListOfRestaurant(
      listOfRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // optional chaining is to add => ?

    );
  }


  /* let listOfRestaurants = [];
  function abc() {
    // alert("Hi!");
    listOfRestaurants = resList.filter(function (item) {
      return item.info.avgRating > 4;
    });
  } */

    if (listOfRestaurants.length === 0) {
      return <h1>Loading....</h1>;
    } else {
      
    }

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
