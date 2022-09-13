import React, { useContext, useEffect, useState } from 'react'
import { getOptionsFromMembers, getRandomMembers } from "../services/getQuestions";

import { GameContext } from "../context/GameContext";
import { TitleForm } from "../components/TitleForm"
import { mainStyle } from "../Constants/DefinedClasses"

export const GameTrainingPage = () => {

    const { game } = useContext(GameContext);

    const [leftMember, setLeftMember] = useState(0);
    const [rightMember, setRightMember] = useState(0);
    const [options, setOptions] = useState([]);
    const [disabledOptions, setDisabledOptions] = useState(false);

    useEffect(() => {
        updateMembers();
    }, []);

    useEffect(() => {
        setOptions(getOptionsFromMembers(leftMember, rightMember));
    }, [leftMember, rightMember]);

    const updateMembers = () => {
        const { member1, member2 } = getRandomMembers(game.factor1, game.factor2);
        setLeftMember(member1);
        setRightMember(member2);
    }

    const handleNextQuestionClick = (e) => {
        e.preventDefault();
        setDisabledOptions(x => !x);
        setTimeout(() => {
            updateMembers();
            setDisabledOptions(x => !x);
        }, 1000);
    }

    return (
        <div className={mainStyle}>
            <TitleForm
                content={
                    <>
                        Be quick, <span className="text-capitalize">{game.user}</span>!
                    </>
                }
            />
            <div className="mt-5 border border-primary fs-1">
                {leftMember} x {rightMember}
            </div>
            <div className="mt-5 answers">
                {
                    options.map((option, index) => (
                        <button
                            key={index}
                            className="btn btn-outline-primary option fs-3 border mx-3"
                            onClick={handleNextQuestionClick}
                            disabled={disabledOptions}
                        >
                            {option}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}