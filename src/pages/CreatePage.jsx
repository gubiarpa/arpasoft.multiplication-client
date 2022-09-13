import { FACTOR_1_DEFAULT, FACTOR_2_DEFAULT } from "../Constants/GameParameters";
import React, { useContext, useEffect, useState } from "react";

import { ActionStep } from "../components/ActionStep";
import { GameContext } from "../context/GameContext";
import { SetupFactors } from "../components/SetupFactors";
import { getRoomCode } from "../services/getRoomCode";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {

    const { game, setGameRoom, setGameFactor1, setGameFactor2 } = useContext(GameContext);

    const navigate = useNavigate();

    const [factor1, setFactor1] = useState(FACTOR_1_DEFAULT);
    const [factor2, setFactor2] = useState(FACTOR_2_DEFAULT);

    useEffect(() => {
        if (!game.user) {
            navigate("/", { replace: true });
        }
        const roomCode = getRoomCode();
        setGameRoom(roomCode);
    }, []);

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
                <div className="fs-1 text-secondary text-reset">
                    Room <span className="fs-3">({game.room})</span> for {game.user}
                </div>
                <SetupFactors
                    defaultFactor1={FACTOR_1_DEFAULT}
                    actionFactor1={setFactor1}
                    defaultFactor2={FACTOR_2_DEFAULT}
                    actionFactor2={setFactor2}
                />
                <hr />
                <ActionStep
                    actionContinue={() => { navigate("/admit", { replace: true }); }}
                    actionBack={() => { navigate("/menu", { replace: true }); }}
                />
            </div>
        </>
    );
}
