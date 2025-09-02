import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//using props now
const Body = () => {
    // Local State Variable inside Boday
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    // useEffect Hook - to call an API or any side effects -- will be called after component is rendered
    useEffect(() => {
       fetchData()
    }, []); 

    // async function to fetch data from API
    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5186369&lng=78.3962529&collection=83639&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const filteredList = json?.data?.cards?.filter(card => card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
        setListofRestaurants(filteredList); 
        setFilteredRestaurants(filteredList);
    };

    // Conditional Rendering
    return listOfRestaurants === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search for restaurants..." 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="search-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter(restaurant => 
                            restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredList);
                    }}>Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(restaurant => 
                        restaurant.card.card.info.avgRating > 4
                    );
                    setFilteredRestaurants(filteredList);
                }} >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map(restaurant => (
                    <RestaurantCard resData={restaurant?.card.card.info} key={restaurant?.card.card.info.id} />
                ))}
            </div> 
        </div>
    )
}

export default Body;