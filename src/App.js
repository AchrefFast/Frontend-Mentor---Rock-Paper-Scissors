import classes from "./App.module.scss";
import Board from "./components/Board/Board";
import MainHeader from "./components/Header/MainHeader";
import Rules from "./components/UI/Rules";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import BoardBonus from "./components/Board/BoardBonus";
import GameSelection from "./components/GameSlection/GameSelection";
import { gameBonusActions } from "./store/game-bonus-slice";
import { gameActions } from "./store/game-slice";

function App() {
  const dispatch = useDispatch();
  const [chosenGame, setChosenGame] = useState(null);
  const scoreOriginal = useSelector((state) => state.game.score);
  const scoreBonus = useSelector((state) => state.gameBonus.score);
  let score = 0;
  let rulesImage = "";
  if (chosenGame === "original") {
    score = scoreOriginal;
    rulesImage = "original";
  } else if (chosenGame === "bonus") {
    rulesImage = "bonus";
    score = scoreBonus;
  }

  const selectedGameHandler = (game) => {
    setChosenGame(game);
  };

  const resetHandler = () => {
    if (chosenGame === "original") {
      dispatch(gameActions.resetScore());
    }
    if (chosenGame === "bonus") {
      dispatch(gameBonusActions.resetScore());
    }
  };

  return (
    <Fragment>
      {!chosenGame && <GameSelection selectedGame={selectedGameHandler} />}
      {chosenGame && (
        <main className={classes.App}>
          <MainHeader score={score} logo={rulesImage} />
          {chosenGame === "original" && <Board />}
          {chosenGame === "bonus" && <BoardBonus />}
          <Rules image={rulesImage} />
          <button className={classes.resetScore} onClick={resetHandler}>
            Reset Score
          </button>
        </main>
      )}
    </Fragment>
  );
}

export default App;
