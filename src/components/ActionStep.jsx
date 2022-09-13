import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate, faRunning } from "@fortawesome/free-solid-svg-icons";

export const ActionStep = ({actionContinue, actionBack}) => {
    return (
        <>
            <div>
                <button
                    className="btn btn-outline-success mt-4 col-12 fs-3"
                    onClick={actionContinue}
                >
                    <FontAwesomeIcon icon={faRunning} /> Continue
                </button>
                <button
                    className="btn btn-outline-secondary mt-3 col-12 fs-3"
                    onClick={actionBack}
                >
                    <FontAwesomeIcon icon={faArrowLeftRotate} /> Back
                </button>
            </div>
        </>
    );
}