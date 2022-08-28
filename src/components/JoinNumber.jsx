import React from "react";
import TypeJoinNumberButton from "../Constants/TypeJoinNumberButton";

export const JoinNumber = ({ caption, action, typeJoinNumberButton = TypeJoinNumberButton.Primary }) => {
    return (
        <button
            className={`btn btn-outline-${typeJoinNumberButton} col-2 mx-3 fs-1`}
            onClick={action}
        >
            {caption}
        </button >
    );
}
