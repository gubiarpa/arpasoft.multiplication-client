import { faArrowLeftRotate, faRunning } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ActionStep = ({ actionContinue = () => { }, actionBack = () => { } }) => {

    const handleContinueClick = (e) => {
        e.preventDefault();
        actionContinue();
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        actionBack();
    }

    return (
        <>
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
        </>
    );
}