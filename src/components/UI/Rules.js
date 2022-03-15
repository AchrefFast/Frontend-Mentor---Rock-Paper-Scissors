import { Fragment, useState } from "react";
import classes from "./Rules.module.scss";
import originalRules from "../../images/image-rules.svg";
import bonusRules from "../../images/image-rules-bonus.svg";

const Rules = (props) => {
    const { image } = props;

    const images = {
        original: originalRules,
        bonus: bonusRules,
    };

    const showRulesHandler = () => {
        console.log("changed rules");
        setShowRules(true);
    };

    const closeOverlayHandler = () => {
        setShowRules(false);
    };

    const [showRules, setShowRules] = useState(false);
    return (
        <Fragment>
            <button className={classes.button} onClick={showRulesHandler}>
                Rules
            </button>
            {showRules && (
                <div className={classes.overlay}>
                    <div>
                        <h2>Rules</h2>
                        <img src={images[image]} alt="Rules of the game" />
                        <button
                            className={classes.close}
                            onClick={closeOverlayHandler}
                        ></button>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Rules;
