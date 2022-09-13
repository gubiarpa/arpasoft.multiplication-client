import { FACTOR_1_DEFAULT, FACTOR_2_DEFAULT } from "../Constants/GameParameters";
import React, { useContext, useState } from "react";

import { ActionStep } from "../components/ActionStep";
import { GameContext } from "../context/GameContext";
import { SetupFactors } from "../components/SetupFactors";
import { TitleForm } from "../components/TitleForm";
import { mainStyle } from "../Constants/DefinedClasses";
import { useNavigate } from "react-router-dom";

export const SetupTrainingPage = ({ fa }) => {

    const { game } = useContext(GameContext);

    const navigate = useNavigate();

    const [factor1, setFactor1] = useState(FACTOR_1_DEFAULT);
    const [factor2, setFactor2] = useState(FACTOR_2_DEFAULT);

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
                    defaultFactor1={FACTOR_1_DEFAULT}
                    actionFactor1={setFactor1}
                    defaultFactor2={FACTOR_2_DEFAULT}
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
