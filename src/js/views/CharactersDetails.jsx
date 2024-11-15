import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

let CharactersBaseURL = "https://starwars-visualguide.com/assets/img/characters";
const CharacterDetails = () =>{
    const characterID = useParams();
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.GetSingleCharacter(characterID.id);
    },[])
    return (
        <>
            <div className="card mb-3 m-auto" style={{maxWidth: "75%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${CharactersBaseURL}/${characterID.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-danger">{store.singleCharacter.name}</h1>
                            <p className="card-text">
                                <div className="d-flex">
                                    <h5 className="text-primary"> Height:</h5> <p className="ms-1"> {store.singleCharacter.height}cm</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Mass:</h5> <p className="ms-1"> {store.singleCharacter.mass}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Hair Color:</h5> <p className="ms-1"> {store.singleCharacter.hair_color}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Skin Color:</h5> <p className="ms-1"> {store.singleCharacter.skin_color}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Eye Color:</h5> <p className="ms-1"> {store.singleCharacter.eye_color}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Birth Year:</h5> <p className="ms-1"> {store.singleCharacter.birth_year}</p>
                                </div>
                                <div className="d-flex">
                                    <h5 className="text-primary"> Gender:</h5> <p className="ms-1"> {store.singleCharacter.gender}</p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterDetails;