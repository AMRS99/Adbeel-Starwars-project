import React from "react";
import CharactersCard from "./CharactersCard.jsx";

const CharactersCardList = ({characters, imgURL}) =>{

    return(
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    characters.map(item => {
                        return(
                            <CharactersCard 
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

export default CharactersCardList;