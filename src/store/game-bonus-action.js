import { gameBonusActions } from "./game-bonus-slice";

export const roundResult = (player, opponent) => {
    return function (dispatch) {
        if (player === opponent) {
            console.log("player === opponent");
            dispatch(gameBonusActions.setWinner("draw"));
            return;
        }

        if (player === "paper" && (opponent === "rock" || opponent === "spock")) {
            dispatch(gameBonusActions.setWinner("player"));
            dispatch(gameBonusActions.addScore());
            return;
        } else if (
            player === "rock" &&
            (opponent === "scissors" || opponent === "lizard")
        ) {
            dispatch(gameBonusActions.setWinner("player"));
            dispatch(gameBonusActions.addScore());
            return;
        } else if (
            player === "scissors" &&
            (opponent === "paper" || opponent === "lizard")
        ) {
            dispatch(gameBonusActions.setWinner("player"));
            dispatch(gameBonusActions.addScore());
            return;
        } else if (
            player === "lizard" &&
            (opponent === "spock" || opponent === "paper")
        ) {
            dispatch(gameBonusActions.setWinner("player"));
            dispatch(gameBonusActions.addScore());
            return;
        } else if (
            player === "spock" &&
            (opponent === "rock" || opponent === "scissors")
        ) {
            dispatch(gameBonusActions.setWinner("player"));
            dispatch(gameBonusActions.addScore());
            return;
        } else {
            dispatch(gameBonusActions.setWinner("opponent"));
            dispatch(gameBonusActions.reduceScore());
            return;
        }
    };
};
