import React from "react";
import RestaurantItems from "../restaurant-items/RestaurantItems";
import './RestaurantList.css';
const RestaurantList = (props) =>{
    const {items} = props;
    return (
        <div className="restaurant-content">
            {
                items.map((each_items)=> {
                    return (
                        <RestaurantItems
                        key={each_items.id}
                        name={each_items.name}
                        cuisines={each_items.cuisines}
                        rating={each_items.rating}
                        review={each_items.reviews}
                        image={each_items.feature_image}
                        />
                    )
                })
            }
        </div>
    )
}

export default RestaurantList;