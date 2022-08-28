import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";

export const CreatePage = () => {

    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState(0);
    const [factor1, setFactor1] = useState(12);
    const [factor2, setFactor2] = useState(12);

    useEffect(() => {
        setRoomCode(() => (Math.floor(Math.random() * 9999)));
    }, [])


    const handleChangeFactor1 = ({ target }) => {
        setFactor1(target.value);
    }

    const handleChangeFactor2 = ({ target }) => {
        setFactor2(target.value);
    }

    const handleContinueClick = () => {
        navigate("/", { replace: true });
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
                <div className="my-5">
                    <label
                        className="form-label fs-2"
                    >
                        Factor 1 <span className="fs-5 text-secondary">(hasta la tabla del {factor1})</span>
                    </label>
                    <input
                        type="range"
                        className="form-range fs-4"
                        min={2}
                        max={12}
                        onChange={handleChangeFactor1}
                        value={factor1}
                    />
                </div>
                <div className="my-5">
                    <label
                        className="form-label fs-2"
                    >
                        Factor 2 <span className="fs-5 text-secondary">(hasta la tabla del {factor2})</span>
                    </label>
                    <input
                        type="range"
                        className="form-range fs-4"
                        min={9}
                        max={12}
                        onChange={handleChangeFactor2}
                        value={factor2}
                    />
                </div>
                <hr />

                <div>
                    <button
                        className="btn btn-outline-primary mt-3 col-12 fs-3"
                        onClick={handleContinueClick}
                    >
                        Continue
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
