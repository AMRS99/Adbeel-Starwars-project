import React from "react";
import Card from "./Card.jsx";

const CardList = ({array, imgURL}) =>{

    return(
        <>
            <div className="d-flex gap-3 overflow-auto">
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