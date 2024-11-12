import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardList from "./CardList.jsx"
import { Context } from "../store/appContext.js";


let characterResults= [
        {
            "uid": "1",
            "name": "Luke Skywalker",
            "url": "https://www.swapi.tech/api/people/1"
        },
        {
            "uid": "2",
            "name": "C-3PO",
            "url": "https://www.swapi.tech/api/people/2"
        },
        {
            "uid": "3",
            "name": "R2-D2",
            "url": "https://www.swapi.tech/api/people/3"
        },
        {
            "uid": "4",
            "name": "Darth Vader",
            "url": "https://www.swapi.tech/api/people/4"
        },
        {
            "uid": "5",
            "name": "Leia Organa",
            "url": "https://www.swapi.tech/api/people/5"
        },
        {
            "uid": "6",
            "name": "Owen Lars",
            "url": "https://www.swapi.tech/api/people/6"
        },
        {
            "uid": "7",
            "name": "Beru Whitesun lars",
            "url": "https://www.swapi.tech/api/people/7"
        },
        {
            "uid": "8",
            "name": "R5-D4",
            "url": "https://www.swapi.tech/api/people/8"
        },
        {
            "uid": "9",
            "name": "Biggs Darklighter",
            "url": "https://www.swapi.tech/api/people/9"
        },
        {
            "uid": "10",
            "name": "Obi-Wan Kenobi",
            "url": "https://www.swapi.tech/api/people/10"
        }
    ]

	let CharactersBaseURL = "https://starwars-visualguide.com/assets/img/characters";
	let PlanetsBaseURL = "https://starwars-visualguide.com/assets/img/planets";
	let VehiclesBaseURL = "https://starwars-visualguide.com/assets/img/vehicles";
export const Home = () => {
    const {store, actions} = useContext(Context);
    return(
        <>
            <div className="row">
                <div className="col-1"></div>

                <div className="col-10">
                    <div className="my-5">
                        <h1 className="text-danger">Characters</h1>
                        <CardList 
                            array={store.characters}
                            imgURL={CharactersBaseURL}
                        />
                    </div>
                    <div className="my-5">
                        <h1 className="text-danger">Planets</h1>
                        <CardList 
                            array={store.planets}
                            imgURL={PlanetsBaseURL}
                        />
                    </div>
                    <div className="my-5">
                        <h1 className="text-danger">Vehicles</h1>
                        <CardList 
                            array={store.vehicles}
                            imgURL={VehiclesBaseURL}
                        />
                    </div>
                </div>

                <div className="col-1"></div>
            </div>
        </>
    )
};
