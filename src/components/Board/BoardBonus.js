import classes from "./BoardBonus.module.scss";
import Symbol from "../Symbol/Symbol";
import { useDispatch, useSelector } from "react-redux";
import { gameBonusActions } from "../../store/game-bonus-slice";
import { Fragment, useEffect } from "react";

let initialState = true;

const Board = () => {
    const gameStates = useSelector((state) => state.gameBonus);
    const { player, opponent, ready, winner } = gameStates;
    const dispatch = useDispatch();
    let className = classes.board;

    useEffect(() => {
        if (initialState) {
            return;
        }
        dispatch(gameBonusActions.setPlayer(player));
        setTimeout(() => {
            dispatch(gameBonusActions.setReady());
        }, 300);

        setTimeout(() => {
            dispatch(gameBonusActions.setOpponent());
        }, 1500);
    }, [player, dispatch]);

    useEffect(() => {
        if (initialState) {
            initialState = false;
            return;
        }

        setTimeout(() => {
            dispatch(gameBonusActions.roundResult());
        }, 2500);
    }, [opponent, dispatch]);

    const symbolClickHandler = (symbol) => {
        dispatch(gameBonusActions.setPlayer(symbol));
    };

    const playAgainHandler = () => {
        initialState = true;
        dispatch(gameBonusActions.reset());
    };

    if (player) {
        className = classes.board + " " + classes[`select`];
    }

    let content = (
        <Fragment>
            {["paper", "scissors", "rock", "lizard", "spock"].map((item) => (
                <Symbol
                    key={item}
                    title={item}
                    type={item}
                    className={classes[item]}
                    onClick={symbolClickHandler}
                    selected={player === item}
                />
            ))}
        </Fragment>
    );
    if (ready) {
        return (
            <section className={`${className} ${winner ? classes.result : ""}`}>
                <Fragment>
                    {opponent && <h2 className={classes["you-picked"]}>You Picked</h2>}
                    <Symbol
                        title={player}
                        type={player}
                        className={`${classes[player]} ${winner === "player" ? classes.winner : ""
                            }`}
                        selected={true}
                    />
                    {winner && (
                        <div className={classes["box-result"]}>
                            <div className={classes.title}>
                                {winner === "player" && "You Win"}
                                {winner === "opponent" && "You Lose"}
                                {winner === "draw" && "Draw"}
                            </div>
                            <button
                                className={classes["play-again"]}
                                onClick={playAgainHandler}
                            >
                                Play Again
                            </button>
                        </div>
                    )}
                    {opponent && (
                        <Fragment>
                            <h2 className={classes["the-house-picked"]}>The House Picked</h2>
                            <Symbol
                                title={opponent}
                                type={opponent}
                                className={`${classes[opponent]} ${winner === "opponent" ? classes.winner : ""
                                    }`}
                                selected={true}
                                opponent={true}
                            />
                            <div className={classes["wait-opponent"]}></div>
                        </Fragment>
                    )}
                </Fragment>
            </section>
        );
    }

    return <section className={className}>{content}</section>;
};

export default Board;
