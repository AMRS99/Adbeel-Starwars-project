import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

let VehiclesBaseURL = "https://starwars-visualguide.com/assets/img/vehicles";
const VehiclesDetails = () =>{
    const vehicleID = useParams();
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.GetSingleVehicle(vehicleID.id);
    },[])
    return (
        <>
            <div className="card mb-1 m-auto" style={{maxWidth: "75%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${VehiclesBaseURL}/${vehicleID.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-danger">{store.singleVehicle.name}</h1>
                            <p className="card-text">
                                <div className="d-flex">
                                    <h5 className="text-primary"> Model:</h5> <p className="ms-1"> {store.singleVehicle.model}</p>
                                </div>  
                                <div className="d-flex">
                                    <h5 className="text-primary"> Vehicle Class:</h5> <p className="ms-1"> {store.singleVehicle.vehicle_class}</p>
                                </div> 
                                <div className="d-flex">
                                    <h5 className="text-primary"> Manufacturer:</h5> <p className="ms-1"> {store.singleVehicle.manufacturer}</p>
                                </div> 
                                <div className="d-flex">
                                    <h5 className="text-primary"> Cost in Credits:</h5> <p className="ms-1"> {store.singleVehicle.cost_in_credits}</p>
                                </div> 
                                <div className="d-flex">
                                    <h5 className="text-primary"> Length:</h5> <p className="ms-1"> {store.singleVehicle.length}</p>
                                </div>   
                                <div className="d-flex">
                                    <h5 className="text-primary"> Crew:</h5> <p className="ms-1"> {store.singleVehicle.crew}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Passengers:</h5> <p className="ms-1"> {store.singleVehicle.passengers}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Max Atmosphering Speed:</h5> <p className="ms-1"> {store.singleVehicle.max_atmosphering_speed}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Cargo Capacity:</h5> <p className="ms-1"> {store.singleVehicle.cargo_capacity}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Consumables:</h5> <p className="ms-1"> {store.singleVehicle.consumables}</p>
                                </div>                         
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VehiclesDetails;