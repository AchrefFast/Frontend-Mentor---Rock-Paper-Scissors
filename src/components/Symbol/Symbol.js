import classes from "./Symbol.module.scss";
const images = require.context("../../images", false, /\.(png|jpe?g|svg)$/);

const Symbol = (props) => {
    let image;
    const { title, type, selected, opponent } = props;
    let classDefault = classes.symbol + " " + classes.unselected;
    if (selected) {
        classDefault = classes.symbol + " " + classes.selected;
    }
    if (opponent) {
        classDefault = classes.symbol + " " + classes.opponent;
    }
    const clickSymbolHandler = () => {
        props.onClick(type);
    };
    switch (type) {
        case "paper":
            image = images("./icon-paper.svg");
            break;
        case "rock":
            image = images("./icon-rock.svg");
            break;
        case "scissors":
            image = images("./icon-scissors.svg");
            break;
        case "lizard":
            image = images("./icon-lizard.svg");
            break;
        case "spock":
            image = images("./icon-spock.svg");
            break;
        default:
            image = images("./icon-paper.svg");
    }
    const className =
        classDefault +
        " " +
        classes[type] +
        " " +
        classes.chosen +
        " " +
        props.className;
    return (
        <button
            className={className}
            onClick={clickSymbolHandler}
            disabled={selected}
        >
            <div type="button">
                <img src={image} alt={title} />
            </div>
        </button>
    );
};

export default Symbol;
