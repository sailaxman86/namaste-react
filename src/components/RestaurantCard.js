import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props ; 
    const {id,name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData;
    const uniqueId = resData.id;
    console.log(CDN_URL+cloudinaryImageId);
    return (
        <div id={uniqueId} className="restaurant-card" style={{backgroundColor: "#ceb2b285"}}>
            <img className="restaurant-logo" alt="restaurant-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )   
}
export default RestaurantCard;