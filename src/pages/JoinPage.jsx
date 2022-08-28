import React, { useEffect, useState } from "react";
import { JoinMatrix } from "../components/JoinMatrix";
import TypeJoinNumberButtonData from "../Constants/TypeJoinNumberButton";
import { useNavigate } from "react-router-dom";

export const JoinPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [joinCode, setJoinCode] = useState("");

    const addJoinNumber = (joinNumber) => {
        if (joinCode.length < 4) {
            setJoinCode(code => `${code}${joinNumber}`);
        }
    }

    const deleteJoinNumber = () => {
        if (joinCode.length > 0) {
            setJoinCode(code => code.substring(0, code.length - 1));
        }
    }

    const handleBackClick = () => {
        navigate("/menu", { replace: true });
    }

    const joinCodeMatrix = [
        [
            { caption: "1", action: () => addJoinNumber(1) },
            { caption: "2", action: () => addJoinNumber(2) },
            { caption: "3", action: () => addJoinNumber(3) }
        ],
        [
            { caption: "4", action: () => addJoinNumber(4) },
            { caption: "5", action: () => addJoinNumber(5) },
            { caption: "6", action: () => addJoinNumber(6) }
        ],
        [
            { caption: "7", action: () => addJoinNumber(7) },
            { caption: "8", action: () => addJoinNumber(8) },
            { caption: "9", action: () => addJoinNumber(9) }
        ],
        [
            { caption: "C", action: () => deleteJoinNumber(), typeJoinNumberButton: TypeJoinNumberButtonData.Danger },
            { caption: "0", action: () => addJoinNumber(0) },
            { caption: "◄", action: () => handleBackClick(), typeJoinNumberButton: TypeJoinNumberButtonData.Secondary }
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
                <JoinMatrix joinCodeMatrix={joinCodeMatrix} />
            </div>
        </>
    );
}
