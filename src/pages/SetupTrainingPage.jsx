import { FACTOR_1_DEFAULT, FACTOR_2_DEFAULT } from "../Constants/GameParameters";
import React, { useState } from "react";

import { ActionStep } from "../components/ActionStep";
import { SetupFactors } from "../components/SetupFactors";
import { useNavigate } from "react-router-dom";

export const SetupTrainingPage = ({ fa }) => {

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
            <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
                <div className="fs-1 text-secondary text-reset">
                    Training
                </div>
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
