import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

//using props now
const Body = () => {
    // Local State Variable inside Boday
    const[listOfRestaurants, setListofRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = resList.filter(res => res.card.card.info.avgRating >= 3);
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