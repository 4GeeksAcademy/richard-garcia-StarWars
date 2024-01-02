import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Personajes = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])
    return (
        <div className="container">
            <h1> Personajes  </h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.personajes.map((item, id) => (


                        <div class="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={id}>
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.name} </h5>
                                <p class="card-text">Gender: {item.gender}</p>
                                <p class="card-text">Eye Color: {item.eye_color}</p>
                                <Link to={"/single/" + (id+1) }  class="btn btn-primary">More info</Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>

    );
};
