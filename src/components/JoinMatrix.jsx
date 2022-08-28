import React from "react";
import { JoinNumber } from "./JoinNumber";

export const JoinMatrix = ({ joinCodeMatrix = [] }) => {

    const renderJoinCodeRow = (arr = []) => {
        return arr.map(({ caption, action, typeJoinNumberButton }) =>
            <JoinNumber key={caption} caption={caption} action={action} typeJoinNumberButton={typeJoinNumberButton} />);
    }

    return joinCodeMatrix.map((row, index) => (
        <div key={index} className="text-center my-4">
            {renderJoinCodeRow(row)}
        </div>
    ));
}
