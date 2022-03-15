import { gameActions } from "./game-slice";

export const roundResult = (player, opponent) => {
    return function (dispatch) {
        if (player === opponent) {
            dispatch(gameActions.setWinner("draw"));
            return;
        }
        if (player === "paper" && opponent === "rock") {
            dispatch(gameActions.setWinner("player"));
            dispatch(gameActions.addScore());
            return;
        } else if (player === "rock" && opponent === "scissors") {
            dispatch(gameActions.setWinner("player"));
            dispatch(gameActions.addScore());
            return;
        } else if (player === "scissors" && opponent === "paper") {
            dispatch(gameActions.setWinner("player"));
            dispatch(gameActions.addScore());
            return;
        } else {
            dispatch(gameActions.setWinner("opponent"));
            dispatch(gameActions.reduceScore());
            return;
        }
    };
};
