import { JoinNumber } from "./JoinNumber";
import React from "react";

export const JoinMatrix = ({ joinCodeMatrix = [] }) => {

    const renderJoinCodeRow = (arr = []) => {
        return arr.map(({ caption, action, typeJoinNumberButton }, index) =>
            <JoinNumber key={index} caption={caption} action={action} typeJoinNumberButton={typeJoinNumberButton} />);
    }

    return joinCodeMatrix.map((row, index) => (
        <div key={index} className="text-center my-4">
            {renderJoinCodeRow(row)}
        </div>
    ));
}
