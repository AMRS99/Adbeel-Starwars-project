import React, { useContext } from "react";
import "../../styles/home.css";
import CharactersCardList from "./CharactersCardList.jsx"
import PlanetsCardList from "./PlanetsCardList.jsx";
import VehiclesCardList from "./VehiclesCardList.jsx";
import { Context } from "../store/appContext.js";

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
                        <CharactersCardList 
                            characters={store.characters}
                            imgURL={CharactersBaseURL}
                        />
                    </div>
                    <div className="my-5">
                        <h1 className="text-danger">Planets</h1>
                        <PlanetsCardList 
                            planets={store.planets}
                            imgURL={PlanetsBaseURL}
                        />
                    </div>
                    <div className="my-5">
                        <h1 className="text-danger">Vehicles</h1>
                        <VehiclesCardList 
                            array={store.vehicles}
                            imgURL={VehiclesBaseURL}
                        />
                    </div>
                </div>

                <div className="col-1"></div>
            </div>
        </>
    )
}
