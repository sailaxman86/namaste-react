 import React from "react";
 import ReactDom from "react-dom/client";
 import "/src/components/App.css";
 import Header from "./Header";
 import Body from "./Body";
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
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>;
}
        
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);