import { CDN_URL } from "../utils/constants"


export const Card=(props)=>{

    const {restdata}=props
    //console.log(restdata)
    //optional chaining
    const{name,cuisines,avgRating,costForTwo}=restdata?.info

    return(
        <div className="rest-card">
            <div className="logo">
            <img  className="rest-logo" src={CDN_URL+restdata.info.cloudinaryImageId}></img>
            </div>
          <h2>{name}</h2>
          <h4>{cuisines.join(",")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{restdata.info.sla.deliveryTime} Min</h4>
        </div>
    )
}