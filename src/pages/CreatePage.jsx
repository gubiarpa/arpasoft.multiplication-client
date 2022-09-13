import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SetupFactors } from "../components/SetupFactors";
import { ActionStep } from "../components/ActionStep";
import { factor1ByDefault, factor2ByDefault } from "../Constants/GameParameters";

export const CreatePage = () => {

    const navigate = useNavigate();

    const [roomCode, setRoomCode] = useState(0);

    const [factor1, setFactor1] = useState(factor1ByDefault);
    const [factor2, setFactor2] = useState(factor2ByDefault);

    useEffect(() => {
        const randomNumber = localStorage.getItem("roomcode") ?? (1000 + Math.floor(Math.random() * 8999));
        setRoomCode(() => randomNumber);
    }, []);

    useEffect(() => {
        localStorage.setItem("roomcode", roomCode);
    }, [roomCode]);

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
                    defaultFactor1={factor1ByDefault}
                    actionFactor1={setFactor1}
                    defaultFactor2={factor2ByDefault}
                    actionFactor2={setFactor2}
                />
                <hr />
                <ActionStep
                    actionContinue={handleContinueClick}
                    actionBack={handleBackClick}
                />
            </div>
        </>
    );
}
