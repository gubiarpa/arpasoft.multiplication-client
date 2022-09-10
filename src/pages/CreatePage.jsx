import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate, faRunning } from "@fortawesome/free-solid-svg-icons";
import SetupFactors from "../components/SetupFactors";

export const CreatePage = () => {

    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState(0);
    const [factor1, setFactor1] = useState(12);
    const [factor2, setFactor2] = useState(12);

    useEffect(() => {
        const randomNumber = localStorage.getItem("roomcode") ?? (1000 + Math.floor(Math.random() * 8999));
        setRoomCode(() => randomNumber);
    }, []);

    useEffect(() => {
        localStorage.setItem("roomcode", roomCode);
    }, [roomCode]);

    const handleChangeFactor1 = ({ target }) => {
        setFactor1(target.value);
    }

    const handleChangeFactor2 = ({ target }) => {
        setFactor2(target.value);
    }

    const handleContinueClick = () => {
        navigate("/admit", { replace: true });
    }

    const handleBackClick = () => {
        navigate("/menu", { replace: true });
    }

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
                <div className="fs-1 text-secondary text-reset">
                    Room <span className="fs-3">({roomCode})</span>
                </div>
                <SetupFactors
                    factor1={factor1}
                    handleChangeFactor1={handleChangeFactor1}
                    factor2={factor2}
                    handleChangeFactor2={handleChangeFactor2}
                />
                <hr />

                <div>
                    <button
                        className="btn btn-outline-success mt-4 col-12 fs-3"
                        onClick={handleContinueClick}
                    >
                        <FontAwesomeIcon icon={faRunning} /> Continue
                    </button>
                    <button
                        className="btn btn-outline-secondary mt-3 col-12 fs-3"
                        onClick={handleBackClick}
                    >
                        <FontAwesomeIcon icon={faArrowLeftRotate} /> Back
                    </button>
                </div>
            </div>
        </>
    );
}
