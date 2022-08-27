import React, { useState } from "react";
import { JoinNumber } from "../components/JoinNumber";

export const JoinPage = () => {

    const [joinCode, setJoinCode] = useState("");

    const addJoinNumber = (joinNumber) => {
        setJoinCode(code => `${code}${joinNumber}`);
    }

    const renderJoinCodeRow = (arr = []) => {
        return arr.map(joinNumber => <JoinNumber key={joinNumber} joinNumber={joinNumber} addJoinNumber={addJoinNumber} />);
    }

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
                <div className="text-center my-4">
                    {renderJoinCodeRow(["1", "2", "3"])}
                </div>
                <div className="text-center my-4">
                    {renderJoinCodeRow(["4", "5", "6"])}
                </div>
                <div className="text-center my-4">
                    {renderJoinCodeRow(["7", "8", "9"])}
                </div>
                <div className="text-center my-4">
                    {renderJoinCodeRow(["<<", "0", "C"])}
                </div>
            </div>
        </>
    );
}
