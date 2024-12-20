import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const PlanetsCard = ({id, name, imgURL}) => {
    const {store, actions} = useContext(Context);
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img 
                    src={
                        name==="Tatooine"
                    ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                    :`${imgURL}/${id}.jpg`} 
                    className="card-img-top" 
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <div className="d-flex justify-content-between">
                        <Link to={`/PlanetsDetails/${id}`}>
                            <button href="#" className="btn btn-primary">More Info!!!</button>
                        </Link>
                        <button type="button" className="btn btn-outline-warning">
                            <svg 
                                onClick={()=> actions.AddFavorite(id,name)}
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" height="16" 
                                fill="currentColor" 
                                className="bi bi-heart" 
                                viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default PlanetsCard;