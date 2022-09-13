import { FACTOR_1_DEFAULT, FACTOR_2_DEFAULT } from "../Constants/GameParameters";
import React, { useContext, useEffect, useState } from "react";

import { ActionStep } from "../components/ActionStep";
import { GameContext } from "../context/GameContext";
import { SetupFactors } from "../components/SetupFactors";
import { TitleForm } from "../components/TitleForm";
import { mainStyle } from "../Constants/DefinedClasses";
import { useNavigate } from "react-router-dom";

export const SetupTrainingPage = () => {

    const { game, setGameFactor1, setGameFactor2 } = useContext(GameContext);

    const navigate = useNavigate();

    const [factor1, setFactor1] = useState(FACTOR_1_DEFAULT);
    const [factor2, setFactor2] = useState(FACTOR_2_DEFAULT);

    useEffect(() => {
        if (!game.user) {
            navigate("/", { replace: true });
        }
        if (!game.factor1) {
            setGameFactor1(FACTOR_1_DEFAULT);
        }
        if (!game.factor2) {
            setGameFactor2(FACTOR_2_DEFAULT);
        }
    }, []);

    useEffect(() => {
        setGameFactor1(factor1);
    }, [factor1]);

    useEffect(() => {
        setGameFactor2(factor2);
    }, [factor2]);

    const handleContinueClick = () => {
        navigate("/admit", { replace: true });
    }

    const handleBackClick = () => {
        navigate("/menu", { replace: true });
    }

    return (
        <>
            <div className={mainStyle}>
                <TitleForm
                    content={
                        <>
                            Let's train, <span className="text-capitalize">{game.user}</span>!
                        </>
                    }
                />
                <SetupFactors
                    defaultFactor1={game.factor1}
                    actionFactor1={setFactor1}
                    defaultFactor2={game.factor2}
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
