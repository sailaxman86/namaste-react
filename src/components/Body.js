import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//using props now
const Body = () => {
    // Local State Variable inside Boday
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // searchText is a local state variable, and setSearchText is the function to update the state variable
    const [searchText, setSearchText] = useState("");

    // useEffect Hook - to call an API or any side effects -- will be called after component is rendered
    useEffect(() => {
       fetchData()
    }, []); 

    // async function to fetch data from API
    const fetchData = async() => {
        const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5186369&lng=78.3962529&collection=83639&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const filteredList = json?.data?.cards?.filter(card => card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
        setListofRestaurants(filteredList); 
        setFilteredRestaurants(filteredList);
    };

    // Track nextOffset for pagination
    const [nextOffset, setNextOffset] = useState("CJpqEJtYKICQ7eKBrM3zATDIDjgB");
    const [loadingMore, setLoadingMore] = useState(false);

    // Helper to remove duplicate restaurants by id
    const removeDuplicates = (restaurants) => {
        const seen = new Set();
        return restaurants.filter(restaurant => {
            const id = restaurant?.card?.card?.info?.id;
            if (seen.has(id)) return false;
            seen.add(id);
            return true;
        });
    };

    // Fetch restaurants using POST
    const fetchMoreRestaurants = async (offset) => {
        setLoadingMore(true);
        const payload = {
            lat: 17.5186369,
            lng: 78.3962529,
            collection: "83639",
            tags: "layout_CCS_Biryani",
            sortBy: "",
            filters: "",
            type: "rcv2",
            nextOffset: offset,
            widgetOffset: {
                restaurantCountWidget: "",
                collectionV5RestaurantListWidget_SimRestoRelevance_food: "8",
                inlineFacetFilter: "",
                collectionV5MastheadWidget: ""
            },
            page_type: null,
            _csrf: "eGJ23MueQqFl-E87xsrPbAbOIsNV88Tb-qfLNK38"
        };
        const response = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/update", {
            method: "POST",
            //mode: "cors",
           // referer: "https://corsproxy.io/https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });
        const json = await response.json();
        const newCards = json?.data?.cards?.filter(card => card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
        const combined = removeDuplicates([...listOfRestaurants, ...(newCards || [])]);
        setListofRestaurants(combined);
        setFilteredRestaurants(combined);
        setNextOffset(json?.data?.nextOffset || null);
        setLoadingMore(false);
    };

    // Infinite scroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
                !loadingMore &&
                nextOffset
            ) {
                fetchMoreRestaurants(nextOffset);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loadingMore, nextOffset, listOfRestaurants]);


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