import React, { useEffect, useState } from "react";
import { JoinNumber } from "../components/JoinNumber";

export const JoinPage = () => {

    const [username, setUsername] = useState("");
    const [joinCode, setJoinCode] = useState("");

    const addJoinNumber = (joinNumber) => {
        if (joinCode.length < 4) {
            setJoinCode(code => `${code}${joinNumber}`);
        }
    }

    const renderJoinCodeMatrix = (arr = []) => {

        const renderJoinCodeRow = (arr = []) => {
            return arr.map(({ caption, action }) => <JoinNumber key={caption} caption={caption} action={action} />);
        }

        return arr.map(row => (
            <div className="text-center my-4">
                {renderJoinCodeRow(row)}
            </div>
        ));
    }

    const joinCodeMatrix = [
        [
            { caption: "1", action: addJoinNumber },
            { caption: "2", action: addJoinNumber },
            { caption: "3", action: addJoinNumber }
        ],
        [
            { caption: "4", action: addJoinNumber },
            { caption: "5", action: addJoinNumber },
            { caption: "6", action: addJoinNumber }
        ],
        [
            { caption: "7", action: addJoinNumber },
            { caption: "8", action: addJoinNumber },
            { caption: "9", action: addJoinNumber }
        ],
        [
            { caption: "C", action: addJoinNumber },
            { caption: "0", action: addJoinNumber },
            { caption: "Back", action: addJoinNumber }
        ]
    ];

    useEffect(() => {
        setUsername(() => (localStorage.getItem("username") ?? ""));
    }, []);

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
                <label className="fs-2 mb-3">
                    Hi, <span className="text-capitalize">{username}</span>!
                </label>
                <div className="mt-4">
                    <input
                        className="join-code form-control form-control-lg text-center"
                        type="text"
                        value={joinCode}
                        readOnly={true}
                    />
                </div>
                <br />
                {renderJoinCodeMatrix(joinCodeMatrix)}
            </div>
        </>
    );
}
