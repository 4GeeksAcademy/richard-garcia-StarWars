import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.planetaIndividual(params.theid)
    }, [])
    return (
        <div className="container">

            <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        {params.theid == 1 ?
                            <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} class="img-fluid rounded-start" alt="..." /> :
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.theid) + ".jpg"} class="img-fluid rounded-start" alt="..." />
                        }
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{store.planeta.name}</h5>
                            <p class="card-text">rotation_period: {store.planeta.rotation_period}</p>
                            <p class="card-text">orbital_period: {store.planeta.orbital_period}</p>
                            <p class="card-text">diameter: {store.planeta.diameter}</p>
                            <p class="card-text">climate: {store.planeta.climate}</p>
                            <p class="card-text">gravity: {store.planeta.gravity}</p>
                            <p class="card-text">terrain: {store.planeta.terrain}</p>
                            <p class="card-text">surface_water: {store.planeta.surface_water}</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SinglePlanet.propTypes = {
    match: PropTypes.object
};
