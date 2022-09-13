import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionStep } from "../components/ActionStep";
import { SetupFactors } from "../components/SetupFactors";
import { factor1ByDefault, factor2ByDefault } from "../Constants/GameParameters";

export const SetupTrainingPage = ({ fa }) => {

    const navigate = useNavigate();

    const [factor1, setFactor1] = useState(factor1ByDefault);
    const [factor2, setFactor2] = useState(factor2ByDefault);

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
