import { Card } from "./Card"
import restlist from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"




const Body=()=>{
     const [restaurantList,setrestaurantList]=useState([])
     const [filterrestaurants,setfilterrestaurants]=useState([])
     console.log(restaurantList)

     useEffect(()=>{
        console.log("the fetch is called")
            fetchData();
     },
    [])

    const [searchText,setsearchText]=useState("")


    const fetchData=async()=>{

        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
        //console.log(json)
        const restaurant=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log("The filteris called")
        setrestaurantList(restaurant)
        setfilterrestaurants(restaurant)
    }
    
    
    //Consition resdering
   
    

    return (

        restaurantList.length==0 ?<Shimmer/>:
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searchbox" value={searchText} onChange={(e)=>{
                       
                        setsearchText(e.target.value)

                    }} ></input>

                </div>
                <button className="serch-btn" width="20px" onClick={()=>{
                        const filterRestaurant=restaurantList.filter((res)=> res.info.name.includes(searchText))
                        setfilterrestaurants(filterRestaurant)
                }   

                }>Search</button>
                <button className="filter-btn" onClick={()=>{ 
                    console.log("clicked")
                    const filterList=restlist.filter((res)=>res.info.avgRating > 4.4)
                    setrestaurantList(filterList)
                    }}>
                    Filter Button</button>
            </div>
            <div className="rest-container">
                {filterrestaurants.map((restaurant)=>(
                    <Card key={restaurant.info.id} restdata={restaurant}></Card>))
                }    
            </div>

        </div>
    )
}

export default Body