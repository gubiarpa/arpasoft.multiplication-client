import { FACTOR_1_DEFAULT, FACTOR_2_DEFAULT } from "../Constants/GameParameters";
import React, { useContext, useEffect, useState } from "react";

import { ActionStep } from "../components/ActionStep";
import { GameContext } from "../context/GameContext";
import { SetupFactors } from "../components/SetupFactors";
import { TitleForm } from "../components/TitleForm";
import { getRoomCode } from "../services/getRoomCode";
import { mainStyle } from "../Constants/DefinedClasses";
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
            <div className={mainStyle}>
                <TitleForm
                    content={
                        <>
                            Let's start, <span className="text-capitalize">{game.user}</span>! <span className="fs-4">({game.room})</span>
                        </>
                    }
                />
                <div className="fs-1 text-secondary text-reset">
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
