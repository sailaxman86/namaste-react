import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//using props now
const Body = () => {
    // Local State Variable inside Boday
    const[listOfRestaurants, setListofRestaurants] = useState([]);

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
    };

    if(listOfRestaurants == 0){
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.card.card.info.avgRating >= 4);
                    setListofRestaurants(filteredList);
                }} >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-list">
                {
                    listOfRestaurants.map(restaurant => (
                    <RestaurantCard resData={restaurant?.card.card.info} key={restaurant?.card.card.info.id} />
                ))}
            </div> 
        </div>
    )
}

export default Body;