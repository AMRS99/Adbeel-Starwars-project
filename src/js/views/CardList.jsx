import React, { useContext } from "react";
import Card from "./Card.jsx";
import { Context } from "../store/appContext.js";

const CardList = ({array, imgURL}) =>{
    const {store, action} = useContext(Context);
    return(
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    array.map(item => {
                        return(
                            <Card 
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

export default CardList;