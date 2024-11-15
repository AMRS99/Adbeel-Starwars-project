import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

let PlanetsBaseURL = "https://starwars-visualguide.com/assets/img/planets";
const PlanetsDetails = () =>{
    const planetID = useParams();
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.GetSinglePlanet(planetID.id);
    },[])
    return (
        <>
            <div className="card mb-3 m-auto" style={{maxWidth: "75%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={
                            planetID.id==="1"
                            ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                            :`${PlanetsBaseURL}/${planetID.id}.jpg`} 
                            className="card-img-top" 
                            alt="..."
                        /> 
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-danger">{store.singlePlanet.name}</h1>
                            <p className="card-text">
                                <div className="d-flex">
                                    <h5 className="text-primary"> Diameter:</h5> <p className="ms-1"> {store.singlePlanet.diameter}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Rotation Period:</h5> <p className="ms-1"> {store.singlePlanet.rotation_period}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Orbital Period:</h5> <p className="ms-1"> {store.singlePlanet.orbital_period}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Gravity:</h5> <p className="ms-1"> {store.singlePlanet.gravity}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Population:</h5> <p className="ms-1"> {store.singlePlanet.population}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Climate:</h5> <p className="ms-1"> {store.singlePlanet.climate}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Terrain:</h5> <p className="ms-1"> {store.singlePlanet.terrain}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Surface Water:</h5> <p className="ms-1"> {store.singlePlanet.surface_water}</p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanetsDetails;