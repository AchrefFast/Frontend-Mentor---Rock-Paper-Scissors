import classes from "./MainHeader.module.scss";
import image from "../../images/logo.svg";
import image2 from "../../images/logo-bonus.svg";
import Score from "./Score";
const MainHeader = (props) => {
    const { logo, score } = props;
    const images = {
        original: image,
        bonus: image2,
    };

    return (
        <div
            className={classes.header + " " + (logo === "bonus" ? classes.bonus : "")}
        >
            <img src={images[logo]} alt="Rock Paper Scissors" />
            <Score score={score} />
        </div>
    );
};

export default MainHeader;
