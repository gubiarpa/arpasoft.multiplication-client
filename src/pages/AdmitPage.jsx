import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate, faGun } from "@fortawesome/free-solid-svg-icons";

export const AdmitPage = () => {

    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState();
    const [username, setUsername] = useState("");

    useEffect(() => {
        setRoomCode(localStorage.getItem("roomcode") ?? "");
        setUsername(() => (localStorage.getItem("username") ?? ""));
    }, []);

    useEffect(() => {
        localStorage.setItem("roomcode", roomCode);
    }, [roomCode]);

    const handleContinueClick = () => {

    }

    const handleBackClick = () => {
        navigate("/menu", { replace: true });
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
            <div className="fs-1 text-secondary text-reset">
                Room <span className="fs-3">({roomCode})</span>
            </div>
            <div className="mt-4">
                <ul className="list-group fs-5">
                    <li className="list-group-item text-primary"><span className="text-capitalize">{username}</span> (me)</li>
                    <li className="list-group-item">Tiana</li>
                    <li className="list-group-item">Billy</li>
                </ul>
            </div>
            <button
                className="btn btn-outline-success mt-4 col-12 fs-3"
                onClick={handleContinueClick}
            >
                <FontAwesomeIcon icon={faGun} /> Start
            </button>
            <button
                className="btn btn-outline-secondary mt-3 col-12 fs-3"
                onClick={handleBackClick}
            >
                <FontAwesomeIcon icon={faArrowLeftRotate} /> Back
            </button>
        </div>
    );
}
