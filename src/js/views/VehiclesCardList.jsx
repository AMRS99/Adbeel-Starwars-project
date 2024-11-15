import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import VehiclesCard from "./VehiclesCard.jsx";

const VehiclesCardList = ({array, imgURL}) =>{
    const {store, action} = useContext(Context);
    return(
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    array.map(item => {
                        return(
                            <VehiclesCard 
                                key={item.uid}
                                id={item.uid}
                                name={item.name} 
                                imgURL={imgURL}
                            />
                        );
                    })  
                }  
            </div>  
        </>
    );

}

export default VehiclesCardList;