import React from "react";

export const JoinNumber = ({ joinNumber, addJoinNumber }) => {
    return (
        <button
            className={`btn btn-outline-${joinNumber !== "C" ? "primary" : "danger"} col-2 mx-3`}
            onClick={() => { addJoinNumber(joinNumber) }}
        >
            {joinNumber}
        </button>
    );
}
