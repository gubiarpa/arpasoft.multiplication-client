import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";

export const MenuPage = () => {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setUsername(() => (localStorage.getItem("username") ?? ""));
    }, []);

    const handleCreateGameClick = () => {
    }

    const handleJoinGameClick = () => {
        navigate("/join", { replace: true });
    }

    const handleTrainingClick = () => {
    }

    const handleBackClick = () => {
        navigate("/", { replace: true });
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
            <form className="text-center">
                <label className="fs-2 mb-3">
                    Hi, <span className="text-capitalize">{username}</span>!
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
