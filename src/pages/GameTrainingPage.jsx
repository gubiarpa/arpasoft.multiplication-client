import React, { useContext, useEffect, useRef, useState } from 'react'
import { getOptionsFromMembers, getRandomMembers } from "../services/getQuestions";

import { GameContext } from "../context/GameContext";
import { TitleForm } from "../components/TitleForm"
import { mainStyle } from "../Constants/DefinedClasses"

export const GameTrainingPage = () => {

    const { game, increaseCorrectAnswer, increaseWrongAnswer } = useContext(GameContext);

    const questionRef = useRef();

    const [leftMember, setLeftMember] = useState(0);
    const [rightMember, setRightMember] = useState(0);
    const [options, setOptions] = useState([]);

    const [disabledOptions, setDisabledOptions] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [classAnswer, setClassAnswer] = useState("");

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

    const handleNextQuestionClick = (e, choosedOption) => {
        e.preventDefault();
        setDisabledOptions(x => !x);
        const isCorrect = (leftMember * rightMember === choosedOption);
        setClassAnswer(isCorrect ? "text-success border-success" : "text-danger border-danger");
        isCorrect ? increaseCorrectAnswer() : increaseWrongAnswer();
        setShowAnswer(true);
        setTimeout(() => {
            updateMembers();
            setClassAnswer("text-primary border-primary");
            setShowAnswer(false);
            setDisabledOptions(x => !x);
            questionRef.current.focus();
        }, 1000);
    }

    return (
        <>
            <div className={mainStyle}>
                <TitleForm
                    content={
                        <>
                            Be quick, <span className="text-capitalize">{game.user}</span>!
                        </>
                    }
                />
                <div
                    ref={questionRef}
                    className={`mt-5 border border-primary fs-1 ${classAnswer}`}
                >
                    {leftMember} x {rightMember}
                    {
                        showAnswer && (<span> = {leftMember * rightMember}</span>)
                    }
                </div>
                <div className="mt-5 answers">
                    {
                        options.map((option, index) => (
                            <button
                                key={index}
                                className="btn btn-primary option fs-5 border mx-2"
                                onClick={(e) => handleNextQuestionClick(e, option)}
                                disabled={disabledOptions}
                            >
                                {option}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="position-fixed bottom-0 end-0 translate-middle">
                <div>Correctas: {game.correctAnswersCount} / Incorrectas: {game.wrongAnswersCount}</div>
            </div>
        </>
    )
}
