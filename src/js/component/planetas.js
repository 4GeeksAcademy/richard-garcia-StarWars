import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Planetas = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerPlanetas()
    }, [])
    return (
        <div className="container">
            <h1> Planetas  </h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.planetas.map((item, id) => (


                        <div class="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={id}>
                            {id == 0 ?
                                <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} class="card-img-top" alt="..." /> :

                                <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"} class="card-img-top" alt="..." />
                            }
                            <div class="card-body">
                                <h5 class="card-title">{item.name} </h5>
                                <p class="card-text">Climate: {item.climate}</p>
                                <p class="card-text">Terrain: {item.terrain}</p>
                                <Link to={"/singlePlanet/" + (id + 1)} class="btn btn-primary">More info</Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>

    );
};
