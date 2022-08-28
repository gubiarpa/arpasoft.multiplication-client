import React from "react";

export const JoinNumber = ({ caption, action }) => {
    return (
        <button
            className={`btn btn-outline-primary col-2 mx-3`}
            onClick={() => { action(caption) }}
        >
            {caption}
        </button>
    );
}
