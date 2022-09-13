import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GameContext } from "../context/GameContext";
import { faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const MenuPage = () => {

    const { game } = useContext(GameContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!game.user) {
            navigate("/", { replace: true });
        }
    }, []);

    const handleCreateGameClick = (e) => {
        e.preventDefault();
        navigate("/create", { replace: true });
    }

    const handleJoinGameClick = (e) => {
        e.preventDefault();
        navigate("/join", { replace: true });
    }

    const handleTrainingClick = (e) => {
        e.preventDefault();
        navigate("/setup-training", { replace: true });
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        navigate("/", { replace: true });
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
            <form className="text-center">
                <label className="fs-2 mb-3">
                    Hi, <span className="text-capitalize">{game.user}</span>!
                </label>
                <button
                    className="btn btn-outline-primary mt-3 col-12 fs-3"
                    onClick={handleCreateGameClick}
                >
                    Create Game
                </button>
                <button
                    className="btn btn-outline-primary mt-3 col-12 fs-3"
                    onClick={handleJoinGameClick}
                >
                    Join Game
                </button>
                <button
                    className="btn btn-outline-primary mt-3 col-12 fs-3"
                    onClick={handleTrainingClick}
                >
                    Training
                </button>
                <hr />
                <button
                    className="btn btn-outline-secondary mt-3 col-12 fs-3"
                    onClick={handleBackClick}
                >
                    <FontAwesomeIcon icon={faArrowLeftRotate} /> Back
                </button>
            </form>
        </div>
    );
}
