 import React from "react";
 import ReactDom from "react-dom/client";
 import "./App.css";  
/**
 * Headers
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant List
 *  - Restaurant Card
 *   - Image
 *  - Name
 *  - Cusines
 *  - Rating
 * Footer
 *  - copyright
 *  - links
 *  - address
 *  - contact info
 * 
 */


const HeaderComponent = () => {
    return (
        <div className="header">
            <div>
                <img src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg" className="logo" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card" style={{backgroundColor: "#ceb2b285"}}>
            <img className="restaurant-logo" alt="restaurant-logo" src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?semt=ais_hybrid&w=740&q=80"/>
            <h3>Mayuri Foods</h3>
            <h4>Biryani, Indian, Veg/Non-Veg</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )   
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-list">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div> 
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <HeaderComponent />
        <Body />
    </div>;
}
        
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);