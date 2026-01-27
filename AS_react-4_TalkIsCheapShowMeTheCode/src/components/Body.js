import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { resList } from "../utils/mockData";

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
    try {
      console.log("Attempting to fetch from Swiggy API...");
      const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      // Try to fetch from Swiggy API directly
      const data = await fetch(SWIGGY_API);

      if (!data.ok) {
        throw new Error(`API returned status: ${data.status}`);
      }

      const json = await data.json();
      console.log("✅ Successfully fetched from Swiggy API:", json);

      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants && restaurants.length > 0) {
        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
      } else {
        throw new Error("No restaurants found in API response");
      }
    } catch (error) {
      console.warn("⚠️ Failed to fetch from API:", error.message);
      console.log("📦 Using mock data as fallback...");

      // Fallback to mock data as API is not working
      setListOfRestaurant(resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
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

  return listOfRestaurants?.length === 0 ? (
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
            const filteredList = listOfRestaurants.filter((item) => {
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
        {filteredRestaurant?.map((restaurant) => (
          // Each item should has unique id
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
