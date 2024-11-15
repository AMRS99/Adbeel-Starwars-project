import React from "react";
import PlanetsCard from "./PlanetsCard.jsx";

const PlanetsCardList = ({planets, imgURL}) => {

    return(
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    planets.map(item => {
                        return(
                            <PlanetsCard 
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

export default PlanetsCardList;