import classes from "./Score.module.scss";

const Score = (props) => {
    return (
        <div className={classes.score}>
            <span className={classes.text}>Score</span>
            <span className={classes.number}>{props.score}</span>
        </div>
    );
};

export default Score;
