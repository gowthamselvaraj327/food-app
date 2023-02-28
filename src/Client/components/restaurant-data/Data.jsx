import React, {useState, useEffect} from "react";
import RestaurantList from "../restaurant-list/RestaurantList";

const DUMMY_DATA = [
    {
        "id": "66330",
        "name": "Kakada Ramprasad",
        "cuisines": "Mithai, Street Food, North Indian",
        "rating": "4.4",
        "reviews": "865",
        "feature_image": "https://b.zmtcdn.com/data/pictures/8/18387708/05ccffe6286d86a43e664cff382b1cda.jpg?output-format=webp"
    },
    
]


const Data = () => {
    const [itemsList, setItemsList]= useState(DUMMY_DATA);

    useEffect(()=>{
        fetch('https://run.mocky.io/v3/8752805c-5fcf-4f55-aadc-6bcf8a8e3ad1', {method:'GET'})
        .then(response => response.json())
        .then((items)=>{
            setItemsList(items);
        })
      },[])

    return(
     <RestaurantList items={itemsList}/>   
    )
}

export default Data;