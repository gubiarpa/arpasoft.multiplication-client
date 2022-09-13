import React, { useContext, useEffect, useState } from "react";
import { faAngleDoubleLeft, faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GameContext } from "../context/GameContext";
import { JoinMatrix } from "../components/JoinMatrix";
import { TitleForm } from "../components/TitleForm";
import TypeJoinNumberButtonData from "../Constants/TypeJoinNumberButton";
import { mainStyle } from "../Constants/DefinedClasses";
import { useNavigate } from "react-router-dom";

export const JoinPage = () => {

    const { game } = useContext(GameContext);

    const navigate = useNavigate();
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
            {
                caption: <FontAwesomeIcon icon={faAngleDoubleLeft} />,
                action: () => deleteJoinNumber(),
                typeJoinNumberButton: TypeJoinNumberButtonData.Danger
            },
            { caption: "0", action: () => addJoinNumber(0) },
            {
                caption: <FontAwesomeIcon icon={faArrowLeftRotate} />,
                action: () => handleBackClick(),
                typeJoinNumberButton: TypeJoinNumberButtonData.Secondary
            }
        ]
    ];

    return (
        <>
            <div className={mainStyle}>
                <TitleForm
                    content={
                        <>
                            Let's join, <span className="text-capitalize">{game.user}</span>!
                        </>
                    }
                />
                <div className="mt-4">
                    <input
                        className="join-code form-control form-control-lg text-center fs-2"
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
