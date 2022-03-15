import { Fragment } from "react";
import classes from "./GameSelection.module.scss";
import image1 from "../../images/paper-rock-scissors.png";
import image2 from "../../images/paper-rock-scissors-lizard-spock.png";

const GameSelection = (props) => {
    const selectOriginalGameHandler = () => {
        props.selectedGame("original");
    };
    const selectBonusGameHandler = () => {
        props.selectedGame("bonus");
    };

    return (
        <Fragment>
            <main className={classes.container}>
                <h1>Select Game</h1>
                <button className={classes.rock} onClick={selectOriginalGameHandler}>
                    <img src={image1} alt="choose rock paper scissors" />
                </button>
                <button className={classes.lizard} onClick={selectBonusGameHandler}>
                    <img src={image2} alt="choose rock paper scissors lizard spock" />
                </button>
            </main>
        </Fragment>
    );
};

export default GameSelection;
