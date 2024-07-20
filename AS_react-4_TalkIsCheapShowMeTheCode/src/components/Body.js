import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Super Variable - super powerful variable
  let [listOfRestaurants, setListOfRestaurant] = useState([]); // state variable by React, [] inside useState is default value;
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // useEffect = simply a normal Javascript Function, has 2 arguments (callback function, dependency array)
  // When will this useEffect callback function will be called? => after component renders. If you want to do something after component render, use useEffect.
  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  // console.log("Body Component Rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // optional chaining is to add => ?
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  /* let listOfRestaurants = [];
  function abc() {
    // alert("Hi!");
    listOfRestaurants = resList.filter(function (item) {
      return item.info.avgRating > 4;
    });
  } */

  // Conditional Rendering
  /*   if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  } */

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              // filter the Restaurant cards and update the UI
              // searchText
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="btn filter-btn"
          onClick={() => {
            const filteredList = resList.filter((item) => {
              return item.info.avgRating > 4;
            });
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* {listOfRestaurants} */}
        {filteredRestaurant.map((restaurant, index) => (
          // Each item should has unique id
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
