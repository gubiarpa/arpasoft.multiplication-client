import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {

    const [game, setGame] = useState({
        user: "",
        room: 0,
        factor1: 12,
        factor2: 12,
        correctAnswersCount: 0,
        wrongAnswersCount: 0
    });

    const setGameUser = (username) => setGame((g) => ({ ...g, user: username }));
    const setGameRoom = (roomCode) => setGame((g) => ({ ...g, room: roomCode }));
    const setGameFactor1 = (factorValue1 = 0) => setGame((g) => ({ ...g, factor1: (factorValue1 * 1) }));
    const setGameFactor2 = (factorValue2 = 0) => setGame((g) => ({ ...g, factor2: (factorValue2 * 1) }));
    const increaseCorrectAnswer = () => setGame((g) => ({ ...g, correctAnswersCount: game.correctAnswersCount + 1 }));
    const increaseWrongAnswer = () => setGame((g) => ({ ...g, wrongAnswersCount: game.wrongAnswersCount + 1 }));

    return (
        <GameContext.Provider value={{ game, setGameUser, setGameRoom, setGameFactor1, setGameFactor2, increaseCorrectAnswer, increaseWrongAnswer }}>
            {children}
        </GameContext.Provider>
    );
}