import React from "react";
import './RestaurantItems.css';
const RestaurantItems = (props) => {
    const{
        name= "",
        cuisine= "",
        rating= "0",
        review= "0",
        image= "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    }=props;
    return (
                <div className="items">
                    <div className="item-images">
                        <img src={image} alt="restaurant" />
                    </div>
                    <div className="restaurant-name">
                        <p>{name}</p>
                    </div>
                    <div className="address">
                        <p>{cuisine}</p>
                    </div>
                    <div className="location-icon">
                        <i className="fas fa-thin fa-location-dot"></i>
                        <span className="distance">Rating {rating}</span>
                    </div>
                    <div className="line">
                        
                    </div>
                    <div className="reviews">
                        <p>{review} Reviews</p>
                    </div>
                </div>
    )
}

export default RestaurantItems;